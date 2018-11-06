# Scrumboard

Hello World!

## Installation

```
scrumboard-web$ npm install
scrumboard-web$ npm run build
```

```
scrumboard-api$ cp .env.example .env
scrumboard-api$ sed -i 's/DB_HOST=127.0.0.1/DB_HOST=data/' .env
scrumboard-api$ sed -i 's/DB_DATABASE=homestead/DB_DATABASE=scrumboard/' .env
scrumboard-api$ sed -i 's/DB_USERNAME=homestead/DB_USERNAME=scrumboard/' .env
scrumboard-api$ sed -i 's/DB_PASSWORD=secret/DB_PASSWORD=password123/' .env
scrumboard-api$ composer install
scrumboard-api$ php artisan key:generate
scrumboard-api$ php artisan passport:install
scrumboard-api$ sudo chmod -R 777 storage/
```

```
docker$ docker-compose build
```

After starting:

```
docker container exec docker_api_1 php artisan migrate --seed
docker container exec docker_api_1 php artisan passport:client --personal
```

## Useage

Startup:

```
docker$ docker-compose up
```

After every front-end update:

```
scrumboard-web$ npm run build
```

Shutdown:

```
docker$ docker-compose down
```

Shutdown (with removal of all data):

```
docker$ docker-compose down --volumes
```

