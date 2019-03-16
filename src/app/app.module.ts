import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  /*{
    path: 'status',
    component: StatusComponent
  },*/
  {
    path: 'about',
    component: AboutComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatusComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    HttpClientModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
