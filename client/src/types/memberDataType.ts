
export type MemberData = {
    name: string,
    designation?: string,
    currentWorkplace?:string,
    personalEmail?: string,
    personalContactNumber?: number,
    officialEmail?: string,
    nic?: string,
    id?: string,
    createdAt?: any,
    updatedAt?: any,
    __typename?: any
}

interface MemberResultsTitles {
    [key: string]: string;
  }

export const MemberResultsTitles: MemberResultsTitles = {
    designation: 'Designation',
    currentWorkplace:'Current Workplace',
    personalEmail:'Personal Email',
    personalContactNumber:'Personal Contact Number',
    officialEmail:'Official Email',
}


