// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require ("./Employee");

class Manager extends Employee{
    constructor (name, id, email, title, officeNumber){
        super(name, id, email,title);
        this.officeNumber = officeNumber;
    }
    // getName(){
    //     return this.name;
    // }
    // getId(){
    //     return this.id;
    // }
    // getEmail(){
    //     return this.email;
    // }
    // getTitle(){
    //     return this.title;
    // }
    getofficeNumber(){
        return this.officeNumber;
    }

}
module.exports=Manager;