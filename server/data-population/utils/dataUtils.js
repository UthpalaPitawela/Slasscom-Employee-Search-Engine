const uuid = require("uuid");
const { getCurrentDate } = require("./dateUtils");
module.exports.createMemberData = (memberDataWithoutId) => {
  return {
    ...memberDataWithoutId,
    id: uuid.v4(),
    createdAt: getCurrentDate(),
    updatedAt: getCurrentDate(),
  };
};
module.exports.createMemberSpecializedData = (memberId, specializationId) => {
  return {
    id: uuid.v4(),
    memberId: memberId,
    specializationId: specializationId,
    createdAt: getCurrentDate(),
    updatedAt: getCurrentDate(),
  };
};
module.exports.createProfInstituteData = (memberId, profInstitute) => {
  return {
    id: uuid.v4(),
    memberId: memberId,
    institute: profInstitute.name,
    title: profInstitute.title,
    duration: profInstitute.duration,
    createdAt: getCurrentDate(),
    updatedAt: getCurrentDate(),
  };
};
