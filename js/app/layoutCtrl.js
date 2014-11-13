app.controller("layoutController", function($scope ) {

    $scope.activeMenuTab = 1;

    $scope.indexTab = function() {
        $scope.activeMenuTab = 1;
    };
    
    $scope.companyTab = function() {
        $scope.activeMenuTab = 2;
    };
    
    $scope.servicesTab = function() {
        $scope.activeMenuTab = 3;
    };
    
    $scope.inovationTab = function() {
        $scope.activeMenuTab = 4;
    };
    
    $scope.valuesTab = function() {
        $scope.activeMenuTab = 5;
    };
    
    $scope.politicsTab = function () {
        activeMenuTab = 6;
    };
    
    $scope.politicsTab = function () {
        activeMenuTab = 1;
    };


});