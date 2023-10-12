import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
  ])
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})