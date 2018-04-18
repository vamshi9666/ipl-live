const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
  res.status(200).json({
    message:"ipl scores should code here"
  })
})
console.log("heroku")

app.listen(port,()=>{
  console.log("listening on port "+port);
})
