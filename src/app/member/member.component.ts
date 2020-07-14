import { Component, OnInit } from '@angular/core';
import { MemberService } from '../service/member.service';
import { MemberExt } from '../shared/memberext.model';
import { Member } from '../shared/member.model';
import { DateAdapter } from '@angular/material';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(private memberService: MemberService, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('it-IT');
  }

  model: MemberExt = new MemberExt();

  ngOnInit() { }

  onSubmit() {
    this.create(this.model);
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
    // this.policyService.updatePolicy(policy);
  }

  delete(id: string) {
    // this.policyService.deletePolicy(id);
  }

}
