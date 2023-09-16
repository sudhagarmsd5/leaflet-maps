import { Component, OnInit } from '@angular/core';
import { DrawEvents, featureGroup, FeatureGroup, latLng, tileLayer,icon, MapOptions, Icon } from 'leaflet';

@Component({
  selector: 'app-leaflet-drawing',
  templateUrl: './leaflet-drawing.component.html',
  styleUrls: ['./leaflet-drawing.component.scss']
})
export class LeafletDrawingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  drawnItems: FeatureGroup = featureGroup();

  drawOptions: any = {
    position: 'topright',
    draw: {
      marker: {
        icon:  icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'marker-icon-2x.png',
          iconRetinaUrl: 'marker-icon.png',
        }),
      },
      polyline: false,
      circle: {
        shapeOptions: {
          color: '#d4af37'
        }
      },
      rectangle: {
        shapeOptions: {
          color: '#85bb65'
        }
      }
    },
    edit: {
      featureGroup: this.drawnItems
    }
  };

public onDrawCreated(e: any) {
	this.drawnItems.addLayer((e as DrawEvents.Created).layer);
}

drawLocal: any = {
	draw: {
		toolbar: {
			buttons: {
				polygon: 'Draw an awesome polygon!'
			}
		}
	}
};

options: MapOptions = {
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

}
