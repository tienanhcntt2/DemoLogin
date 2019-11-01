import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User[];
  selectedUser:  User  = { id :  null , username: null, password:  null};
  formLogin: FormGroup
  constructor(private router: Router, private form: FormBuilder, private userService : UserService, private aciv: ActivatedRoute) { }

  ngOnInit() {
    this.formLogin = this.form.group({
        username:  ['', Validators.nullValidator],
        password: ['', Validators.required]
    });
  }
  onLogin(data){
    //console.log(data);
    this.userService.loginUser(data).subscribe((user: User)=>{
      this.router.navigate(['/dashboard'],{relativeTo : this.aciv});
      //localStorage.setItem('isLogin', "true");
      localStorage.setItem('token', data.username);
      //this.header.ngOnInit();
    });
  }
  selectUser(user: User){
    this.selectedUser = user;
  }
}
