const axios = require('axios')
const cheerio = require('cheerio')
const { News } = require('../models')
const newsUrl = 'https://www.nytimes.com/'

module.exports = {

  async getNews() {
    let newsList = await new Promise((resolve, reject) => {

      let news = []

      axios.get(newsUrl)
        .then(({ data: html }) => {
          console.log('axios.get was hit')
          const $ = cheerio.load(html)
          $('article').each((i, elem) => {


            let headline = $(elem).text()
            let url = ''
            let summary = ''

            console.log('Headline is: ' + $(elem).text())
            if ($(elem).children('div').children('a').attr('href')) {

              const e = $(elem).children('div').children('a')

              url = newsUrl + e.attr('href')
              summary = e.children('p').text() ? e.children('p').text() : 'Summary not available'

              // console.log( 'URL is ' + newsUrl + e.attr('href'))
              // e.children('p').text() ? console.log('Summary is: ' + e.children('p').text()) : console.log('Summary is: no summary')
            } else if ($(elem).children('div').children('div').children('a').attr('href')) {

              const e = $(elem).children('div').children('div').children('a')

              url = newsUrl + e.attr('href')
              summary = e.children('p').text() ? e.children('p').text() : 'Summary not available'

              // console.log( 'URL is '  + newsUrl + e.attr('href'))
              // e.children('p').text() ? console.log('Summary is: ' + e.children('p').text()) : console.log('Summary is: no summary' )
            } else if ($(elem).children('div').children('div').children('div').children('a').attr('href')) {
              const e = $(elem).children('div').children('div').children('div').children('a')

              url = newsUrl + e.attr('href')
              summary = e.children('p').text() ? e.children('p').text() : 'Summary not available'

              // console.log('URL is ' + newsUrl + e.attr('href'))
              // e.children('p').text() ? console.log('Summary is: ' + e.children('p').text()) : console.log('Summary is: no summary' )
            } else if ($(elem).children('div').children('div').children('div').children('div').children('a').attr('href')) {

              const e = $(elem).children('div').children('div').children('div').children('div').children('a')

              url = newsUrl + e.attr('href')
              summary = e.children('p').text() ? e.children('p').text() : 'Summary not available'
              // console.log('URL is ' + newsUrl + e.attr('href'))
              // e.children('p').text() ? console.log('Summary is: ' + e.children('p').text()) : console.log('Summary is: no summary' )
            } else if ($(elem).children('div').children('div').children('div').children('div').children('div').children('a').attr('href')) {

              const e = $(elem).children('div').children('div').children('div').children('div').children('div').children('a')

              url = newsUrl + e.attr('href')
              summary = e.children('p').text() ? e.children('p').text() : 'Summary not available'

              // console.log('URL is ' + newsUrl + e.attr('href'))
              // e.children('p').text() ? console.log('Summary is: ' + e.children('p').text()) : console.log('Summary is: no summary' )
            }

            news.push({ headline, url, summary})

          }) // end each
          console.log(`news list is...`)
          console.log(news)
          news.length ? resolve(news) : reject(new Error)
        }) // end axios.then
        .catch(e => console.error(e))
    }) // end newsList await

    return newsList
  } // end getNews
}