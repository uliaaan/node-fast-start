const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')

//Folder func pages
const index = require('./routes/index')

const app = express()

//Join handlebars
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

//Join static files
app.use(express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 5000

//Routes pages 
app.use('/', index)

app.listen(port, () => {
  console.log(`Server start on port ${port}`)
})