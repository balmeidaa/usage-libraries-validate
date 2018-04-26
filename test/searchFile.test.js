'use strict'

const dummy = require('./dummy/searchFile.dummy');
const fileReader = require('../lib/searchFile');


jest.mock('fs');
import * as fs from 'fs';



fs.readFileSync.mockImplementation(() => {
  return jest.fn().mockReturnValue('use strict const sinon = require(sinon); const fileSystem = require(fs);');
})

beforeEach(() => {
  
	dummy.libraryFound.set('jest', false)
	.set('sinon', false)
	.set('fs', false);
 
});

it('returnUnusedLibraries happy test case',() => { 
	expect(fileReader.returnUnusedLibraries(dummy.libraryFound))
			.toEqual(dummy.libraryList);
});

it('readJson test',() => {
	expect(fileReader.readJsonDependencies(dummy.libraryList, dummy.jsonDummy)).toEqual(['sinon']);

});

it('checkForLibrary without file',() => { 
	expect(fileReader.checkForLibrary(dummy.fileList, dummy.libraryList, dummy.libraryFound) )
			.toEqual(dummy.expectingMapLibs);
	
});

it('readFiles without file',() => { 
	expect(fileReader.readFiles(dummy.libraryList, dummy.fileList))
			.toBe(['jest']);
});


