const readline = require('readline');

const rl = readline.createInterface
({  
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingresse su nombre:', (nombre)=>{
        rl.question("Ingresse su apellido:", (apellido)=>{ 
          console.log("Hola mi nombre es:"+nombre+" "+apellido); 
          rl.close(); 
        })
        
});