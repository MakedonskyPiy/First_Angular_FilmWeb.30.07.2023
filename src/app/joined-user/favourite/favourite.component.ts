import { Input,Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { isJoinUser } from 'src/app/userinterface/isJoined';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit{
  constructor(public Join:isJoinUser){}
  PodSerdechko1 = false;
  PodSerdechko1_1 = true;

  PodSerdechko2 = false;
  PodSerdechko2_1 = true;

  PodSerdechko3 = false;
  PodSerdechko3_1 = true;

  PodSerdechko4 = false;
  PodSerdechko4_1 = true;

  PodSerdechko5 = false;
  PodSerdechko5_1 = true;

  PodSerdechko6 = true;
  PodSerdechko6_1 = false;
  
  
  ngOnInit() {
    if((<any>this.Join.LocStorage).favourite.shoushenk){
      this.PodSerdechko1 = true;
    this.PodSerdechko1_1 = false;
    }
    if((<any>this.Join.LocStorage).favourite.starwars){
      this.PodSerdechko2 = true;
    this.PodSerdechko2_1 = false;
    }
    if((<any>this.Join.LocStorage).favourite.drive){
      this.PodSerdechko3 = true;
    this.PodSerdechko3_1 = false;
    }
    if((<any>this.Join.LocStorage).favourite.pirates){
      this.PodSerdechko4 = true;
    this.PodSerdechko4_1 = false;
    }
    if((<any>this.Join.LocStorage).favourite.green){
      this.PodSerdechko5 = true;
    this.PodSerdechko5_1 = false;
    }
  }  
  
  
  serdechkoToggle(){
    this.PodSerdechko1 = !this.PodSerdechko1;
    this.PodSerdechko1_1 = !this.PodSerdechko1_1;
    (<any>this.Join.LocStorage).favourite.shoushenk = !(<any>this.Join.LocStorage).favourite.shoushenk;
    localStorage.setItem('UserId',JSON.stringify((<any>this.Join.LocStorage)));
    this.Join.addServer(this.Join.LocStorage,(<any>this.Join.LocStorage).id);
  }
  serdechkoToggle2(){
    this.PodSerdechko2 = !this.PodSerdechko2;
    this.PodSerdechko2_1 = !this.PodSerdechko2_1;
    (<any>this.Join.LocStorage).favourite.starwars = !(<any>this.Join.LocStorage).favourite.starwars;
    localStorage.setItem('UserId',JSON.stringify((<any>this.Join.LocStorage)));
    this.Join.addServer(this.Join.LocStorage,(<any>this.Join.LocStorage).id);
  }
    serdechkoToggle3(){
      this.PodSerdechko3 = !this.PodSerdechko3;
    this.PodSerdechko3_1 = !this.PodSerdechko3_1;
    (<any>this.Join.LocStorage).favourite.drive = !(<any>this.Join.LocStorage).favourite.drive;
    localStorage.setItem('UserId',JSON.stringify((<any>this.Join.LocStorage)));
    this.Join.addServer(this.Join.LocStorage,(<any>this.Join.LocStorage).id);
  }
      serdechkoToggle4(){
        this.PodSerdechko4 = !this.PodSerdechko4;
    this.PodSerdechko4_1 = !this.PodSerdechko4_1;
    (<any>this.Join.LocStorage).favourite.pirates = !(<any>this.Join.LocStorage).favourite.pirates;
    localStorage.setItem('UserId',JSON.stringify((<any>this.Join.LocStorage)));
    this.Join.addServer(this.Join.LocStorage,(<any>this.Join.LocStorage).id);    
  }
        serdechkoToggle5(){
          this.PodSerdechko5 = !this.PodSerdechko5;
    this.PodSerdechko5_1 = !this.PodSerdechko5_1;
    (<any>this.Join.LocStorage).favourite.green = !(<any>this.Join.LocStorage).favourite.green;
    localStorage.setItem('UserId',JSON.stringify((<any>this.Join.LocStorage)));
    this.Join.addServer(this.Join.LocStorage,(<any>this.Join.LocStorage).id); 
  }
          serdechkoToggle6(){
            alert('IT`S NOT A BUG:)');
            }
  
            
  
            addActive = '';
            addActive2 = '';
            addActive3 = '';
            addActive4 = '';
            addActive5 = '';
            addActive6 = '';



            PrimeCheck(){
              return (<any>this.Join.LocStorage).prime;
            }
 
            AddParametrs(aa:string){
              localStorage.setItem('CurrentFilm',aa);
              }

}
