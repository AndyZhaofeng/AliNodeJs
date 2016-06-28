/**
 * Created by zhaofeng on 16/6/28.
 */

var counter1=require('./utils/counter');
var counter2=require('./utils/counter');
var cat=require('./cat');

console.log(counter1.count());
console.log(counter1.count());
console.log(counter2.count());

cat.create("tom");

