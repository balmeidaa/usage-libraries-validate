'use strict';
const fileSystem = require('fs');
const results = [];

//agregar archivs html , 
const _getAllFilesFromFolder = (dir) => {

    const allFile = fileSystem.readdirSync(dir);
    for (const file of allFile) {
        if (file !== 'node_modules'){
            const directory = dir+'/'+file;
            const stat = fileSystem.statSync(directory);

            if (stat && stat.isDirectory()) {
                _getAllFilesFromFolder(directory);
            } else {
                const validate = new RegExp ('\w*\.js$');
                const isJs = validate.test(file);
                if (isJs  === true){
                    results.push(file);
                }
            }
        }
    }
    if (results.length > 0 ){
        return results;
    }
};

module.exports = {_getAllFilesFromFolder};

