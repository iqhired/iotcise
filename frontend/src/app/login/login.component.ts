import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit  {

  constructor(private userService:UserService){}

  ngOnInit(){
    this.register = {
      username:'',
      password:'',
    
    };
   
  }
  register:any;

  onLogin(){

    this.userService.loginUser(this.register).subscribe(
      response =>{
        alert('User ' + this.register.username + ' has been created!')
      },
      error => console.log('error',error)
           
    );

  }


}
