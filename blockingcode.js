const http = require('http')

const server = http.createServer((req,res)=>
{ 
    if(req.url == '/')
    {
        res.end('Home page')
        return; 
    }
    if(req.url == '/about')
    {
        for(let i = 0 ; i < 1000; i++)
        {
            for(let j = 0 ;  j < 1000; j++)
            {
                console.log(`${i} ${j}`);
                
            }
        }
        res.end('About page')
        return; 
    }
    res.end('Error Page')

})

server.listen(5000, ()=>
{
    console.log("server is listening on port 5000...");
})

//Yes, you're on the right track! In asynchronous 
// programming (especially in environments like Node.js 
// or any event-driven server), blocking code refers to 
// operations that prevent the event loop from doing other 
// tasks while they're running. This can "clog up" the event
//  loop, causing delays or making the system unresponsive.

