import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // usr = '';
  // pwd = '';
  // rMe = '' ;
  // isLoginsuccessful = false ;

  logForm: FormGroup;
login = false;
  constructor(private formBuilder: FormBuilder) 
  {
    this.logForm = formBuilder.group({
      usr : ['',[Validators.required , Validators.minLength(12),Validators.email]],
      pwd : ['',[Validators.required ,  Validators.minLength(8),Validators.maxLength(12)]],
  rMe : [''] 
    })
   }

  ngOnInit(): void {
  }

   
  logIn(){
   this.login = true;
  //  console.log("controls",this.logForm.controls);
  //  console.log("submit works",this.logForm.value);
  //  localStorage.setItem("login_info ", JSON.stringify(this.logForm.value));
   
   if (this.logForm.valid){
    alert("Form is valid......submitted successfully !!!")
  }
  else {
   alert("Form is invalid......please try again !!!")
  }
 } 
 
 clearlog(){
   console.log("cleared");
   
   }
 
 get f(){
   return this.logForm.controls
 }
//   clearlog(){
//     this.usr = '';
//     this.pwd = '';
//     this.rMe = '';
//   }

//   logIn(){
//     console.log("Username :",this.usr)
//     console.log("Password :",this.pwd)
//     console.log("Login Remeber :",this.rMe)
//     localStorage.setItem("Username ", JSON.stringify(this.usr));
//     localStorage.setItem("Password", JSON.stringify(this.pwd));

//     this.isLoginsuccessful =true;
//   }
 }
