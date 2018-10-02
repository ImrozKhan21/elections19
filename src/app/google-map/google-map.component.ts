import {Component, OnInit, ViewChild, Input, SimpleChanges, SimpleChange} from '@angular/core';
import {} from '@types/googlemaps';
import {GeoLocationService} from '../services/geo-location.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  public latitude;
  public longitude;
  @ViewChild('googleMap') gmapElement: any;
  map: google.maps.Map;
  @Input() provinceSelected;
  @Input() constituencySelected;

  constructor(private geoLocationService: GeoLocationService) {
  }

  ngOnInit() {
    this.setMap();
  }

  setMap() {
    const mapProp = {
      center: new google.maps.LatLng(28.4595, 77.0266),
      zoom: 14,
      // mapTypeId: google.maps.MapTypeId.ROADMAP
      mapTypeId: google.maps.MapTypeId.HYBRID
      // mapTypeId: google.maps.MapTypeId.SATELLITE
      // mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    const marker = new google.maps.Marker({position: mapProp.center});
    marker.setMap(this.map);

    const infowindow = new google.maps.InfoWindow({
      content: 'Hey, We are here'
    });
    infowindow.open(this.map, marker);
  }

  setCenter(e?: any) {
    e ? e.preventDefault() : '';
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
  }

  updateMap() {
    const address = this.geoLocationService.getCombinedConstituencyAndState(this.constituencySelected.value, this.provinceSelected);
    this.geoLocationService.getCurrentLocationLongLat(address, 'IN').subscribe(val => {
      console.log('val MAP', val);
      this.latitude = val.results[0].geometry.location.lat;
      this.longitude = val.results[0].geometry.location.lng;
      this.setCenter();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentItem: SimpleChange = changes.constituencySelected;
    if (currentItem && currentItem.currentValue) {
      if (!currentItem.previousValue || currentItem.previousValue.code !== currentItem.currentValue.code) {
        this.updateMap();
      }
    }

  }
}
