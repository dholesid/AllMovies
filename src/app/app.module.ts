import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ServicesService } from './services.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component'; // Import ServicesService
import { provideHttpClient, withFetch } from '@angular/common/http';
// https://api.themoviedb.org/3/movie/$%7BgetMovieDetails%7D?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // Add HttpClientModule
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    ServicesService,
    provideHttpClient(withFetch()) // Add ServicesService to providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
