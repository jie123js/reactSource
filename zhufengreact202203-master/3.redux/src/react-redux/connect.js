
import React, { useMemo, useLayoutEffect, useSyncExternalStore } from 'react';
import ReactReduxContext from './ReactReduxContext';
import { bindActionCreators } from '../redux';

function connect(mapStateToProps, mapDispatchToProps) {
  return function (OldComponent) {
    return function (props) {
      const { store } = React.useContext(ReactReduxContext);
      const { getState, dispatch, subscribe } = store;
      const prevState = getState();
      //如果状态不改变，就不需要重新映射新的属性对象 
      const stateProps = useMemo(() => mapStateToProps(prevState), [prevState]);
      //const dispatchProps = mapDispatchToProps(dispatch);
      const dispatchProps = useMemo(() => {
        if (typeof mapDispatchToProps === 'function') {
          return mapDispatchToProps(dispatch);
        } else {
          return bindActionCreators(mapDispatchToProps, dispatch);
        }
      }, [dispatch]);
      useSyncExternalStore(subscribe, getState);
      return <OldComponent {...stateProps} {...dispatchProps} {...props} />
    }
  }
}
export default connect;
/**
 * 以前React官方并没有提供强制刷 新组件的功能
 * 类组件 forceUpdate
 * 函数组件
 * React18新添加一个新的API
 * const [, forceUpdate] = useReducer(x => x + 1, 0);
       useLayoutEffect(() => {
         return subscribe(forceUpdate);
   }, []); 
 * 使用React18 的useSyncExternalStore代替原来自己实现的订阅更新(原来内部是useReducer), useSyncExternalStore
*/