'use strict';

module.exports = angular.module('modules.pages.about', [])
    .directive('aboutView', require('./aboutDirective'))
    .controller('AboutCtrl', require('./AboutController'));