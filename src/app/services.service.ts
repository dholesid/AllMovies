import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private http: HttpClient
  ) { }

  // Login
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      console.log(email, password);
      localStorage.setItem('token', 'true');
      this.router.navigate(['/home']);
    },
      err => {
        alert(err.message);
        this.router.navigate(['/login']);
      });
  }

  // Register
  signup(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Registration Successful');
      this.router.navigate(['/login']);
    },
      err => {
        alert(err.message);
        this.router.navigate(['/register']);
      });
  }

  // Sign out
  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    },
      err => {
        alert(err.message);
      });
  }

  // Get movies from API
  getMovies(): Observable<any[]> {
    return this.http.get<any[]>('https://api.themoviedb.org/3/discover/movie?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate');
  }
  getMovieDetails(movieId: any): Observable<any[]>  {
    console.log(movieId);
    
    return this.http.get<any[]>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US`);

  }
}
