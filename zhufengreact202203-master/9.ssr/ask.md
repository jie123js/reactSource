以前流行SSR
java jsp php ast.net 都是服务器端渲染
SPA单页应用
客户端渲染
react vue angular


SSR


20:32
shine
上线的时候 文件都是 打包成cdn地址的，要怎么弄呢？ 

output:{
  publicPath:'CDN地址'
}
20:39
shine
问题2：如果有需要远程请求的数据呢？例如userinfo返回data之类的要怎么处理呢？ 
路由 请求数据 样式css less sass SEO
h2x
client.js里面什么内容 

我赌你的枪里没有子弹
ssr 就是 服务端生成页面 客户端处理事件吗 

ssr指的是服务器生成页面
csr指的是客户端生成页面

服务端生成页面 客户端处理事件 服务器和客户端同构，也就是我们在前端开发中称的ssr


20:58
废物的点心
这里client/index 是在为ssr 提供一些在直接返回html模板时无法实现的功能么 ？ 比如点击事件 
是的
本来在以前
ReactDOM.render其实有两个作用，一个是生成HTML结构，一个是绑定事件实现动态功能
现在因为HTML结构 已经 由服务器端实现好了，已经直接返回了，所以不再需要生成HTML只需要绑定事件就可以
用的是水合，基于现有的HTML结构 绑定事件hydrateRoot
andy
服务端渲染不是只做首屏的吗，现在好像是每个组件都进行了服务端渲染 
是的
每个组件都做了服务器端渲染
1.不管访问哪个页面，所有的 页面都是服务器端渲染出来的
但是当你切换路由的时候，走的还是客户端渲染
我赌你的枪里没有子弹
只做首屏感觉没啥意义了  能提供的价值太少了 
首屏加载时间是一个网站性能最重要指标

客户端绑定的事件 是怎么在服务端渲染的代码中生效的呢  
不生效，忽略 掉了


刚才实现拉取数据的功能
，但是有几个问题需要解决
1. 数据是客户端直接拉取的API接口服务器
1. 客户端不能直接访问API接口服务器，而是要通过SSR服务器进行代理。
2. SSR服务器应该在服务器端调接口，渲染完整的HTML 用户列表数据，返回给客户端，客户端直接渲染，不需要再调接口了




21:07
我赌你的枪里没有子弹
客户端绑定的事件 是怎么在服务端渲染的代码中生效的呢  
shine
不会生效 服务端没dom 他要事件没用 
21:22
shine
如果redux中的值，要从localstroage中读取呢？服务器咋办 
21:30
韦林
<Outlet /> 是不是相当于 <UserLayout >{childrend}</UserLayout> 
21:39
shine
fetchUserList 
韦林
如果redux中的值，要从localstroage中读取呢？服务器咋办 代码 都还在服务端，你这需求有点变态 
韦林
 必须到了服务端 useEffect() 做这样的逻辑吧 
shine
放cookie就可以了。或者本地处理呗 可以的应该 
21:44
韦林
node http. web ajax 
21:51
shine
couter弄没了 
21:56
Hedgehog
...stste 
shine
…state.list? 
我赌你的枪里没有子弹
state.list 
我赌你的枪里没有子弹
服务端写死的 
我赌你的枪里没有子弹
只有三条 
h2x撤回了一条消息
我赌你的枪里没有子弹
重新请求了 
shine
啥意思这个配置 他要sourcemap是为了啥 
h2x
switch 没有break 
22:06
shine
 这是首屏吗？那当客户端点击路由跳转后 还是应该由客户端直接访问服务器放回吧？
是的，所以也需要解决
如果非要让客户端 
h2x
就是客户端发请求改到服务端发请求呗 
韦林
1 


22:11
韦林
webpack 构建了两份 副本， service.js client.js 
client.js 作为 services.js 的html js script 

嗷嗷明白了 我之前做vue2的ssr是直接去服务器 非ssr服务器请求的 


我们现在所有的js都是在客户端执行的吧，后面要把哪部分js改到服务端执行呢 

JS都是在客户端执行

老师 还是不太明白非首屏为什么一定要经过ssr服务器请求接口。必要吗 
为了安全  隐藏我们的接口服务器



服务端直接返回带数据的html的话不得服务端执行js吗 
不是的
带数据的是也是一些静态数据
<ul><li>zhufeng1
张仁阳



1.客户端按理说不能直接访问API接口

1.loadData如何获取和加载
2.为什么说loadData返回的promise

原始的store.dispatch
```js
function dispatch(action) {
  return action;
}
```

为什么 不能在客户端 的useEffect 中 获取接口数据 非要报错呢？就是这样设计的目的是？ 
因为有些方法
componentWillMount
类似的功能是组件将要挂载是客户端独有的逻辑
useEffect 是可以操作DOM的

thunk
```js
const middleware=({ dispatch, getState }) =>
    next =>
    action => {
      if (typeof action === 'function') {
        //执行函数，并返回函数执行的结果
        return action(dispatch, getState, extraArgument)
      }
      return next(action)
    }
```



好好学习撤回了一条消息
靜待雨落
3000  代理到5000了 
shine
嗷嗷因为直接发出去了 
shine
所以本机用127.0.0.1的方式访问？ 
靜待雨落
没有加端口号  默认是80   
shine
给服务器做个地址映射？ 
好好学习
为啥不用Promise.allSettled(promises). 
shine
直接写的话，多个域名就不好弄了感觉 


10:24
shine
老师 为什么不用是否有window对象来判断当前是服务器还是客户端呢？ 
shine
store不同步 
韦林
两个store 
好好学习
但是list 没有赋值 

好好学习撤回了一条消息
shine撤回了一条消息
shine撤回了一条消息
好好学习
服务端的store 什么时候挂在window。context 上的 


