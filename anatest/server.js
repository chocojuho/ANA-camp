/*console.log(1);
console.log('hi');
console.log(`my name is ${"이주호"}`);


var a = 0;

let message = "안녕하세요 ANA입니다.";

console.log(a);
console.log(message);

const birthday = "060207";
a = { hi: "안녕", bye: "잘가" };
console.log(a);
console.log(typeof(a));

let bigInt = 12345678910111213141516171819202122;
console.log(bigInt);
console.log(typeof(bigInt));

let str = 'ncc';
str = 'sunrin';
str = `큰수 출력해보기 ${bigInt}`;
console.log(str);
console.log(typeof(str));

let isGreater = 4 > 1;
console.log(isGreater);
console.log(typeof(isGreater));
//var age = null;
//console.log(typeof(age));

var age;
console.log(typeof(age));

console.log(a.hi);
console.log(typeof(a.hi));
console.log(a["hi"]);

let year = 2024;
if (year == 2023) {
    console.log("멋지다!");
} else if (year == 2022) {
    console.log("아쉽네요");
} else {
    console.log('아니네요');
}

let conditon = 1 > 5;

let result = conditon ? "맞습니다" : "맞자";
console.log(result);

var i = 0

while (i <= 5) {
    console.log(i);
    i++;
}

for (var i = 0; i <= 5; i++) {
    if (i == 3) {
        break;
    } else if (i == 2) {
        continue;
    }
    console.log(i);
}
*/
////////////////////////쉬는 시간

/*
function hi() {
    console.log('안녕');
}

hi();



const hii = function() {
    console.log('안녕');
}
hii();

const hiii = () => {
    console.log("안녕");
};
hiii();

function add(one, two) {
    return one + two;
}
console.log(add(1, 2));

//var k;
var k;
try {
    try {
        throw new Error("oops");
    } finally {
        console.log("finally");
    }
} catch (ex) {
    console.error("outer", ex.message);
}

try {
    try {
        throw new Error("oops");
    } catch (ex) {
        console.error("inner", ex.message);
        throw ex;
    } finally {
        console.log("finally");
    }
} catch (ex) {
    console.error("outer", ex.message);
}

setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
            setTimeout(() => {
                console.log(4);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000)


let promise = new Promise((res, rej) => {
    res("성공");
    rej(err);
});
console.log(promise);

function getData(second) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(second);
        }, 1000 * second);
    });
};

getData(1).then(function(tableData) {
    console.log(tableData);
    return getData(1);
}).then((tableData) => {
    console.log(tableData);
    return getData(1);
}).then((tableData) => {
    console.log(tableData);
    return getData(1);
}).then((tableData) => {
    console.log(tableData);
    return getData(1);
}).then((tableData) => {
    console.log(tableData);
    return getData(1);
}).then((tableData) => {
    console.log(tableData);
    return getData(1);
}).then((tableData) => {
    console.log(tableData);
    return getData(1);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("이 함수는 실행되었습니다.");
});
*/

const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({ headless: false });
    try {
        const page = await browser.newPage();
        await page.goto('https://sunrint.sen.hs.kr/');
        const text = await page.evaluate(() => {
            const score = document.querySelector('.menu');
            if (score) {
                return score.textContent;
            }
        });
        console.log(text.trim());
    } catch (err) {
        console.log(err);
    }
    await browser.close();
})()