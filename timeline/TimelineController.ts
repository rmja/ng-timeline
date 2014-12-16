module timeline {
	'use strict';

	export class TimelineController {
		public static $inject = [
			'$scope'
		];

		constructor(
			private $scope: ng.IScope
		) {
			
		}
	}
}