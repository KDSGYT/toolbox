const { prompt } = require('enquirer');
const checks = require('./lib/check');

const root = checks.rootAccess();//check root access

try{
    if(!root) throw Error('Please run the command as sudo');

} catch (error){
    console.log(error.message);
}

