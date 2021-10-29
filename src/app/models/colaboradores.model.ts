export class Colaboradores {

    idemployee!:number;
    paternal!:string;
    maternal!:string;
    names!:string;
    login!:string;
    pass!:string;
    weekly_hours!:number;
    extra_hours!:number;
    extra_minutes!:number;
    gender!:string;
    dni!:number;
    mobile!:string;
    


    //constructor  

    constructor ( paternal:string,maternal:string,names:string,weekly_hours:number,dni:number,mobile:string)
    {
        this.paternal=paternal;
        this.maternal=maternal;
        this.names=names;
        this.weekly_hours=weekly_hours;
        this.dni = dni;
        this.mobile=mobile;
        
        this.idemployee=0;    
        this.login="";
        this.pass="";        
        this.extra_hours=0;
        this.extra_minutes=0;       
        this.gender="F";
        this.mobile="";
    }  

  

}
