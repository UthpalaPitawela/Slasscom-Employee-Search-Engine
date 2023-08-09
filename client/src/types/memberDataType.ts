
export interface MemberData{
    name?: string,
    designation?: string,
    currentWorkplace?:string,
    contactDetails: string,
    professionalInstitutes?: string,
    specialization?: string
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
    specialization: 'Specialization',
    profileSummary: 'Profile Summary'
}


