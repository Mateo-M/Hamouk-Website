import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { config } from './staff.config';
import { StaffMember } from '../models/staff-member.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  staff: AngularFirestoreCollection<StaffMember>;
  private staffDoc: AngularFirestoreDocument<StaffMember>;

  constructor(private db: AngularFirestore) {
    this.staff = db.collection<StaffMember>(config.collection_endpoint);
  }

  addTask(staff) {
    this.staff.add(staff);
  }

  updateTask(id, update) {
    this.staffDoc = this.db.doc<StaffMember>(`${config.collection_endpoint}/${id}`);
    this.staffDoc.update(update);
  }

  deleteTask(id) {
    this.staffDoc = this.db.doc<StaffMember>(`${config.collection_endpoint}/${id}`);
    this.staffDoc.delete();
  }
}
