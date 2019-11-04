const https = require('https')
const {
    insert, find
} = require('./db')
https.get('https://m.lagou.com/listmore.json?pageNo=4&pageSize=15', (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        let result = JSON.parse(rawData).content.data.page.result
        result.forEach(element => {
            insert('company', [{
                companyName: element.companyName,
                positionName: element.positionName,
                city: element.city,
                createTime: element.createTime,
                salary: element.salary,
                companyLogo: 'http://www.lgstatic.com/' + element.companyLogo,//http://www.lgstatic.com/i/image2/M01/8F/91/CgoB5lug3MeASrcZAAAsHI8z3Ns453.png
                companyName: element.companyName,
                companyFullName: element.companyFullName
            }])
        });
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`);
});

let a = find('company')
console.log(a)