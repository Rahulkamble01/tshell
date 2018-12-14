import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service: AuthService) { }

  ngOnInit() {
  }


  user1: User []=[
    {
      name:"Harsh",
      username:"123456",
      pasword:"123456",
      role:"Admin",
   },
    {
    name:"Rahul",
    username:"12345",
    pasword:"12345",
    role:"Learner"
  }];



}
