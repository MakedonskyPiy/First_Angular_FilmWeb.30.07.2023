import { Component, OnInit } from '@angular/core';
import { AuthService } from './userinterface/Auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public authservice:AuthService){}
  ngOnInit(){
   this.authservice.autoLogin();
}  
}
