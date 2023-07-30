import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { isJoinUser } from '../userinterface/isJoined';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
@Injectable({providedIn:'root'})
export class TestComponent implements OnInit{
  constructor(private http:HttpClient, public Join:isJoinUser){}
Text = 'не сохранено';
IsActive = [{
  name: 'Sasha',
  BOG: 'miraVsego',
  age: 20
},{
  name: 'Mrazish',
  BOG: 'net',
  age: 20
}];
AccInfo = {};
secInf = {};








toggleFavourite(){
this.http.post('https://netflixwebserver-default-rtdb.europe-west1.firebasedatabase.app/test.json',this.IsActive).subscribe(
  responseData => {
    console.log(responseData);})}


ngOnInit(){
this.fetchingFavourite();
}


public fetchingFavourite(){
this.http.get('https://netflixwebserver-default-rtdb.europe-west1.firebasedatabase.app/test.json')
.pipe(map(resData =>{
  const postsArray = [];
  for(const key in resData){
    if(resData.hasOwnProperty(key)){
      postsArray.push({...resData[key as keyof typeof resData], id:key});
    }
  }
  this.AccInfo = postsArray;
  console.log(this.AccInfo);
  return postsArray;
}))
.subscribe(posts =>{
  console.log(posts);
  this.secInf = this.AccInfo;
  
})
}
currentmail = "";
searchProperty(){
  for(var i = 0;i<=((<any>this.secInf).length-1);i++){
// console.log((<any>this.secInf)[i]);
if((<any>this.secInf)[i].mail == this.currentmail){
const Userid = (<any>this.secInf)[i];
localStorage.setItem('UserId',JSON.stringify(Userid));
}
}
}



}
