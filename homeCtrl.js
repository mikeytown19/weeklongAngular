angular.module('devMtIn').controller('homeCtrl', function($scope){

  $scope.myProfile = {

    friends:[
      {name:"ryan"},{name:"scott"},{name:"jake"},{name:"ben"},{name:"brad"},
    ],
  }

  $scope.sortOptions = [{
      display: 'Ascending'
    , value: false
    },
    {
      display: 'Descending'
    , value: true
    }
  ];
});
