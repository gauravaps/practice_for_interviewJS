const checkPromise = new Promise((resolve ,reject)=>{
    let result = 10;
    if(result ===11){
        resolve('passed..')
    }else{
        reject('failed..')
    }
})

checkPromise.then(message =>{
    console.log(message);
    
}).catch(message =>{
    console.log(message);
    
})
