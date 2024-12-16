# rsc-tests

This repository compares Vite RSC frameworks to determine if dependency optimization is applied
to client components provided by external packages.

There are two demo packages:

- [`@vitejs/test-dep-client`](./fixtures/test-dep-client)
  - The export entry `test-dep-client/index.js` has `"use client"`
- [`@vitejs/test-dep-server`](./fixtures/test-dep-server)
  - The export entry `test-dep-server/index.js` doesn't have `"use client"`
  - `test-dep-server/index.js` imports `./client.js`, which has `"use client"`

Three test cases are:

- [Client package in server](./next-vite/app/client-package-in-server/page.jsx)
  - Import `@vitejs/test-dep-client` in the user app's server component
- [Client package in client](./next-vite/app/client-package-in-client/page.jsx)
  - Import `@vitejs/test-dep-client` in the user app's client component
- [Client in server package](./next-vite/app/client-in-server-package/page.jsx)
  - Import `@vitejs/test-dep-server` in the user app's server component

|          | Client package in server | Client package in client | Client in server package |
|----------|:------------------------:|:------------------------:|:------------------------:|
| next-vite|            ✅            |            ✅            |            ❌            |
| waku     |            ❌            |            ✅            |            ❌            |
| lazarv   |            ❌            |            ❌            |            ❌            |
| jacob    |            ❌            |            ✅            |            ❌            |

(✅: optimized, ❌: not optimized)

Due to such behavior, there are some issues related to CJS support, dual modules.
The demo packages are taken from https://github.com/hi-ogawa/vite-plugins/tree/main/packages/react-server/examples/basic/deps.

|            | CJS | CJS2 | Context | Context2 | Context3 |
|------------|:---:|:----:|:-------:|:--------:|:--------:|
| next       |  ✅  |  ✅  |    ✅   |    ✅    |    ✅    |
| next-vite  |  ❌  |  ✅  |    ❌   |    ✅    |    ✅    |
| waku       |  ❌  |  ❌  |    ❓   |    ❓    |    ❓    |
| lazarv     |  ❌  |  ❌  |    ✅   |    ✅    |    ❌    |
| jacob      |  ❌  |  ❌  |    ✅   |    ✅    |    ❌    |

(✅: working, ❌: not working, ❓: not sure)

## notes

- https://github.com/hi-ogawa/vite-plugins/issues/379
