import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  email: string = '';
  password: string = '';
  formSubmitted: boolean = false;

  constructor(private auth : ServicesService){}

  ngOnInit(): void{

  }

  login(){

    this.formSubmitted = true;

    if(this.email == ''){
      alert('Please enter username');
      return;
    }

    if(this.password == ''){
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email,this.password);
    this.email = '';
    this.password = '';
  }
}
