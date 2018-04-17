'use strict';


/**
 *
 * @param jsonString: String Contains the JSON string in the manage dependencies.
 * @returns A list of devDependencies and dependencies of the project BOWER and PACKAGE into an object.
 */
const getDependenciesImported = (jsonString = '') => {
 
    const jsonObject = JSON.parse(jsonString);
    let dependencies = Object.assign({}, jsonObject['dependencies'], jsonObject['devDependencies']);
	let libraryList = [];
	
	for(const dependency in dependencies){
 
		libraryList.push(dependency);
	}
	
    return libraryList;
};



module.exports = {getDependenciesImported};
