'use strict'

const fileReader = require('fs');

/*
*@param libraryList: array with the names of the libraries
*@param fileList: array with files and their path
*@description reads files to search if the library is in use
*/
const readFiles = (libraryList,fileList) => {
	
let unusedLibraries = new Set();
	
	const libraryFound = new Map();
	
	for(const library of libraryList){
				
		libraryFound.set(library,false);
	}
	
	for(const filename of fileList){
	
	try{	

	const data = fileReader.readFileSync(filename, 'utf8');
	
	
		for(const library of libraryList){
				
				const regularExpression = new RegExp(library);
			
				if(data.match(regularExpression) !== null && libraryFound.get(claveObj) === false ){
					libraryFound.set(library,true);
					unusedLibraries.add(library);
					
					}	
			}
			
	}catch(error){
		console.log(`File not found ${error.path}`)
	}
		
		
				
	}
	
	return unusedLibraries;
};

module.exports = {readFiles};

