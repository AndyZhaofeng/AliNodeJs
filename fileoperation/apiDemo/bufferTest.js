/**
 * Created by zhaofeng on 16/6/29.
 */
var bin=new Buffer([0x68,0x65,0x6c,0x6f]);
var sub=bin.slice(2);

sub[0]=0x60;
console.log(bin);   //Buffer 68 65 60 6f
console.log(sub);   //Buffer 60 6f

var dup=new Buffer(bin.length);
bin.copy(dup);
dup[0]=0x48;
console.log(bin);   //Buffer 68 65 60 6f
console.log(dup);   //Buffer 48 65 60 6f
