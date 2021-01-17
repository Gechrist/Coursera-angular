(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject=['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
            url:'/',
            templateUrl:'loader/home.template.html'})

    .state('categories',{
            url:'/categories',
          //  component: 'menuCategories',
            templateUrl:'loader/categories.template.html',
            controller:'MenuCategoriesController as menu',
            resolve:{
              categories: ['MenuDataService', function (MenuDataService){
                return MenuDataService.getAllCategories();
              }]}
            })

    .state('items',{
            url:'/items/{cat_name}',
            templateUrl:'loader/items.template.html',
            controller:'MenuItemsController as itemc',
            resolve:{
              items: ['$stateParams','MenuDataService', function( $stateParams, MenuDataService){
                // return MenuDataService.getItemsForCategory().then(function (catitems){
                //   return catitems[$stateParams.cat_name]});
                return MenuDataService.getItemsForCategory($stateParams.cat_name);
                    }]
                  }
                });
    };
}) ();
