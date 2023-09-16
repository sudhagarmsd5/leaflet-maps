import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';

import { HomeComponent } from './home.component';
import { SimpleLeafletMapComponent } from './leaflet-maps/simple-leaflet-map/simple-leaflet-map.component';
import { LeafletDrawingComponent } from './leaflet-maps/leaflet-drawing/leaflet-drawing.component';
import { OsmMapComponent } from './leaflet-maps/simple-leaflet-map/osm-map/osm-map.component';
import { GeofenceExampleComponent } from './leaflet-maps/geofence-example/geofence-example.component';
import { LeafletRoutingComponent } from './leaflet-maps/leaflet-routing/leaflet-routing.component';
import { NominatimService } from 'src/app/shared/nominatim.service';


@NgModule({
  declarations: [
    HomeComponent,
    SimpleLeafletMapComponent,
    OsmMapComponent,
    LeafletDrawingComponent,
    GeofenceExampleComponent,
    LeafletRoutingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    LeafletModule,
    LeafletDrawModule
  ],
  providers:[
    NominatimService
  ]
})
export class HomeModule { }