服务端只负责请求数据，然后客户端拿到 数据再渲染html么？ 
服务负责请求数据，把React组件渲染成HTML
然后把HTML发给浏览器
浏览器把HTML变变成真实DOM


老师 这里有个疑问 接口和其他部分能不能分批返回呢 
shine撤回了一条消息
shine
就是先返回不需要请求的html 再返回请求接口的结果部分 

100个组件
c1
c2
c3
c4 请求接口，而且接口特别慢
...
c100




我赌你的枪里没有子弹
每次渲染 客户端都要重新执行 getStore 去去读取服务端赋值的context吗 
只有客户端在初次渲染的时候会执行getClientStore读取服务器返加的context
后面切换路由的时候不再读取context

38
feng
那个userlist的html在哪生成的？ 
韦林
这功能强啊 分段返回 HTML 


这功能强啊 分段返回 HTML 
韦林
而且是数据请求完生成HTML 
好好学习
点home 路由看看 
Hedgehog
水合的时候生成的 
shine
好像少了接口部分的那3个li 
shine
完美 
好好学习
水合是客户端水合 js 生成的html 

1 登录后跳到profile
2.退出后跳到login
3.访问profile的时候如果未登录需要能跳到登录页

都需要跳转路径，而是是在actionCreator里跳
好好学习撤回了一条消息
好好学习
但是这样写除非退出不然session 一直在 
shine - 氛围组一哥
那个中间件 


shine - 氛围组一哥
这种需要dom和window的  一般都怎么出来呢 
shine - 氛围组一哥
处理呢 

同构的项目 
客户端和服务器尽可能的复用代码
history 



刷新的时候静态方法也走吧 
鹏
validate 方法 data 没取出来 
好好学习
看看validate给user 赋值了吗 
shine - 氛围组一哥
写着写着就自己晕了 
Hedgehog
统一写到一个公用的地方 
好好学习撤回了一条消息
韦林
要请求完数据才能渲染其他路由组件 
靜待雨落
能不能写过高阶组件  包裹一下App 
Dave
data 取错了  
Hedgehog
先判断validate再看是否跳登录 
韦林
/validate 要请求完数据才能渲染其他路由组件 
shine - 氛围组一哥
服务端也要处理感觉 


shine
那两边的css生成的className不就不同了么 
因为两边的类名是根据相同的算法生成
14:42
shine
这2个不就多余了么 


全局context 透传 insertCss. 
 每一个有css的地方都要使用hooks  
 这种逻辑怎么能写到插件中、让webpackj解决 不然写起来还是很麻烦 
shine
傲 我明白了 
韦林
生成规则一样的 内容一样，所有类名才一样吗 

因为生成规则 是一样，所以类名是一样的
跟样式内容没有关系
shine
是的


classname是个字符串转base64两边算法一致，就可以生成一致 我的理解是 
14:55
Hedgehog
那也四要每个页面都要加 
shine
你快些
如果你真的每个页面都是需要




好好学习
那这样对服务器要求高了？ 
韦林
等待时间少，体验好 
shine撤回了一条消息
好好学习
是客户端水合比较慢， 客户端选择性水合，剩下的交给服务器端 scokert 持续输出 输出的这一部分是html  客户端就不用水合了？ 
好好学习
我感觉我上面的理解错了 
shine
那啥时候关闭呀 
韦林
是服务端在发送HMTL前要拉取数据填充hmtl,接口多喝慢的，可以发一部分HMTL渲染页面 
shine
要延迟下看效果 
小海
bigPipe 
shine
对 类似 但有细节上的区别 
好好学习
onShellReady 从哪里来的 
韦林
固定写法肯定新的api 暴露的事件  
shine
以前是白屏 等待10S 
15:32
好好学习
嗯 


15:39
韦林
wrapPromise 官方没有提供吧 
wrapPromise 不是官方文档 里的，是官方给的demo里的
15:43
shine
这个查询方法没在服务器执行吧 



好好学习
客户端和服务端不一样 
15:50
好好学习
不用ref={Source} 
useRef可以单独用
不需s
ref={}
feng
怎么觉得这个suspense很鸡肋，还不如写个if else显示loading组件 
等数据回来后再重新刷新，而且 只需要刷新这一小块
韦林
怎么觉得这个suspense很鸡肋，还不如写个if else显示loading组件 里面有些细节处理 
15:54
Hedgehog
棒棒哒 
好好学习
嗯 
shine
1 




一个页面可以有多个suspense么？ 可以的。数量不限
韦林
可以 
好好学习
刚才写的 修改 status 从pending 改为 resolverd 这部分代码就是suspoense 的原理？ 
feng
那多个suspense不会公用相同的fallback状态么 


韦林撤回了一条消息
韦林
 客户端这种方式获取数据， 服务端不需要特殊修改吗，react 18 内部给支持了？ 
好好学习
suspense 的自组建一定是有异步请求的不然就没有意义了 



好好学习
那客户端和服务端不一样 那个警告就一直存在 ？？？
我赌你的枪里没有子弹
suspense  + lazy 就是 lazy加载未完成先抛出错误 suspense来捕获并展示fallback 加载完毕再设置展示children 吗 
是的



韦林撤回了一条消息
Hedgehog
我在react17   就可以用suspense里套outlet，然后是react.lazy懒加载页面 
React17里是可以用Suspense套React.lazy  以前不能使用SSR
韦林
lazy 是用来异步加载组件代码的。 suspense 是用来包裹包含需要异步加载的数据的组件 
只要异步都可Suspense
挂起的可以是异步组件
也可以是异步加载的数据


Hedgehog
18是支持了服务端渲染方式是吧 是的
好好学习
服务端来的 

