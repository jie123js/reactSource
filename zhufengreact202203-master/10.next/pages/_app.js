import App from 'next/app';
import Link from 'next/link';
import styles from './_app.module.css';
import '../styles/global.css'
import {Provider} from 'react-redux';
import createStore from '@/store';
import request from '@/utils/request';
import { SET_USER_INFO } from '@/store/action-types';
import router from 'next/router';
function getStore(initialState){
  //说明是服务器环境，每次都会创建新的仓库
  if(typeof window === 'undefined'){
    return createStore(initialState);
  }else{
    //客户端的时候只会有首次创建仓库，后面的话都会复用老仓库
    if (!window._REDUX_STORE_){
      window._REDUX_STORE_ = createStore(initialState);
    }
    return window._REDUX_STORE_;
  }
}
class LayoutApp extends App {

  //9.客户端收到数据后，把props反序列为JS对象传递给LayoutApp的constructor
  constructor(props){
    super(props)
    //5.把props作为属性对对象传递给LayoutApp的构造函数
    //6.在服务器根据getInitialProps得到的初始状态创建新的仓库,传递给this.store
    //10.通过服务器返回的状态创建客户端的仓库
    this.store = getStore(props.initialState);//{currentUser:{name:'张三'}}
    console.log('LayoutApp constructor');
    this.state = {loading:false};
  }
  static async getInitialProps({ Component, ctx }) {//Component UserList
    console.log('LayoutApp getInitialProps');
    //在后台执行的话获取仓库，其实会创建新的仓库
    //在客户端执行的时候，每次换路由都会走此getInitialProps方法
    //1.在服务器端走LayoutApp.getInitialProps此处会创建新的空仓库
    const store = getStore();
    //2.如果是服务器端环境，会调接口获取当前的登录用户,放置到仓库中
    if(typeof window === 'undefined'){
      const options = {url:'/api/validate'};
      if(ctx.req && ctx.req.headers.cookie){
        options.headers = options.headers||{};
        options.headers.cookie = ctx.req.headers.cookie;
      }
      const response = await request(options).then(res=>res.data);
      if (response.success){
        store.dispatch({type:SET_USER_INFO,payload:response.data});
      }
    }
    let props = {};
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx, store);//{list:[user1,user2,user3]}
    }
    props.pageProps = pageProps;
    //3.在服务器端执行的时候，把仓库的最新状态放在了属性对象的initialState
    if(typeof window === 'undefined'){
      props.initialState = store.getState();//{currentUser:{name:'张三'}}
    }
    //在服务器端获取props
    //4.返回props属性对象
    //8.服务器事情做完成，会把LayoutApp的props序列化成字符串和render渲染出来的html一起发给客户端
    return props;//将会成为LayoutApp的属性对象，
  }
  routeChangeStart = ()=>{
    this.setState({loading:true});
  }
  routeChangeComplete = () => {
    this.setState({ loading: false });
  }
  componentDidMount(){
    router.events.on('routeChangeStart',this.routeChangeStart);
    router.events.on('routeChangeComplete', this.routeChangeComplete);
  }
  componentWillUnmount(){
    router.events.off('routeChangeStart', this.routeChangeStart);
    router.events.off('routeChangeComplete', this.routeChangeComplete);
  }
  render() {
    console.log('LayoutApp render');
    //7.通过使用仓库中的状态去在服务器端渲染组件，获取HTML字符串
    //11.通过客户端的仓库的状态渲染组件，进行水合
    const state = this.store.getState();//这是总状态
    const { Component, pageProps } = this.props;
    return (
      <Provider store={this.store}>
        <style jsx>
          {
            `
            li{
              display:inline-block;
              margin-left:10px;
              line-height:31px;
            }
            `
          }
        </style>
        <header>
          <img src="/images/logo.png" className={styles.logo} />
          <ul>
            <li><Link href="/">首页</Link></li>
            <li><Link href="/user/list">用户管理</Link></li>
            <li><Link href="/profile">个人中心</Link></li>
            <li>
              {
                state.currentUser ? <span>{state.currentUser.name}</span> : <Link href="/login">登录</Link>
              }
            </li>
          </ul>
        </header>
        {
          this.state.loading ? <div>loading......</div> : <Component {...pageProps} />
        }
        <footer style={{ textAlign: 'center' }}>珠峰架构</footer>
      </Provider>
    )
  }
}
export default LayoutApp;

/* let props = getInitialProps();
let layoutAppInstance = new LayoutApp(props);
 */