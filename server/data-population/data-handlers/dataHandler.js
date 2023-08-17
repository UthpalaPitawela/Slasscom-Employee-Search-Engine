const uuid = require("uuid");
const { SpecializationTable } = require("../constants/tableNames");
const { addBulkData, getIdBySpecialization } = require("../db-queries/dbQueries");

module.exports.handleSpecializationData = async (memberData) => {
  const specializationSet = new Set();
  for (dataItem of memberData){
    for (spec of dataItem.specialization) {
        const id = await getIdBySpecialization(SpecializationTable,spec.specialization);
        if (!id) {
            specializationSet.add(spec.specialization);
        }
    }

};
  const specializationObjects = Array.from(specializationSet).map(
      (specialization) => ({
          id: uuid.v4(),
          specialization,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
        );
        console.log('specializationObjects', specializationObjects)
  if (specializationObjects  && specializationObjects.length>0) {
      await addBulkData(SpecializationTable, specializationObjects);

  }

};
