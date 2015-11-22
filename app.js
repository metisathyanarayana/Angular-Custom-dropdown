angular.module('Joy', [])
    .controller('dropdownCtrl', ['$scope', function($scope) {

        $scope.items = ['one', 'two', 'three', 'four', 'five'];
        $scope.tags = [];
        $scope.visible = false;	
        $scope.key = '';
        $scope.addItem = function($event) {
                if ($scope.items.indexOf($scope.key) === -1) {
                    $scope.items.push($scope.key);
                }
                if ($scope.tags.indexOf($scope.key) === -1) {
                    $scope.tags.push($scope.key);
                }

                $scope.key = '';

        };

        $scope.toggle = function() {

            $scope.visible = !$scope.visible;
        }
        
        $scope.setValue = function(value) {
            $scope.key = value;
        }

    }]);
