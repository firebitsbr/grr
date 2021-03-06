'use strict';

goog.provide('grrUi.stats.serverLoadGraphSerieDirective.ServerLoadGraphSerieDirective');

goog.scope(function() {



/**
 * Registers serie in the graph.
 *
 * @return {angular.Directive} Directive definition object.
 * @export
 */
grrUi.stats.serverLoadGraphSerieDirective.ServerLoadGraphSerieDirective =
    function() {
      return {
        scope: {
          component: '@',
          metric: '@',
          rate: '@',
          aggregation: '@',
          distributionHandling: '@',
          label: '@'
        },
        restrict: 'E',
        require: '^grrTimeseriesGraph',
        link: function(scope, element, attrs, grrTimeseriesGrpahCtrl) {
          var options = {};

          if (scope.distributionHandling) {
            options['distribution_handling_mode'] = scope.distributionHandling;
          }
          if (scope.aggregation) {
            options['aggregation_mode'] = scope.aggregation;
          }
          if (scope.rate) {
            options['rate'] = scope.rate;
          }

          var path = 'stats/store/' + scope.component.toUpperCase() +
              '/metrics/' + scope.metric;

          grrTimeseriesGrpahCtrl.addSerieDescriptor({
            label: scope.label,
            requestPath: path,
            requestOptions: options
          });
        }
      };
    };


/**
 * Name of the directive as registered in Angular.
 *
 * @const
 * @export
 */
grrUi.stats.serverLoadGraphSerieDirective.
    ServerLoadGraphSerieDirective.directive_name = 'grrServerLoadGraphSerie';


});  // goog.scope
