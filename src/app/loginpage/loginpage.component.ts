import { isJoinUser } from '../userinterface/isJoined';
import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms'
import { AuthService } from '../userinterface/Auth.service';
import { Router,  } from '@angular/router';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})


export class LoginpageComponent implements OnInit{
  constructor(private authService:AuthService ,private router:Router,public Join: isJoinUser,public Test:TestComponent){}
  ngOnInit(){
    this.Test.fetchingFavourite();
    }
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

  this.authService.signin(email, password).subscribe(  
    {next:(resData) => {console.log(resData);this.router.navigate(['/LazyModule/joined']);this.Join.JoinedUser = true;
  this.Test.currentmail = email; this.Test.searchProperty();(<any>this.Join.LocStorage) = localStorage.getItem('UserId');
  this.Join.LocStorage = JSON.parse((<any>this.Join.LocStorage)); this.Join.PrimepropertyChecker = (<any>this.Join.LocStorage).prime;
  },
    error:(errorMsg) => {
      this.isLoading = false;
      this.error = errorMsg;
      setTimeout(()=>this.error = '',6000);},
    complete:()=> {console.log('complete');this.isLoading = false;}}
);

  }
isLoading = false;
}








