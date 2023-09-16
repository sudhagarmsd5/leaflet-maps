import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MapOptions, tileLayer, latLng, ZoomAnimEvent } from 'leaflet';

import { Map } from 'leaflet';

@Component({
  selector: 'app-osm-map',
  templateUrl: './osm-map.component.html',
  styleUrls: ['./osm-map.component.scss'],
})
export class OsmMapComponent implements OnInit, OnDestroy {
  @Output() map$: EventEmitter<Map> = new EventEmitter();
  @Output() zoom$: EventEmitter<number> = new EventEmitter();
  @Input() options: MapOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        opacity: 0.7,
        maxZoom: 19,
        detectRetina: true,
        attribution:
          '',
      }),
    ],
    zoom: 2,
    center: latLng(46.879966, -121.726909),
  };
  public map!: Map;
  public zoom!: number;

  ngOnDestroy() {
    // this.map.clearAllEventListeners;
    // this.map.remove();
  }

  onMapReady(map: Map) {
    this.map = map;
    this.map$.emit(map);
    this.zoom = map.getZoom();
    this.zoom$.emit(this.zoom);
  }

  onMapZoomEnd(e: any) {
    this.zoom = e.target.getZoom();
    this.zoom$.emit(this.zoom);
  }

  constructor() {}

  ngOnInit(): void {}
}
