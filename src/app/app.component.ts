import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AngularFireFunctions } from '@angular/fire/functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title: 'Hamouk';
  constructor(private spinner: NgxSpinnerService, private fns: AngularFireFunctions) { }
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2500);

    const data$ = this.fns.httpsCallable('getIp')({});
    data$.subscribe((ip: string) => {
      console.log(ip);
    });

  }


}
