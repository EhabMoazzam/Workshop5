import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  username = ""
  birthday = ""
  age = ""
  email = ""
  valid = ""
  is_show = false

  constructor(private _router: Router) { }

  ngOnInit() {
    let username = sessionStorage.getItem('username');
    let birthday = sessionStorage.getItem('birthday');
    let age = sessionStorage.getItem('age');
    let email = sessionStorage.getItem('email');
    let valid = sessionStorage.getItem('valid');

    if (username != undefined){
      this.username = username
      this.birthday = birthday
      this.age = age
      this.email = email
      this.valid = valid
      this.is_show = true
    }else{
      this._router.navigateByUrl("/login")
    }
  }

}
