// 1.Import readline 
const readline = require("readline");

// 2. Configure interface to connect with terminal/conmmand line

const interfaceRl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

interfaceRl.question("Enter a first number: ",(num1)=>{
    interfaceRl.question("Enter a second number: ",(num2)=>{
        const sum = Number(num1)+Number(num2);
        console.log(sum); 
    })
})
