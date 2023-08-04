import { MemberData } from "./memberDataType";

export type MemberPropType = {
    resultLabel: keyof MemberData; 
    resultItem: string | number; 
}