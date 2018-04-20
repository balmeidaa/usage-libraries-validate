'use strict';
const fileSystem = require('fs');
const chalk = require('chalk');
const results = [];

/**
 * @description function to list the PATH of the files .js and .html
 * @param dir location folder
 */
const _getAllFilesFromFolder = (dir) => {

    try {
        const allFile = fileSystem.readdirSync(dir);
        for (const file of allFile) {
            if (file !== 'node_modules') {
                const directory = dir + '/' + file;
                const stat = fileSystem.statSync(directory);

                if (stat && stat.isDirectory()) {
                    _getAllFilesFromFolder(directory);
                } else {
                    const validate = new RegExp('\w*\.js$|.html$');
                    const isJs = validate.test(file);
                    if (isJs === true) {
                        results.push(directory);
                    }
                }
            }
        }
        return results;
    } catch (error) {
        console.log(chalk.red(`Unexpected error${error.name}-${error.message}%`));
        return null;
    }
};

module.exports = {_getAllFilesFromFolder};

