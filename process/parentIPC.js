/**
 * Created by zhaofeng on 16/7/13.
 */

var child_process=require('child_process');
var child=child_process.spawn('node',['childIPC.js'],{
    stdio:[0,1,2,'ipc']
});

child.on('message',function(msg){
    console.log(msg);
});

child.send({hello:'hello'});
