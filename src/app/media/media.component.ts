import { Component } from '@angular/core';
import { WebService } from '../web.service';
import { AzureTranslateService } from '../azure-translate.service';

@Component({
  selector: 'media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
    allMedia: any;
    translated: any

    constructor(public webService: WebService, private azureTranslate: AzureTranslateService) {}

    ngOnInit() {
        this.webService.getMedia();
    }

}