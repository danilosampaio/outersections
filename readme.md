# outersections [![Build Status](https://travis-ci.org/danilosampaio/outersections.svg?branch=master)](https://travis-ci.org/danilosampaio/outersections) [![Coverage Status](https://coveralls.io/repos/github/danilosampaio/outersections/badge.svg?branch=master)](https://coveralls.io/github/danilosampaio/outersections?branch=master)

> It Calculates “Outersections” of ranges.

Given a list of ranges:

![Ranges](/outersection.png?raw=true "Ranges")

it calculates the "Outersection" intervals (Hatched area, with no intersections between the A,B,C date ranges).

[Stackoverflow discussion](http://stackoverflow.com/questions/43592891/how-to-calculate-outersections-from-sets-of-date-range)

## Install

```
$ npm install --save outersections
```


## Usage

```js
const outersections = require('outersections');

let ranges = [
	{begin: new Date(2017, 0, 1), end: new Date(2017, 0, 10)},
	{begin: new Date(2017, 0, 20), end: new Date(2017, 0, 30)},
	{begin: new Date(2017, 0, 1), end: new Date(2017, 0, 7)},
	{begin: new Date(2017, 0, 25), end: new Date(2017, 1, 5)}
];

outersections(ranges);
//=> [{ begin: Date(2017, 0, 10), end: Date(2017, 0, 20) }]

```


## API

### outersections(ranges)

#### input

Type: `Array`

Array of ranges


## License

MIT © [Danilo Sampaio](http://github.com/danilosampaio)
