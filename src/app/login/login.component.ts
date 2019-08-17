import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  is_show_alert = false

  constructor(private _router: Router,
    private http: HttpClient) { }

  ngOnInit() {

  }

  onClickSubmit(data) {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');

    this.http.post('http://127.0.0.1:3000/api/auth', JSON.stringify(data), {
      headers: headers
    })
    .subscribe((data : any) => {
      console.log(data)
      
      if (data.ok == false){
        this.is_show_alert = true
      }else{
        var userInfo = data.data

        sessionStorage.setItem('username', userInfo.username);
        sessionStorage.setItem('birthday', userInfo.birthday);
        sessionStorage.setItem('age', userInfo.age);
        sessionStorage.setItem('email', userInfo.email);
        sessionStorage.setItem('valid', userInfo.valid);
        this._router.navigateByUrl("/account")
      }


    });



 }

}
