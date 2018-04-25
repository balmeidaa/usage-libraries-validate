#! /usr/bin/env node

'use strict';

const fs = require('fs');
const chalk = require('chalk');

const fileReader = require('./searchFile');
const searchDirectories = require('./searchDir');

/**
 *
 * @param jsonString: String Contains the JSON string in the manage dependencies.
 * @returns A list of devDependencies and dependencies of the project BOWER and PACKAGE into an object.
 */

const extractProperties = (jsonString = '') =>{

    const jsonObject = JSON.parse(jsonString);
    let dependencies = Object.assign({}, jsonObject['dependencies'], jsonObject['devDependencies']);

    return dependencies;
};

const getDependenciesImported = (packageJSON) => {

    let dependencies = extractProperties(packageJSON);
    let libraryList = [];
    
    try{
        for (const dependency in dependencies) {

            libraryList.push(dependency);
        }
    }catch (error) {
        errorMessage(error);
    }  
    return libraryList;
};

const errorMessage = (error) => {
    console.log(chalk.red(`The file ${error.path} is not found yet.`));
};

const finalResult = (notUsed) => {
    if (notUsed.length > 0) {
        console.log(chalk.yellow('\nLibraries that are not in use are:\n'));
        for (const lib of notUsed) {
            console.log(chalk.yellow(`* ${lib}`));
        }
    } else {
        console.log(chalk.green('\nAll Libraries are in use...\n'));
    }
};

const init = () => {
    
    const fileList = searchDirectories._getAllFilesFromFolder('./');

    let {packageJSON, bowerJSON} = '';

    packageJSON = fs.readFileSync('package.json', 'UTF-8');	

    const libs = getDependenciesImported(packageJSON);
    
    let notUsed = fileReader.readFiles(libs, fileList);
    
	notUsed = fileReader.readJsonDependencies(notUsed,packageJSON);
    
    finalResult(notUsed);
	
};

module.exports = {init, getDependenciesImported};
