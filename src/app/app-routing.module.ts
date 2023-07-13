import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { LoginFailComponent } from './login-fail/login-fail.component';
import { AppComponent } from './app.component';

const routes: Routes = [{path: 'login', component: LoginComponent},
{path: 'register-user', component: RegisterComponent},
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login-success',component:LoginSuccessComponent},
{path:'login-fail',component:LoginFailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }