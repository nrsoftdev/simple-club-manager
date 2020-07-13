import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ClubService } from '../service/club.service';
import { Club } from '../shared/club.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Member } from '../shared/member.model';
import { MatTableDataSource } from '@angular/material';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit, AfterContentInit  {

  ngAfterContentInit(): void {
    this.membersValues.subscribe((members)=>
    {
    for(let member of members)
    { 
      
      let newMember = new Member();
      newMember.name = member.name;
      newMember.surname = member.surname;


      if(!member.memberSince)
        newMember.memberSinceDate = new Date(1900,1,1);
      else {
        let parts = member.memberSince.split("-");
        newMember.memberSinceDate = new Date(Number(parts[0]), Number(parts[1])-1, Number(parts[2]));
        console.log("Data " + parts);
        
      }

      this.members.push(newMember);
    }
  
    this.dataSource = new MatTableDataSource<Member>(this.members);
  
  });
    
  }
  private clubsCollection: AngularFirestoreCollection<Club>;
  clubs: Observable<Club[]>;

  private membersCollection: AngularFirestoreCollection<Member>;
  membersValues: Observable<Member[]>;

  members: Member[] = [];

  dataSource: MatTableDataSource<Member>;

  displayedColumns: string[] = ['name', 'surname', 'memberSince'];


  constructor(private afs: AngularFirestore) { }

  ngOnInit() {

    registerLocaleData(localeIt, 'it-IT');

    this.clubsCollection = this.afs.collection<Club>('Club');
    this.clubs = this.clubsCollection.valueChanges();

    this.membersCollection = this.afs.collection<Member>('Club/1/Members');
    this.membersValues = this.membersCollection.valueChanges();

  }

}
