'use strict';

const fileList = ['dummy.js'];
const libraryList = ['jest', 'sinon', 'fs'];
const libraryFound = new Map().set('jest', false)
	.set('sinon', false)
	.set('fs', false);


const expectingMapLibs = new Map().set('jest', false)
	.set('sinon', true)
	.set('fs', true);

const jsonDummy = ' {"scripts" :{"test": "jest","run" : "fs"} }';

module.exports = {jsonDummy, fileList, libraryFound, libraryList, expectingMapLibs };