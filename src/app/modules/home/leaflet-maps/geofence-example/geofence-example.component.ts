import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet';
import { icon } from 'leaflet';


@Component({
  selector: 'app-geofence-example',
  templateUrl: './geofence-example.component.html',
  styleUrls: ['./geofence-example.component.scss']
})
export class GeofenceExampleComponent implements OnInit {

  map!: L.Map;
  lat!: number;
  lng!: number;
  radius: any;
  pt: any = [];
  pts: any = [];
  pts1: any = [];
  history: any = []; // auto
  history2: any = []; // manual
  layer1: null | any;
  layer2: null | any;
  polyline: null | any;
  polygon: any;
  marker: null | any;
  coords: any;
  status: null | any;

  range: null | any;
  dist: null | any;

  lat1: any;
  lon1: any;

  lat2: any;
  lon2: any;

  lastItem: any;

  constructor() {}

  ngOnInit() {
    this.pt = [43.641496, -79.614276];

    this.pts1 = [43.641396, -79.614276];

    this.map = L.map('map', {
      minZoom: 0,
      maxZoom: 18,
    }).setView(this.pt, 15);

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Open Street Map',
      opacity: 0.7,
    }).addTo(this.map);

    this.radius = 1000;

    var marker = L.marker(this.pt, {
      draggable: false,
      icon: icon({
        iconSize: [25, 41],
        // iconAnchor: [13, 41],
        iconUrl: 'https://opentopomap.org/leaflet/images/marker-icon-2x.png',
        iconRetinaUrl: 'https://opentopomap.org/leaflet/images/marker-icon.png',
        iconAnchor: [16, 37],
        popupAnchor: [-3, -24],
      }),
    }).addTo(this.map);

    marker.on('dragend', (ev) => {
      this.coords = ev.target._latlng;
    });

    marker.bindPopup('Geofence').openPopup();

    L.circle(this.pts1, { radius: this.radius }).addTo(this.map);

    this.geofence();
  }

  geofence() {
    var marker = L.marker([43.63686405953978, -79.60005230518442], {
      draggable: true,
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'https://opentopomap.org/leaflet/images/marker-icon.png',
        popupAnchor: [-3, -24],
        iconRetinaUrl: 'https://opentopomap.org/leaflet/images/marker-icon.png',
      }),
    }).addTo(this.map);

    marker.on('dragend', (ev) => {
      this.coords = ev.target._latlng;

      this.lat2 = ev.target._latlng.lat;
      this.lon2 = ev.target._latlng.lng;

      this.history = ev.target._latlng;

      this.pts1 = {
        lat: 43.641396,
        lng: -79.614276,
      };
      this.lat1 = this.pts1.lat;
      this.lon1 = this.pts1.lng;

      this.coords = ev.target._latlng;

      this.lastItem = ev.target._latlng;

      this.lat = ev.target._latlng.lat;
      this.lng = ev.target._latlng.lng;
      // this.draw();

      this.distance();
      console.log(this.lastItem);
    });

    marker.bindPopup('User').openPopup();
  }

  toRad(degrees: any) {
    return (degrees * Math.PI) / 180;
  }

  draw() {
    if (this.history2.length === 1) {
      this.lastItem = this.history2[this.history2.length - 1];
      // console.log(this.lastItem);

      var latlngs = [
        L.latLng(this.lastItem.lat, this.lastItem.lng),
        L.latLng(this.coords.lat, this.coords.lng),
      ];

      this.polyline = L.polyline(latlngs, {
        color: '#0000FF',
        opacity: 0.8,
      });

      this.layer2 = L.layerGroup([this.polyline]);
      this.layer2.addTo(this.map);
    } else if (this.history2.length > 1) {
      this.polyline.addLatLng(L.latLng(this.coords.lat, this.coords.lng), {
        color: '#0000FF',
        opacity: 0.8,
      });
    }

    this.history2 = [];
    this.history2.push(this.lastItem);

    // console.log(this.lastItem);

    // console.log(this.lat, this.lng);
  }

  distance() {
    var radiusOfEarth = 6371;
    var lattitudeDifference = this.lat2 - this.lat1;
    var dLat = this.toRad(lattitudeDifference);
    var longitudeDifference = this.lon2 - this.lon1;
    var dLon = this.toRad(longitudeDifference);

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(this.lat1)) *
        Math.cos(this.toRad(this.lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance: any = radiusOfEarth * c;
    distance = parseFloat(distance).toFixed(2);
    var distanceInMiles: any = 0.62137119 * distance;
    distanceInMiles = parseFloat(distanceInMiles).toFixed(2);
    // document.getElementById('distance').innerHTML = distance + " km, or " + distanceInMiles + "mi.";
    console.log(distance + 'KM', distanceInMiles + 'Miles');
    this.dist = distance;

    if (this.dist <= 1) {
      console.log('user is in range');

      this.status = 'user is in range';
    } else {
      console.log('User is not in range');

      this.status = 'User is not in range';
    }
  }

}
