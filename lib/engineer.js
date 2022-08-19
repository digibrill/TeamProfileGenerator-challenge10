class Engineer extends Employee {
    constructor(name, email, gitHub){
        super(name, email, id);
        this.name = name;
        this.gitHub = gitHub;
        this.id = id;
    }
    getName(){};
    getId(){};
    getRole(){
        return 'Engineer';
    };
    getGithub(){};

}