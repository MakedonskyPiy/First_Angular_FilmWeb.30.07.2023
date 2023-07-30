import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../userinterface/Auth.service';
import { Router } from '@angular/router';
import { isJoinUser } from '../userinterface/isJoined';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent {

  constructor(private authService:AuthService, private router:Router, public Join:isJoinUser){}
error:string = '';
succes:string = '';
  nepimpochka = 0;
pimpochka = 0;
active1:string = '';
active2:string = '';
checkinput(target:Event){
  if((<HTMLInputElement>target.target).value != ''){
    
  }
  else{
    this.active1 = '';
  }
}
checkinput1(target:Event){
  if((<HTMLInputElement>target.target).value != ''){
    
  }
  else{
    this.active2 = '';
  }
}
onSubmit(form:NgForm){
  this.isLoading = true;
  if(!form.valid){
    return;
  }
  const email = form.value.email;
  const password = form.value.password;
  form.resetForm()
  this.active1 = '';
  this.active2 = '';





  this.authService.signup(email, password).subscribe(  
    {next:(resData) => {console.log(resData);this.succes = 'Account succesfuly registered! Now sign in';setTimeout(()=>this.succes = '',6000);this.Join.AccoutObj.mail = email ; this.Join.addMember();
  },
    error:(errorMsg) => {this.isLoading = false;
      this.error = errorMsg;
      setTimeout(()=>this.error = '',6000)},
    complete:()=> {console.log('complete');this.isLoading = false;}}
);

  }
isLoading = false;
}
