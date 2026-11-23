import { readFile, writeFile } from "node:fs/promises"
import { build, createServer } from "vite"

const bundle = await build()
const motion = bundle.output.find(
  file => file.type === "chunk" && file.isEntry && file.name === "landingMotion",
)

if (!motion) {
  throw new Error("The deferred motion entry is missing from the Vite output.")
}

const vite = await createServer({
  appType: "custom",
  server: { middlewareMode: true, hmr: false, ws: false, watch: null },
})

try {
  const { renderHome } = await vite.ssrLoadModule("/src/render.jsx")
  const output = new URL("../dist/index.html", import.meta.url)
  const template = await readFile(output, "utf8")
  const root = '<div id="root"></div>'

  if (!template.includes(root)) {
    throw new Error("The home page mount point is missing from the Vite output.")
  }

  // Keep the deferred motion loader while dropping React's client entry.
  const page = template
    .replace(/<script type="module"[^>]*><\/script>\s*/g, "")
    .replace("/src/landing-motion.js", `/${motion.fileName}`)
    .replace(root, () => `<div id="root">${renderHome()}</div>`)

  await writeFile(output, page)
} finally {
  await vite.close()
}
