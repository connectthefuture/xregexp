var XRegExp = require('./xregexp');
//var angular = require('../bower_components/angular');

require('./addons/build')(XRegExp);
require('./addons/matchrecursive')(XRegExp);
require('./addons/unicode-base')(XRegExp);
require('./addons/unicode-blocks')(XRegExp);
require('./addons/unicode-categories')(XRegExp);
require('./addons/unicode-properties')(XRegExp);
require('./addons/unicode-scripts')(XRegExp);
require('./angular-xregexp')(angular, XRegExp);

module.exports = XRegExp;
