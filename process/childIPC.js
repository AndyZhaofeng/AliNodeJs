/**
 * Created by zhaofeng on 16/7/13.
 */

process.on('message',function(msg){

    var startTime=new Date().getTime();
    // while(new Date().getTime()<startTime+20000);
    msg.hello=msg.hello.toUpperCase();
    process.send(msg);
    console.log("test daemon");
});
