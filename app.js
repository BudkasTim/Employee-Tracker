const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var employees=[];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function createTeam(){
inquirer
  .prompt([
    {
        type: "list",
        message: "What is the title of the employee ?",
        name: "employeeTitle",
        choices:["Manager","Engineer","Intern"]
      },
    {
      type: "input",
      message: "Please enter name",
      name: "name"
    },
    {
        type: "input",
        message: "Please enter employee id. ",
        name: "id"
    },
    {
        type: "input",
        message: "Please enter office number",
        name: "officeNumber"
    },
    {
        type: "input",
        message: "Please email address",
        name: "email"
    }
  ])
  .then(function(response) {
    // manager hiring
    if (response.employeeTitle === "Manager") {
        let addManager =new Manager(response.name, response.id, response.email, response.officeNumber);
        employees.push(addManager);
        renderEmployee();
        console.log("Success!");
    }
    //engineer hiring
    else if (response.employeeTitle === "Engineer") {
        inquirer
            .prompt([
                {   
                    type: "input",
                    message: "Please enter GitHub user name.",
                    name: "github"
                },])
            .then( function(response){
            let addEngineer =new Engineer(response.name, response.id, response.email, response.github);
            employees.push(addEngineer);
            renderEmployee();
            console.log("You just hired an Engineer");
            
        });
    } else if (response.employeeTitle === "Intern") {
        inquirer
            .prompt([
                {   
                    type: "input",
                    message: "What school do you attend.",
                    name: "school"
                },])
            .then( function(response){
            let addIntern =new Intern(response.name, response.id, response.email, response.school);
            employees.push(addIntern);
            renderEmployee();
            console.log(" Maybe future an Engineer?");
            
        });
    }

  });
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
//
createTeam();
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
function renderEmployee(){
       fs.writeFileSync(outputPath,render(employees),'utf-8');
}
renderEmployee();
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
