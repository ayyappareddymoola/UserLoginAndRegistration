import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName:string='';
  password:string='';
  user:User=new User();

  onLogin(){
    this.isExist();
  }

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  isExist(){
   this.userService.isLogInSuccess(this.userName,this.password).subscribe((data)=>
   {
    if(data){
      this.router.navigate(['/login-success']);
      console.log(data)
    }
    else{
      this.router.navigate(['/login-fail'])
    }
  }
   ,error => console.log(error));
  }



}
