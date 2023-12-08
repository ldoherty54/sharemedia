import { Component } from '@angular/core';
import { WebService } from './web.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'user-form',
    templateUrl: './userdetails.component.html',
    styleUrls: ['./app.component.css'],
  })

  export class UserDetailsComponent {

    currentUser = this.webService.getCurrentUser();
    title = "Users"
    constructor(public webService: WebService, private FormBuild: FormBuilder, private router: Router) {}
    
    ngOnInit() {
        this.webService.getAllUsers();
    }

    userData = this.FormBuild.group({
        editUsername: '',
        editPassword: '',
      });


    editUserSubmit(){
    // Constructing JSON Object for editing user
    const body = {
        'UserGroup': this.currentUser.UserGroup,
        'UserName': this.userData.get('editUsername').value,
        'UserEmail': this.currentUser.UserEmail,
        'UserPassword': this.userData.get('editPassword').value,
        // Json payload expects a string value for the UserID so we must do a conversion
        'UserID' : String(this.currentUser.UserID,)
        }
      this.webService.editUser(this.currentUser.UserID, body);
      console.log("Editng User")
      console.log(body)
    }

}