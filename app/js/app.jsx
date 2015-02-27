require('./setup');

var React = require('react');

var App = React.createClass({
  render: function () {
      return (
          <div>hi</div>
      );
  }
});

React.render(React.createElement(App, null), global.document.body);


var db = openDatabase('mydb', '1.0', 'my first database', 2 * 1024 * 1024);
// Create table and insert one line
db.transaction(function (tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS foo2 (id unique, text)');
  tx.executeSql('INSERT INTO foo2 (id, text) VALUES (1, "fooman")');
  tx.executeSql('INSERT INTO foo2 (id, text) VALUES (2, "luyao")');
});

// Query out the data
db.transaction(function (tx) {
  tx.executeSql('SELECT * FROM foo2', [], function (tx, results) {
    var len = results.rows.length, i;
    for (i = 0; i < len; i++) {
      console.log(results.rows.item(i).text);
    }
  });
});
