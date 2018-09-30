import { Injectable } from '@angular/core';
import {MINISTERS} from '../models/ministers';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class MinisterService {
  ministers = MINISTERS;
  ministersForConstituency;

  constructor() { }

  getParticularMinister(id){
    return Observable.of(MINISTERS[id]);
  }

  getAllMinister(){
    return Observable.of(MINISTERS);
  }

  getParticularConstituencyMinister(constituency){
    this.ministersForConstituency = [];
      Object.keys(this.ministers).forEach((key) => {
        if(this.ministers[key].constituency === constituency){
          this.ministersForConstituency.push(this.ministers[key]);
        }
    });
    return Observable.of(this.ministersForConstituency);
  }

}
