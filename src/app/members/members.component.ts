import { Component, OnInit } from '@angular/core';
import { ClubService } from '../service/club.service';
import { Club } from '../shared/club.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Member } from '../shared/member.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  private clubsCollection: AngularFirestoreCollection<Club>;
  clubs: Observable<Club[]>;

  private membersCollection: AngularFirestoreCollection<Member>;
  members: Observable<Member[]>;


  constructor(private afs: AngularFirestore) { }

  ngOnInit() {

    this.clubsCollection = this.afs.collection<Club>('Club');
    this.clubs = this.clubsCollection.valueChanges();

    this.clubs.subscribe((club) => {
      console.log(JSON.stringify(club));
    });

    this.membersCollection = this.afs.collection<Member>('Club/1/Members');
    this.members = this.membersCollection.valueChanges();

    this.members.subscribe((members) => {
      console.log(JSON.stringify(members));
    });
 
  }

}
