// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as File_Index_getConfig } from './pages/index';

// prettier-ignore
type Page =
| { path: '/cjs'; render: 'dynamic' }
| { path: '/cjs2'; render: 'dynamic' }
| { path: '/client-in-server-package'; render: 'dynamic' }
| { path: '/client-package-in-client'; render: 'dynamic' }
| { path: '/client-package-in-server'; render: 'dynamic' }
| { path: '/context'; render: 'dynamic' }
| { path: '/context2'; render: 'dynamic' }
| { path: '/context3-client'; render: 'dynamic' }
| { path: '/context3'; render: 'dynamic' }
| ({ path: '/' } & GetConfigResponse<typeof File_Index_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
