'use strict';
angular.module('formly.render')
.directive('formlyName', [
    '$compile', 
    function ($compile){
        return {
            restrict:"A",
            terminal:true,
            priority:1000,
            link: function nameLink($scope, $element, $attrs) {
                $element.attr('name', $scope.$eval($attrs.formlyName));
                $element.removeAttr("formly-name");
                $compile($element)($scope);
            }
        };
    }
]);
