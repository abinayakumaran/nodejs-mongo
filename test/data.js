let BASE_URL = 'http://localhost:3000/api/v1/'
let HEADERS = { 'Content-Type': 'application/json' }

module.exports = {
    BUTLER: {
        post: {
            url: BASE_URL + 'butler',
            headers: HEADERS,
            body: JSON.stringify({
                "butlerId": 1,
                "butlerName": "butler1"
            })
        },
        get: {
            url: BASE_URL + 'butler',
            headers: HEADERS,
        },
        getByParam: {
            url: BASE_URL + 'butler/find/param?butlerId=1',
            headers: HEADERS,
        },
        put: {
            url: BASE_URL + 'butler/',
            headers: HEADERS,
            body: JSON.stringify({
                "butlerId": 12,
                "butlerName": "butler12"
            })
        }
    },
    REQUEST: {
        post: {
            url: BASE_URL + 'request',
            headers: HEADERS,
            body: JSON.stringify({
                "butlerId": 1,
                "requestId": "123",
                "status": "open"
            })
        },
        get: {
            url: BASE_URL + 'request',
            headers: HEADERS,
        },
        getByParam: {
            url: BASE_URL + 'request/find/param?butlerId=1',
            headers: HEADERS,
        },
        put: {
            url: BASE_URL + 'request/',
            headers: HEADERS,
            body: JSON.stringify({
                "butlerId": 1,
                "requestId": "123",
                "status": "inprogress"
            })
        }
    }
}