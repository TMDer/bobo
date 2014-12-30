angular.module('bobo.controllers', [])
.controller('LoadingCtrl', function($scope, $state) {
  $scope.goFriend = function (){
    $state.go('friend');
  }
  setTimeout($scope.goFriend, 3000)

})

.controller('LoginCtrl', function($scope, $state) {
  $scope.sendVibrationMsg = function () {
    $state.go('loading');
  }

})

.controller('MainCtrl', function($scope, $state) {
  $scope.friends = [
    {name: 'Ariel'},
    {name: 'Kir'},
    {name: 'Mak'},
    {name: 'Spooky'},
    {name: 'Webber'},
    {name: 'Ivan'},
    {name: 'Ray'}
  ];

  $scope.addMsg = function () {
    // add msg
  }

  $scope.goGroup = function () {
    $state.go('group')
  }

  $scope.goFriend = function () {
    $state.go('member')
  }

  $scope.selectFriend = function (friend) {
    friend.selected = true
  }

  $scope.sendMsg = function () {
    // send msg
  }


})
