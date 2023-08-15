"use strict";
const uuid = require("uuid");
const {
  checkMemberExist,
  checkSpecializationExist,
  checkProfInstituteExist,
} = require("../validityChecks");
const { savedb } = require("../dbQueries");
const {
  MemberTable,
  SpecializationTable,
  MemberSpecializationTable,
  ProfInstituteTable,
  MemberProfInstitueTable,
} = require("../../constants/tableNames");

module.exports.insertDataIntoDynamoDB = async (data) => {
  const employeePromises = data.map(insertMemberIntoTable);
  await Promise.all(employeePromises);
};

async function insertMemberIntoTable(employeeData) {
  const {
    id,
    specialization,
    professionalInstitutes,
    contactDetails,
    ...memberDataWithoutId
  } = employeeData;
  const isMemberExist = await checkMemberExist(memberDataWithoutId.nic);
  if (!isMemberExist.exists) {
    const memberData = {
      ...memberDataWithoutId,
      id: uuid.v4(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    savedb(MemberTable, memberData);
    const specializationPromises = specialization.map((specializedItem ) => 
      insertSpecializationTable (specializedItem, memberData.id)
    );

    await Promise.all(specializationPromises);
    const profInstitutePromises = professionalInstitutes.map((profInstitute ) => 
      insertProfInstituteTable (profInstitute, memberData.id)
    );

    await Promise.all(profInstitutePromises);
  }
}

async function insertSpecializationTable(specializedItem, memberId) {
  let specializationId = ";";
  const { exists, savedSpecializationId } = await checkSpecializationExist(
    specializedItem
  );
  if (!exists) {
    const specializedData = {
      id: uuid.v4(),
      specialization: specializedItem.specialization,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    savedb(SpecializationTable, specializedData);
    specializationId = savedSpecializationId
      ? savedSpecializationId
      : specializedData.id;
  }

  const memberSpecializedData = {
    id: uuid.v4(),
    memberId: memberId,
    specializationId: specializationId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  savedb(MemberSpecializationTable, memberSpecializedData);
}
async function insertProfInstituteTable(profInstitute, memberId) {
  let profInstituteId = ";";
  const { exists, savedProfInstituteId } = await checkProfInstituteExist(
    profInstitute
  );
  if (!exists) {
    const profInstituteData = {
      id: uuid.v4(),
      institute: profInstitute.name,
      title: profInstitute.title,
      duration: profInstitute.duration,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    savedb(ProfInstituteTable, profInstituteData);
    profInstituteId = savedProfInstituteId
      ? savedProfInstituteId
      : profInstituteData.id;
  }

  const memberProfInstituteData = {
    id: uuid.v4(),
    memberId: memberId,
    specializationId: profInstituteId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  savedb(MemberProfInstitueTable, memberProfInstituteData);
}
