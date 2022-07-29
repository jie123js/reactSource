韦林撤回了一条消息
韦林
这种写法感觉更好 
feng
这个部署服务器的流程一般怎么来？ 
韦林
不支持 css-modules: import  './index.less'     支持css-modules:  import styles from './index.less' 
支持
xx.module.css
不支持
xx.css


韦林撤回了一条消息
韦林
_app 内的肯定是固定的  子组件应该可以自定义 
韦林
钩子 
好好学习
get'InitialProps 这个不是固定的吧 
好好学习
这个方法的参数components  是子组建 怎么做到的  
shine
那如果app也有getInitialProps方法怎么办 
shine
多个组件的getInitialProps 会被合并吗 
好好学习
子组件的 get'InitialProps 这个不是固定的吧？ 
ilark
一定要在父组件去获取数据，然后pros传下去？不能组件里面直接获取么？ 
如果你在组件里自己服务器数据 axios 可以

shine
引入写错了 
Hedgehog
父组件getInit...拿到的值是怎么传到props的呢 
shine
引入的link写成了clink 
shine
user 


不听
Hedgehog
同问 
Hedgehog
ctx包含啥 
shine
开发时候频繁启动服务器有点烦人 
Hedgehog
父组件执行子组件的getInit传参吧？ 
韦林
ctx 那估计是基于 koa 做的服务端 
好好学习
课件上app 上也没有写ctx 



Access to XMLHttpRequest at 'http://localhost:5000/api/users/1' from origin 'http://localhost:3000' has been blocked by CORS policy: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.




如果多个模块都需要懒加载moment如何处理呢？ 
这个可以的
懒加载 也只是加载一次，其它模块可以复用

比如说 我还有个生日信息字段 也是点击显示的 那他也要异步加载momnet  那么就有2处需要异步加载moment了 
shine


如果状态有很多  只是改了其中一个  还要传全部的状态总感觉 不太合适 
2.状态只放有用的，只要放了肯定是有用的
2.


21:56
Dave
客户端创建的仓库什么情况下销毁  
不销毁 
就是像客户端里的LayoutApp ，它的实例是单 例的，整个应用生命 周期内都不销毁
客户端store也是一样的，它的实例是单 例的，整个应用生命 周期内都不销毁

比如 一个  user   一个list  2个reducer  我只改了user  只更新user就可以了吧 
reducer user

reducer list
 如果你派发一个动作，修改了user的话，按理说只会修改仓库中user的状态值




客户端 cookie 不删除不过期  一直会报保持登录状态  ？
过期是否是服务器说了算

shine
现在的逻辑是的 
shine
正常cookie有有效期 
2
app construcor的props是框架帮忙处理的是吧 


靜待雨落
感觉还是有些疑惑 不知道序列化的状态是总状态  还是说是更新后的user的新状态 
只有总状态
不管是在客户端还是在服务端，只有一个仓库，只有一 个reducer,只有一个状态对象总状态

靜待雨落
是user的状态吗   
七月
老师讲一下第十步之后，页面跳转的逻辑 

客户端 更新状态的话是通过 api 更新到服务端 ？ 是的


shine撤回了一条消息
七月
第十一步之后，页面点击跳转 
Dave
客户端 更新状态的话是通过 api 更新到服务端 ？ 
shine
如果构造函数中有跳转其他页面的逻辑呢 会如何 
shine
老师老师看看我的问题 

靜待雨落
构造函数 不能跳转吧   
靜待雨落
刚创建就跳转  感觉还创建组件有意义吗 
可以跳，跟正常SPA一样的




20:14
shine
profile的getInitialProps一定会在app的getInitialProps请求结束后，再执行么？ 



20:37
shine
如果用户很多就会生成很多个 那确实就编译慢了 
适合博客 文档 类的网站 
