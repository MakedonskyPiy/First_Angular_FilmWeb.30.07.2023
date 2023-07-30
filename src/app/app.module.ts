import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FAQComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { SafePipe } from './pipe/safe.pipe';
import { CotologComponent } from './joined-user/cotolog/cotolog.component';
import { FavouriteComponent } from './joined-user/favourite/favourite.component';
import { MainComponent } from './main/main.component';
import { MaincontComponent } from './main/maincont/maincont.component';
import { ChizesComponent } from './main/chizes/chizes.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { OptionsComponent } from './options/options.component';
import { FilmPageComponent } from './film-page/film-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


const routes:Routes = [
  {path: '', component:MainComponent},
  {path: 'LazyModule', loadChildren: ()=> import('./userinterface/lazyLoading/lazy.module').then(m => m.LazyModule)},
  {path: '**', component:MainComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    FAQComponent,
    ContactComponent,
    MainComponent,
    MaincontComponent,
    ChizesComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    OptionsComponent,
    SafePipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
