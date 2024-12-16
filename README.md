# rsc-tests

Comparing how dependency optimization is applied to client packages across various Vite RSC frameworks.

A following table shows TODO

|          | client package in server | client package in client | client in server package |
|----------|:------------------------:|:------------------------:|:------------------------:|
| next-vite|            ✅            |            ✅            |            ❌            |
| waku     |            ❌            |            ✅            |            ❌            |
| lazarv   |            ❌            |            ❌            |            ❌            |
| jacob    |            ❌            |            ✅            |            ❌            |

As a result of this behavior, we have TODO

|            | cjs | cjs2 | context | context2 | context3 |
|------------|:---:|:----:|:-------:|:--------:|:--------:|
| next       |  ✅  |  ✅  |    ✅   |    ✅    |    ✅    |
| next-vite  |  ❌  |  ✅  |    ❌   |    ✅    |    ✅    |
| waku       |  ❌  |  ❌  |    ❓   |    ❓    |    ❓    |
| lazarv     |  ❌  |  ❌  |    ✅   |    ✅    |    ❌    |
| jacob      |  ❌  |  ❌  |    ✅   |    ✅    |    ❌    |

## notes

- https://github.com/hi-ogawa/vite-plugins/issues/379
