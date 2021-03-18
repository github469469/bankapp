import { Component, OnInit } from '@angular/core';
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

  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    // this.dataservice.register(this.acno,this.uname,this.pwd)
    // console.log(this.uname,this.acno,this.pwd);

    var result=this.dataservice.register(this.acno,this.uname,this.pwd)
    if(result){
      this.router.navigateByUrl("")
    }
    else{
      this.router.navigateByUrl("")
    }

  }

}


