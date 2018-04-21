'use strict';

const core = require('../lib/searchDir');
const dummy = require('./dummy/searchDir.dummy');

const fileSystem = require('fs');
const sinon= require('sinon');
/*
* path sea correcto o valido
* directorio valido 
*/
test('validateNameDir',() =>{
expect(searchDir.validateNameDir(constsearchDirDummy.pathDummy, constsearchDirDummy.fileDummy))
.toBe(true);
}
);
/*
test('_getAllFilesFromFolder without folders', () => {
    expect(core._getAllFilesFromFolder('./'))
        .toEqual(expect.arrayContaining([]));
    dummy.dirStub.restore();
});
*/