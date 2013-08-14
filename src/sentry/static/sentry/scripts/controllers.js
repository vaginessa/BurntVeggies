// TODO(cramer): this should be defined elsewhere
var Sentry = angular.module('Sentry', []);

Sentry.controller('StreamCtrl', ['$scope', '$window', function($scope, $window){
	$scope.groups = $window.groups;
	// TODO(cramer): figure out how to better define utilities in Angular apps.\
	$scope.utils = app.utils;

	$scope.getLevelClassName = function(group){
        return 'level-' + group.levelName;
    };
}]);
