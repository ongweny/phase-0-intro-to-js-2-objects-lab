// Write your solution in this file!

const employee = {
    name: "Pam",
    streetAddress: "123 sessame street"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const employeeupdate = {...employee};
    employeeupdate[key] = value;
    return employeeupdate;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const deleteemployee = {...employee};
    delete deleteemployee[key];
    return deleteemployee;
}
function  destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
}