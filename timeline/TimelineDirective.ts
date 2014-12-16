module timeline {
	'use strict'

<<<<<<< HEAD
	export function timelineDirective(): ng.IDirective {
		return {
			restrict: 'E',
			templateUrl: '/timeline/timeline.tmpl.html',
			scope: {
				model: '='
			},
			link: ($scope: ng.IScope, element: JQuery, attributes: any) => {
			}
=======
	export function timeline(): ng.IDirective {
		return {
			restrict: 'E',
			controller: 'TimelineController'
>>>>>>> c2efc1eef5e6c97646373627554eb046088c75fd
		};
	}
}