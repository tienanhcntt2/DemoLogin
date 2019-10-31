import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from  '../model/user';
import { Observable } from  'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
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
}