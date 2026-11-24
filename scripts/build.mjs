import { mkdir, readFile, writeFile } from "node:fs/promises"
import { build, createServer } from "vite"

const bundle = await build()
const motion = bundle.output.find(
  file => file.type === "chunk" && file.isEntry && file.name === "landingMotion",
)
const heroVideo = bundle.output.find(
  file => file.type === "chunk" && file.isEntry && file.name === "heroVideo",
)

if (!motion || !heroVideo) {
  throw new Error("A landing page entry is missing from the Vite output.")
}

const vite = await createServer({
  appType: "custom",
  server: { middlewareMode: true, hmr: false, ws: false, watch: null },
})

try {
  const { renderPage } = await vite.ssrLoadModule("/src/render.jsx")
  const output = new URL("../dist/index.html", import.meta.url)
  const template = await readFile(output, "utf8")
  const root = '<div id="root"></div>'

  if (!template.includes(root)) {
    throw new Error("The home page mount point is missing from the Vite output.")
  }

  const staticTemplate = template
    .replace(/<script type="module"[^>]*><\/script>\s*/g, "")
    .replace("/src/landing-motion.js", `/${motion.fileName}`)
  const page = staticTemplate
    .replace(root, () => `<div id="root">${renderPage("/")}</div>`)
    .replace("</body>", `  <script type="module" src="/${heroVideo.fileName}"></script>\n  </body>`)

  await writeFile(output, page)

  const refundPolicyDirectory = new URL("../dist/refund-policy/", import.meta.url)
  const refundPolicyPage = staticTemplate
    .replace(`    <link rel="modulepreload" crossorigin href="/${heroVideo.fileName}">\n`, "")
    .replace(root, () => `<div id="root">${renderPage("/refund-policy/")}</div>`)
    .replace(/<title>.*?<\/title>/, "<title>Refund Policy | Creator Studio</title>")
    .replace(/<meta name="description" content="[^"]*" \/>/, '<meta name="description" content="Read the refund policy for Creator Studio’s Etsy Digital Products Course." />')

  await mkdir(refundPolicyDirectory, { recursive: true })
  await writeFile(new URL("index.html", refundPolicyDirectory), refundPolicyPage)
} finally {
  await vite.close()
}
