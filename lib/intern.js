const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, email, id, school, title){
        super(name, email, id);
        this.name = name;
        this.email = email;
        this.id = id;
        this.school = school;
        this.title = title;
    }
    getName(){
        console.log(this.name);
    };
    getId(){
        console.log(this.id);
    };
    getRole(){
        return 'Intern';
    };
    getEmail(){
        return this.email;
    };
    getSchool(){};
    
}
module.exports = Intern;