import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Club } from 'src/app/shared/club.model';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private firestore: AngularFirestore) { }

  getClubs() {
    return this.firestore.collection('Club').snapshotChanges();
}
}
