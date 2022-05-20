import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {


  
  searchkey = '';
  
  billList : any = [];
  

  
 
 
  isupdateD = false ;

  
  

  selectIndexc:any;



billForm : FormGroup;
billsub = false;


  constructor(private formBuilder:FormBuilder) { 
    this.billForm = formBuilder.group({
      paid : ['',[Validators.required , Validators.minLength(4),Validators.maxLength(7)]],
      balance : ['',[Validators.required , Validators.minLength(4),Validators.maxLength(7)]]
    })

  
    let data3 = localStorage.getItem('Bill_list')
    if (data3)
    {
      this.billList = JSON.parse(data3)
   }
  }



  ngOnInit(): void {
  }



  billSubmit(){
  this.billsub = true;
  
  if (this.billForm.valid){
    this.billList.push(this.billForm.value)
    localStorage.setItem('Bill_list', JSON.stringify(this.billList));
    this.billClear()
    alert("Form is valid......submitted successfully !!!")
  }
  else {
   alert("Form is invalid......please try again !!!")
  }
    }
    get f(){
      return this.billForm.controls
    }
  

  billEdit(index:any,obj:any){
    this.selectIndexc = index ;
    this.isupdateD = true ;

    this.billForm.patchValue({
      paid : obj.paid,
      balance : obj.balance
    })
  }

  billUpdate(){
    this.isupdateD = false ;
   
    this.billList[this.selectIndexc].paid = this.billForm.value.paid
    this.billList[this.selectIndexc].balance = this.billForm.value.balance
    alert("Updated successfully")
    localStorage.setItem('Bill_list', JSON.stringify(this.billList));
    this.billClear()
   
  }

  billDelete(index:any){
    console.log("delete",index)
    this.billList.splice(index,1)
    localStorage.setItem('Bill_list', JSON.stringify(this.billList));
  }

  billClear(){
 this.billForm.reset();
  }



}
