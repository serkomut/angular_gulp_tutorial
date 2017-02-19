'use strict';
//homeRoutes.$inject = ['$stateProvider'];
module.exports = function ($stateProvider) {
    $stateProvider.state("home",
    {
        url: '/', // url path that activates this state
        template: require("./home.html"),
        controller: function ($scope) {
            $scope.testVar = 'We are up and running using a required module!';
        },
        data: {
            moduleClasses: 'page', // assign a module class to the <body> tag
            pageClasses: 'home', // assign a page-specific class to the <body> tag
            pageTitle: 'Home', // set the title in the <head> section of the index.html file
            pageDescription: 'Meta Description goes here' // meta description in <head>
        }
    });
};