'use strict'

const sinon = require('sinon');
const fs = require('fs');


const fileStub = sinon.stub(fs, 'readFileSync').callsFake(() => {
    return '\'use strict\' const sinon = require(\'sinon\')\; const fileSystem = require(\'fs\');';
});

const fileList = ['dummy.js'];
const libraryList = ['jest','sinon','fs'];
const libraryFound = new Map().set('jest',false)
								.set('sinon',false)
								.set('fs', false);

 

const expectingMapLibs = new Map().set('jest',false)
								.set('sinon',true)
								.set('fs', true);	
	
module.exports = {fileStub,fileList,libraryFound,libraryList,expectingMapLibs};