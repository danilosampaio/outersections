'use strict';
module.exports = ranges => {
	if (!Array.isArray(ranges)) {
		throw new TypeError(`Expected a array of ranges, got ${typeof ranges}`);
	}

	if (ranges.length < 1) {
		return [];
	}

	ranges = ranges.sort(function (a, b) {
		return a.begin - b.begin;
	}).sort(function (a, b) {
		return a.end - b.end;
	});

	var outersections = [];

	for (var i = 0; i < ranges.length - 1; i++) {
		var range = ranges[i];
		var next = ranges[i + 1];

		if (next.begin > range.end) {
			outersections.push({begin: range.end, end: next.begin});
		}
	}

	return outersections;
};
