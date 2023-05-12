import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: 'games',
    component: GamesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: HomepageComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
