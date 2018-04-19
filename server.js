const express = require('express');
const app = express();
var server_port = process.env.YOUR_PORT || process.env.PORT || 8080;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

app.use(express.static('public'))

app.listen(server_port, server_host ,()=>{
  console.log("listening on port "+port);
})
