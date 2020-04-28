import  axios from 'axios';
import CONST from '../const';

//通用配置
axios.defaults.baseURL = CONST.host;
// axios.defaults.params = Utils.extend(CONST.params, {
//     _r: Utils.sign(1)
// })


//设置携带跨域cookie
axios.defaults.withCredentials = true;
axios.defaults.responseType = 'json';
//form post  设置
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

var _callback = function (response, success, error) {
    console.log(response);
}

//请求数据
var request = function (config, success, error) {
    var method = config.method || 'get';
    var baseParams = {
        _appName: 'jiaxiaozhijia',
        _platform: 'web',
        _authVersion: 1.5,
    };

    var params = config.params || {};

    params = Object.assign(baseParams,params);

    
    // if (!/(cooperate\.html|login\.html)/.test(location.href)) {
    //     var userInfo = Simple.Tools.getStorage('userInfo');
    //     if (userInfo) {
    //         params.authToken = userInfo.authToken;
    //     } else {
    //         location.href = './login.html';
    //     }
    // }

    return axios[method](config.url, {
        params: params
    }).then(function (response) {
        _callback(response, success, error);
    }).catch(function (response) {
        _callback(response, success, error);
    })
}


export {
    request
}