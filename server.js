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
const newsUrl = 'https://www.nytimes.com/'
axios.get(newsUrl)
.then( ({ data: html }) => {
  console.log('axios.get was hit')
  const $ = cheerio.load(html)
  $('article').each( (i, elem) => {
    console.log('Headline is: ' + $(elem).text())
    if($(elem).children('div').children('a').attr('href')){
      const e = $(elem).children('div').children('a')
      console.log( 'URL is ' + newsUrl + e.attr('href'))
      e.children('p').text() ? console.log('Summary is: ' + e.children('p').text()) : console.log('Summary is: no summary')
    } else if($(elem).children('div').children('div').children('a').attr('href')){
      const e = $(elem).children('div').children('div').children('a')
      console.log( 'URL is '  + newsUrl + e.attr('href'))
      e.children('p').text() ? console.log('Summary is: ' + e.children('p').text()) : console.log('Summary is: no summary' )
    } else if($(elem).children('div').children('div').children('div').children('a').attr('href')){
      const e = $(elem).children('div').children('div').children('div').children('a')
      console.log('URL is ' + newsUrl + e.attr('href'))
      e.children('p').text() ? console.log('Summary is: ' + e.children('p').text()) : console.log('Summary is: no summary' )
    } else if($(elem).children('div').children('div').children('div').children('div').children('a').attr('href')){
      const e = $(elem).children('div').children('div').children('div').children('div').children('a')
      console.log('URL is ' + newsUrl + e.attr('href'))
      e.children('p').text() ? console.log('Summary is: ' + e.children('p').text()) : console.log('Summary is: no summary' )
    } else if($(elem).children('div').children('div').children('div').children('div').children('div').children('a').attr('href')){
      const e = $(elem).children('div').children('div').children('div').children('div').children('div').children('a')
      console.log('URL is ' + newsUrl + e.attr('href'))
      e.children('p').text() ? console.log('Summary is: ' + e.children('p').text()) : console.log('Summary is: no summary' )
    } 
   // console.log('URL is ' + $(elem).children('div').children('div').children('div').children('a').attr('href'))



  })
  //console.log($('article').children('div').children('div').children('div').children('a').attr('href'))
})

app.listen(process.env.PORT || 3000)


