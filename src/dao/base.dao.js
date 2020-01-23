/* eslint-disable no-empty */

/**
 * create document
 * @param schema
 * @param body
 */
exports.create = async (schema, body) => {
    try {
        return await schema.create(body);
    } catch (err) { }
};
/**
 * get all documents
 * @param schema
 */
exports.findAll = async (schema) => {
    try {
        return await schema.find().sort({ createdAt: -1 });
    } catch (err) { }
};
/**
  * find by param generic for model
  * @param schema
  * @param params
  **/
exports.findByParams = async (schema, params) => {
    try {
        return await schema.find(params).sort({ createdAt: -1 });
    } catch (err) { }
};
/**
  * find one and update generic model
  * @param schema
  * @param id
  * @param body
  **/
exports.findOneAndUpdate = async (schema, id, body) => {
    try {
        const user = await schema.findByIdAndUpdate(id, { $set: body },
            { upsert: false, new: false, runValidators: true, context: 'query' },
            function (err, result) {
                if (err) { }
                else {
                    return result;
                }
            });
        return user;
    } catch (err) { }
};