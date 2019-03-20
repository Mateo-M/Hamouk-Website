import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    NgbModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    HttpClientModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
