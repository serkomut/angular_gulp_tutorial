module.exports = angular.module('modules',
    [
        require('./home').name,
        require('./about').name // Used for static content pages like "About", "Privacy Policy", "404", etc.
    ]);