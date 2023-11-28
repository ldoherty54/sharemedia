import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['../styles.css'],
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