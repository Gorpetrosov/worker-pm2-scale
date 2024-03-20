## Installation

```bash
$ npm i -g artillery@latest
$ npm install pm2@latest -g
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```
## Scaling app with pm2 and request multiple requests via artillery
```
$ pm2 start dist/main.js -i max
$ pm2 ls
$ artillery run ./artillery.yaml
```