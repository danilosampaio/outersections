import test from 'ava';
import outersections from '.';

test('should treat correctly empty ranges', t => {
	t.deepEqual(outersections([]), []);
});

test('should treat correctly invalid ranges', t => {
	const err = t.throws(() => outersections(123), TypeError);
	t.is(err.message, 'Expected a array of ranges, got number');
});

test('should calculate outersections number intervals', t => {
	const ranges = [
		{begin: 1, end: 10},
		{begin: 20, end: 30},
		{begin: 45, end: 55},
		{begin: 1, end: 10},
		{begin: 1, end: 7},
		{begin: 25, end: 35}
	];

	const expected = [
		{begin: 10, end: 20},
		{begin: 35, end: 45}
	];

	t.deepEqual(outersections(ranges), expected);
});

test('should calculate outersections date intervals', t => {
	const ranges = [
		{begin: new Date(2017, 0, 1), end: new Date(2017, 0, 10)},
		{begin: new Date(2017, 0, 20), end: new Date(2017, 0, 30)},
		{begin: new Date(2017, 1, 15), end: new Date(2017, 1, 25)},
		{begin: new Date(2017, 0, 1), end: new Date(2017, 0, 10)},
		{begin: new Date(2017, 0, 1), end: new Date(2017, 0, 7)},
		{begin: new Date(2017, 0, 25), end: new Date(2017, 1, 5)}
	];

	const expected = [
		{begin: new Date(2017, 0, 10), end: new Date(2017, 0, 20)},
		{begin: new Date(2017, 1, 5), end: new Date(2017, 1, 15)}
	];

	t.deepEqual(outersections(ranges), expected);
});
