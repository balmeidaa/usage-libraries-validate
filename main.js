'use strict'

const fileReader = require('./searchFile');
const searchDirectories = require('./searchDir');
 
const fileList = searchDirectories._getAllFilesFromFolder('./');
let libs = ['fs','node','text'];

console.log('\nLibraries that are not in use are:\n');

const notUsed = fileReader.readFiles(libs,fileList);

for(const lib of notUsed){
	console.log(`* ${lib}`);
}