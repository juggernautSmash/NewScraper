const axios = require('axios')
const cheerio = require('cheerio')
const { News } = require('../models')
const newsUrl = 'https://www.nytimes.com/'

module.exports = {

  async getNews() {
    console.log('getNews Controller is hit')
    let newsList = await new Promise((resolve, reject) => {

      let news = []

      axios.get(newsUrl)
        .then(({ data: html }) => {
          // console.log('axios.get was hit')
          const $ = cheerio.load(html)
          $('article').each((i, elem) => {

            let headline = $(elem).text()
            let url = ''
            let summary = ''

            if ($(elem).children('div').children('a').attr('href')) {

              const e = $(elem).children('div').children('a')

              url = newsUrl + e.attr('href')
              summary = e.children('p').text() ? e.children('p').text() : 'Summary not available'

            } else if ($(elem).children('div').children('div').children('a').attr('href')) {

              const e = $(elem).children('div').children('div').children('a')

              url = newsUrl + e.attr('href')
              summary = e.children('p').text() ? e.children('p').text() : 'Summary not available'

            } else if ($(elem).children('div').children('div').children('div').children('a').attr('href')) {
              const e = $(elem).children('div').children('div').children('div').children('a')

              url = newsUrl + e.attr('href')
              summary = e.children('p').text() ? e.children('p').text() : 'Summary not available'

            } else if ($(elem).children('div').children('div').children('div').children('div').children('a').attr('href')) {

              const e = $(elem).children('div').children('div').children('div').children('div').children('a')

              url = newsUrl + e.attr('href')
              summary = e.children('p').text() ? e.children('p').text() : 'Summary not available'
            } else if ($(elem).children('div').children('div').children('div').children('div').children('div').children('a').attr('href')) {

              const e = $(elem).children('div').children('div').children('div').children('div').children('div').children('a')

              url = newsUrl + e.attr('href')
              summary = e.children('p').text() ? e.children('p').text() : 'Summary not available'
            }

            news.push({ headline, url, summary})

          }) // end each
          news.length ? resolve(news) : reject(new Error)
        }) // end axios.then
        .catch(e => console.error(e))
    }) // end newsList await

    return newsList
  } // end getNews
}