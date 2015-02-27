// Expose globals
global.window = window;
global.gui = require('nw.gui');
global.document = window.document
global.navigator = window.navigator
global.openDatabase = openDatabase;

require('node-jsx').install();
require('less');

// Load our app
var app = require('./js/app.jsx');
