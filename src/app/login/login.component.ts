import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faSlash, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { UserDetails, UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  popup() {
    this.dialog.open(LoginDialog, { width: '500px' });
  }
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.html',
})
export class LoginDialog implements OnInit {
  loginStart = '';
  closeicon = faWindowClose;
  constructor(
    public dialogRef: MatDialogRef<LoginDialog>,
    private userService: UserService,

  ) { }
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  ngOnInit(): void {


  }



  close() {

    this.dialogRef.close();
  }
  isloading = false;
  isComplete = false;

  login() {
    this.loginStart = 'indeterminate';
    this.isloading = true;
    setTimeout(() => { this.isloading = false; this.isComplete = true; document.getElementById('suc')?.click(); }, 3000)

    if (this.loginForm.valid) {
      this.userService.islogedin.next(true);
      this.userService.useretails.next(new UserDetails(
        this.loginForm.get('username')?.value,
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      ))
    }

  }
}
