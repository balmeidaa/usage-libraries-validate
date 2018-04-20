'use strict';

const core = require('../lib/searchDir');
const dummy = require('./dummy/searchDir.dummy');

test('_getAllFilesFromFolder without folders', () => {
    expect(core._getAllFilesFromFolder('./'))
        .toEqual(expect.arrayContaining([]));
    dummy.dirStub.restore();
});
