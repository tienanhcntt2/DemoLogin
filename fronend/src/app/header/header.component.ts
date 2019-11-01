import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
<<<<<<< HEAD
export class HeaderComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    console.log("djshdjshds");
  }

=======
export class HeaderComponent implements OnInit {
 checkLogin : boolean = false;
>>>>>>> b176bd3fa4b4b996654195f34d329a05a18c4685
  constructor(private userService: UserService) { }

  ngOnInit() {
    
  }
  ngAfterview
  Logout(){
    this.userService.Logout();
  }
}
