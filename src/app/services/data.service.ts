import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'



const options={

  withCredentials:true
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails: any = {
    1000: { accno: 1000, username: "userone", balance: 5000, password: "user1" },
    1001: { accno: 1001, username: "usertwo", balance: 3000, password: "user2" },
    1002: { accno: 1002, username: "userthree", balance: 3000, password: "user3" },
    1003: { accno: 1003, username: "userfour", balance: 3000, password: "user4" },
    1004: { accno: 1004, username: "userfive", balance: 3000, password: "user5" }

  }

  currentUser: any;
  constructor(private http:HttpClient) { 

    this.getDetails();
  }
  

saveDetaials(){

  localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails))
  if(this.currentUser){
  localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }




}
getDetails(){

  if(localStorage.getItem("accountDetails")){
 this.accountDetails=JSON.parse(localStorage.getItem("accountDetails")||'')
  
}
if(localStorage.getItem("currentUser")){
  this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
}

}



  register(accno: any, username: any, password: any) {

    const data = { 

      accno,
      balance: 0,
      username,
      password
    }

    return this.http.post(environment.apiUrl+"/register",data)





    // if (accno in this.accountDetails) {
    //   alert("user already exist.please log in  ")
    //   return false;
    // }
    // else {
    //   this.accountDetails[accno] = {
    //     accno,
    //     balance: 0,
    //     username,
    //     password


    //   }
    //   this.saveDetaials();
    //   alert("registration is successsful")
    //   console.log(this.accountDetails);
    //   return true;
    // }
  }


  login(accno: any, pswd: any) {

    const data={

      accno,
      pswd


    }



    return this.http.post(environment.apiUrl+"/login",data,options)


    // console.log(accno)
    // console.log(pswd)
    // let dataset = this.accountDetails;
    // if (accno in dataset) {

    //   var pswd1 = dataset[accno].password
    //   console.log(pswd1)
    //   if (pswd1 == pswd) {

    //     alert("login successful");
    //     this.currentUser = dataset[accno].username
    //     this.saveDetaials();
    //     return true
    //   }
    //   else {
    //     alert("incorrect password")
    //     return false
    //   }
    // }
    // else {
    //   alert("no user exist with provided Account number")
    //   return false
    // }


  }

deposit(accno:any,amount:any,pswd:any){

  const data={

    accno,
    amount,
    pswd


  }
  return this.http.post(environment.apiUrl+"/deposit",data,options)




//   console.log(amount)
// var amt = parseInt(amount);
// // console.log(amt+5);

// let dataset = this.accountDetails;
// if (accno in dataset) {

//   var pswd1 = dataset[accno].password
//   // console.log(pswd1)
//   if (pswd1 == pswd) {
//     dataset[accno].balance+=amt
//     this.saveDetaials();
//     console.log(dataset[accno].balance);
    
//     alert("Account credited with amount:" + amount+" New balance is :" + dataset[accno].balance);

//   }
//   else {
//     alert("incorrect password")

//   }
// }
// else {
//   alert("no user exist with provided Account number")

// }


}
deleteAccDetails(acno:any)
{

  return this.http.delete(environment.apiUrl+"/deleteAccDetails/"+acno,options)
}

withdraw(accno: any, amount: any, pswd: any){

  const data={

    accno,
    amount,
    pswd


  }
  return this.http.post(environment.apiUrl+"/withdraw",data,options)










//   var amt = parseInt(amount);
// let dataset = this.accountDetails;
// if (accno in dataset) {

//   var pswd1 = dataset[accno].password
//   // console.log(pswd1)
//   if (pswd1 == pswd) {
//     dataset[accno].balance -= amt
//     this.saveDetaials();

//     alert("Account credited with amount:" + amount+" New balance is :" + dataset[accno].balance);

//   }
//   else {
//     alert("incorrect password")

//   }
// }
// else {
//   alert("no user exist with provided Account number")

// }


}




}




