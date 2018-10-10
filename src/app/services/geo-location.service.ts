import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

import { catchError, tap } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

export interface GeoResponse {
  results?: Array<any>;
  status?: string;

}

@Injectable()
export class GeoLocationService {
  private geoCodingUrl: string = environment.apiEndPoints.geoCoding;
  private apiKey: string = environment.apiKey;


  constructor(private http: HttpClient) { }

  getCurrentLocationLongLat(address, region): Observable<GeoResponse>{
    const url = `${this.geoCodingUrl}?address=${address}&?region=${region}?key=${this.apiKey}`
    return this.http.get(url).pipe(
      tap(location => {
        return location;
      })
    );
  }

  getCombinedConstituencyAndState(constituencySelected, provinceSelected){
    return constituencySelected + ',' + provinceSelected;
  }

}
