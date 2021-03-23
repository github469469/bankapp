import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  accno=""
  pwd=""
  amt=""
  uname=this.pp.currentUser
  withdrawForm =this.fb.group({

    accno:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
    amt:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]] 
 
 
 
  })
  depositForm =this.fb.group({

    accno:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
    amt:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]] 
  })




  constructor(private fb:FormBuilder,public pp:DataService) { }

  ngOnInit(): void {
  }
  deposit(){

if(this.depositForm.valid){
this.pp.deposit(this.depositForm.value.accno,this.depositForm.value.amt,this.depositForm.value.pwd)


}
else{

  alert("inavalid form")
}


  }
  withdraw(){
    if(this.withdrawForm.valid){
      this.pp.withdraw(this.withdrawForm.value.accno,this.withdrawForm.value.amt,this.withdrawForm.value.pwd)
      
      
      }
      else{
      
        alert("inavalid form")
      }

  }

}
