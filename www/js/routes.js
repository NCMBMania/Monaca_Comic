const routes = [
  {
    path: '/',
    url: './index.html',
  },
  // コミック一覧画面
  {
    path: '/comics/',
    componentUrl: './pages/list.html',
  },
  // コミック詳細画面
  {
    path: '/comics/:key',
    componentUrl: './pages/view.html',
  },
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
