const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, email, id, officeNumber, title){
        super(name, email, id);
        this.officeNumber = officeNumber;
        this.name = name;
        this.email = email;
        this.id = id;
        this.title = title;
    }
    getName(){
        console.log(this.name);
    };
    getId(){
        console.log(this.id);
    };
    getRole(){
        return 'Manager';
    };
    getEmail(){
        console.log(this.email);
    };
}

module.exports = Manager;