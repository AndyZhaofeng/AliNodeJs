/**
 * Created by zhaofeng on 16/6/30.
 */


var fs=require('fs');
fs.readFile(pathname,function(err,data){
    if(err){

    }else{

    }
});

var readFileSync=function(){
    try{
        var data=fs.readFileSync(pathname);
        //Deal with data.
    }catch(err){
        //Deal with err.
    }
};
