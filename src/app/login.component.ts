import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebService } from './web.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./media/media.component.css'],
})
export class LoginComponent {
  title = 'Login';
  constructor(public webService: WebService, private FormBuild: FormBuilder, private http: HttpClient, private router: Router) {}
  currentUser: any;


  // Retrieving form data from the login and registration forms
  userLogin = this.FormBuild.group({
    loginUsername: '',
    loginPassword: ''
  });

  userReg = this.FormBuild.group({
    regUserGroup: '',
    regUsername: '',
    regEmail: '',
    regPassword: '',
  })

  registerSubmit(){

    // Constructing JSON Object of new user
    const body = {
    'UserGroup': this.userReg.get('regUserGroup').value,
    'UserName': this.userReg.get('regUsername').value,
    'UserEmail': this.userReg.get('regEmail').value,
    'UserPassword': this.userReg.get('regPassword').value
    }

    this.webService.registerUser(body).subscribe((response:any) => {
    if (response) {
      this.webService.setCurrentUser(response);
      this.router.navigate(['/media']);
    } else {
      console.log('Login failed');
    }
  })  
}

  // The azure function takes the login username and password as URL parameters so no need to build a body to send here
  loginSubmit(){
    const username = this.userLogin.get('loginUsername').value;
    const password = this.userLogin.get('loginPassword').value;
    this.webService.getUser(username, password).subscribe((response:any) => {
      if (response) {
        this.webService.setCurrentUser(response[0]);
        this.router.navigate(['/media']);
      } else {
        console.log('Login failed');
      }
    })  
  }
  
}