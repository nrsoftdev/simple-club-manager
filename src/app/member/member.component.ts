import { Component, OnInit } from '@angular/core';
import { MemberService } from '../service/member.service';
import { MemberExt } from '../shared/memberext.model';
import { Member } from '../shared/member.model';
import { DateAdapter } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(private memberService: MemberService, private dateAdapter: DateAdapter<Date>, private router: Router) {
    this.dateAdapter.setLocale('it-IT');
  }

  model: MemberExt = new MemberExt();

  addId: string;
  editId: string;
  deleteId: string;

  ngOnInit() {

    this.editId = window.localStorage.getItem('editMemberId');
    this.deleteId = window.localStorage.getItem('deleteMemberId');

    console.log('this.editId ' + this.editId);
    console.log('this.deleteId ' + this.deleteId);


    if (!this.editId && !this.deleteId) {
      this.addId = '*';
    } else {
      if(this.editId) {
        this.memberService.getMember('1', this.editId, this.model);
      }
      if(this.deleteId) {
        this.memberService.getMember('1', this.deleteId, this.model);
      }

      this.addId = '';
    }


  }

  onSubmit() {
    if (this.editId) {
      this.model.id = this.editId;  // queste righe non dovrebbero servire !!!!
      this.update(this.model);
    } else if (this.deleteId) {
      this.model.id = this.deleteId; // queste righe non dovrebbero servire !!!!
      this.delete(this.model.id);
    } else {
      this.create(this.model);
    }
  }

  create(member: MemberExt) {
    console.log('member:');
    console.log(member);

    const newMember: Member = new Member();
    newMember.name = member.name;
    newMember.surname = member.surname;
    newMember.memberSince =
      `${member.memberSinceDate.getFullYear()}-${member.memberSinceDate.getMonth() + 1}-${member.memberSinceDate.getDate()}`;
    console.log('newMember:');
    console.log(newMember);
    this.memberService.addMember('1', newMember);

  }

  update(member: MemberExt) {
    this.memberService.upateMember('1', member);
  }

  delete(id: string) {
    this.memberService.deleteMember('1', id);
  }

}
