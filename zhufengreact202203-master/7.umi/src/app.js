/**
 * 在浏览器运行的时候动态的向routes数组中添加新的路由对象
 * @param {*} param0 
 */
/*
export function patchRoutes({ routes }) {
  routes.unshift({
    path: '/foo',
    exact: true,
    component: require('./Foo').default
  });
}
*/

let extraRoutes;
export function render(oldRender) {
  fetch('/api/routes')
    .then(res => res.json())
    .then(res => {
      extraRoutes = res.map(item => {
        let component = require(`./components/${item.component}`).default;
        return {
          ...item, component
        }
      })
      oldRender();
    });
}
export function modifyClientRenderOpts(memo) {
  memo.routes.unshift(...extraRoutes);
  console.log(memo.routes);
  return memo;
}