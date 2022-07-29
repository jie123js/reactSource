

15:59
shine
一个应用可以有多个store吗？ 
不可以

ilark
这么简单么，没有模块啥的？ 
废物的点心
ha  

模块?/
vuex module



17:07
shine
能 
shine
xstate也是吗 
feng
如果action上加上模块标识，是不是就可以了 ????
大家 下课后可以思考 五如何实现，我们下节课实现一下






Redux使用也太麻烦了 
韦林
useState 变化 组件重新执行 
shine
是 不是所有使用到react-redux的地方都在forceUpdate的时候执行更新逻辑？ 
ilark
相当于更新还是依赖hooks 
沉默的木子
要是使用useEffect是什么样的？ 



20:48
shine
那如果状态更新了呢？ 
ilark
订阅更新呢 
稗子的春天
有两个 useSelector 
shine撤回了一条消息
韦林
useRef 优化 
shine
棒 

所以其实就是把公用的抽出来了 
韦林
const action = {type: 'add'};
const action = dispatch(action)
派发什么就返回什么，所以按理说不可能then
action.then() 怎么实现点 .then 

dispatch派发的是一个promise.那么最终dispatch返回的也是promise

现在我们的逻辑是你派发什么，dispatch方法就返回什么


21:51
shine
那如果是promise呢 
shine
判断对象是否有then 
稗子的春天
then 存在 


老师 上次说 react自己实现的keep-alive 
那么在重新打开缓存的组件后，他的状态是如何更新的呢？重新render一次还是？ 

OffScreen

React18课


这个地方先定义再赋值 再使用  意义是什么？ 
h2x
有点绕。。 
废物的点心
是有点绕 




shine - 氛围组一哥
派发什么返回什么 
shine - 氛围组一哥
如果我想在派发某个事件的时候把状态拿到，同步存到localstroage里面呢? 
有一个中间件叫redux-persist 可以把仓库中的的状态同步到localStorage里
shine - 氛围组一哥
判断是否有then方法， 
