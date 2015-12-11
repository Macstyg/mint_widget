(function(){
    'use strict';
    angular
        .module('Mint_widgetApp',['ngAnimate', 'ui.router'])
        .config(function($urlRouterProvider, $stateProvider){
            $urlRouterProvider.otherwise('/widget');
        
            $stateProvider
                .state('widget', {
                    url:'/widget',
                    templateUrl:'templates/widget.html'
            })
                .state('language', {
                    url:'/language',
                    templateUrl:'templates/language.html'
            })
    })
})();