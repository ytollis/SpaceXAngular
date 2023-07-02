import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-crew-members',
  templateUrl: './crew-members.component.html',
  styleUrls: ['./crew-members.component.scss']
})
export class CrewMembersComponent {
  crew: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getCrew().subscribe((data: any) => {
      this.crew = data;
    });
  }

}
