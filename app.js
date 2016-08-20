var math = require('./math');

math.sum(1,2,function(err,result){
    if(err){
        throw Error();
    }
    
    console.log('I can\'t believe the result is:', result, '!');
});