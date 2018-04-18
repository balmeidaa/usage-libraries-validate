'use strict';

const core = require('../lib/index');
const dummy = require('./dummy/index.dummy');

test('getDependenciesImported', () => {
    expect(core.getDependenciesImported(JSON.stringify(dummy.jsonPackageDummy)))
        .toEqual(expect.arrayContaining(dummy.jsonPackageResultDummy));
});
