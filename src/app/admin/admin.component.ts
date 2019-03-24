import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(16),
    Validators.pattern('^[a-zA-Z0-9_]+$')
  ]);

  constructor(private staffService: StaffService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.staffService
      .getUsernameUuid(this.username.value)
      .subscribe());
  }
}
