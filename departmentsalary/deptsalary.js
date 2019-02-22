var fs = require('fs');

// Step 1 Create all single-d and multi-d arrays AS empty arrays (initially) 
    // push single string dat/elements into array as a single element 
    // push array data into an array to form muilt-d arrays 
    
// single-d arrays 
var departmentId = [];
var departments = [];

// multi -d arrays -- currently invalid
var employeeId = [[], [], [],];
var employeeName = [[], [], [],];
var salaries = [];
    
// Process 'load_dept_name.txt' file

fs.readFile( 'load_dept_names.txt', 'utf8', function(err,data){
    if (err) throw err
    var deptDataClean = data.replace(/INSERT INTO `departments` VALUES \n/g, "")
    var deptDataArray = deptDataClean.split('\n')
    for (var i = 0; i < deptDataArray.length; i++){
        
        //populate single-d arrays with DATA
        departmentId.push(deptDataArray[i].slice(2,6));
        departments.push(deptDataArray[i].slice(9,-3));
        
        // populate multi-d arrays with empty sub-arrays (NO DATA!!!)
        employeeId.push([]);
        employeeName.push([])
        salaries.push([]);
    }
      
         console.log(departmentId)
         console.log(departments)
    
})

