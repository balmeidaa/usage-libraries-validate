'use strict'

const fileReader = require('fs');

/*
*@param libraryList: array with the names of the libraries
*@param fileList: array with files and their path
*@description reads files to search if the library is in use
*/
const readFiles = (libraryList,fileList) => {
	
	//maps libraries to files
	let mapFile;
	
	//@TODO read files and seek for library refrerences
	for(file of fileList){
	
	//references to all libraries that a file is using
	let libraryReferences = [];
		
	//reading file	
	 fileReader.readFile(file, 'utf8', (error, data) => {
        if (error) {
			throw 'File not found';                
			continue;
        }

		//searches for libs
		for(library of libraryList){
			const regularExpression = new RegExp(library);
			
			if(data.match(regularExpression) === true){
				libraryReferences.add(file);
			}
			
		}
		
		mapFile.set(getFileName(file),libraryReferences);
    });
		
			
	}
	
	return map;
};


/*
*@param file: string of file with full path
*@description return file name without the path
*/
const getFileName = (file) => {
	
	const regularExpression = '(.+\.js)$';
		
	return file.match(regularExpression);
}


module.exports = {readFiles};
