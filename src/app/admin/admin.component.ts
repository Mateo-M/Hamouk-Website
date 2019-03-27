import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';

import { config } from '../services/staff.config';
import { StaffService } from '../services/staff.service';
import { StaffMember } from '../models/staff-member.model';

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

  constructor(private db: AngularFirestore, private staffService: StaffService) { }
  staff: Observable<any[]>;
  ngOnInit() {
    this.staff = this.db
      .collection(config.collection_endpoint)
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            // Get document data
            const data = a.payload.doc.data() as StaffMember;
            // Get document id
            const id = a.payload.doc.id;
            // Use spread operator to add the id to the document data
            return { id, ...data };
          });
        }));
  }

  onSubmit() {
    console.log(this.username.value);
  }
}
