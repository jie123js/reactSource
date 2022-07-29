## 首屏渲染
### 先在后台执行

LayoutApp getInitialProps
UserList getInitialProps
LayoutApp constructor
LayoutApp render
UserList constructor
UserList render

在发给客户端的时候，会把属性进行序列化发给客户端，客户端不需要自己获取数据了，直接使用服务器传过的属性即可

### 然后会在客户端执行
LayoutApp constructor
LayoutApp render
UserList constructor
UserList render


## 切换路由的时候
### 先在后台执行

### 然后会在客户端执行
LayoutApp getInitialProps
UserList getInitialProps
LayoutApp render
UserList constructor
UserList render


