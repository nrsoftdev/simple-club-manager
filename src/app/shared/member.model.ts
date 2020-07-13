/** Porco dio */
export class Member {

    memberSince: string;
    memberSinceDate: Date;

    name: string;
    surname: string;

    /*
    memberSinceDate() : Date
    {
        console.log("Porco dio");
        if(!this.memberSince)
            return new Date(1900,1,1);
        let parts = this.memberSince.split("-");
        return new Date(Number(parts[2]), Number(parts[1]), Number(parts[0]));
    }*/
}
