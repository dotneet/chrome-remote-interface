'use strict';

// callback(err, data)
function externalRequest(transport, options, callback) {
    let url = null
    if (typeof options === 'string') {
        url = options
    } else {
        let protocol = options.secure ? 'https' : 'http'
        url = protocol + '://' + options.host + ':' + options.port + options.path
    }
    // const request = transport.get(options, function (response) {
    console.warn(url)
    fetch(url).then(function (response) {
        return response.text()
    }).then(function (response) {
        // let data = '';
        // response.on('data', function (chunk) {
        //     data += chunk;
        // });
        callback(null, response);
      /*
        response.on('end', function () {
            if (response.statusCode === 200) {
              callback(null, data);
            } else {
                callback(new Error(data));
            }
        });
      */
    }).catch(function (error) {
        console.warn(error.toString());
        callback(error);
    })
}

module.exports = externalRequest;
