import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  username: string = ''; // Declare the username property
  email: string = ''; // Declare the email property
  password: string = ''; // Declare the password property


  constructor(private auth : ServicesService){}

  ngOnInit(): void{

  }

  signup(){


    if(this.email == ''){
      alert('Please enter username');
      return;
    }

    if(this.password == ''){
      alert('Please enter password');
      return;
    }

    this.auth.signup(this.email,this.password);

    this.email = '';
    this.password = '';
  }

}
