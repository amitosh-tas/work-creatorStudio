import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import App from "./App"

export function renderPage(location) {
  return renderToString(
    <StaticRouter location={location}>
      <App />
    </StaticRouter>,
  )
}
