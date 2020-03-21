import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';  
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  template:'<app-home [username]="username"></app-home>'
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;
  constructor(    private router:Router
    ) {
 
  }

  ngOnInit(): void {
  }
  

  loginClicked(){
    console.log("you clicked me")
    if(this.username=='admin' && this.password=='admin'){
      this.router.navigate(['home',this.username]);

    }else{
      this.router.navigate(['/error']);
    }

  }

}
