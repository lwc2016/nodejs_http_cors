const url = require("url");
module.exports = ()=>{
    return (req, res, next)=>{
        const { pathname, query: { jsonp } } = url.parse(req.url, true);
        if(pathname === "/user" && req.method === "GET"){
            console.log("接收到请求了");
            console.log(req.headers);
            res.setHeader("Content-type", "application/json;charset=utf-8");
            res.write(`${jsonp}(${JSON.stringify({
                name: "Jack",
                email: "jack2020@hotmail.com",
                age: "42",
                id: 15
            })})`);
            res.end();
        }else if(pathname === "/login" && req.method  === "POST"){
            console.log(req.headers);
            res.setHeader("Content-type", "application/json;charset=utf-8");
            res.setHeader("Access-Control-Allow-Origin", "http://localhost:63342");
            res.setHeader("Access-Control-Allow-Credentials", true);
            const {name, password} = req.body || {};
            if(name === "admin" && password === "123456"){
                res.write(JSON.stringify({
                    code: 0,
                    result: ""
                }));
            }else{
                res.write(JSON.stringify({
                    code: 1001,
                    result: "",
                    errorMsg: "用户名或密码错误"
                }));
            }
            res.end();
        }else if(pathname === "/register" && req.method === "POST"){
            console.log(req.headers["content-type"]);
            res.setHeader("Content-type", "application/json;charset=utf-8");
            res.write(JSON.stringify({
                code: 0,
                result: req.body
            }));
            res.end();
        }else if(pathname === "/addNews" && req.method === "POST"){
            console.log(req.headers["content-type"]);
            res.setHeader("Content-type", "application/json;charset=utf-8");
            res.write(JSON.stringify({
                code: 0,
                result: req.body
            }));
            res.end();
        }else if(pathname === "/upload" && req.method === "POST"){
            console.log(req.headers["content-type"]);
            res.setHeader("Content-type", "application/json;charset=utf-8");
            res.write(JSON.stringify({
                code: 0,
                result: req.body
            }));
            res.end();
        }else{
            return next();
        }
    };
};