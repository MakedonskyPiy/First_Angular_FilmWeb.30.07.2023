import { Component, OnInit } from '@angular/core';
import { AuthService } from '../userinterface/Auth.service';
import { Injectable } from '@angular/core';
import { TestComponent } from '../test/test.component';
import { isJoinUser } from '../userinterface/isJoined';
import { CotologComponent } from '../joined-user/cotolog/cotolog.component';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})


@Injectable()
export class OptionsComponent implements OnInit{
constructor(private authService: AuthService,public Test:TestComponent,public Join:isJoinUser, public cata:CotologComponent, private router:Router){}
LocalStorage = {};

PremiumAccount:any
ngOnInit(){
  (<any>this.LocalStorage) = localStorage.getItem('UserId');
  this.LocalStorage = JSON.parse((<any>this.LocalStorage));
  this.PremiumAccount = (<any>this.LocalStorage).prime;
}

ToggleonPremium(){
this.PremiumAccount = !this.PremiumAccount;
(<any>this.LocalStorage) = localStorage.getItem('UserId');
this.LocalStorage = JSON.parse((<any>this.LocalStorage));
(<any>this.LocalStorage).prime = this.PremiumAccount;
localStorage.setItem('UserId',JSON.stringify(this.LocalStorage));
this.Join.addServer(this.LocalStorage,(<any>this.LocalStorage).id);
this.Join.PrimepropertyChecker = !this.Join.PrimepropertyChecker;
}

onLogout(){
  this.authService.logout();
}


GOback(){
  console.log('GOBACK!');
  this.router.navigate(['/LazyModule/joined'])
}



}
