'use strict'

const fileReader = require('fs');

/*
*@param libraryList: array with the names of the libraries
*@param fileList: array with files and their path
*@description reads files to search if the library is in use
*/
const readFiles = (libraryList,fileList) => {
	
let unusedLibraries = new Set();
	
	for(const filename of fileList){
		
	 const data = fileReader.readFileSync(filename, 'utf8');
		
		for(const library of libraryList){
			
			const regularExpression = new RegExp(library);
		
			if(data.match(regularExpression) === null){
				
				unusedLibraries.add(library);
				
				}	
		}
				
	}
	
	return unusedLibraries;
};

module.exports = {readFiles};

