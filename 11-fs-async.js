const { error } = require('console');
const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf8', (err, result)=>{ // When decoding not provided it will show buffer error
    if(err){
        console.log(err);
        return
    }
    console.log(result)
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', 
        `Here is the result: ${first}, ${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return
            }
        }),
        {flag:'a'}
    })
})