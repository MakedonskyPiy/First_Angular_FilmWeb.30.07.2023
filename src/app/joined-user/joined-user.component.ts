import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isJoinUser } from '../userinterface/isJoined';
import { CotologComponent } from './cotolog/cotolog.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-joined-user',
  templateUrl: './joined-user.component.html',
  styleUrls: ['./joined-user.component.css']
})

export class JoinedUserComponent implements OnInit{

  constructor(private router:Router ,public Join:isJoinUser,public cata:CotologComponent){
   console.log(this.Join.LocStorage);
   console.log(this.Join.PrimepropertyChecker);
  }

  gotooptions(){
    this.router.navigate(['/LazyModule/options'])
  }

ngOnInit(): void {
  
  
}


cataloge = true;
favourite = false;
cataClass = 'active';
favoClass = ''
clickOnCatalog(){
  this.cataloge = true;
  this.favourite = false;
  this.cataClass = 'active';
  this.favoClass = ''
}
clickOnFavo(){
  this.cataloge = false;
  this.favourite = true;
  this.cataClass = '';
  this.favoClass = 'active';
}
}
