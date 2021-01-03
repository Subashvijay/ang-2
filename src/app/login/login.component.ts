import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';


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
export class LoginDialog {
  loginStart = '';
  closeicon = faWindowClose;
  constructor(
    public dialogRef: MatDialogRef<LoginDialog>,

  ) { }

  close() {

    this.dialogRef.close();
  }

  login() {
    this.loginStart = 'indeterminate';

  }
}
