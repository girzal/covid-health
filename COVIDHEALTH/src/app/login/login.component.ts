import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';  
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { LoginserviceService } from '../service/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  template:'<app-home [username]="username"></app-home>'
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;
  invalidLogin=false;
  constructor( 
    private router:Router,
     private loginservice:LoginserviceService
    ) {
 
  }
  ngOnInit(): void {
  }
  
  loginCheckClicked(){
if (this.loginservice.authenticate(this.username,this.password))
{
  console.log("you clicked me")
  this.router.navigate(['/home']);
this.invalidLogin=false;
  
}
   

    else{
      this.router.navigate(['/error']);
      this.invalidLogin=true;
    }

  }

}
