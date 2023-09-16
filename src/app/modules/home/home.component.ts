import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private cdRef: ChangeDetectorRef,) {}

  ngOnInit(): void {
    this.sidenav;
  }


  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.cdRef.detectChanges();
  }

  sideOnclickClose() {
    if (this.sidenav.mode == 'side') {
      this.sidenav.open();
    } else {
      this.sidenav.close();
    }
  }
  menuName: any;
  menu = [
    { label: 'Simple leaflet Map', link: '/simple-leaflet' },
    { label: 'Leaflet Draw', link: '/leaflet-draw' },
    { label: 'Geofence Example', link: '/geofence-example' },
    { label: 'Leaflet Routing', link: '/leaflet-routing' },
  ];

  getName(data: any) {
    this.menuName = data;
  }
  
}
