import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Club } from 'src/app/shared/club.model';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private clubsCollection: AngularFireList<Club>;

  constructor(private db: AngularFireDatabase) { }

  getClubs(): Observable<Club[]> {

    this.clubsCollection = this.db.list<Club>('Club');
    // uso valueChanges perché mi bastano solo i dati senza i metadati
    return this.clubsCollection.valueChanges();
  }
}
