import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  movies = [];
  selected_movie;
  selected_task;
  review = false;
  avg_review_arr = [];

  constructor(private _httpService: HttpService, private _router: Router) {
  }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies() {
    let observable = this._httpService.getMovies();
    observable.subscribe( data => {
      console.log("Accessing data: " + data);
      this.movies = data['data'];
      console.log("Retrieving all movies: " + this.movies );
      console.log(JSON.stringify(this.movies));


      for(let i in this.movies) {
        let total = 0;
        let counter = 0;
        console.log("i is: " + i);
        for(let x in this.movies[i].reviews) {
          console.log("x is: " + x);
          console.log("Rating is: " + this.movies[i].reviews[x]['rating']);
          total += this.movies[i].reviews[x]['rating'];
          counter += 1;
        }
        console.log("Total: " + total);
        let avg = total/counter;
        console.log("Average: " + avg);

        this.avg_review_arr.push(avg);
        total = 0;
      }
      console.log(this.avg_review_arr)
    })
  }

  write_review(movie_id) {
    console.log("Review boolean clicked!!")

    if(this.review == false) {
      this.review = true;
    }
    else{
      this.review = false;
      this.selected_movie=undefined;
    }
  }

  taskToShow(task) {
    console.log("Triggered selected task function")
    this.selected_task = task;
    console.log(this.selected_task)
  }

  deleteMovie(movie_id) {
    let observable = this._httpService.deleteAMovie(movie_id);
    observable.subscribe( data => {
      console.log("Deleting movie!");
      this._router.navigate(['/']);
    })
  }

}
