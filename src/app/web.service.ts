import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
    allMedia: any
    constructor(private http: HttpClient) {}

    getMedia(){
        return this.http.get(
            'https://prod-77.eastus.logic.azure.com/workflows/ebdcd6b2a8084b2a94bff224a576f0b7/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=x8bblkFV3XNY9mYkW2rlTVPTdRzXHMAVX-y2HARfwVs')
            .subscribe((response: any) => {this.allMedia = response;
            console.log(response)
        })
    }

    deleteMedia(id: string){
        return this.http.delete(
            `https://prod-17.eastus.logic.azure.com/workflows/a79d4671708343e384d6b35934a4c19a/triggers/manual/paths/invoke/rest/v1/assets/${id}?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=2dZhEHGCCvViEZ3e_3W_NV7drX1HP6VYLeB6IikkGaI`
        ).subscribe((response:any) => {this.getMedia();
        console.log(response)})
    }
}