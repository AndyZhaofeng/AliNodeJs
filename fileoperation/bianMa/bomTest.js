/**
 * Created by zhaofeng on 16/7/1.
 */

var fs=require('fs');
/**
 * Bom移除
 */
function readText(pathname){
    var bin=fs.readFileSync(pathname);

    if(bin[0]==0xEF && bin[1]==0xBB && bin[2]==0xBF){
        bin=bin.slice(3);
    }
    return bin.toString('utf-8');
}
