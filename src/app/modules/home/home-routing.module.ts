import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { GeofenceExampleComponent } from './leaflet-maps/geofence-example/geofence-example.component';
import { LeafletDrawingComponent } from './leaflet-maps/leaflet-drawing/leaflet-drawing.component';
import { LeafletRoutingComponent } from './leaflet-maps/leaflet-routing/leaflet-routing.component';
import { SimpleLeafletMapComponent } from './leaflet-maps/simple-leaflet-map/simple-leaflet-map.component';

const routes: Routes = [
  {path:'',component:HomeComponent,children:[
      {
        path:'',redirectTo:'simple-leaflet',pathMatch:"full"
      }
    ,
    {
      path:'simple-leaflet',component:SimpleLeafletMapComponent
    },
    {
      path:'leaflet-draw',component:LeafletDrawingComponent
    },
    {
      path:'geofence-example',component:GeofenceExampleComponent
    },
    {
      path:'leaflet-routing',component:LeafletRoutingComponent
    },

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
