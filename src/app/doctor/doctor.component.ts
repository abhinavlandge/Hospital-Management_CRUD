import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

searchkey = '';

  docList : any = [];

  isupdateA = false ;



  selectIndex:any;


docForm : FormGroup;
docs = false;
  constructor(private formBuilder:FormBuilder ) { 
this.docForm = formBuilder.group({
  docName : ['',[Validators.required, Validators.minLength(8),Validators.maxLength(15)]],
  shift : ['',[Validators.required, Validators.minLength(2) ,Validators.maxLength(9)]]

  
})

 

    let data = localStorage.getItem('Doctor_List')
    if (data)
    {
      this.docList = JSON.parse(data)
    }
  }
  


  ngOnInit(): void {
  }

  

  docSubmit(){
    this.docs = true;


    if (this.docForm.valid){
      this.docForm.value.id = this.randomID();
      this.docList.push(this.docForm.value)
      localStorage.setItem("Doctor_List", JSON.stringify(this.docList));
      alert("Form is valid......submitted successfully !!!")
      this.docClear()
    }
    else {
     alert("Form is invalid......please try again !!!")
    }

    
      }
      get f(){
        return this.docForm.controls
      }

 

    
    
    docUpdate(){
         this.isupdateA = false;     
     
      this.docList[this.selectIndex].docName = this.docForm.value.docName;
      this.docList[this.selectIndex].shift = this.docForm.value.shift;
      alert("Updated successfully");
      localStorage.setItem("Doctor_List", JSON.stringify(this.docList));
      this.docClear()
 
    }
      
      docEdit(obj:any){
      
        this.isupdateA = true;
        this.selectIndex= this.docList.findIndex((x : any )=> x.id === obj.id);
      this.docForm.patchValue({
        docName : obj.docName,
        shift : obj.shift
       })
      }
     
      docDelete(id:any){
        this.selectIndex= this.docList.findIndex((x : any )=> x.id === id);
       
        this.docList.splice(this.selectIndex,1);
        localStorage.setItem("Doctor_List", JSON.stringify(this.docList));
      }
    
    docClear(){
      this.docForm.reset();
    }
    

    randomID()
    {
    return '_' + Math.random().toString(36).substr(2, 9);
    }


}
