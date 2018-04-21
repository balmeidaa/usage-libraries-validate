'use strict';
const fileSystem = require('fs');
const chalk = require('chalk');
const results = [];
const invalidDir = 'node_modules';

/**
 * @description function to list the PATH of the files .js and .html
 * @param dir location folder
 */
const _getAllFilesFromFolder = (dir) => {

    try {
        const allFile = fileSystem.readdirSync(dir);
        for (const file of allFile) {
            const directory = dir + '/' + file;
            const archive = fileSystem.statSync(directory);

            if (archive && archive.isDirectory() && validateNameDir(dir, directory)) {
                _getAllFilesFromFolder(directory);

            } else {
                const validate = new RegExp('\w*\.js$|.html$');
                const isJs = validate.test(file);
                if (isJs === true) {
                    results.push(directory);
                }
            }

        }
        return results;
    } catch (error) {
        console.log(chalk.red(`Unexpected error${error.name}-${error.message}%`));
        return null;
    }
};

/**
 * @description validate the name of the directory this within 
 * the files of the application and not from the node list
 * @param dir location folder
 */
const validateNameDir = (path, dir) => {
    let nameValido = dir !== path + '/' + invalidDir ? true : false;
    return nameValido;
}


module.exports = { _getAllFilesFromFolder, validateNameDir };

