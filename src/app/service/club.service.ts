import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Club } from 'src/app/shared/club.model';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private clubsCollection: AngularFirestoreCollection<Club>;

  constructor(private firestore: AngularFirestore) { }

  getClubs(): Observable<Club[]> {
    this.clubsCollection = this.firestore.collection<Club>('Club');
    return this.clubsCollection.valueChanges();
  }
}
