'use strict'

const fs = require('fs');
const chalk = require('chalk');

const core = require('./lib/index');
const fileReader = require('./searchFile');
const searchDirectories = require('./searchDir');
 
const fileList = searchDirectories._getAllFilesFromFolder('./');

let libs =[];

let {packageJSON, bowerJSON} = '';

try {
    packageJSON = fs.readFileSync('package.json', 'UTF-8');
	
	libs = core.getDependenciesImported(packageJSON);
	
   } catch (error) {
    console.log(chalk.red(`The file ${error.path} is not found yet.`));
}


const notUsed = fileReader.readFiles(libs,fileList);

if(notUsed.length > 0){
console.log(chalk.yellow('\nLibraries that are not in use are:\n'));

	for(const lib of notUsed){
		 console.log(chalk.yellow(`* ${lib}`));
	 }
}else{
console.log(chalk.green('\nAll Libraries are in use...\n'));

}