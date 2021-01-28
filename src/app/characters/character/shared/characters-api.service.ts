import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  PUBLIC_KEY = 'bc2fa8a6109f5301ff62522dfb7a285f';
  HASH = '0c82bbec386dbc2220ba9f0d99f73e49';
  URL_API = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikeybc2fa8a6109f5301ff62522dfb7a285f&hash=0c82bbec386dbc2220ba9f0d99f73e49'
  constructor(private http: HttpClient) { }


}
