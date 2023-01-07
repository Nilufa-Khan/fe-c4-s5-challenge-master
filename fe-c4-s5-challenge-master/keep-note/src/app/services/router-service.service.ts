import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterServiceService {

  constructor(private routerService:Router) { }

  toHome() {
    this.routerService.navigate([""]);
  }
  toDashBoard(){
    this.routerService.navigate(["dashBoard"])
  }

}
