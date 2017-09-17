import test from 'ava';
import FattureInCloud from './../src';

/* eslint-disable camelcase */

const CREDENTIALS = {api_key: 'ciao', api_uid: 'ciao2'};

test('correct instantiation', t => {
	const fn = new FattureInCloud(CREDENTIALS);
	t.deepEqual(fn.credentials, CREDENTIALS, 'Instantiated credentials');
});

test('setup request method', t => {
	const fn = new FattureInCloud(CREDENTIALS);
	const body = Object.assign({}, CREDENTIALS, {test: 'lol'});
	const expected = Object.assign({}, {body}, {json: true});
	t.deepEqual(
		fn._setupRequest({test: 'lol'}),
		expected,
		'_setupRequest() correctly returns options'
	);
});
