module timeline {
	'use strict';

	export class TimelineController {
		public static $inject = [
			'$scope'
		];

		constructor(
			private $scope: ITimelineScope
		) {
		}
	}

	export interface ITimelineScope extends ng.IScope {
		aBoolean: boolean;
	}
}