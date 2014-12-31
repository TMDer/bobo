angular.module('bobo.controllers', [])
.controller('LoadingCtrl', function($scope, $state) {
  $scope.goFriend = function (){
    $state.go('friend');
  }

})

.controller('LoginCtrl', function($scope, $state) {
  $scope.sendVibrationMsg = function () {
    $state.go('loading');
  }
  // setTimeout is temp code
  setTimeout($scope.sendVibrationMsg, 3000)

})

.controller('MainCtrl', function($scope, $state) {
  $scope.friends = [
    {name: 'Ariel'},
    {name: 'Kir'},
    {name: 'Mak'},
    {name: 'Caesar'},
    {name: 'Spooky'},
    {name: 'Webber'},
    {name: 'Ivan'},
    {name: 'Ray'},
    {name: 'Matt'},
    {name: 'Jason'},
    {name: 'Vincent'},
    {name: 'Li'}
  ];

  $scope.addMsg = function () {
    // add msg
  }

  $scope.changeCircleStyle = function() {
    allCircles = document.querySelectorAll('.random-circle')
    angular.forEach(allCircles, function(circle) {
      tempDom = angular.element(circle);
      circleSize = Math.random() * 120 + 50;
      tempDom.css('color', '#000')
      tempDom.css('width', circleSize+'px')
      tempDom.css('height', circleSize+'px')
      tempDom.css('line-height', circleSize+'px')
      tempDom.css('background', $scope.getRandomColor())
      tempDom.css('margin-top', Math.random() * 100 )
      tempDom.css('margin-left', Math.random() * 50 )
    });
  }

  $scope.getRandomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 4; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    color += "ff"
    return color;
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

  setTimeout($scope.changeCircleStyle, 100);


})
