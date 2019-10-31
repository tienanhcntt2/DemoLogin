import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

import { User } from  '../model/user';
import { Observable, empty } from  'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private router: Router) { }
  PHP_API_SERVER = "http://127.0.0.1/angular-php-app/backend";

  getAll(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }
  createUser(user: User): Observable<User>{
    return this.httpClient.post<User>(`${this.PHP_API_SERVER}/api/create.php`, user);
  }
  updateUser(user: User){
    //console.log(user);
    return this.httpClient.put<User>(`${this.PHP_API_SERVER}/api/update.php`, user); 
  }
  deleteUser(id: number){
    return this.httpClient.delete<User>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }
  loginUser(user: User){
    //console.log(user);
    return this.httpClient.post<User>(`${this.PHP_API_SERVER}/api/login.php`, user);
  }
  requiredLogin(){
    if(!localStorage.getItem('token')){
      this.router.navigate(['/login']);
    }
  }
  Logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}