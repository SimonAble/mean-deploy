import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';



const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'newMovie', component: NewMovieComponent },
  { path: 'showMovie/:movie_id', component: ShowMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
