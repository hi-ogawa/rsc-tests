Testing fixture packages from https://github.com/hi-ogawa/vite-plugins/tree/main/packages/react-server/examples/basic/deps on Vite RSC frameworks.

|            | cjs | cjs2 | context | context2 | context3 |
|------------|:---:|:----:|:-------:|:--------:|:--------:|
| next       |  ✅  |  ✅  |    ✅   |    ✅    |    ✅    |
| next-vite  |  ❌  |  ✅  |    ❌   |    ✅    |    ✅    |
| waku       |  ❌  |  ❌  |    ❓   |    ❓    |    ❓    |
| lazarv     |  ❌  |  ❌  |    ✅   |    ✅    |    ❌    |
| jacob      |  ❌  |  ❌  |    ✅   |    ✅    |    ❌    |

client package in server
client package in client
client in server package

## notes

- https://github.com/hi-ogawa/vite-plugins/issues/379
