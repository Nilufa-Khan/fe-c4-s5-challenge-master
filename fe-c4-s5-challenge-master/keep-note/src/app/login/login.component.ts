import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { RouterServiceService } from '../services/router-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthServiceService,private routerService:RouterServiceService) { }
  noteCode = ''

  ngOnInit(): void {
  }

  validateVendorCode() {
  
      if(this.authService.login(this.noteCode)){
        this.routerService.toDashBoard()
      }
  }

}
