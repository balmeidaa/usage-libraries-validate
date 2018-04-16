'use strict';

const _getAllFilesFromFolder = (dir) => {
    const filesystem = require('fs');
    const results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        if (file !== 'node_modules'){
            
            file = dir+'/'+file;
            const stat = filesystem.statSync(file);

            if (stat && stat.isDirectory()) {
                file = results.concat(_getAllFilesFromFolder(file));
            } else {
                const validate = new RegExp ('\w*\.js$');
                const isJs = validate.test(file);
                if (isJs=== true){
                    results.push(file);
                }
            }
        }
    });
 if (results.length > 0 ){
    return results;
 }
};


_getAllFilesFromFolder('./');

