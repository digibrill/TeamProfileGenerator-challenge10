const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, email, id, gitHub){
        super(name, email, id);
        this.gitHub = gitHub;
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