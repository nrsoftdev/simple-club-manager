import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Member } from '../shared/member.model';
import { Observable } from 'rxjs';
import { MemberExt } from '../shared/memberext.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private membersCollection: AngularFirestoreCollection<Member>;

  constructor(private firestore: AngularFirestore) { }


  loadAll(clubId: string): Observable<Member[]> {

    this.membersCollection = this.firestore.collection<Member>('Club/' + clubId + '/Members');
    return this.membersCollection.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.doc.id, ...c.payload.doc.data() }))
      )
    );

  }

  addMember(clubId: string, member: Member) {
    console.log(member);
    return this.membersCollection.add({name:member.name, surname: member.surname, memberSince: member.memberSince})
    .then(_ => console.log('addMember - ok'))
    .catch(error => console.log(`add memeber error ${error}`));
  }
}
