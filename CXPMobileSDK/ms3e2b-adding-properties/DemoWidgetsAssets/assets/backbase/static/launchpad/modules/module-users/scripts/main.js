define(function (require, exports, module) {
	'use strict';

	module.name = 'module-user';

	var base = require('base');
	var core = require('core');

	var deps = [
		core.name
	];

	module.exports = base.createModule(module.name, deps)
		.provider( require('./authentication') )
		.factory( require('./services') );
});