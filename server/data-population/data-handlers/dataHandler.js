
const uuid = require("uuid");
const { SpecializationTable } = require("../constants/tableNames");
const { savedb, addBulkData } = require("../db-queries/dbQueries");

module.exports.handleSpecializationData= (memberData) => {
    const specializationSet = new Set();

    memberData.forEach((dataItem) => {
        dataItem?.specialization?.forEach((spec) => {
            specializationSet.add(spec.specialization)
        })
    })

    const specializationObjects = Array.from(specializationSet).map(specialization => ({
        id: uuid.v4(),
        specialization,
        createdAt: new Date(),
        updatedAt: new Date()
    }));
    
    console.log('specializationObjects', specializationObjects)
    addBulkData(SpecializationTable, specializationObjects)
}