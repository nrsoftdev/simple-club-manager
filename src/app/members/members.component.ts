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
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit, AfterContentInit  {

  selectedOption = '';

  membersValues: Observable<Member[]>;

  members: MemberExt[] = [];


  dataSource: MatTableDataSource<Member>;

  displayedColumns: string[] = ['name', 'surname', 'memberSince', 'actions'];
  clubs: Observable<Club[]>;


  ngAfterContentInit(): void {
    this.membersValues.subscribe((members) => {
      let selectedOption = '';
      for (const member of members) {

        if (selectedOption === '') {
          selectedOption = member.name;
        }

        const newMember = new MemberExt();
        newMember.set(member);
        this.members.push(newMember);
      }
      this.dataSource = new MatTableDataSource<MemberExt>(this.members);
      this.selectedOption = selectedOption;
  });
 }


  constructor(private memberService: MemberService, private clubService: ClubService, private router: Router) { }

  ngOnInit() {

    this.membersValues = this.memberService.loadAll('1');
    this.clubs = this.clubService.getClubs();

    window.localStorage.removeItem('deleteMemberId');
    window.localStorage.removeItem('editMemberId');


  }

  editMember(member: MemberExt) {
    console.log('editMember');
    console.log(member);
    window.localStorage.removeItem('editMemberId');
    window.localStorage.setItem('editMemberId', member.id);
    this.router.navigate(['member']);
  }

  deleteMember(member: MemberExt) {
    console.log('deleteMember');
    console.log(member);
    window.localStorage.removeItem('deleteMemberId');
    window.localStorage.setItem('deleteMemberId', member.id);
    this.router.navigate(['member']);
  }


}
