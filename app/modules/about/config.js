'use strict';
module.exports = function($stateProvider) {
    $stateProvider.state("about", {
        url: "/about",
        controller: require("./controller"),
        template: require("./view.html"),
        data: {
            moduleClasses: 'page',
            pageClasses: 'about',
            pageTitle: 'About',
            pageDescription: 'Some description.'
        }
    });
};