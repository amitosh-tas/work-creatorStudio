import { renderToStaticMarkup } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import App from "./App"

export function renderPage(location) {
  return renderToStaticMarkup(
    <StaticRouter location={location}>
      <App />
    </StaticRouter>,
  )
}
