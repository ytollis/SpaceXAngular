import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { CircleMarker, LatLngExpression } from 'leaflet';
import { HttpService } from '../services/http.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  launchpads: any = [];
  landpads: any = [];

  private map!: L.Map;
  private centroid: L.LatLngExpression = [42.3601, -21.0589];

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 1.5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 1,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.launchpads.forEach((launchpad: any) => {
      const marker = new CircleMarker([launchpad.latitude, launchpad.longitude], {
        radius: 5,
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 1
      });
      marker.addTo(this.map);
    });

    this.landpads.forEach((landpad: any) => {
      const marker = new CircleMarker([landpad.latitude, landpad.longitude], {
        radius: 5,
        color: 'green',
        fillColor: 'green',
        fillOpacity: 1
      });
      marker.addTo(this.map);
    });
    
  }

  constructor(private httpService: HttpService) { }

  /* ngOnInit(): void {
    this.httpService.getLaunchpads().subscribe((data: any) => {
      this.launchpads = data;
      this.initMap();
    });
    this.httpService.getLandpads().subscribe((data: any) => {
      this.landpads = data;
      this.initMap();
    });
  } */
  ngOnInit(): void {
    const launchpads$ = this.httpService.getLaunchpads();
    const landpads$ = this.httpService.getLandpads();
  
    forkJoin([launchpads$, landpads$]).subscribe(([launchpads, landpads]) => {
      this.launchpads = launchpads;
      this.landpads = landpads;
      this.initMap();
    });
  }

}
