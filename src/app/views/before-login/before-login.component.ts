import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,NavigationEnd } from '@angular/router';
// import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-before-login',
  templateUrl: './before-login.component.html',
  styleUrls: ['./before-login.component.sass']
})
export class BeforeLoginComponent implements OnInit {

  constructor(private router: Router) { }
  // password = '';
  showUser = false
  showPassword = false

  toggleUser() {
    this.showUser = !this.showUser
  }
  togglePassword() {
    this.showPassword = !this.showPassword
  }

  loginForm:FormGroup = new FormGroup({
    id: new FormControl('',[
      Validators.required,
    ]),
    user: new FormControl('',[
      Validators.required,
      Validators.minLength(10)
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(10)
    ])
  })


  get id() {
    return this.loginForm.get('id');
  }
  get user() {
    return this.loginForm.get('user');
  }
  get password() {
    return this.loginForm.get('password');
  }
  onSubmit() :void{
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid);
    this.router.navigate(['deposit']);
    // this.loginForm.reset();
  }
  ngOnInit(): void {
  }

}
