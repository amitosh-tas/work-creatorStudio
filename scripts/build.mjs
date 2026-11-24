import { mkdir, readFile, writeFile } from "node:fs/promises"
import { build, createServer } from "vite"

await build()

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

  const page = template
    .replace(root, () => `<div id="root">${renderPage("/")}</div>`)

  await writeFile(output, page)

  const refundPolicyDirectory = new URL("../dist/refund-policy/", import.meta.url)
  const refundPolicyPage = template
    .replace(root, () => `<div id="root">${renderPage("/refund-policy/")}</div>`)
    .replace(/<title>.*?<\/title>/, "<title>Refund Policy | Creator Studio</title>")
    .replace(/<meta name="description" content="[^"]*" \/>/, '<meta name="description" content="Read the refund policy for Creator Studio’s Etsy Digital Products Course." />')

  await mkdir(refundPolicyDirectory, { recursive: true })
  await writeFile(new URL("index.html", refundPolicyDirectory), refundPolicyPage)
} finally {
  await vite.close()
}
