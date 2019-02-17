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

var newdata =   [ "10001","d005","1986-06-26","9999-01-01",  
                "10002","d007","1996-08-03","9999-01-01", 
                "10003","d004","1995-12-03","9999-01-01", 
                "10004","d004","1986-12-01","9999-01-01", 
                "10005","d003","1989-09-12","9999-01-01", 
                "10006","d005","1990-08-05","9999-01-01", 
                "10007","d008","1989-02-10","9999-01-01", 
                "10008","d005","1998-03-11","2000-07-31", 
                "10009","d006","1985-02-18","9999-01-01", 
                "10010","d004","1996-11-24","2000-06-26" ]
                
newdata.pop([2])
console.log(newdata)
var arrays = [];

for (var i = 0; i < newdata.length; i++){
    if(i === "d005"){
        arrays.concat(newdata)
        console.log(arrays)
    }
}

 console.log(arrays)
//  for (var i = 0; i < 10;  i++){
//      var len = textByLine[i
//     console.log(len)
// }

// var open = []
// for(var j = 0; j < len[i].length; j++) {
//   var add = open.concat(len[i])
//   console.log(add)
// }
    
 

   
//  console.log(textByLine)
 

    

// fs.readFile("load_employee.txt", "utf-8", function(err,data){
//     if (err) throw err;
//     var array = data.split("\n")
//     console.log(data)
    
    
// })

// })


