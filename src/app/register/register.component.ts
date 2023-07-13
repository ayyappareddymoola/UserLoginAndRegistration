import { Component } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  user: User = new User();
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.registerUser(this.user).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
  }
  
  onSubmit(){
    this.saveUser();
    // console.log(this.user);
  }

}
