import { Component } from '@angular/core';
import { WebService } from './web.service';
import { AzureTranslateService } from './azure-translate.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'media-details',
  templateUrl: './details.component.html',
  styleUrls: ['/details.component.css']
})
export class DetailsComponent {
    Media: any;
    translated: any
    userFile: File = null;
    currentUser = this.webService.getCurrentUser();

    constructor(public webService: WebService, private azureTranslate: AzureTranslateService, private route: ActivatedRoute, private FormBuild: FormBuilder, private reactForm: ReactiveFormsModule) {}

    ngOnInit(){
        const mediaID = this.route.snapshot.params['id']
        this.webService.getImage(mediaID).subscribe(
          ((response: any) => {
              this.Media = response;
              console.log(response)
          })
        )
    }

    translateToFrench(text: any){
      const language = "fr";
      this.translated = this.azureTranslate.translateText(text, language)
    }


    fileLoaded(event: any) {
        console.log('Selected File:', event.target.files[0])
        this.userFile = event.target.files[0]
      }

      uploadData = this.FormBuild.group({
        fileTitle: '',
      });


    editSubmit(){
        const body = new FormData();
        body.append('fileName', this.uploadData.get('fileTitle').value )
        body.append('UserID', this.currentUser.UserID )
        body.append('UserName', this.currentUser.UserName )
        body.append('File', this.userFile);
        console.log('Form Data:', this.uploadData.value);
        this.webService.uploadFile(body);
      }

}