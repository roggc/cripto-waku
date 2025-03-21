// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';


// prettier-ignore
type Page =
| { path: '/coin-detail/[coinId]'; render: 'dynamic' }
| { path: '/coin-search'; render: 'dynamic' }
| { path: '/coins'; render: 'dynamic' }
| { path: '/'; render: 'dynamic' }
| { path: '/_root'; render: 'dynamic' };

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
  