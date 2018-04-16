'use strict'

const fileReader = require('fs');



/*
*@param libraryList: array with the names of the libraries
*@param fileList: array with files and their path
*@description reads files to search if the library is in use
*/
const readFiles = (libraryList,fileList) => {
	
//references to all libraries that a file is using
let unusedLibraries = [];
	
	for(const filename of fileList){
		
	//reading file	
	 const data = fileReader.readFileSync(filename, 'utf8');

		//searches for libraries that are not in use
		for(const library of libraryList){
			
			const regularExpression = new RegExp(library);
		
		if(data.match(regularExpression) === null){
				
				unusedLibraries.push(library);
				
				}	
		}
				
	}
	
	return unusedLibraries;
};

module.exports = {readFiles};

