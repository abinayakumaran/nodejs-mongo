/**
 * @param schema
 * @param params
 */
module.exports.getButlersByParams = async (schema, params) => {
    try {
        return await schema.aggregate([
            { $match: { butlerId: Number(params.butlerId) } },
            {
                $lookup: {
                    from: 'requests', // collection to join
                    localField: 'butlerId',//field from the input documents
                    foreignField: 'butlerId',//field from the documents of the "from" collection
                    as: 'requests'// output array field
                }
            }]);
        // eslint-disable-next-line no-empty
    } catch (err) { }
};

/**
 * @param schema
 * @param params
 */
module.exports.getAllButlers = async (schema) => {
    try {
        return await schema.aggregate([
            {
                $lookup: {
                    from: 'requests', // collection to join
                    localField: 'butlerId',//field from the input documents
                    foreignField: 'butlerId',//field from the documents of the "from" collection
                    as: 'requests'// output array field
                }
            }]);
        // eslint-disable-next-line no-empty
    } catch (err) { }
};