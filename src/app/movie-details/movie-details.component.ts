import { Component, Input, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movieId: string | undefined; // Define input property to accept movie ID
  movieDetails: any;

  constructor(private movieService: ServicesService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId = params['id']; // Assuming 'id' is the parameter name in the route
      if (movieId) {
        this.movieId = movieId;
        this.fetchMovieDetails(movieId);
      } else {
        console.error('No movie ID provided.');
      }
    });
  }

  fetchMovieDetails(movieId: string): void {
    this.movieService.getMovieDetails(movieId).subscribe(
      (data: any) => {
        this.movieDetails = data;
        console.log(this.movieDetails); // Do whatever you want with the data
      },
      (error: any) => {
        console.error('Error fetching movie details:', error);
      }
    );
  }

  getGenres(): string {
    if (this.movieDetails && this.movieDetails.genres) {
      return this.movieDetails.genres.map((genre: any) => genre.name).join(', ');
    }
    return '';
  }
}
