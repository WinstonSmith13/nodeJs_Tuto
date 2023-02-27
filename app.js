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

 /*  const os = require('os');

  var freemem = os.freemem();
  var totalmem = os.totalmem();

  console.log(`Total memory : ${totalmem}`);
  console.log(`Free memory : ${freemem}`); */

//const fs = require('fs');

//asynchrone non bloquant. 

//Majuscule pour dire que c'est une classe 
const EventEmitter = require('events');

//Emitter est un objet.
// Class c'est comme le terme humain et l'objet est la personne. 


const emitter = new EventEmitter();

emitter.on('messageLogged', function(){
    console.log('Listener called');
});

emitter.emit('messageLogged');

//making a noise in the application, signaling an event.
//Pour se faire entendre l'emit a besoin d'un listenner.  

