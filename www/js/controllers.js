angular.module('starter.controllers', [/*'$cordovaNativeAudio'*/])

.controller('DashCtrl', function($scope /*, $cordovaNativeAudio*/) {
    $scope.items = [
      {
        src:'img/dog_picture.jpeg',
        thumb: 'img/dog_picture.jpeg',
        sub: 'कुत्रा'
      },
      {
        src:'img/animal-brown-horse.jpg',
        thumb:'img/animal-brown-horse.jpg',
        sub: 'घोडा'
      },
      {
        src:'img/flower_picture.jpg',
        thumb:'img/flower_picture.jpg',
        sub: 'फूल'
      }
    ];

    $scope.play = function(sound) {
         //$cordovaNativeAudio.play(sound);
    }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
