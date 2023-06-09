import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {

  register:any;

  constructor(private userService:UserService){}

  ngOnInit(){
    this.register = {
      username:'',
      password:'',
      email:''
    };
   
  }
  registerUser(){

    this.userService.registerNewUser(this.register).subscribe(
      response =>{
        alert('User ' + this.register.username + 'has been created!')
      },
      error => console.log('error',error)
           
    );

  }

}
