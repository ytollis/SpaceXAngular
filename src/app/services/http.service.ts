import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'https://api.spacexdata.com/v4'; // URL de l'API SpaceX

  constructor(private http: HttpClient) { }

  getCrew() {
    return this.http.get(`${this.apiUrl}/crew`);
  }

  getLaunches() {
    return this.http.get(`${this.apiUrl}/launches`);
  }

  getLaunchpads() {
    return this.http.get(`${this.apiUrl}/launchpads`);
  }

  getLandpads() {
    return this.http.get(`${this.apiUrl}/landpads`);
  }

  getRockets() {
    return this.http.get(`${this.apiUrl}/rockets`);
  }

  getRocketById(rocketId: string) {
    return this.http.get(`${this.apiUrl}/rockets/${rocketId}`);
  }

  getCompanInfo() {
    return this.http.get(`${this.apiUrl}/company`);
  }

  // Ajoutez d'autres méthodes pour récupérer les données de l'API SpaceX, si nécessaire
}
