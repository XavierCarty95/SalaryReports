const fs = require("fs");
const bodyparser = require("body-parser")


// fs.readFile("load_salaries1.txt", "utf-8", function(err,data){
//     if (err) throw err;
//     var array = data.split("\n")
//     console.log(data)
    


var text = fs.readFileSync("load_dept_emp.txt", "utf8")
var open = ""
var textByLine = text.split("\n")
for (var i =0; i < 10; i++){
    open += "[" +textByLine[i]+  " ] " + "\n"
    
}
console.log(open)

var text2 = fs.readFileSync("load_salaries1.txt", "utf8")
var data2 = text2.split('\n')
// console.log(data2)
var open2 = ""
for(var i = 0; i < 120; i++){
    open2 += "[" + data2[i]+  " ] " + "\n"
}
console.log(open2)

var text3 = fs.readFileSync("load_employee.txt", "utf8")
var data3 = text3.split('\n')

var open3 = ""
for(var i = 0; i < 10; i++){
    open3 += "[" + data3[i]+  " ] " + "\n"
    
}

console.log(open3)