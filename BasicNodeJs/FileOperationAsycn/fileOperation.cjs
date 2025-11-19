const fs  = require('fs');

// Reading data
fs. readFile('data.txt', (err,data)=>{
    if(err){
        console.log(err)
    }else{
      console.log(data.toString());  
    }
})

// Write data

fs.writeFile('employee.txt',"New Employee", (err)=>{
if(err){
    console.log(err)
}else{
    console.log("File is written")
}
})

//append File
fs.appendFile('employee.txt','\nAnother Employee', (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("File is updated")
    }
})

// delete File

fs.unlink('employee.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File deleted Succesfully")
    }
})
console.log('This is another operation');