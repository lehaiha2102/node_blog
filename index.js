const express = require('express')
const app = express()
const port = 3000

app.get('/trang-chu', function (req, res) {
  res.send('Hello World')
})

app.listen(port, ()=>console.log('listening on port http://localhost:${port}'))