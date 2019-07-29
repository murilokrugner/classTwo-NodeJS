# Segunda aula de Node.JS

* 1 - criar projeto: yarn init -y

* 2 - instalar express: yarn add express

* 3 - instalar sucrase para (import/export): yarn add sucrase

* 4 - configurar nodemon: yarn add nodemon

* 5 - criar arquivo nodemon.json (configurar)

* 6 - configurar nodemon no package.json (ver arquivo)

* 7 - criar pasta src > arquivo: app.js; server.js; routes.js

* 8 - criar pasta app dentro de src: pasta controllers e pasta models

* 9 - instalar o sequelize: yarn add sequelize express e yarn add -D sequelize-cli

* 10 - instalar dialecto postres: yarn add pg pg-hstore

* 11 - criar arquivo: .sequelizerc

* 12 - criar pasta dentro de src: config > database.js

* 13 - criar pasta dentro de src: database > migrations e arquivo index.js

* 14 - configurar server.

* 15 - criar migration sequelize: yarn sequelize migration:create --name=create-users

* 16 - migrate do sequelize: yarn sequelize db:migrate

* 17 - desfazer migrate:: yarn sequelize db:migrate:undo (all)
