# Restful API Banking APP
A NodeJS Restful API to deposit, transfer and withdraw money.

# Installation
- Create database with name `banking_api` or setting config database in folder /config/Database.js :
```js
// config/Database.js

const db = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'YOUR_DATABASE_USERNAME',
    password: 'YOUR_DATABASE_PASSWORD',
    database: 'YOUR_DATABASE_NAME'
  }
});

module.exports = db;
```
Note: setting your migration config in knexfile.js :
```js
// knexfile.js

development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'YOUR_DATABASE_USERNAME',
      password: 'YOUR_DATABASE_PASSWORD',
      database: 'YOUR_DATABASE_DATABASE'
    },
    migrations: {
      tableName: 'migrations'
    }
  }
```

- Run Migration
```sh
$ knex migration:latest
```
Note: if you not installed knex, first run this command:
```sh
$ npm install knex --global
```

# Security
Restful API Wallet using `passport` module for Authentication Route:
```js
passport.authenticate('jwt', { session: false })
```

Use this header:
```sh
Authorization: Bearer <token>
```

How do i get Bearer Token ?
- PATH:
```
POST /auth/login
```

- Request Content-Type: `Application/json`

- Request Body:
```json
{
  "email": "example@example.com",
  "password": "example"
}
```

- Response if login success:
```json
{
  "status": true,
  "msg": "Login successfully.",
  "tk": "<token>"
}
```

# Postman Api Documentation
The postman doc with the api urls, paramters passed and the http response. Check it out [Lendsqr bank api](https://documenter.getpostman.com/view/12575851/UVsJx7E3)

# License
ISC License.
