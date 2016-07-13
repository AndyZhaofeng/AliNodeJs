/**
 * Created by zhaofeng on 16/7/13.
 */

console.log("接收到SIGTERM");
process.on('SIGTERM',function(){
    console.log("接收到SIGTERM");
    cleanUp();
    process.exit(0);
});
