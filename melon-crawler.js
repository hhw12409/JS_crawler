const axios = require('axios');
const cheerio = require('cheerio');

function melonCrawler() {
  const URL = `https://www.melon.com/chart/`;

  axios.get(URL).then(res => {
    console.log(res.status)
  })
}

melonCrawler()