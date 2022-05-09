const axios = require('axios');
const cheerio = require('cheerio');

function crawler() {
    const url = `https://news.daum.net/`;

    axios.get(url)
        .then(res => {
          console.log(res.status);
          if(res.status == 200) {            
            let crawledNews= [];

            const $ = cheerio.load(res.data);
            const $newsList = $('body > div.container-doc > main > section > div > div.content-article > div.box_g.box_news_issue > ul > li');

            $newsList.each(function(i) {
              crawledNews[i] = {
                  title : $(this).find('li > div > div.cont_thumb > strong > a').text().trim(),
                  summary : $(this).find('li > div > div > span > span.txt_category').text(),
                  img : $(this).find('li > div > a > img').attr('src')
                };
              });
              console.log(crawledNews);
            } else {
                console.log("서버 응답 오류")
            }
        });
}

crawler();