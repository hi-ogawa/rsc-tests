# rsc-tests

This repository compares Vite RSC frameworks on how dependency optimization is applied
to client components provided by external packages.

There are two demo packages:

- [`@vitejs/test-dep-client`](./fixtures/test-dep-client)
  - The export entry `test-dep-client/index.js` has `"use client"`
- [`@vitejs/test-dep-server`](./fixtures/test-dep-server)
  - The export entry `test-dep-server/index.js` doesn't have `"use client"`, but internally imports `./client.js` which has `"use client"`.

Three test cases are:

- [Client package in client](./next-vite/app/client-package-in-client/page.jsx)
  - Import `@vitejs/test-dep-client` in the user app's client component
- [Client package in server](./next-vite/app/client-package-in-server/page.jsx)
  - Import `@vitejs/test-dep-client` in the user app's server component
- [Client in server package](./next-vite/app/client-in-server-package/page.jsx)
  - Import `@vitejs/test-dep-server` in the user app's server component

|            | Client package in client | Client package in server | Client in server package |
|------------|:------------------------:|:------------------------:|:------------------------:|
| [next-vite] |            ✅            |            ✅            |            ❌            |
| [waku]      |            ✅            |            ❓            |            ❌            |
| [lazarv]    |            ❌            |            ❌            |            ❌            |
| [jacob]     |            ✅            |            ❌            |            ❌            |

✅: optimized, ❌: not optimized, ❓: not sure

Notably it's not possible to optimize the 3rd case (client in server package) since Vite's deps optimization works based on
package exports entries.

Due to this behavior, there are some issues related to CJS support and dual modules, which are found in the next table below.
The demo packages are taken from https://github.com/hi-ogawa/vite-plugins/tree/main/packages/react-server/examples/basic/deps.

|            | cjs | cjs2 | context | context2 | context3 |
|------------|:---:|:----:|:-------:|:--------:|:--------:|
| next       |  ✅  |  ✅  |    ✅   |    ✅    |    ✅    |
| next-vite  |  ❌  |  ✅  |    ❌   |    ✅    |    ✅    |
| waku       |  ❌  |  ❌  |    ❓   |    ❓    |    ❓    |
| lazarv     |  ❌  |  ❌  |    ✅   |    ✅    |    ❌    |
| jacob      |  ❌  |  ❌  |    ✅   |    ✅    |    ❌    |

✅: working, ❌: not working, ❓: not sure

## how to run

```sh
cd <dir>
pnpm i
pnpm dev
```

![image](https://github.com/user-attachments/assets/2e6c61c5-64a3-4365-a0b5-33985716d280)

## notes

- https://github.com/hi-ogawa/vite-plugins/issues/379
  - how `next-vite` supports "client package in server" for deps optimization can be found here.

[next-vite]: https://github.com/hi-ogawa/vite-plugins/tree/main/packages/react-server
[waku]: https://github.com/dai-shi/waku
[lazarv]: https://github.com/lazarv/react-server
[jacob]: https://github.com/facebook/react/pull/31768
