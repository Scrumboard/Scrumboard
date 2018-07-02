
cd docker
docker-compose pull
docker-compose build
cd ../

cd scrumboard-web
npm update
cd ../

cd scrumboard-api
composer update
cd ../

