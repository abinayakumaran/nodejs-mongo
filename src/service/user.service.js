const user = require('../model/user.model');
const request = require('../model/request.model');
const baseDao = require('../dao/base.dao');
const butlerReq = require('../dao/butler.request.dao');
const response = require('../utils/response');
const moment = require('moment');

exports.createUser = async (body) => {
    let createUser = await baseDao.create(user, body);
    if (!createUser) {
        return response.badRequest();
    }
    return response.success(createUser);
};

exports.getAllUser = async () => {
    let butlers = await butlerReq.getAllButlers(user);
    if (!butlers) {
        return response.notFound();
    }
    for (let i = 0; i < butlers.length; i++) {
        for (let j = 0; j < butlers[i].requests.length; j++) {
            let startDate = moment(butlers[i].requests[j].createdAt).format('DD/MM/YYYY HH:mm:ss');
            let endDate = moment(new Date(moment.utc().format())).format('DD/MM/YYYY HH:mm:ss');
            let diff = moment.utc(moment(endDate, 'DD/MM/YYYY HH:mm:ss').diff(moment(startDate, 'DD/MM/YYYY HH:mm:ss'))).format('HH:mm:ss');
            let hour = diff.split(':')[0];
            if (Number(hour) >= 8) {
                if (!(String(butlers[i].requests[j].status) === 'completed' && String(butlers[i].requests[j].status) === 'autoclose')) {
                    butlers[i].requests[j].status = 'autoclose';
                    let statusUpdatedRes = await baseDao.findOneAndUpdate(request, butlers[i].requests[j]._id, butlers[i].requests[j]);
                    butlers[i].requests[j] = statusUpdatedRes;
                }
            }
        }
    }
    return response.success(butlers);
};

exports.getUserByParams = async (params) => {
    let butlers = await butlerReq.getButlersByParams(user, params);
    if (!butlers) {
        return response.notFound();
    }
    for (let i = 0; i < butlers[0].requests.length; i++) {
        let startDate = moment(butlers[0].requests[i].createdAt).format('DD/MM/YYYY HH:mm:ss');
        let endDate = moment(new Date(moment.utc().format())).format('DD/MM/YYYY HH:mm:ss');
        let diff = moment.utc(moment(endDate, 'DD/MM/YYYY HH:mm:ss').diff(moment(startDate, 'DD/MM/YYYY HH:mm:ss'))).format('HH:mm:ss');
        let hour = diff.split(':')[0];
        if (Number(hour) >= 8) {
            if (!(String(butlers[0].requests[i].status) === 'completed' && String(butlers[0].requests[i].status) === 'autoclose')) {
                butlers[0].requests[i].status = 'autoclose';
                let statusUpdatedRes = await baseDao.findOneAndUpdate(request, butlers[0].requests[i]._id, butlers[0].requests[i]);
                butlers[0].requests[i] = statusUpdatedRes;
            }
        }
    }
    return response.success(butlers);
};

exports.updateUser = async (id, body) => {
    let updateUser = await baseDao.findOneAndUpdate(user, id, body);
    if (!updateUser) {
        return response.notFound();
    }
    return response.success(updateUser);
};
