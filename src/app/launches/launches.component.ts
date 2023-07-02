import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {
  launches: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getLaunches().subscribe((data: any) => {
      this.launches = data;
    });
  }
}
