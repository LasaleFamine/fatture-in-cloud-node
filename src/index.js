'use strict';

/* eslint-disable camelcase */

const got = require('got');

class FattureInCloud {
	constructor(credentials) {
		this.credentials = credentials;
		this.API = 'https://api.fattureincloud.it/v1/';
		this.ENDPOINTS = {
			create: this.API + 'clienti/nuovo',
			list: this.API + 'clienti/lista'
		};
	}

	_setupRequest(body) {
		const credentials = {
			api_key: this.credentials.api_key,
			api_uid: this.credentials.api_uid
		};

		return {
			json: true,
			body: Object.assign({}, credentials, body)
		};
	}

	/*
	* Get user by CF
	* @method getByCF
	* @param {string} CF - CF of the user
	*/

	/* istanbul ignore next */
	getByCF(CF) {
		const options = this._setupRequest({cf: CF});
		return got.post(this.ENDPOINTS.list, options);
	}

	/*
	* Get user by name
	* @method getByUserName
	* @param {string} username - username of the user
	*/

	/* istanbul ignore next */
	getByUserName(username) {
		const options = this._setupRequest({nome: username});
		return got.post(this.ENDPOINTS.list, options);
	}

	/*
	* Get user list
	* @method list
	* @param {number} page - page number
	*/

	/* istanbul ignore next */
	listUsers(page = 1) {
		const options = this._setupRequest({pagina: page});
		return got.post(this.ENDPOINTS.list, options);
	}

	/*
	* Create new User
	* @method create
	* @param {object} user - object containing user details
	*/

	/* istanbul ignore next */
	createUser(user) {
		const options = this._setupRequest(user);
		return got.post(this.ENDPOINTS.create, options);
	}
}

module.exports = FattureInCloud;
