import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  isLoggedIn:Boolean = false;

  login(noteCode:string){
    this.isLoggedIn = noteCode === "12345"
    return this.isLoggedIn
    
  }
  logout(){
     this.isLoggedIn = false;
  }
}
