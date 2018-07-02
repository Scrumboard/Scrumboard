
cd docker
docker-compose pull
docker-compose build
cd ../

cd scrumboard-web
npm install
npm run build
cd ../

cd scrumboard-api
cp .env.example .env
sed -i 's/DB_HOST=127.0.0.1/DB_HOST=data/' .env
sed -i 's/DB_DATABASE=homestead/DB_DATABASE=scrumboard/' .env
sed -i 's/DB_USERNAME=homestead/DB_USERNAME=scrumboard/' .env
sed -i 's/DB_PASSWORD=secret/DB_PASSWORD=password123/' .env
composer install
php artisan key:generate
cd ../

