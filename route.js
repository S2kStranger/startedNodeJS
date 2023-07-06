const requestHandler = (req,res) => {
const fs=require('fs');
const url=req.url;
const method=req.method;
if(url==='/')
{
    fs.readFile('message.txt',(err,msg) => {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(msg);
    res.write('<body><form action = "/message" method="POST" ><input type="text" name="message"><button>Send</button></form></body>');
    res.write('</html>');
    return res.end;
    });
    
    
}
if(url==='/message')
{
    const body=[];
    req.on('data',chunk => {
        body.push(chunk);
    });
    return req.on('end', () => {
        const parsedBody=Buffer.concat(body).toString();
        const message=parsedBody.split('=')[1];
        fs.writeFile('message.txt',message, err => {
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
        });
    })
}

}

//module.exports=requestHandler;

//module.exports.handler=requestHandler;

module.exports= {
    handler : requestHandler
};

//exports.handler = requestHandler

