import { Home } from "./home.js";
import { url } from "./server-context.js";

export async function Router() {
	const parsed = url();
	const pathname = parsed.pathname.replace(/\/$/, "") || "/";

	const routes = {
		"/client-in-server-package": () => import("./tests/client-in-server-package.js"),
		"/client-package-in-client": () => import("./tests/client-package-in-client.js"),
		"/client-package-in-server": () => import("./tests/client-package-in-server.js"),
		"/cjs": () => import("./tests/cjs.js"),
		"/cjs2": () => import("./tests/cjs2.js"),
		"/context": () => import("./tests/context.js"),
		"/context2": () => import("./tests/context2.js"),
		"/context3": () => import("./tests/context3.js")
	};

	switch (pathname) {
		case "/":
			return <Home />;
		default: {
			const route = await routes[pathname as keyof typeof routes]?.();
			if (route) {
				return <route.default />;
			}
			return (
				<main>
					<title>Not Found</title>
					<h1>Not Found</h1>
				</main>
			);
		}
	}
}
