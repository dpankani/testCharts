'use strict';

/**
 * @ngdoc function
 * @name nscwebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nscwebappApp
 */
angular.module('nscwebappApp')
  .controller('MainCtrl', function (designComplexity) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
     var simpleComplexityVars = {
        isNewDevelopment: false,
        isReDevelopment: true,
        hasPretreatment: true,
        siteSuitability: 2,
        topography: 0,
        soilType: 0
    };
    var typicalComplexityVars = {
        isNewDevelopment: false,
        isReDevelopment: true,
        hasPretreatment: true,
        siteSuitability: 2,
        topography: 1,
        soilType: 1
    };
    var complexComplexityVars = {
        isNewDevelopment: false,
        isReDevelopment: true,
        hasPretreatment: true,
        siteSuitability: 0,
        topography: 2,
        soilType: 2
    };
    alert("test");
    var batchComplexity = [simpleComplexityVars,typicalComplexityVars,complexComplexityVars];
    $.each(batchComplexity, function(idx,val){
        designComplexity.computeDesignComplexity(val);
    });
    
  });
