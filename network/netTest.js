/**
 * Created by zhaofeng on 16/7/8.
 */

var net=require('net');
net.createServer(function(conn){
    conn.on('data',function(data){
        conn.write([
            'HTTP/1.1 200 OK',
            'Content-Type:text/plain',
            'Content-Length: 11',
            '',
            'Hello net world'
        ].join('\n'));
    });
}).listen(8080);

