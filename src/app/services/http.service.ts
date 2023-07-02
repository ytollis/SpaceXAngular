import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  // Ajoutez d'autres méthodes pour récupérer les données de l'API SpaceX, si nécessaire
}
