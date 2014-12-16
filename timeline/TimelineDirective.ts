module timeline {
	'use strict'

	export function timeline(): ng.IDirective {
		return {
			restrict: 'E',
			controller: 'TimelineController'
		};
	}
}