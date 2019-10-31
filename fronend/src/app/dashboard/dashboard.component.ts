import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:  User[];
  selectedUser:  User  = { id :  null , username: null, password:  null};
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe((user: User[])=>{
      this.user = user;
      //console.log(this.user);
    })
  }
  createOrUpdateUser(form){
    if(this.selectedUser && this.selectedUser.id){
      form.value.id = this.selectedUser.id;
      this.userService.updateUser(form.value).subscribe((user: User)=>{
        console.log("User updated" , user);
      });
    }else{
      //console.log(form.value);
       this.userService.createUser(form.value).subscribe((user: User)=>{
        //console.log(user);
        //console.log("User created, ", user);
      });
    }
  }
  selectUser(user: User){
    this.selectedUser = user;
  }
  deleteUser(id){
    this.userService.deleteUser(id).subscribe((user: User)=>{
      console.log("Policy deleted, ", user);
    });
  }
}
