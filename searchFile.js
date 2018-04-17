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
	
	for(const library in libraryList){
				
		libraryFound.set(library,false);
	}
	
	for(const filename of fileList){
		
	try{	

	const data = fileReader.readFileSync(filename, 'utf8');
	
		for(const library in libraryList){
				
				const regularExpression = new RegExp(library);
			
				if(regularExpression.test(data) === true ){
	
				libraryFound.set(library,true);
	
					}	
			}
			
	}catch(error){
		console.log(`File not found ${error}`)
	}
		
		
				
	}
	
	for(const found of libraryFound){
		if(libraryFound.get(found) === false ){
			unusedLibraries.add(library);
		}
	}
	return unusedLibraries;
};

module.exports = {readFiles};

