import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'


export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  /*getImg(url,data) //普通ajax请求*/
  return jsonp(url, data, options)
}

/*function getImg(url,data){
  $.ajax({
    type: 'Get',
    url: url,
    data:data,
    success: function (data) {
      console.log(data)
      return data
    }
  })
}*/
