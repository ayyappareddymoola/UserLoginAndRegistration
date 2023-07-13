import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent {

  loginSuccess:boolean=false;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  isLogInSuccuss(){
    
  }

}
