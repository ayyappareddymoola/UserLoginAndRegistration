export class User {
    id?:number;
  userName?:string;
  password?:string;
  emailId?:string;
  constructor(id?:number,userName?:string,password?:string,emailId?:string){
    this.id=id;
    this.userName=userName;
    this.password=password;
    this.emailId=emailId;
  }

}
