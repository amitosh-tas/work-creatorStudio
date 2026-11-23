import { renderToStaticMarkup } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import App from "./App"

export function renderHome() {
  return renderToStaticMarkup(
    <StaticRouter location="/">
      <App />
    </StaticRouter>,
  )
}
