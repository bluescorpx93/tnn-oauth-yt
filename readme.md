### Passport / Google OAuth Tryout

- Backend - Express
- Frontend - EJS
- Database - MongoDB + Mongoose (ORM) at MLAB
- Authentication - Passport

To Test This

**Create App Keys**
```sh
$ cd tnn-passport-oauth-yt
$ touch keys/appKeys.js
```

**Update appKeys.js**
```
const KEYS = {
  GOOGLE_OAUTH_CLIENTID : <YOUR_GOOGLE_CLIENTID>,
  GOOGLE_OAUTH_CLIENTSECRET : <YOUR_GOOGLE_CLIENTSECRET>,
  MONGO_DB_CONN_URI : <YOUR_MONGODB_CONN_URI>,
  SESSION_COOKIE_KEY : <YOUR_SESSION_SECRET>
}

module.exports = KEYS
```

**Install Package Dependencies**
```sh
$ cd tnn-passport-oauth-yt
$ yarn install 

# or with npm
$ npm install
```

**Run APP**
```sh
$ cd tnn-passport-oauth-yt
$ yarn start-app
```


