define(function(require, exports, module) {
    'use strict';

    module.name = 'account-select';

    var base = require('base');
    var core = require('core');
    var ui = require('ui');

    var deps = [
        core.name,
        ui.name
    ];

    module.exports = base.createModule(module.name, deps)
        .directive(require('./lp-accounts-select'));
});
