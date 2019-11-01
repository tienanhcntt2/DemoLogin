import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    console.log("djshdjshds");
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    
  }
  ngAfterview
  Logout(){
    this.userService.Logout();
  }
}
