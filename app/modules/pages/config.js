'use strict';
//pageRoutes.$inject = ['$stateProvider'];
module.exports = function($stateProvider) {
     var pages = {
        name: 'pages',
        abstract: true,  // This makes it so that the url for this route doesn't actually resolve
        url: '/pages',
        template: '<div ui-view></div>', // This injects a new ui-view that the about page directive is injected into
        controller: require("./controller")
    };

    var about = {
        name: 'pages.about',
        url: '^/about', // The ^ character makes this url override the parent url
        template: '<div about-view></div>',
        data: {
            moduleClasses: 'page',
            pageClasses: 'about',
            pageTitle: 'About',
            pageDescription: 'Some description.'
        }
    };

    $stateProvider.state(pages);
    $stateProvider.state(about);
};