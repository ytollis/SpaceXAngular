import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'https://api.spacexdata.com/v4';

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
}
