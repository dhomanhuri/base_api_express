cp .env.example to .env

change port in bin/www, dockerfile, dockercompose
npm install
delete todo in models and migration

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

npx sequelize-cli db:migrate

docker-compose up -d --build