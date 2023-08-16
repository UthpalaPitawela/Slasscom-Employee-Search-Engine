"use strict";
const uuid = require("uuid");
const {
  checkMemberExist,
  checkSpecializationExist,
  checkProfInstituteExist,
} = require("../validityChecks");
const { savedb, getIdBySpecialization } = require("../dbQueries");
const {
  MemberTable,
  SpecializationTable,
  MemberSpecializationTable,
  ProfInstituteTable,
  MemberProfInstitueTable,
} = require("../../constants/tableNames");
const { getCurrentDate } = require("../../utils/dateUtils");

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
      createdAt: getCurrentDate(),
      updatedAt: getCurrentDate(),
    };
    await savedb(MemberTable, memberData);
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
  const specializationId = await getIdBySpecialization(SpecializationTable, specializedItem.specialization)
  console.log('specializationId', specializationId)
  const memberSpecializedData = {
    id: uuid.v4(),
    memberId: memberId,
    specializationId: specializationId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  await savedb(MemberSpecializationTable, memberSpecializedData);
}


async function insertProfInstituteTable(profInstitute, memberId) {
  // let profInstituteId = "";
  // const { exists, savedProfInstituteId } = await checkProfInstituteExist(
  //   profInstitute
  // );
  // if (!exists) {
    const profInstituteData = {
      id: uuid.v4(),
      institute: profInstitute.name,
      title: profInstitute.title,
      duration: profInstitute.duration,
      createdAt: getCurrentDate(),
      updatedAt: getCurrentDate(),
    };

    await savedb(ProfInstituteTable, profInstituteData);
    // profInstituteId = savedProfInstituteId
    //   ? savedProfInstituteId
    //   : profInstituteData.id;
  // }

  const memberProfInstituteData = {
    id: uuid.v4(),
    memberId: memberId,
    specializationId: profInstituteData.id,
    createdAt: getCurrentDate(),
    updatedAt: getCurrentDate(),
  };
  await savedb(MemberProfInstitueTable, memberProfInstituteData);
}
