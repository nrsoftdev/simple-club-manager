import { Member } from './member.model';

export class MemberExt extends Member {
    memberSinceDate: Date;

    set(data: any) {
        if (data.id) {
            this.id = data.id;
        }
        this.name = data.name;
        this.surname = data.surname;
        this.memberSince = data.memberSince;

        if (!data.memberSince) {
            this.memberSinceDate = new Date(1900, 1, 1);
        } else {
            const parts = data.memberSince.split('-');
            this.memberSinceDate = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
        }
    }
}
