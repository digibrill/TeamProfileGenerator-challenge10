class Intern extends Employee {
    constructor(name, email, id){
        super(name, email, id);
        this.name = name;
        this.email = email;
        this.id = id;
    }
    getName(){};
    getId(){};
    getRole(){
        return 'Intern';
    };
    getSchool(){};
}