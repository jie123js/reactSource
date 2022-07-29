- worker saga 做具体的工作，如调用API，进行异步请求，获取异步封装结果
- watcher saga 监听被dispatch的actions,当接受到action或者知道其被触发时，调用worker执行任务
- root saga 立即启动saga的唯一入口


ilark
多个异步的话，写多个take么？ 
我赌你的枪里没有子弹
take 会一直监听吗 
11:01
Hedgehog
是在take判断什么action，再执行对应的function吗 

是的！


在take匹配不到的时候跳过下一个yield？ 
ilark
只监听一次不符合业务场景，有没有一直监听的方法呢？ 后面马上讲 有的

多个迭代器 都是一次走到底吗？

多个迭代器都是自上而下执行的
但是这多个迭代器之间没啥关系



shine - 氛围组一哥
还是不太理解watcherSaga中的任务顺序 
我赌你的枪里没有子弹
就是函数内的要等 但是不同的函数不用等待 
我赌你的枪里没有子弹
这样理解对吗 
关键是不是调用了新的runSaga
如果是的话就相当开了一个新的子进程执行，与当前的进程无关。

shine - 氛围组一哥
那先点minus 就没等到add为什么会 - 1 
  yield addWorkerSaga();
  yield minusWorkerSaga();

如果yield saga ,就会开启新的子进程执行，与当前saga执行无关了

相当 于开了两个子进程执行，它们的执行互相没有关系，跟主saga也没有saga
谁先生效取决于各自的执行过程

我赌你的枪里没有子弹
不同的迭代器不用等 刚说的不严谨 
Hedgehog
watch里面等，里面子的按新的，不等 


12:04
Hedgehog
点add，执行add（等10s）并立刻监听minus，不需要等10s
点minus，执行minus（等1）
所以先-1再+1 
shine - 氛围组一哥
嗷嗷 也就是监听的内容，是可以不按照这个顺序执行的 

其实工作的内容肯定是按监听的顺序执行的

shine - 氛围组一哥
那先minus为什么不会卡住呢？ 
Hedgehog
Worker的内容不固定 



感觉和定时器差不多呀 
我赌你的枪里没有子弹
all 那个 后面的迭代器还要等待前面的吗 
我赌你的枪里没有子弹
all 那个例子有点迷糊 

Promise.all([promise1,promise2,promise3]);
同时开启多个promise执行
他们的的执行是没有关系的，
需要等它们全部完成后才能让rootSaga继续向下执行

木兰
派了四个人去马鞍 马靴 辔头 马


