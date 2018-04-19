#! /usr/bin/env node

'use strict ';

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

const getDependenciesImported = () => {

    let dependencies = extractProperties();
    let libraryList = [];

    for (const dependency in dependencies) {

        libraryList.push(dependency);
    }

    return libraryList;
};

const readFile = () =>{
    let {packageJSON, bowerJSON} = '';
    
    packageJSON = fs.readFileSync('package.json', 'UTF-8');
    
    return packageJSON;
};

const errorMessage = () => {
    console.log(chalk.red(`The file ${error.path} is not found yet.`));
};

const returnLibs = () =>{
     let libs = [];

    try {
        const package = readFile();

        libs = getDependenciesImported(package);

    } catch (error) {
        errorMessage();
    }
    return libs;
};

const finalResult = (libs, fileList) => {
    
     const notUsed = fileReader.readFiles(libs, fileList);

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

    const libs = returnLibs();
    
    finalResult(libs, fileList);
   
};

module.exports = init();
