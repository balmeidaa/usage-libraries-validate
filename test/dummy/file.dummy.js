'use strict'

const sinon = require('sinon');
const fileSystem = require('fs');

const dirStub = sinon.stub(fileSystem, 'readdirSync').callsFake(() => {
    return [];
});

module.exports = {dirStub};