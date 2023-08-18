const Joi = require('joi');


module.exports.getMemberDataValidated = () => {
    const schema = Joi.object({
        nic: Joi.string(),
        fullName:Joi.string(),
        designation:Joi.string(),
        currentWorkplace:Joi.string(),
        profileSummary:Joi.string(),
        id:Joi.string().uuid({ version: ['uuidv4'] }),
        createdAt:Joi.date().iso(),
        updatedAt:Joi.date().iso()

      });
    return schema;
}