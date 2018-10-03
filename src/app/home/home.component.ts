import {Component, OnInit, ViewChild} from '@angular/core';
import {STATES} from '../models/app.constants';
import {FormBuilder, FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import {CONSTITUENCIES, Constituency} from '../models/constituencies';
import { Store } from '@ngrx/store';
import {HomeState, AppData} from '../models/app.constants';
import * as HomeActions from './../actions/home.actions';
import { } from '@types/googlemaps';

import {GeoLocationService} from '../services/geo-location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public states = STATES;
  public profileForm: FormGroup;
  public stateControl: AbstractControl;
  public constituencyControl: AbstractControl;
  public ministerControl: AbstractControl;
  public constituencies = CONSTITUENCIES;
  public stateConstituencies: Array<Constituency>;
  public ministers;
  public ministerSelected: string;
  public constituencySelected;
  public provinceSelected: string;
  public title = 'My first AGM project';
  public latitude;
  public longitude;
@ViewChild('googleMap') gmapElement: any;
  map: google.maps.Map;
  private homeState;
  private initialState?: AppData;
  private noop = () => {};

  constructor(private fb: FormBuilder, private store: Store<HomeState>, private geoLocationService: GeoLocationService) {
    this.homeState = store.select('homeState');
    this.homeState.subscribe(val => {
      this.initialState = val;
    });
  }
  setInitialValues() {
    this.stateControl.setValue(this.initialState.provinceState);
    this.constituencyControl.setValue(this.initialState.constituencyState);
    this.ministerControl.setValue(this.initialState.ministerState);
  }

  ngOnInit() {
    this.createForm();
    const mapProp = {
      center: new google.maps.LatLng(28.4595, 77.0266),
      zoom: 14,
      // mapTypeId: google.maps.MapTypeId.ROADMAP
      mapTypeId: google.maps.MapTypeId.HYBRID
      // mapTypeId: google.maps.MapTypeId.SATELLITE
      // mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    const marker = new google.maps.Marker({ position: mapProp.center });
    marker.setMap(this.map);

    const infowindow = new google.maps.InfoWindow({
      content: 'Hey, We are here'
    });
    infowindow.open(this.map, marker);
  }

  setCenter(e?:any){
    e ? e.preventDefault() : this.noop();
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
  }

  createForm() {
    this.profileForm = this.fb.group({
      state: new FormControl(''),
      constituency: new FormControl(''),
      minister: new FormControl('')
    });

    this.stateControl = this.profileForm.controls['state'];
    this.constituencyControl = this.profileForm.controls['constituency'];
    this.ministerControl = this.profileForm.controls['minister'];
    this.subscribeToValueChanges();
    if (this.initialState) {
      this.setInitialValues();
    }
  }

  subscribeToValueChanges() {
    this.listenToValueChange();
    this.updateMinisterOnValueChange();
    this.updateMinisterSelected();
  }

  listenToValueChange() {
    this.stateControl.valueChanges.subscribe(stateSelected => {
      if (this.initialState && this.initialState !== stateSelected) {
        this.setToDefault();
      }
      this.provinceSelected = stateSelected;
      this.showParticularConstituency(stateSelected);
    });
  }

  setToDefault() {
    this.ministers = null;
    this.ministerSelected = null;
    this.constituencyControl.setValue('');
  }

  showParticularConstituency(stateSelected: string) {
    this.stateConstituencies = this.constituencies[stateSelected];
  }

  updateMinisterOnValueChange() {
    this.constituencyControl.valueChanges.subscribe(constituencySelected => {
      if (constituencySelected) {
        const constituencySelectedForMinisters = this.getParticularConstituency(constituencySelected);
        this.ministers = constituencySelectedForMinisters ? constituencySelectedForMinisters.ministers : null;
        this.constituencySelected = constituencySelectedForMinisters;
        //this.updateMap();
        this.setState(false);
      }
    });
  }

  updateMap(){
    /*const address = this.geoLocationService.getCombinedConstituencyAndState(this.constituencySelected.value, this.provinceSelected);
    this.geoLocationService.getCurrentLocationLongLat(address, 'IN').subscribe(val => {
    this.latitude = val.results[0].geometry.location.lat;
     this.longitude = val.results[0].geometry.location.lng;
     this.setCenter();
   });*/
  }

  updateMinisterSelected() {
    this.ministerControl.valueChanges.subscribe(minister => {
      this.ministerSelected = minister;
      this.setState();
    });
  }

  setState(updateMinister = true) {
    this.store.dispatch(new HomeActions.AddProvince(this.provinceSelected));
    this.constituencySelected ? this.store.dispatch(new HomeActions.AddConstituency(this.constituencySelected.code)) : this.noop();
    updateMinister ? this.store.dispatch(new HomeActions.AddMinister(this.ministerSelected)) : this.noop();
  }

  getParticularConstituency(code): Constituency {
    return this.stateConstituencies.find(item => item.code === code);
  }

}
