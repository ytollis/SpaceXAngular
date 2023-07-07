import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  infos: any = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getCompanInfo().subscribe((data: any) => {
      this.infos = data;
    });
  }

}
