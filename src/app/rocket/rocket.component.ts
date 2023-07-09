import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss']
})
export class RocketComponent {
  rocket: any = null;

  constructor(private httpService: HttpService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const rocket_id = this.route.snapshot.params['id'];
    this.httpService.getRocketById(rocket_id).subscribe((data: any) => {
      this.rocket = data;
    });
  }
  scrollTop() {
    //this.router.navigate(['/']);
  
    setTimeout(() => {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, 100);
  }

}
