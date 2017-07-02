const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('Welcome to node application. Thank you')
})
app.listen(3000, () => console.log('Server running on port 3000'))
