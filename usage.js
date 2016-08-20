var Heartbeat = require('./implementation');

var a = new Heartbeat(400);
var b = new Heartbeat(1000);

a.on('beat' , function(beat){
    console.log('Heart A beat n times:',beat);
});

b.on('beat' , function(beat){
    console.log('Heart B beat n times:',beat);
});