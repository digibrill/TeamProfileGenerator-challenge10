const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, email, id, gitHub, title){
        super(name, email, id);
        this.gitHub = gitHub;
        this.title = title;
        this.name = name;
        this.id = id;
    }
    getName(){
        console.log(this.name);
    };
    getId(){
        console.log(this.id);
    };
    getRole(){
        return 'Engineer';
    };
    getEmail(){
        console.log(this.email);
    };
    getGithub(){};
}
module.exports = Engineer;