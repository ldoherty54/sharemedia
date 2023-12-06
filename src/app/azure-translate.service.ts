import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Azure Translation Service that takes a word as input and translates it to French
export class AzureTranslateService {

  KEY = "ab21079839234db8a5b558cc1694951d"
  ENDPOINT = "https://api.cognitive.microsofttranslator.com/"
  REGION = "eastus"


  constructor(private http: HttpClient) {}

  translateText(text: any, language: any): Observable<any> {
    const path = '/translate';
    const constructedUrl = this.ENDPOINT + path;

    const params = {
      'api-version': '3.0',
      'from': 'en',
      'to': language
    };

    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': this.KEY,
      'Ocp-Apim-Subscription-Region': this.REGION,
      'Content-type': 'application/json'
    });

    const body = [{ 'text': text }];

    return this.http.post(constructedUrl, body, { params, headers });
  }
}

