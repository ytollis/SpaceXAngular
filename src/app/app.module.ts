import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LaunchesComponent } from './launches/launches.component';
import { RocketsComponent } from './rockets/rockets.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { CrewMembersComponent } from './crew-members/crew-members.component';
import { MapComponent } from './map/map.component';
import { RocketComponent } from './rocket/rocket.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    RocketsComponent,
    HomePageComponent,
    HeaderComponent,
    CrewMembersComponent,
    MapComponent,
    RocketComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
