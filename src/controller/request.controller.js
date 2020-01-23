const requestService = require('../service/request.service');
/**
 * create a request
 * @param req
 * @param res
 * @posts 
 **/
exports.createRequest = async (req, res) => {
  const request = await requestService.createRequest(req.body);
  res.status(request.statusCode).json(request);
};
/**
 * get all request
 * @param req
 * @param res
 * @get
 */
exports.getAllRequest = async (req, res) => {
  const request = await requestService.getAllRequest();
  res.status(request.statusCode).json(request);
}
/**
 * get  request by any parameter
 * @param req
 * @param res
 * @get
 */
exports.getRequestByParams = async (req, res) => {
  const request = await requestService.getRequestByParams(req.query);
  res.status(request.statusCode).json(request);
}
/**
 * update user by object id
 * @param req
 * @param res
 * @put
 */
exports.updateRequest = async (req, res) => {
  const request = await requestService.updateRequest(req.params.id, req.body);
  res.status(request.statusCode).json(request);
};


