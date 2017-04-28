'use strict';
module.exports = ranges => {
	if (!Array.isArray(ranges)) {
		throw new TypeError(`Expected a array of ranges, got ${typeof ranges}`);
	}

	if (ranges.length < 1) {
		return [];
	}

	const sorted = ranges.sort(function (a, b) {
		return a.begin - b.begin;
	}).sort(function (a, b) {
		return a.end - b.end;
	});

	const outersections = [];

	for (let i = 0; i < sorted.length - 1; i++) {
		const range = sorted[i];
		const next = sorted[i + 1];

		if (next.begin > range.end) {
			outersections.push({begin: range.end, end: next.begin});
		}
	}

	return outersections;
};
