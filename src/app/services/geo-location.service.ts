import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

import { catchError, tap } from 'rxjs/operators';


@Injectable()
export class GeoLocationService {
  private geoCodingUrl: string = environment.apiEndPoints.geoCoding;
  private apiKey: string = environment.apiKey;


  constructor(private http: HttpClient) { }

  getCurrentLocationLongLat(address, region){
    const url = `${this.geoCodingUrl}?address=${address}&?region=${region}?key=${this.apiKey}`
    console.log('URL', url)
    return this.http.get(url).pipe(
      tap(location => {
      })
    );
  }

  getCombinedConstituencyAndState(constituencySelected, provinceSelected){
    return constituencySelected + ',' + provinceSelected;
  }

}
