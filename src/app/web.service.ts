import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WebService {
    allMedia: any
    currentUser: any

    constructor(private http: HttpClient) {}


    ///// Blob storage Logic Apps

    // RAI Retrieve All Images
    getMedia(){
        return this.http.get(
            'https://prod-77.eastus.logic.azure.com/workflows/ebdcd6b2a8084b2a94bff224a576f0b7/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=x8bblkFV3XNY9mYkW2rlTVPTdRzXHMAVX-y2HARfwVs')
            .subscribe((response: any) => {this.allMedia = response;
            console.log(response)
        })
    }

    // RII Retrieve Individual Image
    getImage(id : any){
        return this.http.get(
        `https://prod-41.eastus.logic.azure.com/workflows/400951dbf4b840a1938c32891a7b2b6a/triggers/manual/paths/invoke/rest/v1/images/${id}?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=BsxQckR0Z5Tzd8XIM82qO4D3ayMidc8VH7XZnUBkNdQ`
        )
    }

    // DII Delete Individual Image
    deleteMedia(id: string){
        return this.http.delete(
            `https://prod-17.eastus.logic.azure.com/workflows/a79d4671708343e384d6b35934a4c19a/triggers/manual/paths/invoke/rest/v1/assets/${id}?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=2dZhEHGCCvViEZ3e_3W_NV7drX1HP6VYLeB6IikkGaI`
        ).subscribe((response:any) => {this.getMedia();
        console.log(response)})
    }


    ///// SQL Database Logic Apps & Functions

    registerUser(body: any){
        return this.http.post(
            `https://prod-05.eastus.logic.azure.com/workflows/af651ccb5f714dd0bba75aa5f2e8d49e/triggers/manual/paths/invoke/rest/v1/assets?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=H2IS6Eee-5KQ68ouS2upm379pwrFiknNhFPuaEgp63Q`,
            body
        )
    }

    // Azure Function that takes Username and Password as inputs and outputs the user details from the SQL Database
    getUser(UserName: string, Password: string): Observable<any>{
        console.log(`Attempting to retrieve user: ${UserName}`)
        return this.http.get(
            `https://b00783009gu.azurewebsites.net/api/LoginCreds?username=${UserName}&password=${Password}`
        )
    }

    uploadFile(body: any){
        console.log('Attempting Upload...')
        return this.http.post(
            `https://prod-10.eastus.logic.azure.com:443/workflows/70a7f16e4b3449b9b888f8cc05196842/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=bZGhy6Hb4ceqah40hvAnapHSbsgMM8-LbuCjoNZdLwE`,
            body
        ).subscribe((response:any) => {
            console.log(response)
        })
    }

    setCurrentUser(user: any){
        this.currentUser = user;
    }

    getCurrentUser(){
        return this.currentUser
    }
}