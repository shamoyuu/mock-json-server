let Mock  = require('mockjs');
let Random = Mock.Random;

let result = {};

// 自定义post请求
let posts = [
    {
        url: '/error',
        foo: function(req, res){
            res.sendStatus(500);
        }
    },
    {
        url: '/login',
        foo: function(req, res){
            res.send({
                code: 1001,
                msg: '登录成功'
            });
        }
    }
];

// 自定义get请求
let gets = [
    {
        url: '/error',
        foo: function(req, res){
            res.sendStatus(500);
        }
    }
];

// 自定义json数据
let data = { 
    news: []
};
// 随机数据生成，请参考 https://github.com/nuysoft/Mock/wiki
var images = [1, 2, 3].map(x => Random.image('200x100', Random.color(), Random.cword(2,6)));
for (var i = 0; i < 10; i++) {
    var content = Random.cparagraph(0, 10);
    data.news.push({
         id: i,
         title: Random.ctitle(8, 20),
         desc: content.substr(0, 40),
         tag: Random.cword(2, 6),
         views: Random.integer(100, 5000),
         images: images.slice(0, Random.integer(1, 3)),
         datetime: Random.datetime()
    });
}

result.data = data;
result.posts = posts;
result.gets = gets;

module.exports = result;
