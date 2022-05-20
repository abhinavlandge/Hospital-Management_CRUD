import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { observable } from 'rxjs';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  searchkey = '';


  patntList : any = [];
  isupdateB = false ;


  selectIndexa:any;


  patntForm: FormGroup;
patnts = false;
  constructor(private formBuilder:FormBuilder) { 
    this.patntForm = formBuilder.group({
       patntName : ['',[Validators.required, Validators.minLength(8),Validators.maxLength(15)]],
       disease : ['',[Validators.required, Validators.minLength(4), Validators.maxLength(12)]]
    })

    
    let data1 = localStorage.getItem('Patient_List')
    if (data1)
    {
      this.patntList = JSON.parse(data1)
   }
   
  }

  ngOnInit(): void {
  }

  patntSubmit(){
  this.patnts = true;
    
    
    if (this.patntForm.valid){
      this.patntForm.value.id = this.randomID();
      this.patntList.push(this.patntForm.value)
      localStorage.setItem("Patient_List", JSON.stringify(this.patntList));
      this.patntClear()
      alert("Form is valid......submitted successfully !!!")
    }
    else {
     alert("Form is invalid......please try again !!!")
    }


   }
      get f(){
        return this.patntForm.controls
      }


    
    
  
    patntEdit(index:any,obj:any){
    this.isupdateB = true;
    this.selectIndexa= this.patntList.findIndex((x : any )=> x.id === obj.id);

    this.patntForm.patchValue({
      patntName : obj.patntName,
      disease : obj.disease
    })
     }
     
     patntUpdate(){
      this.isupdateB = false;
     this.patntList[this.selectIndexa].patntName = this.patntForm.value.patntName;
     this.patntList[this.selectIndexa].disease = this.patntForm.value.disease;
     alert("Updated successfully")
     localStorage.setItem("Patient_List", JSON.stringify(this.patntList));
     this.patntClear()
     
   
     }
     
     patntDelete(index:any){
       
       console.log('Delete',index)
       this.patntList.splice(index,1);
       localStorage.setItem("Patient_List", JSON.stringify(this.patntList));
      
     }
    
    patntClear(){
this.patntForm.reset();
    }

    randomID()
    {
    return '_' + Math.random().toString(36).substr(2, 9);
    }

}
