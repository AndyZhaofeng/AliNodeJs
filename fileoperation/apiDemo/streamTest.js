/**
 * Created by zhaofeng on 16/6/29.
 */

var fs=require('fs');

/**
 * 只读流
 * @param src
 */
function streamFile(src){
    var rs=fs.createReadStream(src);

    rs.on('data',function(chunk){
        rs.pause();
        console.log(chunk);
        rs.resume();
    });
    rs.on('end',function(){
    });
}

function StreamRW(src,dst){
    var rs=fs.createReadStream(src);
    var ws=fs.createWriteStream(dst);

    rs.on('data',function(chunk){
        if(ws.write(chunk)==false){
            rs.pause();
        }
    });
    rs.on('end',function(){
        ws.end();
    });
    ws.on('drain',function(){
        rs.resume();
    });
}

function main(argv){
    // streamFile(argv[0]);
    StreamRW(argv[0],argv[1]);
}
main(process.argv.slice(2));
