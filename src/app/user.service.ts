import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor() { }

  private baseUrl='http://localhost:8080/';

  constructor(private httpClient:HttpClient) { }
  
  registerUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`+"register", user);
  }

  getUser(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }

  isLogInSuccess(userName:string,password:string):Observable<User>{
   
    return this.httpClient.get<User>(`http://localhost:8080/validateUser?userName=${userName}&password=${password}`);
  }
}
