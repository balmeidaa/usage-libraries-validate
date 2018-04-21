'use strict';

const sinon = require('sinon');
const fileSystem = require('fs');

const pathDummy = '/dir';
const fileDummy = '/file.js';

const dirStub = sinon.stub(fileSystem, 'readdirSync').callsFake(() => {
    return [];
});

module.exports = {dirStub};
