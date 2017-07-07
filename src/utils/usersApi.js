import superagent from 'superagent';

export default {
    origin: 'https://randomuser.me/api/',

    defaultParams: {
        inc: 'id,name,email,picture,login,phone'
    },

    get: function (...args) {
        return this.doMethod('get', ...args);
    },

    post: function (...args) {
        return this.doMethod('post', ...args);
    },

    put: function (...args) {
        return this.doMethod('put', ...args);
    },

    delete: function (...args) {
        return this.doMethod('delete', ...args);
    },

    doMethod: function (method, params) {
        return new Promise((resolve, reject) => {
            const request = superagent[method](this.origin);
            const extendedParams = { ...params, ...this.defaultParams };

            if (params) {
                if (method === 'get') {
                    request.query(extendedParams);
                } else {
                    request.send(extendedParams);
                }
            }

            if (method !== 'get') {
                request.set('Accept', 'application/json');
            }

            request.end((err, { body } = {}) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(body);
                }
            });
        });
    }
}

