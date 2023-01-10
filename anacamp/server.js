const request = require('request');
const express = require('express');
const pupppeteer = require('puppeteer');
const { response } = require('express');
var app = express();

app.set('view engine', 'ejs');
app.get('/', async(req, res) => {
    var hi = (async() => {
        var li = {};
        const browser = await pupppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://finance.naver.com/sise/sise_quant.naver');
        var eh = await page.$$("#contentarea > div.box_type_l > table > tbody");
        var cnt = 3;
        for (var j = 0; j < 100; j++) {
            console.log(j);
            var inner1 = await eh[0].$eval(`tr:nth-child(${cnt}) > td:nth-child(2) a`, (e1) => {
                return e1.innerText;
            });
            var inner2 = await eh[0].$eval(`tr:nth-child(${cnt}) > td:nth-child(3)`, (e1) => {
                return e1.innerText;
            });
            var inner3 = await eh[0].$eval(`tr:nth-child(${cnt}) > td:nth-child(4) > span`, (e1) => {
                return e1.innerText;
            });
            var inner4 = await eh[0].$eval(`tr:nth-child(${cnt}) > td:nth-child(5) > span`, (e1) => {
                var intemp = e1.innerText;
                if (intemp[0] == "0") {
                    return "동일가";
                } else if (intemp[0] == '+') {
                    return "상승";
                } else {
                    return "하락";
                }
            });
            li[j] = { 'name': inner1, 'money': inner2, 'change': inner3, 'isup': inner4 };
            if ((cnt % 8) == 7) {
                cnt += 4;
            } else {
                cnt++;
            }
        }
        await browser.close();
        console.log(li);
        res.render('index.ejs', {
            li: li,
        });
    });
    hi();
});


app.listen(8080, function() {
    console.log('서버가 열렸습니다');
})