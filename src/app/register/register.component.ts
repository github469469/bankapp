import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  uname="";
  acno="";
  pwd="";

 registerform = this.fb.group({

  uname:['',[Validators.required,Validators.pattern('[a-zA-Z)]*')]],
  acno:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
  pwd:['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]]
 })
  constructor(private dataservice:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    
    if(this.registerform.get('uname')?.errors){
      alert("invalid username")
    }
    
    if(this.registerform.valid){
      var result=this.dataservice.register(this.registerform.value.acno,this.registerform.value.uname,this.registerform.value.pwd)
    if(result){
      this.router.navigateByUrl("")
    }
    else{
      this.router.navigateByUrl("")
    }
  }
  else{
    alert("invalid form")
  }
  
    // console.log(this.registerform.value);
    
    // this.dataservice.register(this.acno,this.uname,this.pwd)
    // console.log(this.uname,this.acno,this.pwd);

    // var result=this.dataservice.register(this.registerform.value.acno,this.registerform.value.uname,this.registerform.value.pwd)
    // if(result){
    //   this.router.navigateByUrl("")
    // }
    // else{
    //   this.router.navigateByUrl("")
    // }

  }

}


