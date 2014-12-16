module timeline {
	'use strict';

	export class TimelineController {
		public static $inject = [
			'$scope'
		];

		constructor(
<<<<<<< HEAD
			private $scope: ITimelineScope
		) {
		}
	}

	export interface ITimelineScope extends ng.IScope {
		aBoolean: boolean;
	}
=======
			private $scope: ng.IScope
		) {
			
		}
	}
>>>>>>> c2efc1eef5e6c97646373627554eb046088c75fd
}