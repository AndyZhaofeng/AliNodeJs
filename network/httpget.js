/**
 * Created by zhaofeng on 16/7/8.
 */

var http=require('http');
http.get('http://www.baidu.com',function(response){
    var body=[];

    console.log(response.statusCode);
    console.log(response.headers);

    response.on('data',function(chunk){
        body.push(chunk);
    });
    response.on('end',function(){
        body=Buffer.concat(body);
        console.log(body.toString());
    });
});
