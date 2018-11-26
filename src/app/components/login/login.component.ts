import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;
  username: String;
  pass: String;
  constructor(private auth: LoginService) { }

  ngOnInit() {
  }
  onLoginSubmit() {

    const user = 'email=' + this.email + '&' + 'password=' + this.password;

    const cred = "processVariables=" + JSON.stringify({
      "processId": "624edb18571b11e79d0a0050569cb68c",
      "ProcessVariables": {
        "username": "admin@sastratechnologies.in",
        "password": "ec4b90b5ab6a3c6d1e3ce12d07f8eda74b012ff4a2f575ab02567650647df880",
      },
      "projectId": "ee9503dc9c4d11e7a78b0e1da0678571"
    });


    this.auth.authenticateUser(user).subscribe(data => {
      if (data) {

        this.auth.storeUserData(data.token);
        console.log('hiti');
        this.auth.getuser(cred).subscribe(res => {
          if (res) {
            console.log(res);
          } else {
            console.log('error');
          }
        });
      } else {
        console.log("some error");
      }
    });
  }


}









