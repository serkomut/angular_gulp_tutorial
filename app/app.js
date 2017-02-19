var angular = require('angular');

module.exports = angular.module('myApp',
    [
        require('./common/common.js').name,
        require('./modules').name
    ])
    .config(require('./config'))
    .controller("MainController", require("./controller"))
    .constant('version', require('../package.json').version)
    .run(require('./common/common-init.js'));