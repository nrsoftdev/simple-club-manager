import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ClubService } from '../service/club.service';
import { Club } from '../shared/club.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Member } from '../shared/member.model';
import { MatTableDataSource } from '@angular/material';
import { registerLocaleData } from '@angular/common';

import { MemberExt } from '../shared/memberext.model';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit, AfterContentInit  {

  membersValues: Observable<Member[]>;

  members: MemberExt[] = [];


  dataSource: MatTableDataSource<Member>;

  displayedColumns: string[] = ['name', 'surname', 'memberSince'];
  clubs: Observable<Club[]>;


  ngAfterContentInit(): void {
    this.membersValues.subscribe((members) => {
      for (const member of members) {

        const newMember = new MemberExt();
        newMember.name = member.name;
        newMember.surname = member.surname;


        if(!member.memberSince) {
          newMember.memberSinceDate = new Date(1900,1,1);
        } else {
          const parts = member.memberSince.split('-');
          newMember.memberSinceDate = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
          console.log(`Data  ${parts}`);
        }

        this.members.push(newMember);
      }
      this.dataSource = new MatTableDataSource<MemberExt>(this.members);
  });
 }


  constructor(private memberService: MemberService, private clubService: ClubService) { }

  ngOnInit() {

    this.membersValues = this.memberService.loadAll('1');
    this.clubs = this.clubService.getClubs();


  }

}
