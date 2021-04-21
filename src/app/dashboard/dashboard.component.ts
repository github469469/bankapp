import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  accno = ""
  pwd = ""
  amt = ""
  uname = this.pp.currentUser

  withdrawForm = this.fb.group({

    accno: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]*')]],
    amt: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]



  })
  depositForm = this.fb.group({

    accno: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]*')]],
    amt: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })


  
  // id="1234";
  name: any;
  acno: any;
  accDelete:any;
  lLogin: Date = new Date()


  constructor(private fb: FormBuilder, public pp: DataService,private router: Router) {
    this.name = localStorage.getItem("name")

  }

  ngOnInit(): void {
  }
  deposit() {

    if (this.depositForm.valid) {
      this.pp.deposit(this.depositForm.value.accno, this.depositForm.value.amt, this.depositForm.value.pwd)
        .subscribe((data: any) => {

          if (data) {

            alert(data.message)
            alert(data.balance)
            // this.router.navigateByUrl("")
          }




        }, (data) => {

          alert(data.error.message)

        })
    }
    else {

      alert("invalid forms")
    }

  }

  // }
  // else{

  //   alert("inavalid form")
  // }



  withdraw() {
    if (this.withdrawForm.valid) {
      this.pp.withdraw(this.withdrawForm.value.accno, this.withdrawForm.value.amt, this.withdrawForm.value.pwd)
        .subscribe((data: any) => {

          if (data) {

            alert(data.message)
            alert(data.balance)
            // this.router.navigateByUrl("")
          }




        }, (data) => {

          alert(data.error.message)

        })
    }
    else {

      alert("invalid forms")
    }

  }



  delete() {

    this.acno = localStorage.getItem("accno");
    // alert(this.acno);  

  }

  // }
  // else{

  //   alert("inavalid form")
  // }

  onDelete($event: any) {

    this.accDelete=$event;
    // alert("This is an Alert from parent"+$event);
    this.pp.deleteAccDetails($event)
      .subscribe((data: any) => {
        
        if (data) {

          alert(data.message);
          // this.acno = null;
          this.router.navigateByUrl("");
        }
      })
   
  }
  onCancel() {

    this.acno = null;

  }

}


