const inquirer = require("inquirer")
const mysql = require('mysql2')
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'classlist_db'
    },
    console.log(`Connected to the classlist_db database.`)
  );

async function mainMenu() {
    var answers = await inquirer.prompt([
        {
            type: "list",
            name: "userAction",
            message: "What do you wanna do?",
            choices: ["option A", "option B", "Add a Department"]
        }
    ])
    console.log(answers)
    if(answers.userAction == "Option A"){
        viewAllDepartments()
    } else if (answers.userAction == "Option B"){
        console.log("selected option B")
    } else if(answers.userAction == "Add a Department") {
        addDepartment()
    }

}

async function viewAllDepartments(){
    const [rows, fields] = await db.promise().query("Select * From department")
    
    //HERE I WILL SHOW THE DEPARTMENT DATA
    //HERE I WILL USE MYSQL
    //WHEN I AM DONE I CAN CALL mainMenu()
}

async function addDepartment(){
    var departmentAnswers = await inquirer.prompt([{
        type: "input",
        name: "department_name",
        message: "What's the department name?"
    }])
    console.log(departmentAnswers)
}

mainMenu()
