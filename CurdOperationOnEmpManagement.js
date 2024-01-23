let Departments = {
    1 :{
        Did : 1,
        name : 'IT',

    },
    2 :{
        Did : 2,
        name : 'HR',
    },
    3 :{
        Did : 3,
        name: 'Engineering',
    }
}
// console.log(Departments[D1])


const Employees = {}
let id = 1

// Add New Employee
const addEmployee = (name, salary, designation, departmentId) =>{
    
    let employee = {
        eId : id,
        eName : name,
        eSalary : salary,
        eDesignation : designation,
        eDepartmentId : Departments[departmentId]
    }
    
    if(Employees[id] === undefined){
        Employees[id] = employee
        console.log(Employees[id].eId)
        msg =  `Employee added ${Employees[id].eId} Successfully`
        id++
    }
    else{
        msg = `Error! Employee already exists`
    }
    return msg
}

console.log(addEmployee("Pratiksha", 100000, "Engineer",3))
console.log(addEmployee("Pruthvi", 100000, "Engineer",2))

// console.log(Employees)


// // Delete the Employee
const deleteEmployee = (Id) =>{
    
    if(Employees[Id]){
        delete Employees[Id];
        msg = `Deleted Successfully`
    }
    else{
        msg = `Id Not Found`
    }
    return msg
}

// console.log(deleteEmployee(1))
// console.log(Employees)

// Edit Employee Details

let property = {
    eName: 'Rahul',
    eDesignation:'Engineer',
    eSalary : 200000
}

const editEmployee = (Id, property) => {
    if(Employees[Id]){
        Employees[Id] = {...Employees[Id],...property}
        msg = `Employee Details Updated Successfully`
    }
    else{
        msg = `Employee Id Not Found`
    }
    return msg
}

console.log(editEmployee(1, property))
console.log(Employees)

// Number Of Employees
const noOfEmployees = () =>{
    let empNo = Object.keys(Employees)
    let NumberOfEmployees = empNo.length
    return NumberOfEmployees
} 

console.log(noOfEmployees())

// Average Salary of Employees
const avgSalary = () =>{
    let sum = 0
    for (let x in Employees){
        sum += Employees[x].eSalary
    }
    console.log(sum)
    let avg = sum/noOfEmployees() 
    return `The average of Employees Salary is ${avg}`

}

console.log(avgSalary())