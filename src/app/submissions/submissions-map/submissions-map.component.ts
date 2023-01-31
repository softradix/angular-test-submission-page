import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-submissions-map',
  templateUrl: './submissions-map.component.html',
  styleUrls: ['./submissions-map.component.scss']
})
export class SubmissionsMapComponent implements OnInit, AfterViewInit {

  // display: any;
  // center: google.maps.LatLngLiteral = {
  //     lat: 24,
  //     lng: 12
  // };
  // zoom = 4;

  // @ViewChild('mapContainer') mapElement: any;
  // map!: google.maps.Map;

  @ViewChild('mapContainer', { static: false }) gmap!: ElementRef;

  map!: google.maps.Map;

  // lat = 28.704060;
  // lng = 77.102493;
  // coordinates = new google.maps.LatLng(this.lat, this.lng);
  // mapOptions: google.maps.MapOptions = {
  //   center: this.coordinates,
  //   zoom: 8,
  // };
  // marker = new google.maps.Marker({
  //   position: this.coordinates,
  //   map: this.map,
  // });

  @Input() submissions_list: any = [];

  constructor() { }

  ngOnInit(): void {
//     const mapProperties = {
//       center: new google.maps.LatLng(35.2271, -80.8431),
//       zoom: 15,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//  };
//  this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
  }

  ngAfterViewInit() {
    this.mapInitializer(this.submissions_list[0].latitude, this.submissions_list[0].longitude);
  }

  mapInitializer(lat: number, lng: number) {
   let coordinates = new google.maps.LatLng(lat, lng);
   let mapOptions: google.maps.MapOptions = {
      center: coordinates,
      zoom: 8,
    };
    let marker = new google.maps.Marker({
      position: coordinates,
      map: this.map,
    })

    this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);

    marker.setMap(this.map);
  }

}
