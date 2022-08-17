import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'app/services/movie.service';
import { environment } from 'environments/environment';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie=null;
  imageBaseUrl= environment.images
  constructor(private route: ActivatedRoute , private movieService: MovieService) { }

  ngOnInit() {
    const id= this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetails(id).subscribe(
      (res) =>{
        console.log(res);
        this.movie= res;
      }
    )
  }
  openHomePage(){
    window.open(this.movie.homepage);
  }

}
