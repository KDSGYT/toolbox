const { prompt } = require('enquirer');
const { exec } = require('child_process')
const checks = require('./lib/check');
const { emitWarning } = require('process');
const pkgs = [
    "vscode",
    "nodejs"
];
//tracking packaged
let pkgInstalled = 0;
let pkgNotInstalled = 0;

const root = checks.rootAccess();//check root access

try{
    if(!root) throw Error('Please run the command as sudo');

    //execs the commands
    console.log('executing the commands');
    //going over all the packages to install
    pkgs.forEach( pkg => {
        let command = `snap install ${pkg} `
        exec(command, (error) => {
            try{

            } catch (error){
                emitWarning( error.message);
            }
            console.log(`Package installed: ${pkg}` );
            pkgInstalled++;
            
        });
    })
    console.log(`Packages installed: ${pkgInstalled}`)

} catch (error){
    console.log(error.message);
}

