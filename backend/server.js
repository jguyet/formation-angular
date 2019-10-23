const http=require('http');
const express=require('express');
const path=require('path');
const openfinLauncher=require('openfin-launcher');

const app=express()

app.use(express.static(path.join(__dirname,'dist','MaterialDemo')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist','MaterialDemo','index.html'));
});

const configPath=path.join(__dirname,'app.json');
const port=process.env.PORT || 3000;

let localServer = http.createServer(app).listen(port , ()=>{
    console.log(`Server listening on port ${port}`);
    openfinLauncher.launchOpenFin({configPath})
    .then(()=>{localServer.close()})
    .fail(e=>{console.log(`Launch Error! ${e}`);});
});