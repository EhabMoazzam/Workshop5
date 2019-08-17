import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username = ""
  birthday = ""
  age = ""
  email = ""
  valid = ""
  is_show = false
  is_edit = false

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

  edit(){
    this.is_edit = true
  }

  submit(data){

    console.log(data)

    this.is_edit = false

    sessionStorage.setItem('username', data.username);
    sessionStorage.setItem('birthday', data.birthday);
    sessionStorage.setItem('age', data.age);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('valid', data.valid);

    location.reload()
  }

}
