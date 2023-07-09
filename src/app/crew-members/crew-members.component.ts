import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crew-members',
  templateUrl: './crew-members.component.html',
  styleUrls: ['./crew-members.component.scss']
})
export class CrewMembersComponent {
  crew: any[] = [];
  searchTerm: string = '';

  constructor(private httpService: HttpService,private router: Router) { }

  ngOnInit() {
    this.httpService.getCrew().subscribe((data: any) => {
      this.crew = data;
    });
  }
  scrollTop() {
    //this.router.navigate(['/']);
  
    setTimeout(() => {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, 100);
  }
  filterCrewMembers() {
    if (!this.searchTerm) {
      return this.crew;
    }
  
    const searchTermLower = this.searchTerm.toLowerCase();
  
    return this.crew.filter(crewMember => {
      const fullName = crewMember.name.toLowerCase();
      return fullName.includes(searchTermLower);
    });
  }

}
