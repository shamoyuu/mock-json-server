const jsonServer = require('json-server');

let server = jsonServer.create();
let middlewares = jsonServer.defaults();

let db = require('./db.js');

// 设置非RESTful标准的接口
db.posts.map(function(data, index){
    server.post(data.url, data.foo);
});
db.gets.map(function(data, index){
    server.get(data.url, data.foo);
});

server.use(middlewares);

let router = jsonServer.router(db.data);

// 自定义输出格式
router.render = (req, res) => {
    res.send({
        code: 1001,
        data: res.locals.data
    });
}

// 使用生成好的RESTful路由
server.use(router);

// 监听3000端口，启动服务器
server.listen(3000, function () {
    console.log('json-server 服务器已运行');
    console.log('http://localhost:3000');
});
