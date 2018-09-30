import { Component, OnInit } from '@angular/core';
import {MinisterService} from '../services/minister.service';
import { Params, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-ministers-view',
  templateUrl: './ministers-view.component.html',
  styleUrls: ['./ministers-view.component.scss']
})
export class MinistersViewComponent implements OnInit {
  ministers = [];

  constructor(private route: ActivatedRoute,
              private ministerService: MinisterService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        return this.ministerService.getParticularConstituencyMinister(params['id']);
      }).subscribe(val => {
        this.ministers = val;
      })
  }

}
