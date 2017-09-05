angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      var i = 0;
      for (i=0; i<$scope.listings.length; i++) {
        if ($scope.listCode.localeCompare($scope.listings[i].code)<0) {
          i--;
          break;
        }
      }
      temp1 = $scope.listings.slice(0, i+1);
      temp1.push({"code":$scope.listCode, "name":$scope.listName,
      "coordinates":{"latitide":$scope.listLat, "longitude":$scope.listLong},
      "address":$scope.listAddress});
      temp2 = $scope.listings.slice(i+1, $scope.listings.lenth);
      $scope.listings = temp1.concat(temp2);
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
