import { Component, OnInit } from '@angular/core';
import { Map } from "leaflet";
@Component({
  selector: 'app-simple-leaflet-map',
  templateUrl: './simple-leaflet-map.component.html',
  styleUrls: ['./simple-leaflet-map.component.scss'],
})
export class SimpleLeafletMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  private map!: Map;
  private zoom!: number;
  
  receiveMap(map: Map) {
    this.map = map;
  }

  receiveZoom(zoom: number) {
    this.zoom = zoom;
  }
}
