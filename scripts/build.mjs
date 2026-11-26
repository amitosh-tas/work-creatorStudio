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

  const pages = [
    ["digital-product-in-usa", "Create and Sell Digital Products on Etsy", "Learn to create and sell digital products with Creator Studio’s course for US learners."],
    ["checkout", "Checkout", "Review your Digital Product Mastery order and continue to secure checkout."],
    ["refund-policy", "Refund Policy", "Read the refund policy for Creator Studio’s Etsy Digital Products Course."],
    ["unlock-free-lesson", "Unlock Free Lesson", "Watch a free lesson from Creator Studio’s Etsy Digital Products Course."],
    ["digital-product-in-usa/unlock-free-lesson", "Unlock Free Lesson", "Watch a free lesson from Creator Studio’s Etsy Digital Products Course."],
    ["thank-you", "Thank You", "Temporary Creator Studio purchase tracking test page."],
    ["digital-product-in-usa/thank-you", "Thank You", "Welcome to Creator Studio’s Digital Product Mastery course."],
  ]

  for (const [path, title, description] of pages) {
    const directory = new URL(`../dist/${path}/`, import.meta.url)
    const html = template
      .replace(root, () => `<div id="root">${renderPage(`/${path}/`)}</div>`)
      .replace(/<title>.*?<\/title>/, `<title>${title} | Creator Studio</title>`)
      .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`)

    await mkdir(directory, { recursive: true })
    const pageHtml = path.endsWith("thank-you")
      ? html.replace("</head>", '  <meta name="robots" content="noindex" />\n  </head>')
      : html
    await writeFile(new URL("index.html", directory), pageHtml)
  }
} finally {
  await vite.close()
}
