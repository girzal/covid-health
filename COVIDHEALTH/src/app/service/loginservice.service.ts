import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor() { }
  authenticate(username,password){

    

    
      if (username === "admin" && password === "admin") {
        sessionStorage.setItem('username', username)
        return true;
      } else {
        return false;
      }
    }
    logout(){
      sessionStorage.removeItem('username')
    }
    isUserLoggedIn(){
      let user=sessionStorage.getItem('username')
      console.log(!(user === null))
      return !(user === null)
    }


    


  }

