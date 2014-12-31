angular.module('bobo.controllers', [])

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}])

.controller('LoadingCtrl', function($scope, $state) {
  $scope.cancelLoading = function (){
    // goFriend is temp
    $state.go('friend');
  }

})

.controller('LoginCtrl', function($scope, $state, $ionicLoading) {
  $scope.user  = {name:"", phone:""};
  $scope.sendVibrationMsg = function () {
    alert('1')
    // $ionicLoading.show({
      // templateUrl: 'templates/loading.html'
    // });
    console.log($scope.user)
  }
  // setTimeout is temp code
  // setTimeout($scope.sendVibrationMsg, 3000);

  navigator.notification.vibrate(2500);

  $scope.closeLoading = function(){
    $ionicLoading.hide()
  }

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
    var allCircles = document.querySelectorAll('.random-circle')
    var i = 0

    angular.forEach(allCircles, function(circle) {
      var tempDom = angular.element(circle);
      circleSize = Math.random() * 90 + 50;
      tempDom.css('color', '#000')
      tempDom.css('width', circleSize+'px')
      tempDom.css('height', circleSize+'px')
      tempDom.css('line-height', circleSize+'px')
      tempDom.css('background', $scope.getRandomColor(i%3))
      tempDom.css('margin-top', Math.random() * 50 )
      tempDom.css('margin-left', Math.random() * 25 )
      i++
    });
  }

  $scope.getRandomColor = function(randomNum) {
    var color = '#';
    var letters = '0123456789ABCDEF'.split('');
    var letterIndex = 0;

    for (var i = 0; i < 6; i++ ) {
        letterIndex = Math.floor(Math.random() * 15);
        if( i == randomNum || i == randomNum+1) {
          letterIndex = 15;
        }
        color += letters[letterIndex];
    }
    return color;
  }

  $scope.goGroup = function () {
    $state.go('group')
  }

  $scope.goFriend = function () {
    $state.go('friend')
  }

  $scope.selectFriend = function (friend) {
    friend.selected = !friend.selected
  }

  $scope.sendMsg = function () {
    // send msg
  }

  setTimeout($scope.changeCircleStyle, 100);


})
