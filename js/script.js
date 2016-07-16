function checkWindowSize() {
    if ( jQuery(window).width() >= 1200 ) {
        $('.truncate').succinct({
            size: 400
        });  
    }
    else if ( jQuery(window).width() >= 992 ) {
        $('.truncate').succinct({
            size: 200
        }); 
    }
    else if ( jQuery(window).width() >= 768 ) {
        $('.truncate').succinct({
            size: 80
        }); 
    }
    else if ( jQuery(window).width() >= 480 ) {
        $('.truncate').succinct({
            size: 120
        }); 
    }
    else if ( jQuery(window).width() >= 320 ) {
        $('.truncate').succinct({
            size: 80
        }); 
    }
    else {
        $('.truncate').succinct({
            size: 55
        }); 
    }  
}

jQuery(document).ready(function(){
	var w = $(window).width(),
    toggle 		= $('#toggle-menu'),
    menu 		= $('nav ul'),
    hasChild = $('.has-child'),
    dropdown = $('.dropdown');

$(function() {
  $(toggle).on('click', function(e) {
    e.preventDefault();
    menu.toggle();
  });
  
  $(hasChild).click(function(e) {
    e.preventDefault();
    dropdown.toggle();
  });
});

$(window).resize(function(){
checkWindowSize();
  if(w > 320 && menu.is(':hidden')) {
    menu.removeAttr('style');}
});
});
//-----ANGULAR------------
var app = angular.module('myApp', []);
		app.controller('customersCtrl', function($scope, $http) {
			$scope.sortType     = 'name'; // set the default sort type
			$scope.sortReverse  = false;  // set the default sort order
			$scope.searchDeal   = '';     // set the default search/filter term
					
			$http.get("https://nutanix.0x10.info/api/deals?type=json&query=list_deals")
			.success(function (response ) {
				$scope.deals = response.deals;
				$scope.discounted = function (deal) {
					return deal.actual_price - (deal.actual_price*0.01*parseInt(deal.discount.substring(0, 1)));
				};
			});
		});

//for api count
app.controller('apiCtrl', function($scope, $http) {
			$http.get("http://nutanix.0x10.info/api/deals?type=json&query=api_hits")
			.success(function (response) {
				$scope.apiCount = response.api_hits;
			});
		});
