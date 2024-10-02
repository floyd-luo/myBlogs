class Singleton{
    constructor(name) {
        if(!Singleton.instance){
            this.name = name;
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}
let appleCompany = new Singleton('苹果公司');
let IBMCompany = new Singleton('IBM公司');

console.log(appleCompany === IBMCompany);  //true