import {Component, OnInit, Input} from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {MinisterService} from '../services/minister.service';


@Component({
  selector: 'app-minister-view',
  templateUrl: './minister-view.component.html',
  styleUrls: ['./minister-view.component.scss']
})
export class MinisterViewComponent implements OnInit {
  minister;
  @Input() ministerInput;
  @Input() hideResetButton: boolean = false;

  constructor(private route: ActivatedRoute,
              private ministerService: MinisterService) {
  }

  ngOnInit() {
    if (this.ministerInput) {
      this.minister = this.ministerInput;
    } else {
      this.route.params
        .switchMap((params: Params) => this.ministerService.getParticularMinister(params['id']))
        .subscribe(val => {
          console.log('val MIN COMP', val);
          this.minister = val;
        });
    }
  }
}
