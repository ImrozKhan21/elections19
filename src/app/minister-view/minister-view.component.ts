import {Component, OnInit, Input} from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {MinisterService} from '../services/minister.service';
import {Minister} from '../models/ministers';
import {ImageSearchService} from '../services/image-search.service';


@Component({
  selector: 'app-minister-view',
  templateUrl: './minister-view.component.html',
  styleUrls: ['./minister-view.component.scss']
})
export class MinisterViewComponent implements OnInit {
  minister: Minister;
  @Input() ministerInput: Minister;
  @Input() hideResetButton: boolean = false;
  searching: boolean;
  image;

  constructor(private route: ActivatedRoute,
              private ministerService: MinisterService,
              private _imageService : ImageSearchService) {
  }

  ngOnInit() {
    if (this.ministerInput) {
      this.minister = this.ministerInput;
    } else {
      this.route.params
        .switchMap((params: Params) => this.ministerService.getParticularMinister(params['id']))
        .subscribe(val => {
          this.minister = val;
          this.searchImages(val.name);
        });
    }
  }

  searchImages(query: string){
    this.searching = true;
    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
    );
  }
  handleSuccess(data){
    if(data.items && data.items[0]){
      this.image = data.items[0].link;
    }
    console.log(data, data.items[0].link);
  }
  handleError(error){
    console.log(error);
  }
}
