

function createBrowserHistory() {
  const globalHistory = window.history;
  //当前的状态
  let state;
  let listeners = [];
  function listen(listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(item => item !== listener);
    }
  }
  function go(n) {
    globalHistory.go(n);
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  window.addEventListener('popstate', () => {
    let location = { state: globalHistory.state, pathname: window.location.pathname };
    notify({ action: 'POP', location });
  });
  /**
   * 通知函数  当状态发生改变 后可以调用此函数
   * @param {*} newState 
   */
  function notify(newState) {
    Object.assign(history, newState);
    listeners.forEach(listener => listener({ action: history.action, location: history.location }));
  }
  /**
   * 
   * @param {*} pathname 可以传一个对象，也可以传一个字符串路径
   * @param {*} nextState 
   */
  function push(pathname, nextState) {
    const action = 'PUSH';
    if (typeof pathname === 'object') {
      state = pathname.state;
      pathname = pathname.pathname;
    } else {
      state = nextState;
    }
    globalHistory.pushState(state, null, pathname);
    let location = { state, pathname };
    notify({ action, location });
  }
  const history = {
    action: 'POP',
    go,
    goBack,
    goForward,
    push,
    listen,
    location: { pathname: window.location.pathname, state: window.location.state }
  }
  return history;
}

export default createBrowserHistory;