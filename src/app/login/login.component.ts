import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  

  loginForm = this.fb.group({
  acno:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]]


 })
 
 
  constructor(private router:Router,private dataservice: DataService, private fb:FormBuilder)  { }//create a private variable "router" for login component and addong instance(router) drom app routing module

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
//     let accno =this.loginForm.value.acno;
//     console.log(accNumber);
    
//     let pswrd = this.loginForm.value.pswd;
//     console.log(pwd);
    
//     // let pswrd = p.value;
//     let dataset = this.dataservice.accountDetails;
//     if (accno in dataset) {
//       var pswd1 = dataset[accno].password
//       if (pswd1 == pswrd) {
//         alert("log in succesful")
//         this.router.navigateByUrl("dashboard");//navigate dashboard url
//       }
//       else {
//         alert("incorrect pswrd")
//       }
//     }
//     else {
//       alert("no user exixts with provided accnum")
//     }

//   }
if(this.loginForm.valid){
  var acno=this.loginForm.value.acno
  console.log(acno)
  var psd= this.loginForm.value.pswd
  console.log(psd)
  var result=this.dataservice.login(this.loginForm.value.acno,this.loginForm.value.pswd)
  if(result){
  
    this.router.navigateByUrl("dashboard")
  }
  
}
else{
  alert("Invalid Form")
}

  }

}
