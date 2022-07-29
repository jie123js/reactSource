
使用 useMemo useCallback  就不能写在 判断语句中了 
是的
韦林
所以优化的时候要谨慎 
靜待雨落
hooks只能放在顶层调用吗？ 
倒不是

h2x
循环的话顺序也不对吗 
不对
for(let i=0;i<counter;)
韦林
.Provider 
h2x
循环的次数固定的话hooksindex顺序不是对的吗啊 
语法直接报错
16:40
韦林撤回了一条消息
ilark
为什么是react.chilren, 而不直接是children 
因为我们的children它可能是一个对象，也可能是一个数组
所以我们如何想遍历children,
children.forEach();
/React.Children.forEach是React官方提供的工具方法，专用用来遍历子组件
React.Children.map
React.Children.forEach(children);
韦林
1 
人生只如初见
如果有两个path="/"，是不是两个都渲染 
只会渲染匹配到的第一个
靜待雨落
渲染第一个匹配的 后面不走了 
人生只如初见
我在使用过程中两个都匹配了 
我赌你的枪里没有子弹
LocationContext 少写了 .Provider 
16:51
人生只如初见
还是没明白React.children是啥 


17:07
h2x
17行 
夕慕
老师,怎么更好的封装一个组件呀 
h2x
listen那里 
h2x
history不是一直不变吗 


刚才说的export * as 的那个没听清楚 老师能再讲一下吗 

如果路由的子组件是个异步组件，
就要用suspense吗？需要
那异步组件中又有查询的情况，怎么控制异步组件查询结束后再显示 呢 


export * 不包含 默认导出吗 
Hedgehog
react router可以做到keepalive的效果吗 



shine
有个小问题  
shine
如果是多层的子路由 不就匹配了多层了？例如/a /b /c  /user/*/a/b/c
是的
/user/*
/user/a/b/c
/user/*是可以匹配完整的 /user/a/b/c的
但是
base里是会把a/b/c进行删除的，只剩下/user
pathname pathnameBase
10:31
shine
1 
10:35
人生只如初见
v6可以重定向redirect么？ 
shine
\\/ 是没看到啥意思 
shine
\\/ 没看懂啥意思 
\\/其实就是指的 / 这个字面量

靜待雨落
感觉要是路径 不规则  怎么匹配  
只有2级路由  
user 是一级   
二级路由 path  写个 /a/b

/user
a/b



shine
有个点，匹配上一个子路径后 还需要继续匹配吗？ 
不会的

shine
看这里是都匹配一遍， 
shine
以/ 开头 为什么不是 ^\/ 
for (let i = 0; matches == null && i < branches.length; i++) {
    matches = matchRouteBranch(branches[i], pathname);
  }



我赌你的枪里没有子弹
使用useContext 接受的 outlet 
shine
这个Outlet不是provider提供的么 怎么拿到呢 
shine
看懂了！ 
我赌你的枪里没有子弹
嗯嗯 懂了 拿到的就是最近的父 provider 的 outlet 
12:01
shine
很舒适！ 


正则 以/ 开头 为什么不是 ^\/ 


