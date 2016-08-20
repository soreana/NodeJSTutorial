var async = require('async');
var math = require('./math');

async.waterfall([
    function( next ){
        math.sum(1,2,next);
    },
    function( result , next ){
        console.log(result);
        math.sum(result,3, next);
    }
], then);

function then( err, result){
    if(err){
        throw Error();
    }
    
    console.log('I can\'t believe the result is:',result, '!');
};