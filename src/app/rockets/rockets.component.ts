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
        console.log(this.rockets);
      });
    }
    onViewRocket(rocketId: string) {
      this.router.navigateByUrl(`rockets/${rocketId}`);
      setTimeout(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      }, 100);
    }
    scrollTop() {
      //this.router.navigate(['/']);
    
      setTimeout(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      }, 100);
    }
}