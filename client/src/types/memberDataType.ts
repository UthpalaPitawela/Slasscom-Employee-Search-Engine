
export type MemberData = {
    name: string,
    designation: string,
    workplace:string,
    personalEmail: string,
    personalContactNumber: number,
    officialEmail: string,
}

interface MemberResultsTitles {
    [key: string]: string;
  }

export const MemberResultsTitles: MemberResultsTitles = {
    designation: 'Designation',
    workplace:'Current Workplace',
    personalEmail:'Personal Email',
    personalContactNumber:'Personal Contact Number',
    officialEmail:'Official Email',
}


