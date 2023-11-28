import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WebService]
})
export class LoginComponent {
  title = 'Login';

  loginData = {
    username: '',
    password: '',
  };

  constructor(public webService: WebService) {}

  loginSubmit(){
    
  }
  
}