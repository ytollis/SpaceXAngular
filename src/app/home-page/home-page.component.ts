import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  infos: any = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getCompanInfo().subscribe((data: any) => {
      this.infos = data;
    });
  }

}
