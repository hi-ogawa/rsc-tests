export function Document({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<div style={{ display: "flex", gap: "0.5rem" }}>
					<a href="/">[/]</a>
					<a href="/client-package-in-client">[/client-package-in-client]</a>
					<a href="/client-package-in-server">[/client-package-in-server]</a>
					<a href="/client-in-server-package">[/client-in-server-package]</a>
				</div>
				<div style={{ display: "flex", gap: "0.5rem" }}>
					<a href="/cjs">[/cjs]</a>
					<a href="/cjs2">[/cjs2]</a>
					<a href="/context">[/context]</a>
					<a href="/context2">[/context2]</a>
					<a href="/context3">[/context3]</a>
				</div>
				<hr />
				{children}
			</body>
		</html>
	);
}
