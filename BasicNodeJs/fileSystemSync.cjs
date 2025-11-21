const fs = require('fs');

//To read file content using blocking code..
//1. Read file
console.log('Starting to read')

const buffer= fs.readFileSync('data.txt',{encoding: 'utf8'} );
console.log(buffer);



//2. Creating and writing a file.

try{
    fs.writeFileSync('employee.txt', 'Name:David Doe, Age:55')

}catch(err){
    console.log(err)
}

// Append another employee data
fs.appendFileSync('employee.txt'," Position:COO")

//Delete a file

try{
    fs.unlinkSync('employee.txt')
}catch(err){
    console.log("File doesn't exit")
}

console.log('This is another operation being performed')