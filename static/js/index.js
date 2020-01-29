// jsonp
function callback(value){
    console.log(value);
}
document.getElementById("btn1").onclick = function(){
    const script = document.createElement("script");
    script.src = `http://localhost:3030/user?jsonp=callback`;
    document.body.appendChild(script);
};

document.getElementById("form1").onsubmit = function(event){
    event.preventDefault();

    // 获取formData;
    const formData = new FormData(this);

    // 创建xhr
    const xhr = new XMLHttpRequest();
    // 处理请求结果
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200){
            const resp = xhr.responseText;
            console.log(resp);
        }
    };
    // 设置请求类型和地址
    xhr.open(this.method, this.action);
    // 设置传递cookie
    xhr.withCredentials = true;
    // 发送请求体
    xhr.send(formData);
};

document.getElementById("form2").onsubmit = async function(event){
    event.preventDefault();

    const formData = new FormData(this);
    const resp = await fetch(this.action, {
        method: this.method,
        body: formData,
        credentials: "include"
    });
    const data = await resp.json();
    console.log(data);
};
