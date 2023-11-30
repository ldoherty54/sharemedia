  import { Component } from '@angular/core';
  import { WebService } from './web.service';
  import { HttpClient } from '@angular/common/http';
  import { Router } from '@angular/router';
  import { FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';


  @Component({
    selector: 'upload-form',
    templateUrl: './upload.component.html',
    styleUrls: ['./app.component.css'],
  })
  export class UploadComponent {

      currentUser = this.webService.getCurrentUser();
      title = "Upload Media"
      userFile: File = null;
      constructor(public webService: WebService, private FormBuild: FormBuilder, private router: Router) {}
      
      
      fileLoaded(event: any) {
        console.log('Selected File:', event.target.files[0])
        this.userFile = event.target.files[0]
      }

        uploadData = this.FormBuild.group({
          fileTitle: '',
        });

        

      uploadSubmit(){
        const body = new FormData();
        body.append('fileName', this.uploadData.get('fileTitle').value )
        body.append('UserID', this.currentUser.UserID )
        body.append('UserName', this.currentUser.UserName )
        body.append('File', this.userFile);
        console.log('Form Data:', this.uploadData.value);
        this.webService.uploadFile(body);
      }

  }