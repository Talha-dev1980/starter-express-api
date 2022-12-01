const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.all('/:name', (req, res) => {
    console.log("Just got a request!")
    res.send('Hey '+req.params.name)
})
app.listen(process.env.PORT || 3000)
