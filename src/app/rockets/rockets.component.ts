import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss']
})
export class RocketsComponent {
  rockets: any[] = [];

  constructor(private httpService: HttpService,
    private router: Router) { }

  ngOnInit() {
    this.httpService.getRockets().subscribe((data: any) => {
      this.rockets = data;
    });
  }

  onViewRocket(rocketId: string) {
    this.router.navigateByUrl(`rockets/${rocketId}`);
}
}