require('dotenv').config() // bring in .env
require('./config') // bring in mongoDb
const express = require('express')
const { join } = require('path')
const app = express()

// Middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//require('./routes')(app)

const axios = require('axios')
const cheerio = require('cheerio')
axios.get('https://www.nytimes.com/')
.then( ({ data: html }) => {
  console.log('axios.get was hit')
  const $ = cheerio.load(html)
  $('article').each( (i, elem) => {
    console.log($(elem).text())
  })
})

app.listen(process.env.PORT || 3000)


