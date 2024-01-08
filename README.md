# Burger Bonanza Coding Challenge

## Technologies

- PostgreSQL
- Express
- React
- Passport

### Passport Authentication

When using this application you will need an `.env` file in the root of the server folder for Passport user authentication. Use the `example.env` for reference:

```env
SESSION_SECRET="123abc"
```

## Installation

Before starting the app use `yarn` to install dependencies, create the initial database, and run the migrations:

```sh
yarn install
cd server
createdb burger-bonanza-reducer-challenge_development
yarn migrate:latest
cd ..
yarn dev
```
