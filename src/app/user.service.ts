import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  islogedin = new BehaviorSubject<boolean>(false);
  username = new BehaviorSubject<string>('');
  useretails = new BehaviorSubject<UserDetails>(new UserDetails('', '', ''));
  login(name: string, mailId: string, password: string) {
    this.useretails.next(new UserDetails(name, mailId, password))
  }
}

export class UserDetails {

  constructor(name: string, mailId: string, password: string) {
    this.name = name;
    this.mailId = mailId;
    this.password = password;
  }
  name = '';
  mailId = '';
  password = '';

}
