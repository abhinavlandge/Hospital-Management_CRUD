import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  // email = '';
  // fName = '';
  // lName = '';
  // mobNo = '';
  // spwd = '';
  // srMe = '' ;
  // isSigninsuccessful = false ;
  regForm : FormGroup;
signin = false;
  constructor(private formbuilder: FormBuilder) {
    this.regForm = this.formbuilder.group({
      email : ['',[Validators.required ,Validators.minLength(8) ,Validators.email]],
      fName : ['',[Validators.required , Validators.minLength(8) , Validators.maxLength(12)]],
      lName : ['',[Validators.required ,Validators.minLength(8) , Validators.maxLength(12)]],
      mobNo : ['',[Validators.required ,Validators.minLength(10) , Validators.maxLength(12)]],
      spwd : ['',[Validators.required ,Validators.minLength(8) , Validators.maxLength(12)]],
      srMe : ['',]
    })
   }

  ngOnInit(): void {
  }


  signIn(){
this.signin = true;
// console.log("controls",this.regForm.controls);
// console.log("registered",this.regForm.value);

if (this.regForm.valid){
  alert("Form is valid......submitted successfully !!!")
}
else {
 alert("Form is invalid......please try again !!!")
}
  }
  get f(){
    return this.regForm.controls
  }



 clearsignin(){

 }
  
  // clearsignin(){
  //   this.email = '';
  //   this.fName = '';
  //   this.lName = '';
  //   this.mobNo = '';
  //   this.spwd = '';
  //   this.srMe = '';
  // }
  // signIn(){
  //   console.log("First name :",this.fName)
  //   console.log("Last name :",this.lName)
  //   console.log("Mobile no. :",this.mobNo)
  //   console.log("Email :",this.email)
  //   console.log("Password :",this.spwd)
  //   console.log("Sign In Remeber :",this.srMe)
  //   localStorage.setItem("First name", JSON.stringify(this.fName));
  //   localStorage.setItem("Last name ", JSON.stringify(this.lName));
  //   localStorage.setItem("Mobile no. ", JSON.stringify(this.mobNo));
  //   localStorage.setItem("email", JSON.stringify(this.email));
  //   localStorage.setItem("Email-Password", JSON.stringify(this.spwd));
  //   this.isSigninsuccessful= true;
  // }


}
