import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService) {

  }
  isloged = false;
  username = this.userService.useretails.value.name;

  ngOnInit(): void {
    this.userService.islogedin.subscribe(v => this.isloged = v)
    this.userService.useretails.subscribe(v => this.username = v.name)
  }

  //this.userService.
  // title = 'new-project';
  // username = this.userService.useretails.value.name;
}
