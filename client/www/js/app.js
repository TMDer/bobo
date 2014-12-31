// Ionic bobo App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'bobo' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'bobo.services' is found in services.js
// 'bobo.controllers' is found in controllers.js
angular.module('bobo', ['ionic', 'bobo.controllers', 'bobo.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  .state('loading', {
    url: '/loading',
    templateUrl: 'templates/loading.html',
    controller: 'LoadingCtrl'
  })
  .state('friend', {
    url: '/friend',
    templateUrl: 'templates/friend.html',
    controller: 'MainCtrl'
  })
  .state('group', {
    url: '/group',
    templateUrl: 'templates/group.html',
    controller: 'MainCtrl'
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
