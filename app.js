const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',(name,age)=>
{
    console.log(`data recieved ${name} ${age}`);
}); 

customEmitter.on('response',(name,age)=>
    {
        console.log(`some other logic here ${name} ${age}`);
    }); 

customEmitter.emit('response','john',34);