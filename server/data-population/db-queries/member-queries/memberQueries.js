"use strict";
const { savedb, getIdBySpecialization } = require("../dbQueries");
const {
  MemberTable,
  SpecializationTable,
  MemberSpecializationTable,
  ProfInstituteTable,
} = require("../../constants/tableNames");
const { createMemberData, createMemberSpecializedData, createProfInstituteData } = require("../../utils/dataUtils");

module.exports.insertDataIntoDynamoDB = async (data) => {
  const employeePromises = data.map(insertMemberIntoTable);
  await Promise.all(employeePromises);
};

const insertMemberIntoTable = async (employeeData) => {
  const {memberDataWithoutId, specialization, professionalInstitutes} = extractMemberDataWithoutId(employeeData);
  const memberData = createMemberData(memberDataWithoutId);
  await savedb(MemberTable, memberData);

  const specializationPromises = specialization.map((specializedItem) =>
    insertSpecializationTable(memberData.id, specializedItem)
  );
  await Promise.all(specializationPromises);
  
  const profInstitutePromises = professionalInstitutes.map((profInstitute) =>
    insertProfInstituteTable(memberData.id, profInstitute)
  );
  await Promise.all(profInstitutePromises);
};

const insertSpecializationTable = async ( memberId , specializedItem) => {
  const specializationId = await getIdBySpecialization(
    SpecializationTable,
    specializedItem.specialization
  );

  const memberSpecializedData = createMemberSpecializedData(memberId, specializationId);
  await savedb(MemberSpecializationTable, memberSpecializedData);
};

const insertProfInstituteTable = async ( memberId, profInstitute) => {
  const profInstituteData = createProfInstituteData(memberId, profInstitute);
  await savedb(ProfInstituteTable, profInstituteData);
};

const extractMemberDataWithoutId = (employeeData) => {
  const {
    id,
    specialization,
    professionalInstitutes,
    contactDetails,
    ...memberDataWithoutId
  } = employeeData;
  return {specialization, professionalInstitutes, memberDataWithoutId};
};
