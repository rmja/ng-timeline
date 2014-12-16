angular.module('sample', ['timeline'])

.controller('SampleController', function ($scope) {
	var timelineDataModel = {
		categories: [
			{
				rows: [
					{ name: 'Rum 1' },
					{ name: 'Rum 2' }
				]
			}, {
				rows: [
					{ name: 'Rum 3' }
				]
			}
		],
		startDate: moment([2014, 1, 1]),
		endDate: moment([2014, 1, 10]),
		redLetterDays: [
			{ date: moment([2014, 1, 3]), name: 'Påske' }
		],
		views: [
			{ id: 1, name: 'View 1' },
			{ id: 2, name: 'View 2' }
		],
		items: [
			{
				start: 1,
				end: 2,
				content: 'item'
			}
		]
	};

	$scope.timelineViewModel = new timeline.TimelineViewModel(timelineDataModel);
})
;