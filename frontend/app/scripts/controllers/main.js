'use strict';

/**
 * @ngdoc function
 * @name tpfinal.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tpfinal
 */
angular.module('dutymap')

  .controller('MainCtrl', ['$scope', '$http', '$location', '$anchorScroll','$document' ,function ($scope, $http, $location, $anchorScroll, $document) {
    
    /*
    // Scrolls to the selected menu item on the page
    $(function() {
      $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
*/
  }]);
