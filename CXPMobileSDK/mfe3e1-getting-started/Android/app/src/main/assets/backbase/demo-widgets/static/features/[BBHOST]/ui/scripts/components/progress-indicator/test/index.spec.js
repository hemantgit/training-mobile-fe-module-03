/**
 *  ----------------------------------------------------------------
 *  Copyright © Backbase B.V.
 *  ----------------------------------------------------------------
 *  Author : Backbase R&D - Amsterdam - New York
 *  Filename : index.spec.js
 *  Description: progress-indicator unit test
 *  ----------------------------------------------------------------
 */
'use strict';
// include the component
var component = require('../scripts/main');

require('angular-mocks');

/*----------------------------------------------------------------*/
/* Module testing
/*----------------------------------------------------------------*/
describe('ui.progress-indicator testing suite', function() {
    it('should export an object', function() {
        expect(component).toBeObject();

    });
});
