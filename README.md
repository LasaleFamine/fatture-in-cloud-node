# fatture-in-cloud-node
[![Build Status](https://travis-ci.org/LasaleFamine/fatture-in-cloud-node.svg?branch=master)](https://travis-ci.org/LasaleFamine/fatture-in-cloud-node)

> Fatture in Cloud API wrapper for Nodejs


## Install

```
$ yarn add fatture-in-cloud-node
```


## Usage

```js
const FattureInCloud = require('fatture-in-cloud-node');

const pageNumber = 1;
const fattureInCloud = new FattureInCloud({api_key: '', api_uid: ''});
fattureInCloud
	.listUsers(pageNumber)
	.then(users => console.log(users))
/* =>
	"lista_clienti": [
    {
      "id": "someRandomId",
      "nome": "Something",
      "referente": "",
      "indirizzo_via": "",

      etc...
    }, {
			"id": "someRandomId",
			...
		}
*/
```


## API

### class FattureInCloud(CREDENTIALS)

#### CREDENTIALS

Type: `object`

```js
{
	api_key: '',
	api_uid: ''
}
```

#### Methods

// TODO -> ref [index.js](https://github.com/LasaleFamine/fatture-in-cloud-node/blob/master/src/index.js) for now.

## License

MIT © [LasaleFamine](https://godev.space)
