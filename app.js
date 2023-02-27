/* console.log(module); //global object
 */

/* const log = require('./logger');

log('medy');  */

const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);