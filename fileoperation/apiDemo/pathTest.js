/**
 * Created by zhaofeng on 16/6/30.
 */

var path=require('path');
var cache={};
function store(key,value){
    cache[path.normalize(key)]=value;
}
store('abc/def',1);             //  'abc/def'
store('abc//def///...../ghi',2);//  'abc/def/...../ghi'
store(path.join('abc/','def/','.../ghi'),3);    //  'abc/def/.../ghi'
store(path.extname('path.java'),4);     //  '.java'
console.log(cache);

