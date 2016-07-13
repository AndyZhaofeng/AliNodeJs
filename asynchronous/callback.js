/**
 * Created by zhaofeng on 16/7/13.
 */

function heavyCompute(n,callback){
    var count=0,i,j;

    for(i=n;i>0;--i){
        for(j=n;j>0;--j){
            count += 1;
        }
    }
    callback(count);
}
heavyCompute(100,function (count){
    console.log("count="+count);
});
