import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  searchkey = '';

  staffList : any = [];

  isupdateC = false ;

  
  selectIndexb:any;



  staffForm : FormGroup;
  staffs = false;
    constructor(private formBuilder:FormBuilder ) { 
  this.staffForm = formBuilder.group({
    staffId : ['',[Validators.required, Validators.minLength(6),Validators.maxLength(9)]],
    salary : ['',[Validators.required, Validators.minLength(5), Validators.maxLength(7)]]
  })

  
   
    let data2 = localStorage.getItem('staff_List')
    if (data2)
    {
      this.staffList = JSON.parse(data2)
   }
}
 

  

  ngOnInit(): void {
  }


  
staffSubmit(){


    this.staffs = true;

    if (this.staffForm.valid){
      this.staffList.push(this.staffForm.value)
      localStorage.setItem('staff_List', JSON.stringify(this.staffList));
      alert("Form is valid......submitted successfully !!!")
      this.staffClear()
    }
    else {
     alert("Form is invalid......please try again !!!")
    }
      }
      get f(){
        return this.staffForm.controls
      }

 

  staffEdit(index:any,obj:any){
    this.selectIndexb = index ;
   
    this.isupdateC = true;
this.staffForm.patchValue({
  staffId : obj.staffId, 
  salary : obj.salary

})

   }
 
   staffUpdate(){
    this.isupdateC = false ;
   this.staffList[this.selectIndexb].staffId = this.staffForm.value.staffId
   this.staffList[this.selectIndexb].salary = this.staffForm.value.salary

   localStorage.setItem('staff_List', JSON.stringify(this.staffList));
   this.staffClear()
 
    alert("Updated successfully")
   }
   
   staffDelete(index:any){
     console.log("delete",index)
     this.staffList.splice(index,1)
     localStorage.setItem('staff_List', JSON.stringify(this.staffList));
   }
  staffClear(){
    this.staffForm.reset();
  }





}
