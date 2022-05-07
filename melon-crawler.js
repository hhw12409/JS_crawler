const axios = require('axios');
const cheerio = require('cheerio');

function melonCrawler() {
  const URL = `https://www.melon.com/chart/`;

  axios.get(URL).then(res => {
    console.log(res.status)
    if(res.status == 200) {
      let crawledMusic= [];

      // res.data에 있는 tag를 cheerio로 검색하여 변수에 담기
      const $ = cheerio.load(res.data);
      const $musicList = $('#lst50');
    }
  })
}

melonCrawler()