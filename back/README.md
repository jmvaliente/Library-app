# This is a [Node.js](https://nodejs.org/en/) API with express & mongoDB.

## How to setup

Before installing dependencies make sure you have nodejs [installed](https://nodejs.org/en/download/).  

```bash
node -v
```

Install dependencies.  

```bash
npm i
```

Setup the enviroment file, rename `.env.example` with **.env**.
This file contains two enviroment variables.
 
- `PORT` Where express is listening
- `DB` URI from mongoDB atlas or localhost.

## How to run

Execute the next line in console if you want to run the development server.

```bash
npm run dev
```

If you need to run the api to work with frontend execute the next line.

```bash
npm run start
```