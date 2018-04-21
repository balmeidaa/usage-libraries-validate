'use strict';

const sinon = require('sinon');
const fileReader = require('fs');
const proxyquire = require ('proxyquire'); 

const fileStub = sinon.stub()
.withArgs('dummy.js')
.returns('anything');
 const searchFile = proxyquire('../../lib/searchFile', {fs: {readFileSync: fileStub}} );

const fileList = ['dummy.js'];
const libraryList = ['jest', 'sinon', 'fs'];
const libraryFound = new Map().set('jest', false)
	.set('sinon', false)
	.set('fs', false);


const expectingMapLibs = new Map().set('jest', false)
	.set('sinon', true)
	.set('fs', true);

module.exports = { fileStub, fileList, libraryFound, libraryList, expectingMapLibs };