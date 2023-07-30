import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})

export class FAQComponent {
  @Input() width = 16;
  @Input() height = 16;
  proshl = 0; //1
  seych = 0; //1
  HideMenu = 0; //1
  HideMenuNumber:number = 0; //1 ##0
  HideMenuNumberZ(x:number){
    if(this.HideMenuNumber != 0 && this.seych != this.proshl){
      this.HideMenuNumber--;
      this.HideMenu = this.seych;
      
    }else if(this.HideMenuNumber != 0 && this.seych == this.proshl)
    {
      this.HideMenuNumber--;
      this.HideMenu = 0;
    }  
    else{
      this.HideMenuNumber++;
    }
  }
  ChooseMenu(x:number){
    this.HideMenu = x;
  }
}
