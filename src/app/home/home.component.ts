import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  filteredMovies: any[] = [];
  searchQuery: string = '';

  imageUrl: string = 'assets/hanuman.jpg';
  
  constructor(private movieservice: ServicesService,private router: Router) { }

  ngOnInit(): void {
    this.movieservice.getMovies().subscribe(
      (data:any) => {
        this.movies = data.results;
        console.log(data.results);
        
        this.applyFilters(); // Apply initial filters
      },
      error => {
        console.log('Error fetching movie data:', error);
      }
    );
  }

  applyFilters(): void {
    this.filteredMovies = this.movies.filter(movie =>
      movie.original_title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      (this.searchQuery !== '' && !isNaN(Number(this.searchQuery)) && movie.vote_average === Number(this.searchQuery))
    );
  }

  goToMovieDetails(movieId: number) {
    // Navigate to movie details component with movieId as a parameter
    this.router.navigate(['/movie-details', movieId]);
  }
}
