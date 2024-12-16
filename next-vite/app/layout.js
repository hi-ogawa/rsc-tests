import Link from "next/link"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Link href="/">[/]</Link>
          <Link href="/client-package-in-client">[/client-package-in-client]</Link>
          <Link href="/client-package-in-server">[/client-package-in-server]</Link>
          <Link href="/client-in-server-package">[/client-in-server-package]</Link>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Link href="/cjs">[/cjs]</Link>
          <Link href="/cjs2">[/cjs2]</Link>
          <Link href="/context">[/context]</Link>
          <Link href="/context2">[/context2]</Link>
          <Link href="/context3">[/context3]</Link>
        </div>
        <hr />
        {children}
      </body>
    </html>
  );
}
