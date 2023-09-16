import { Component, OnInit } from '@angular/core';
import {
  Control,
  latLng,
  tileLayer,
  Routing,
  Map,
  marker,
} from 'leaflet';
import 'leaflet-routing-machine';
import 'src/app/shared/lrm-graphhopper-1.2.0.js';
import 'leaflet-control-geocoder';

import * as L from 'leaflet';
import 'leaflet.icon.glyph';
@Component({
  selector: 'app-leaflet-routing',
  templateUrl: './leaflet-routing.component.html',
  styleUrls: ['./leaflet-routing.component.scss'],
})
export class LeafletRoutingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onMapReady(map: Map) {
    const waypoints = [latLng(12.7409, 77.8253), latLng(28.7041, 77.1025)];
    var routeControl = Routing.control({
      lineOptions: {
        extendToWaypoints: true,
        missingRouteTolerance: 0,
        styles: [
          {
            color: 'grey',
            opacity: 1,
            weight: 5,
          },
        ],
      },

      router: L.Routing.osrmv1({
        serviceUrl: 'https://nominatim.openstreetmap.org/',
        profile:'driving',
        useHints: false,

      }),

      // router: new Routing.GraphHopper(undefined, {
      //   serviceUrl: 'https://nominatim.openstreetmap.org/',
      // }),

      plan: Routing.plan(waypoints, {
        createMarker(i, wp) {
          return marker(wp.latLng, {
            draggable: false,
            icon: (L.icon as any).glyph({ glyph: String.fromCharCode(65 + i) }),
          })
            .bindPopup(
              'Hello'
            )
            .openPopup();
        },
        geocoder: (Control as any).Geocoder.nominatim({
          serviceUrl: 'https://nominatim.openstreetmap.org/',
        }),
        routeWhileDragging: false,
      }),
    }).addTo(map);

    routeControl.on('routesfound', function (e) {
      var routes = e.routes;
      var summary = routes[0].summary;
      // alert time and distance in km and minutes
      console.log(summary);

      console.log(
        'Total distance is ' +
          summary.totalDistance / 1000 +
          ' km and total time is ' +
          Math.round(summary.totalTime / 60) +
          ' minutes'
      );
    });
  }
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }),
    ],
    zoom: 7,
    center: latLng([46.879966, -121.726909]),
  };
}
