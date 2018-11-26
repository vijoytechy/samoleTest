import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: any;
  authToken: any;
  cred: any;
  constructor(private http: Http) { }

  url = "http://139.59.35.249/appiyo/account/login";
  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');
    return this.http.post(this.url, user, { headers: headers })
      .pipe(map(res => res.json()));
  }
  storeUserData(token) {
    localStorage.setItem('authentication-token', token);
    this.authToken = token;

  }
  loadToken() {
    const token = localStorage.getItem('authentication-token');
    return this.authToken = token;
  }
  api = "http://139.59.35.249/appiyo/ProcessStore/d/workflows/624edb18571b11e79d0a0050569cb68c/execute?projectId=ee9503dc9c4d11e7a78b0e1da0678571";
  getuser(cred) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('authentication-token', this.loadToken());
    return this.http.put(this.api, cred, { headers: headers })
      .pipe(map(res => res.json()));
    console.log(this.loadToken());
  }
}
