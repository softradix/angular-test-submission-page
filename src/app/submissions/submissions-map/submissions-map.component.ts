import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-submissions-map',
  templateUrl: './submissions-map.component.html',
  styleUrls: ['./submissions-map.component.scss']
})
export class SubmissionsMapComponent implements OnInit, AfterViewInit {

  @ViewChild('myGoogleMap', { static: false }) map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow;

  zoom = 12;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP

  }
  markers = []  as  any;
  infoContent = '';

  @Input() submissions_list: any = [];

  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: parseFloat(this.submissions_list[0].latitude),
        lng: parseFloat(this.submissions_list[0].longitude),
      }
    });
  }

  ngAfterViewInit() {
    this.submissions_list.forEach((item: any) => {
      this.markers.push({
        position: {
          lat: parseFloat(item.latitude),
          lng: parseFloat(item.longitude),
        },
        options: {
          animation: google.maps.Animation.DROP,
        },
      })
    });
  }
  
  eventHandler(event: any ,name:string){    
    // Add marker on double click event
    if(name === 'mapDblclick'){
      this.dropMarker(event)
    }
  }

  dropMarker(event:any) {
    this.markers.push({
      position: {         
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
      options: {
        animation: google.maps.Animation.DROP,
      },
    })

     console.log(this.markers)
  }

  openInfo(marker: MapMarker, content: string) {
    this.infoContent = content;
    this.info.open(marker)
  }
  
}
