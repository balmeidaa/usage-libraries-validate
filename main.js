'use strict'

const fs = require('fs');

const core = require('./lib/index');
const fileReader = require('./searchFile');
const searchDirectories = require('./searchDir');
 
const fileList = searchDirectories._getAllFilesFromFolder('./');

let libs = {};

let {packageJSON, bowerJSON} = '';

try {
    packageJSON = fs.readFileSync('package.json', 'UTF-8');
	bowerJSON = fs.readFileSync('bower.json', 'UTF-8');

	libs = core.getDependenciesImported(packageJSON);

   } catch (error) {
    console.log((`The file ${error.path} is not found yet.`));
}

 console.log('\nLibraries that are not in use are:\n');

const notUsed = fileReader.readFiles(libs,fileList);

for(const lib of notUsed){
	 console.log(`* ${lib}`);
 }
