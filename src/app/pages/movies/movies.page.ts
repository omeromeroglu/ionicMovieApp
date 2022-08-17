import { Component, OnInit } from '@angular/core';
import { MovieService } from 'app/services/movie.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies= []
  currentPage = 1;
  imageBaseUrl = environment.images;

  constructor(private movieService: MovieService,private loadingCtrl : LoadingController) { }

  ngOnInit() {
      this.loadMovies();
  }
  
  async loadMovies( event? : InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading movies...',
      spinner: 'bubbles',
    });
    await loading.present();


    this.movieService.getTopRatedMovies(this.currentPage).subscribe(res => {
      loading.dismiss();
      this.movies.push(...res.results)
      console.log(res);
      event?.target.complete()
      if(event){
        event.target.disabled = res.total_pages ===this.currentPage
      }
    }) 
}

    loadMore(event : InfiniteScrollCustomEvent){
      this.currentPage++;
      this.loadMovies(event);

    }


}
