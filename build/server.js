// Generated by CoffeeScript 1.9.3
var americano, start;

americano = require('americano');

process.env.TZ = 'UTC';

start = module.exports.start = function(options, callback) {
  if (options == null) {
    options = {};
  }
  if (options.name == null) {
    options.name = 'hari';
  }
  if (options.port == null) {
    options.port = process.env.PORT || 9673;
  }
  if (options.host == null) {
    options.host = process.env.HOST || "0.0.0.0";
  }
  if (options.root == null) {
    options.root = __dirname;
  }
  return americano.start(options, function(app, server) {
    var opts;
    opts = {};
    return typeof callback === "function" ? callback(null, app, server) : void 0;
  });
};

if (!module.parent) {
  start();
}
