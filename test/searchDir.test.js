'use strict';

const core = require('../lib/searchDir');
const dummy = require('./dummy/searchDir.dummy');

/*
* path sea correcto o valido
* directorio valido 
*/
test('validateNameDir',() =>{
expect(core.validateNameDir(dummy.pathDummy, dummy.fileDummy))
.toBe(true);
}
);