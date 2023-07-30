import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmPageComponent } from 'src/app/film-page/film-page.component';
import { JoinedUserComponent } from 'src/app/joined-user/joined-user.component';
import { LoginpageComponent } from 'src/app/loginpage/loginpage.component';
import { OptionsComponent } from 'src/app/options/options.component';
import { RegistrComponent } from 'src/app/registr/registr.component';
import { AuthGuard } from '../Auth.guard';
import { TestComponent } from 'src/app/test/test.component';
import { FormsModule } from '@angular/forms';
import { LoadingSpinerComponent } from 'src/app/loadingSpiner/loadingSpin.component';
import { CommonModule } from '@angular/common';
import { CotologComponent } from 'src/app/joined-user/cotolog/cotolog.component';
import { FavouriteComponent } from 'src/app/joined-user/favourite/favourite.component';
import { SafePipe } from 'src/app/pipe/safe.pipe';
import { MainComponent } from 'src/app/main/main.component';



@NgModule({
  declarations: [
    LoginpageComponent,
    LoadingSpinerComponent,
    RegistrComponent,
    JoinedUserComponent,
    CotologComponent,
    FavouriteComponent,
    FilmPageComponent,
  ],
  imports: [
   CommonModule,
   FormsModule,
   OptionsComponent,
   SafePipe,
   RouterModule.forChild([
    { path: 'loginPage', component: LoginpageComponent},
    { path: 'registerPage', component:RegistrComponent},
    
    { 
    path: 'joined',
    component:JoinedUserComponent,
    canActivate:[AuthGuard]
    },
    { path: 'options',
    component:OptionsComponent,
     canActivate:[AuthGuard],
    },
    { path: 'filmPage',
    component:FilmPageComponent,
     canActivate:[AuthGuard],
    },
    {
      path: 'test',
      component:TestComponent
    },
    
   ])
  ],
  providers: [LazyModule],
  bootstrap: []
})
export class LazyModule { }
