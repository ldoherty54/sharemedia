import { Component } from '@angular/core';
import { WebService } from './web.service';
import { AzureTranslateService } from './azure-translate.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'media-details',
  templateUrl: './details.component.html',
  styleUrls: ['./media/media.component.css']
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


      uploadData = this.FormBuild.group({
        fileTitle: '',
      });


    editSubmit(filePath: any, fileID: any){
        const body = new FormData();
        body.append('fileName', this.uploadData.get('fileTitle').value )
        body.append('UserID', this.currentUser.UserID )
        body.append('UserName', this.currentUser.UserName )
        body.append('filePath', filePath)
        console.log('Form Data:', this.uploadData.value);
        this.webService.editFile(body, fileID);
      }

}