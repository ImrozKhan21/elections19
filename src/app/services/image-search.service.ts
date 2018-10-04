import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ImageSearchService {
  private query: string;
  private API_KEY: string = environment.apiKey;
  private API_URL: string = environment.apiEndPoints.googleSearch;
  private cx = environment.apiEndPoints.cxCode;
  private URL: string = this.API_URL + this.API_KEY + '&cx=' + this.cx + '&q=';
  private check = 'https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146&q=lectures';
  constructor(private _http: HttpClient){ }
  getImage(query){
    return this._http.get(this.URL + query + '&searchType=image')
      .map(res => res);
  }
}
