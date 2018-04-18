const express = require('express');
const app = express();
// const port = 3000;
//using process.env


app.use(express.static('public'))

app.listen(process.env.PORT || 8080,()=>{
  console.log("listening on port "+port);
})
