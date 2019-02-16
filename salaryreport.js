const fs = require("fs");
const bodyparser = require("body-parser")


// fs.readFile("load_salaries1.txt", "utf-8", function(err,data){
//     if (err) throw err;
//     var array = data.split("\n")
//     console.log(data)
    


var text = fs.readFileSync("load_dept_emp.txt", "utf8")
var textByLine = text.split("\n")
//  console.log(textByLine)
 
 
 
 for (var i = 0; i < 10;  i++){
     var len = textByLine[i]
     console.log(len)
 }
     for(var j = 0; j < textByLine[i]; j++){
         console.log(len[j+1])
         
     }
    
 

   
//  console.log(textByLine)
 

    

// fs.readFile("load_employee.txt", "utf-8", function(err,data){
//     if (err) throw err;
//     var array = data.split("\n")
//     console.log(data)
    
    
// })

// })


