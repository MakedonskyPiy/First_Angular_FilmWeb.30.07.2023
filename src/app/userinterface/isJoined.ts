import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class isJoinUser{
    constructor(private http:HttpClient){}
    JoinedUser = false;
    EmailAdress = '';
    AccoutObj = {
        mail: this.EmailAdress,
        prime: false,
        favourite:{
            fightclub : true,
            shoushenk : false,
            starwars : false,
            drive : false,
            pirates : false,
            green : false
            }
    }

addMember(){
    this.http.post('https://netflixwebserver-default-rtdb.europe-west1.firebasedatabase.app/test.json',this.AccoutObj).subscribe(
        responseData => {
          console.log(responseData);})}





LocStorage = {};



PrimepropertyChecker = false;




addServer(someObj:any, scndValue:any){
this.http.put('https://netflixwebserver-default-rtdb.europe-west1.firebasedatabase.app/test/'+scndValue+'.json',someObj).subscribe(
    responseData => {
        console.log(responseData);})}






          









}


