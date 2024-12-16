import { Link } from "@lazarv/react-server/navigation";

export default function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Link to="/">[/]</Link>
          <Link to="/client-package-in-client">[/client-package-in-client]</Link>
          <Link to="/client-package-in-server">[/client-package-in-server]</Link>
          <Link to="/client-in-server-package">[/client-in-server-package]</Link>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Link to="/cjs">[/cjs]</Link>
          <Link to="/cjs2">[/cjs2]</Link>
          <Link to="/context">[/context]</Link>
          <Link to="/context2">[/context2]</Link>
          <Link to="/context3">[/context3]</Link>
        </div>
        <hr />
        {props.children}
      </body>
    </html>
  )
}
