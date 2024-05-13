const readline =require('readline')
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Digite el numero a realizar factorial:", (n1)=>{
    let resultado=1
    for(let i=1 ; i<=parseFloat(n1); i++){
        resultado*=i;
    }
    console.log("El factorial es:"+resultado)
})