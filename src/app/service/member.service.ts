import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Member } from '../shared/member.model';
import { Observable } from 'rxjs';
import { MemberExt } from '../shared/memberext.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private membersCollection: AngularFirestoreCollection<Member>;

  constructor(private firestore: AngularFirestore, private router: Router) { }


  loadAll(clubId: string): Observable<Member[]> {

    this.membersCollection = this.firestore.collection<Member>('Club/' + clubId + '/Members');

    return this.membersCollection.snapshotChanges().pipe(
      map(changes =>
        changes.map(
          //c => ({ key: c.payload.doc.id, ...c.payload.doc.data() })
          function(c) {
            console.log(`c.payload.doc.id ${c.payload.doc.id}`);
            return { id: c.payload.doc.id, ...c.payload.doc.data() };
          }
        )
      )
    );

  }

  getMember(clubId: string, memberId: string, member: MemberExt) {

    this.membersCollection.doc(memberId).get().subscribe(
      member_ => member.set(member_.data()));
  }

  addMember(clubId: string, member: Member) {

    const id = this.firestore.createId();

    const router = this.router;

    const objRef = this.membersCollection.doc(id).set( {name: member.name, surname: member.surname, memberSince: member.memberSince})
    .then(function() { 
        console.log('addMember - ok ' /* + docRef.id */);
        router.navigate(['members']);
      }
      )
    .catch(error => console.log(`add memeber error ${error}`));
  }

  upateMember(clubId: string, member: MemberExt) {
    const router = this.router;
    console.log(`upateMember ${member.id}`);
    this.membersCollection.doc(member.id).update(
      {name: member.name, surname: member.surname}
    ).then(function() {
      console.log("Document successfully updated!");
      router.navigate(['members']);
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });  

  }

  deleteMember(clubId: string, memberId: string) {
    const router = this.router;
    console.log(`deleteMember ${memberId}`);
    this.membersCollection.doc(memberId).delete().then(function() {
      console.log("Document successfully deleted!");
      router.navigate(['members']);
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });  
  }

}
