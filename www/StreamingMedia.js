var exec = require('cordova/exec')

exports.playVideo = function (url, options) {
	options = options || {};
	exec(options.successCallback || null, options.errorCallback || null, "StreamingMedia", "playVideo", [url, options]);
};