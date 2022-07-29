
const next = require('next');
const nextApp = next({dev:false});
const handler = nextApp.getRequestHandler();
nextApp.prepare().then(()=>{
  const express = require('express');
  const expressApp = express();
  expressApp.get('*',async (req,res)=>{
    await handler(req,res);
  });
  expressApp.listen(3000, () => console.log('api server started on port 5000'));
});
