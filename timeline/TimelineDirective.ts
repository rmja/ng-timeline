module timeline {
	'use strict'

	export function timelineDirective(): ng.IDirective {
		return {
			restrict: 'E',
			templateUrl: '/timeline/timeline.tmpl.html',
			scope: {
				model: '='
			},
			link: ($scope: ng.IScope, element: JQuery, attributes: any) => {
			}
		};
	}
}