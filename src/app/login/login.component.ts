import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  unm = "enter your user name"
  dem = "#eg of component to view"
  acno = ""
  pswd = ""
  constructor(private router:Router,private dataservice: DataService)  { }//create a private variable "router" for login component and addong instance(router) drom app routing module

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
    let dataset = this.dataservice.accountDetails;
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