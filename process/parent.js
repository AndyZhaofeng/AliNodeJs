/**
 * Created by zhaofeng on 16/7/13.
 */

var child_process=require('child_process');

var child=child_process.spawn('node',['child.js']);

child.kill('SIGTERM');
