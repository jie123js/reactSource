const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const session = require('express-session');
const app = express();
app.use(logger('dev'));
app.use(cors({
  origin:["http://localhost:3000"],
  credentials:true,
  allowedHeaders:"Content-Type,Authorization",
  methods:"GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
}));
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'zhufeng'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const users = [
  { id: "1", name: 'zhufeng1', createdAt: new Date().toISOString() },
  { id: "2", name: 'zhufeng2', createdAt: new Date().toISOString() },
  { id: "3", name: 'zhufeng3', createdAt: new Date().toISOString() }
];
app.get('/api/users', (req, res) => {
  res.json({
    success: true,
    data: users
  });
});
app.get('/api/users/:id', (req, res) => {
  let user = users.find(user=>user.id === req.params.id);
  res.json({
    success: true,
    data: user
  });
});
app.post('/api/register', (req, res) => {
  const user = req.body;
  user.id = Date.now()+'';
  user.createdAt = new Date().toISOString();
  users.push(user);
  req.session.user = user;
  res.json({
    success: true,
    data: user
  })
});
app.post('/api/login', (req, res) => {
  const user = req.body;
  req.session.user = user;
  res.json({
    success: true,
    data: user
  })
});
app.get('/api/logout', (req, res) => {
  req.session.user = null;
  res.json({
    success: true,
    data: null
  })
});
app.get('/api/validate', (req, res) => {
  const user = req.session.user;
  if (user) {
    res.json({
      success: true,
      data: user
    })
  } else {
    res.json({
      success: false,
      error: `用户未登录`
    })
  }
});
app.listen(5000, () => console.log('api server started on port 5000'));