import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails:any = {
    1000: { accno: 1000, username: "userone", balence: "5000", password: "user1" },
    1001: { accno: 1001, username: "usertwo", balence: "3000", password: "user2" },
    1002: { accno: 1002, username: "userthree", balence: "3000", password: "user3" },
    1003: { accno: 1003, username: "userfour", balence: "3000", password: "user4" },
    1004: { accno: 1004, username: "userfive", balence: "3000", password: "user5" }

  }
  

  constructor() { }
  register(accno:any,username:any,password:any){
    if(accno in this.accountDetails){
      alert("user already exist.please log in  ")
      return false;
    }
    this.accountDetails[accno]={
      accno,
      balence:0,
      username,
      password


    }
    alert("registration is successsful")
    console.log(this.accountDetails);
    return true;
    
  }
  }

