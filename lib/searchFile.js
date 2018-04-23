'use strict'

const fileReader = require('fs');

/*
*@param libraryList: array with the names of the libraries
*@param fileList: array with files and their path
*@description reads files to search if the library is in use
*/

const initMap = (libraryList)=>{
	 let Mapa = new Map();
	for( const library of libraryList){
		Mapa.set(library,false);
	}
	return Mapa;
}

const readFiles = (libraryList, fileList) => {

	let libraryFound = initMap(libraryList);

    libraryFound = checkForLibrary(fileList,libraryList,libraryFound);
	
	
    return returnUnusedLibraries(libraryFound);
};

const checkForLibrary = (fileList,libraryList,libraryFound) =>{


	for (const filename of fileList) {
					
		
		const data = fileReader.readFileSync(filename, 'utf8');

			for (const library of libraryList) {

				const regularExpression = new RegExp(`${library}|${library}\.js$`);

				if (regularExpression.test(data) === true) {
					libraryFound.set(library, true);

				}
			}

		}
	
	return libraryFound;
}; 

const returnUnusedLibraries = (libraryFound) => {

	let unusedLibraries = [];

	for (const [key, value] of libraryFound) {

			if (libraryFound.get(key) === false) {

				unusedLibraries.push(key);
			}
		}

    return unusedLibraries;	
};


const readJsonDependencies =(libraries,json) => {
	
	let unusedLibs=[];
	
	const jsonObject = JSON.parse(json);
	let objectTemp = Object.assign({}, jsonObject['scripts']);
	let scriptsDependencies = '';
    
	for(const value in objectTemp){
		
		scriptsDependencies += ' ' + objectTemp[value];
	}
	
			for (const library of libraries) {
 
				const regularExpression = new RegExp(library);

				if (regularExpression.test(scriptsDependencies) !== true) {
					
					unusedLibs.push(library);
				}
			}
	
	 
	return 	unusedLibs;
};

module.exports = {readJsonDependencies, readFiles, returnUnusedLibraries, checkForLibrary};

