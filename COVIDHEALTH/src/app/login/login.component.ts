import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';  
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(    private router:Router
    ) {
  }

  ngOnInit(): void {
  }
username:String;
password:String;
  loginClicked(){
    console.log("you clicked me")
    console.log(this.username)
    console.log(this.password)
    if(this.username=='admin' && this.password=='admin'){

      this.router.navigate(['/home']);

    }else{
      this.router.navigate(['/error']);

    
    }

  }

}
