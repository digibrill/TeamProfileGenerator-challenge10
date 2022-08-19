class Manager extends Employee {
    constructor(name, email, officeNumber){
        super(name, email, id);
        this.officeNumber = officeNumber;
    }
    getName(){};
    getId(){};
    getRole(){
        return 'Manager';
    };
}