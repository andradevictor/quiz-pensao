
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/quiz-pensao/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/quiz-pensao"
  },
  {
    "renderMode": 2,
    "route": "/quiz-pensao/calculo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9258, hash: 'f7feb6907b61c73360e0c19320ccf5e05dbf48a004311d4718fdfa7d564d61a6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: 'e7fed4f2c1154ab680ed49e40088dfcd899f1629d673a7ac6f5779aa651efcac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22548, hash: '4e186de8ec446c88d97f13da58ad271db87e1e8daff1bc075c6be8771bbea4b5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'calculo/index.html': {size: 44668, hash: '90a51b2db5402a2a39e78e1bc8b9e5121ba9a7805779e2ca77ddfcce974a8919', text: () => import('./assets-chunks/calculo_index_html.mjs').then(m => m.default)},
    'main-BQRJIREX.css': {size: 311286, hash: 'xrortBzOuIs', text: () => import('./assets-chunks/main-BQRJIREX_css.mjs').then(m => m.default)},
    'main.server.css': {size: 311286, hash: 'xrortBzOuIs', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-V22J5ZGA.css': {size: 311286, hash: 'xrortBzOuIs', text: () => import('./assets-chunks/styles-V22J5ZGA_css.mjs').then(m => m.default)}
  },
};
