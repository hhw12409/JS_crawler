const axios = require('axios');
const cheerio = require('cheerio');

function melonCrawler() {
  const URL = `https://www.melon.com/chart/`;

  axios.get(URL).then(res => {
    console.log(res.status)
    if(res.status == 200) {

      // empty array
      let crawledMusic= [];

      // res.data에 있는 tag를 cheerio로 검색하여 변수에 담기
      const $ = cheerio.load(res.data);
      const $musicList = $('#lst50');

      $musicList.each(function(i) {
        crawledMusic[i] ={
          title : $(this).find('#lst50 > td > div > div > div.ellipsis.rank01 > span > a').text().trim(),
          artist : $(this).find('#lst50 > td > div > div > div.ellipsis.rank02 > a').text(),
          img : $(this).find('#lst50 > td > div > a > img').attr('src')
        };
      });
      console.log(crawledMusic)
    }
  })
}

melonCrawler()