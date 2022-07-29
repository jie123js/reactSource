//第1步，把虚拟DOM的children转成路由配置对象数组
let routes = [
  {
    "path": "/user/*", "element": "User",
    "children": [
      { "path": "add", "element": "UserAdd" },
      { "path": "list", "element": "UserList" },
      { "path": "detail", "element": "UserDetail" }
    ]
  }
]
//打平的意思就是把多维变成一维


/* let arr = [1, [2, 3], [4, [5, 6]]];
arr = [1,2,3,4,5,6] */

let branches = [
  {
    "path": "/user/*/add",
    "routesMeta": [
      {
        "relativePath": "/user/*",
        "route": {
          "path": "/user/*",
          "element": 'User',
          "children": [
            {
              "path": "add",
              "element": 'UserAdd'
            }
          ]
        }
      },
      {
        "relativePath": "add",
        "route": {
          "path": "add",
          "element": 'UserAdd'
        }
      }
    ]
  },
  {
    "path": "/user/*",
    "routesMeta": [
      {
        "relativePath": "/user/*",
        "route": {
          "path": "/user/*",
          "element": 'User',
          "children": [
            {
              "path": "add",
              "element": 'UserAdd'
            }
          ]
        }
      }
    ]
  }
]