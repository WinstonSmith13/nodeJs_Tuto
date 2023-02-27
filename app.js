/* console.log(module); //global object
 */

/* const log = require('./logger');

log('medy');  */

/* const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);
 */
/* {
    root: '/',
    dir: '/Library/simplon/nuxt/nodeFirst',
    base: 'app.js',
    ext: '.js',
    name: 'app'
  } */

  const os = require('os');

  var freemem = os.freemem();
  var totalmem = os.totalmem();

  console.log(`Total memory : ${totalmem}`);
  console.log(`Free memory : ${freemem}`);