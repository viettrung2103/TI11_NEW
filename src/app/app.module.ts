import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { UsersComponent } from './components/users/users.component';
import { StandingsComponent } from './components/standings/standings.component';
import { LivestreamsComponent } from './components/livestreams/livestreams.component';
import { MatchesComponent } from './components/matches/matches.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    TeamsComponent,
    PlayersComponent,
    UsersComponent,
    StandingsComponent,
    LivestreamsComponent,
    MatchesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
