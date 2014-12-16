module timeline {
	'use strict';

	export class TimelineViewModel {
		public days:Array<any> = Array();

		constructor(
			public data
		) {
			console.log(moment(data.startDate).isSame(moment(data.startDate)));
			for (var date = moment(data.startDate); date.isBefore(data.endDate); date.add(1,'day')) {
				var redLetterDay = _.find(data.redLetterDays, (element:any) => {
					return date.isSame(element.date);
				});

				if (redLetterDay) {
					this.days.push({date: moment(date), text: redLetterDay.name});
				}
				else {
					this.days.push({date: moment(date)});
				}
				
			}
		}
	}
}