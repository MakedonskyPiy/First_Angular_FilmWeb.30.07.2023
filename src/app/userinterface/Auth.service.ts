import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';
import { isJoinUser } from './isJoined';
import { TestComponent } from '../test/test.component';

export interface AuthResponseData{
    kind:string;
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
    registered?:boolean;
}




@Injectable({providedIn:'root'})

export class AuthService {
constructor(private http:HttpClient,private Router:Router,public Join:isJoinUser, public Test:TestComponent){
}
private TokenExpirationTimer: any;

logout(){
  console.log('true');
  this.user.next(null!);
  this.Join.JoinedUser = false;
  this.Router.navigate(['/']);
  localStorage.clear();
  if(this.TokenExpirationTimer){
    clearTimeout(this.TokenExpirationTimer)
  }
  this.TokenExpirationTimer = null;
}



autoLogout(expirationDuration:number){
this.TokenExpirationTimer = setTimeout(()=>this.logout()
  ,expirationDuration)
  console.log(this.TokenExpirationTimer);
}




signup(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZZ1xiZBpsGBokbhCIOHMqGuLjrjd-3vg',
    {
        email:email,
        password:password,
        returnSecureToken:true
    }
    ).pipe(catchError(this.handleError),tap(resData => {
      this.handleAuth(resData.email, resData.localId, resData.idToken,+resData.expiresIn);
    }));
}


signin(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZZ1xiZBpsGBokbhCIOHMqGuLjrjd-3vg',
    {
        email:email,
        password:password,
        returnSecureToken:true
    }
    ).pipe(catchError(this.handleError),tap(resData => {
      this.handleAuth(resData.email, resData.localId, resData.idToken,+resData.expiresIn);
    }));
    
}



autoLogin(){
  const UserData = JSON.parse(<any>localStorage.getItem('userData'));
  if(!UserData){
    return;
  }
  const loadedUser = new User(UserData.email,UserData.id,UserData._token,new Date(UserData._tokenExpirationDate));

  if(loadedUser.token){
    this.user.next(loadedUser);
  }
  this.Join.JoinedUser = true;
  this.Router.navigate(['/LazyModule/joined']);
  const getEmail = JSON.parse(<any>localStorage.getItem('userData'));
  this.Test.currentmail = getEmail.email;
  console.log(this.Test.currentmail);
  this.Test.searchProperty();
  (<any>this.Join.LocStorage) = localStorage.getItem('UserId');
  this.Join.LocStorage = JSON.parse((<any>this.Join.LocStorage));
  this.Join.PrimepropertyChecker = (<any>this.Join.LocStorage).prime;
}






private handleAuth(email:string, userId:string, token:string, expiresIn:number){
  const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
  const user = new User(email, userId, token, expirationDate);
  this.user.next(user);
  this.autoLogout(expiresIn * 1000);
  localStorage.setItem('userData', JSON.stringify(user));
}





private handleError(errorRes: HttpErrorResponse){
    let errorMsg = 'An unknown error occured!';
    const errMM = errorRes.error.error.message;
    console.log(errMM);
    switch(errMM){
    case "EMAIL_EXISTS":
      {errorMsg = 'This email exists already!'
    break;}
    case "OPERATION_NOT_ALLOWED":
      {errorMsg = 'Password sign-in is disabled for this project!';
      break;}
    case "TOO_MANY_ATTEMPTS_TRY_LATER":
      {errorMsg = 'We have blocked all requests from this device due to unusual activity. Try again later!';
      break;}
    case "EMAIL_NOT_FOUND":
      {errorMsg = 'There is no user record corresponding to this identifier. The user may have been deleted!';
      break;}
    case "INVALID_PASSWORD":
      {errorMsg = 'The password is invalid or the user does not have a password!';
      break;}
    case "USER_DISABLED":
      {errorMsg = 'The user account has been disabled by an administrator!';
      break;}
      case "TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.":
      {errorMsg = 'Access to this account has been temporarily disabled due to many failed login attempts.';
      break;}
  }
  return throwError(()=>errorMsg);
}











user = new Subject<User>();
















}