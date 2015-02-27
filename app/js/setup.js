/**
 * Handles setting up the app, including importing styles.
 */

// Less shit
//var fs = require('fs');
//require('less').render(fs.readFileSync('./styles/main.less', 'utf8')).then(function(output) {
    //global.document.head.innerHTML = '<style type="text/css">'+output.css+'</style>';
//});

// set up window
var win = global.gui.Window.get();
var nativeMenuBar = new global.gui.Menu({ type: "menubar" });
nativeMenuBar.createMacBuiltin("NW in da HOUSE");
win.menu = nativeMenuBar;
