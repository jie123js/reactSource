import { Route } from 'dva/router'
import React from 'react';
//import dynamic from 'dva/dynamic';
function dynamic({ app, models, component }) {
  return class extends React.Component {
    state = { LazyComponent: null }
    componentDidMount() {
      Promise.all([
        Promise.all(models()),
        component()
      ]).then(([models, Component]) => {
        models.map(model => model.default).forEach(model => app.model(model));
        this.setState({ LazyComponent: Component })
      });
    }
    render() {
      let { LazyComponent } = this.state;
      return LazyComponent && <LazyComponent {...this.props} />
    }
  }
}
/**
 * 把一个路由配置的数组渲染成React组件数组
 * @param {*} routerConfig 
 */
export function renderRoutes(routerConfig, app) {
  return routerConfig.map((routeConfig, index) => {
    const { path, exact = false, component, routes = [], models = [] } = routeConfig;
    return (
      <Route
        path={path}
        exact={exact}
        key={index}
        component={
          dynamic({
            app,
            models: () => models.map(model => model()),
            component: () => {
              return component().then(result => {
                let Component = result.default || result;
                return (props) => <Component {...props} routes={routes} app={app} />
              });
            }
          })
        }
      //render={(props) => <Component {...props} routes={routes} />}
      />
    )
  })
}
/**
 * react-router5 component=React组件 render={函数，函数的返回值是一个React元素}
 * react-router6 element={React元素}
 */