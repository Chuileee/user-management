import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username : string="";
  email : string="";
  password : string="";
  
  constructor(private router:Router, private http: HttpClient){

  }

  ngOnInit() : void{

  }
  register(){
    let bodyData ={
    "username" : this.username,
    "email" : this.email,
    "password" : this.password,
  };
  this.http.post("http://localhost:4000/user/save", bodyData).subscribe((resultData: any)=>{
    console.log(resultData);
    alert("User has been registered successfully.");
  });
  }
}
