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
  showTooltip = false;
  tooltipText = '';
  tooltipPosition = { x: 0, y: 0 };

  private map!: L.Map;
  private centroid: L.LatLngExpression = [42.3601, 20.0589];

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
        radius: 7,
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 1
      });
      marker.addTo(this.map);

      marker.on('mouseover', (event) => {
        let success_percentage = 0;
        if(launchpad.launch_attempts != 0){
          success_percentage = parseFloat((launchpad.launch_successes / launchpad.launch_attempts * 100).toFixed(2));
        }
        this.tooltipText = 
        `<h3>Launchpad informations :</h3>
        <p> Name: ${launchpad.name}
        <br/>Region: ${launchpad.region}
        <br/>Locality: ${launchpad.locality}
        <br/>Status: ${launchpad.status}
        <br/>
        <br/>Launch attempts: ${launchpad.launch_attempts}
        <br/>Launch successes: ${launchpad.launch_successes}
        <br/>Success percentage: ${success_percentage}% </p>`;
        this.showTooltip = true;
        this.updateTooltipPosition(event.latlng);
      });

      marker.on('mouseout', () => {
        this.showTooltip = false;
      });
    });

    this.landpads.forEach((landpad: any) => {
      const marker = new CircleMarker([landpad.latitude, landpad.longitude], {
        radius: 5,
        color: 'red',
        fillColor: 'red',
        fillOpacity: 1
      });
      marker.addTo(this.map);

      marker.on('mouseover', (event) => {
        let success_percentage = 0;
        if(landpad.landing_attempts != 0){
          success_percentage = parseFloat((landpad.landing_successes / landpad.landing_attempts * 100).toFixed(2));
        }
        this.tooltipText = 
        `<h3>Landpad informations :</h3>
        <p> Name: ${landpad.name}
        <br/>Region: ${landpad.region}
        <br/>Locality: ${landpad.locality}
        <br/>Status: ${landpad.status}
        <br/>
        <br/>Launch attempts: ${landpad.landing_attempts}
        <br/>Launch successes: ${landpad.landing_successes}
        <br/>Success percentage: ${success_percentage}% </p>`;
        this.showTooltip = true;
        this.updateTooltipPosition(event.latlng);
      });

      marker.on('mouseout', () => {
        this.showTooltip = false;
      });
    });
    
  }

  private updateTooltipPosition(latlng: LatLngExpression): void {
    const point = this.map.latLngToContainerPoint(latlng);
    this.tooltipPosition = { x: point.x, y: point.y };
  }

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    const launchpads$ = this.httpService.getLaunchpads();
    const landpads$ = this.httpService.getLandpads();
  
    forkJoin([launchpads$, landpads$]).subscribe(([launchpads, landpads]) => {
      this.launchpads = launchpads;
      this.landpads = landpads;
      this.initMap();
    });
  }
  scrollTop() {
  
    setTimeout(() => {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, 100);
  }

}
