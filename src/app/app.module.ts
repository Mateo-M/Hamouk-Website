import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule, FunctionsRegionToken } from '@angular/fire/functions';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { StaffComponent } from './staff/staff.component';
import { AdminComponent } from './admin/admin.component';

import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';

import { environment } from '../environments/environment';

const config = {
  apiKey: 'AIzaSyDa5HuDzQ8e5GMaimCOjIUHG1pFt_8Wi8c',
  authDomain: 'hamouk-website.firebaseapp.com',
  databaseURL: 'https://hamouk-website.firebaseio.com',
  projectId: 'hamouk-website',
  storageBucket: 'hamouk-website.appspot.com',
  messagingSenderId: '95458672379'
};

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
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    StatusComponent,
    AboutComponent,
    StaffComponent,
    AdminComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    HttpClientModule,
    NgxSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule
  ],
  providers: [
    { provide: FunctionsRegionToken, useValue: 'europe-west1' },
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
