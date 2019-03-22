import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap, filter } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public show = false;
  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
    this.auth.user$.pipe(
      map(user => !!user),
      filter((loggedIn) => loggedIn),
      take(1),
      tap(loggedIn => {
        if (loggedIn) {
          console.log('Already logged in');
          this.router.navigate(['/']);
        }
      })
    ).subscribe();
  }

}
