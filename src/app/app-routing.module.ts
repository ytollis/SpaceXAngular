import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesComponent } from './launches/launches.component';
import { RocketsComponent } from './rockets/rockets.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CrewMembersComponent } from './crew-members/crew-members.component';
import { MapComponent } from './map/map.component';
import { RocketComponent } from './rocket/rocket.component';


const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'launches', component: LaunchesComponent },
    { path: 'rockets', component: RocketsComponent },
    { path: 'crew', component: CrewMembersComponent },
    { path: 'map', component: MapComponent },
    { path: 'rockets/:id', component: RocketComponent },
  ];


  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule {}