import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:any;

  constructor(private userService:UserService){}

  ngOnInit(){
    this.register = {
      username:'',
      first_name:'',
      last_name:'',
      password:'',
      email:''
    };
   
  }
  registerUser(){

    this.userService.registerNewUser(this.register).subscribe(
      response =>{
        alert('User ' + this.register.username + ' has been created!')
      },
      error => console.log('error',error)
           
    );

  }

}
