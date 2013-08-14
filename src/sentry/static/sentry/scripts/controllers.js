// TODO(cramer): this should be defined elsewhere
var Sentry = angular.module('Sentry', []);

Sentry.factory('GroupModel', function() {
    function GroupModel(initialData) {
        var self = this;
        // Just deep copy constructor data onto this object
        angular.copy(initialData, self);

        self.getLevelClassName = function() {
            return 'level-' + self.levelName;
        };
    };

    return GroupModel;
});

Sentry.controller('StreamCtrl', ['$scope', 'initial', 'GroupModel', function($scope, initial, GroupModel){
    $scope.groups = initial.groups.map(function(val) {
        return new GroupModel(val);
    });

    // TODO(cramer): figure out how to better define utilities in Angular apps.\
    $scope.utils = app.utils;
}]);
