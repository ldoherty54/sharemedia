import { Component } from '@angular/core';
import { WebService } from '../web.service';
@Component({
  selector: 'media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
    allMedia: any;

    constructor(public webService: WebService) {}

    ngOnInit() {
        this.webService.getMedia();
    }
}