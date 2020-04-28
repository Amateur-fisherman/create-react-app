console.log(process.env.NODE_ENV)
var host = window.location.protocol + '//jiaxiao.kakamobi.cn';
if(process && process.env && process.env.NODE_ENV && process.env.NODE_ENV === 'development'){
    host = 'https://jiaxiao3.ttt.mucang.cn/'
}

var CONST = {
    host: host,
};

export default CONST