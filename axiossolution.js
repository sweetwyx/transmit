axios.interceptors.request.use(function (config) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if(config.method === 'post') {
        config.data = qs.stringify( {
            ...config.data
        })
    } 
    return config;
  }, function (error) {
    loadinginstace.close()
    return Promise.reject(error);
  })



this.$http({
    url: 'http://shiyun.looky34.cn/client/members/getMembers',
    method: 'POST',
    data:this.$qs.stringify({
      name: '小明'
    })
  }).then((res) => {
    this.my_log('user_info_res = ' + JSON.stringify(res.data))
    if (res.data.success == true) {

    } else {

    }
  }, (err) => {

  }) 

  import qs from 'qs';
  Vue.prototype.$qs = qs;

//
  this.$http.jsonp('/someUrl', {xxx:"xxxx"})
  .then(function (response) {
       console.log(response.data)
    }, function (response) {
     // error callback
   });

//
proxyTable: {
    '/api': {
      target: 'http://www.abc.com',  //目标接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/api': '/api'   //重写接口
      }
    },
  cssSourceMap: false
}

//
proxyTable: {
    '/api': {
    target: 'http://www.abc.com', //目标接口域名
    changeOrigin: true, //是否跨域
    pathRewrite: {
    '^/api': '/' //重写接口
    }
    },
    cssSourceMap: false
    }

    accounts.json
    [
        {
          "$id": "1",
          "$type": "SourceTree.Api.Host.Identity.Model.IdentityAccount, SourceTree.Api.Host.Identity",
          "Authenticate": true,
          "HostInstance": {
            "$id": "2",
            "$type": "SourceTree.Host.Atlassianaccount.AtlassianAccountInstance, SourceTree.Host.AtlassianAccount",
            "Host": {
              "$id": "3",
              "$type": "SourceTree.Host.Atlassianaccount.AtlassianAccountHost, SourceTree.Host.AtlassianAccount",
              "Id": "atlassian account"
            },
            "BaseUrl": "https://id.atlassian.com/"
          },
          "Credentials": {
            "$id": "4",
            "$type": "SourceTree.Model.BasicAuthCredentials, SourceTree.Api.Account",
            "Username": "",
            "Email": null
          },
          "IsDefault": false
        }
      ]