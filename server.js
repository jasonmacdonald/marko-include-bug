/**
 * @author  jason.macdonald
 * @created 2017-10-10
 */
'use strict';

require('marko/node-require').install({
  compilerOptions:
    {
      writeToDisk: false

    }
});

let tpl = require('./src/index.marko');

console.log(tpl.renderSync().toString());