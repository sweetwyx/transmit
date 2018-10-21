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