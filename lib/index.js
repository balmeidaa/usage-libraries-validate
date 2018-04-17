'use strict';

const fs = require('fs');

const chalk = require('chalk');

let {packageJSON, bowerJSON} = '';

try {
    packageJSON = fs.readFileSync('package.json');
    bowerJSON = fs.readFileSync('bower.json');
} catch (error) {
    console.log(chalk.red(`The file ${error.path} is not found yet.`));
}

/**
 *
 * @param jsonString: String Contains the JSON string in the manage dependencies.
 * @returns A list of devDependencies and dependencies of the project BOWER and PACKAGE into an object.
 */
const getDependenciesImported = (jsonString = '') => {
    const jsonObject = JSON.parse(jsonString);
    let dependencies = Object.assign({}, jsonObject['dependencies'], jsonObject['devDependencies']);
    return dependencies;
};

module.exports = {getDependenciesImported};
