class Employee {
    constructor(name, email, id){
        this.name = name;
        this.email = email;
        this.id = id;
    }
    getName(){};
    getId(){};
    getRole(){
        return 'Employee';
    };
    getEmail(){};
}
module.exports = Employee;