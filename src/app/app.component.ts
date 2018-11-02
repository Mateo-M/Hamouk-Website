import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: 'Hambouk';
  constructor(private spinner: NgxSpinnerService) { }
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {
        /** spinner ends after 2 seconds */
        this.spinner.hide();
    }, 2500);
  }
}
