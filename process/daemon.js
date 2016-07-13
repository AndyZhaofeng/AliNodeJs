/**
 * Created by zhaofeng on 16/7/13.
 */

var child_process=require('child_process');
function spawn(mainModule){
    console.log("daemon");
    var worker=child_process.spawn('node',[ mainModule ]);

    worker.on('exit',function(code){
        console.log("exit");
        if(code!==0){
            spawn(mainModule);
        }
    });
}
spawn('childIPC.js');
