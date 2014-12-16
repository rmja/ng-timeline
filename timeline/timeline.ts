module timeline {
	'use strict';

	angular.module('timeline', [])
		.controller('TimelineController', TimelineController)
		.directive('timeline', timeline);
}