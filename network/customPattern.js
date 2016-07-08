/**
 * Created by zhaofeng on 16/7/8.
 */

var http=require('http');

var options={
    hostname:'www.zfeng.com',
    port:3000,
    path:'/upload',
    method:'POST',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
    }
};

var request=http.request(options,function(response){});

request.write('Hello World');
request.end();
