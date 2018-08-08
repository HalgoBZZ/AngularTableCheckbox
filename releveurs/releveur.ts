export class Releveur{
    id:number=null;
    nom:String="";
    prenom:String="";
    tel:number=null;
    email:String="";
    login:String="";
    pwd:String="";

    constructor(id,nom,prenom,tel,email,login,pwd){
        this.id=id;
        this.nom=nom;
        this.prenom=prenom;
        this.tel=tel;
        this.email=email;
        this.login=login;
        this.pwd=pwd;
    }


}