import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accountDetails:any = {
    1000: { accno: 1000, name: "userone", balence: "5000", password: "user1" },
    1001: { accno: 1001, name: "usertwo", balence: "3000", password: "user2" },
    1002: { accno: 1002, name: "userthree", balence: "3000", password: "user3" },
    1003: { accno: 1003, name: "userfour", balence: "3000", password: "user4" },
    1004: { accno: 1004, name: "userfive", balence: "3000", password: "user5" }

  }
  unm = "enter your user name"
  dem = "#eg of component to view"
  acno = ""
  pswd = ""
  constructor(private router:Router) { }//create a private variable "router" for login component and addong instance(router) drom app routing module

  ngOnInit(): void {
  }
  getusername(event: any) {
    this.acno = event.target.value;
    console.log(this.acno);
    alert(this.acno)

  }
  passwordchange(event: any) {
    this.pswd = event.target.value;
    console.log(this.pswd);
    alert(this.pswd)

  }


  login() {
    // alert("works")
    // let accno = a.value;
    let accno =this.acno;
    let pswrd = this.pswd;
    // let pswrd = p.value;
    let dataset = this.accountDetails;
    if (accno in dataset) {
      var pswd1 = dataset[accno].password
      if (pswd1 == pswrd) {
        alert("log in succesful")
        this.router.navigateByUrl("dashboard");//navigate dashboard url
      }
      else {
        alert("incorrect pswrd")
      }
    }
    else {
      alert("no user exixts with provided accnum")
    }

  }


}