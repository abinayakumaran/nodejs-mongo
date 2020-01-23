const user = require('./user.router');
const request = require('./request.router');

module.exports = (app) => {
    app.use('/api/v1/butler', user);
    app.use('/api/v1/request', request);
};
