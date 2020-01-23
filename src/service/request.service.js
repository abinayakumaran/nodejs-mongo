const request = require('../model/request.model');
const baseDao = require('../dao/base.dao');
const response = require('../utils/response');
const moment = require('moment');

exports.createRequest = async (body) => {
    let createRequest = await baseDao.create(request, body);
    if (!createRequest) {
        return response.badRequest();
    }
    return response.success(createRequest);
};

exports.getAllRequest = async () => {
    let getAllRequests = await baseDao.findAll(request);
    if (!getAllRequests) {
        return response.notFound();
    }
    for (let i = 0; i < getAllRequests.length; i++) {
        let startDate = moment(getAllRequests[i].createdAt).format('DD/MM/YYYY HH:mm:ss');
        let endDate = moment(new Date(moment.utc().format())).format('DD/MM/YYYY HH:mm:ss');
        let diff = moment.utc(moment(endDate, 'DD/MM/YYYY HH:mm:ss').diff(moment(startDate, 'DD/MM/YYYY HH:mm:ss'))).format('HH:mm:ss');
        let hour = diff.split(':')[0];
        if (Number(hour) >= 8) {
            if (!(String(getAllRequests[i].status) === 'completed' && String(getAllRequests[i].status) === 'autoclose')) {
                getAllRequests[i].status = 'autoclose';
                let statusUpdatedRes = await baseDao.findOneAndUpdate(request, getAllRequests[i]._id, getAllRequests[i]);
                getAllRequests[i] = statusUpdatedRes;
            }
        }
    }
    return response.success(getAllRequests);
};

exports.getRequestByParams = async (params) => {
    let findRequests = await baseDao.findByParams(request, params);
    if (!findRequests) {
        return response.notFound();
    }
    for (let i = 0; i < findRequests.length; i++) {
        let startDate = moment(findRequests[i].createdAt).format('DD/MM/YYYY HH:mm:ss');
        let endDate = moment(new Date(moment.utc().format())).format('DD/MM/YYYY HH:mm:ss');
        let diff = moment.utc(moment(endDate, 'DD/MM/YYYY HH:mm:ss').diff(moment(startDate, 'DD/MM/YYYY HH:mm:ss'))).format('HH:mm:ss');
        let hour = diff.split(':')[0];
        if (Number(hour) >= 8) {
            if (!(String(findRequests[i].status) === 'completed' && String(findRequests[i].status) === 'autoclose')) {
                findRequests[i].status = 'autoclose';
                let statusUpdatedRes = await baseDao.findOneAndUpdate(request, findRequests[i]._id, findRequests[i]);
                findRequests[i] = statusUpdatedRes;
            }
        }
    }
    return response.success(findRequests);
};

exports.updateRequest = async (id, body) => {
    let updateRequests = await baseDao.findOneAndUpdate(request, id, body);
    if (!updateRequests) {
        return response.notFound();
    }
    return response.success(updateRequests);
};
