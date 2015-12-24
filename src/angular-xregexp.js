/**
 * angular-xregexp 0.0.1
 * This is an angular cap of XRegExp.
 * pax (coolwinding@gmail.com) (c) 2015-2016 MIT License
 */

module.exports = function(angular, XRegExp) {
	'use strict';

	angular.module('xregexp', [])
	.factory('xregexp', [function() {
		return XRegExp;
	}]);
};

