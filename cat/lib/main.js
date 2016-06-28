/**
 * Created by zhaofeng on 16/6/28.
 */
var head=require('./head');
var body=require('./body');

exports.create=function(name){
    console.log('创建一只猫:'+name);
    return {
        name:name,
        header:head.create(name),
        bodyy:body.create(name)
    }
};
