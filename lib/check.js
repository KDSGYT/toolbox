const os = require('os');
/**
 * Check if you have root access or not
 * @return {boolean} - 
 * 
 */
function checkRootAccess(){
    const userInfo = os.userInfo();
    return userInfo.username === 'root';
}


module.exports.rootAccess = checkRootAccess;