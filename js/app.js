// Create app
var myApp = angular.module('myApp', ['ui.router']);
// Configure app
myApp.config(function($stateProvider) {
    $stateProvider
        .state('home', {
            url:'',
            templateUrl: 'templates/home.html',
            controller: 'HomeController',
        })
        .state('content', {
            url:'content',
            templateUrl: 'templates/content.html',
            controller: 'ContentController',
        })
        .state('about', {
            url:'about',
            templateUrl: 'templates/about.html',
            controller: 'AboutController',
        })
})

myApp.controller('AboutController', function($scope){
  $scope.about="hi";
})
myApp.controller('HomeController', function($scope){
  $scope.number = "3";
})
myApp.controller('ContentController', function($scope){
    $scope.url="http://ladiesloot.com/wp-content/uploads/2015/05/smiley-face-1-4-15.png";
})
// Landing page controller: define $scope.number as a number


// About page controller: define $scope.about as a string


// Content controller: define $scope.url as an image


