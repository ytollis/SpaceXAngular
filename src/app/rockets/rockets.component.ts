import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss']
})
export class RocketsComponent {
  rockets: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getRockets().subscribe((data: any) => {
      this.rockets = data;
    });
  }
}