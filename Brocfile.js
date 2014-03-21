module.exports = function (broccoli) {
  var traceur = require('broccoli-traceur');
  var uglifyJavaScript = require('broccoli-uglify-js');

  var tree = broccoli.makeTree('javascripts');
  tree = traceur(tree);
  tree = uglifyJavaScript(tree);

  return [tree];
};
