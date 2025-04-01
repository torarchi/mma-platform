# MMA Platform API

test-task
Бэкенд для платформы с информацией о MMA событиях, бойцах, боях и рейтингах.

## Ссылки на документы связанные с проектом

Доступ открыт по ссылкам, если у Вас не будет доступа то напиши мне в тг пожалуйста - https://t.me/nearchil

**docs - database design** - <br> https://docs.google.com/document/d/1urqdya624cEcSeY9uNsI8grpY05QUvwM_G6a48KWpEo/edit?usp=sharing

**postgre sql db implementation** - <br> https://docs.google.com/document/d/1SadDMgR3QCRZWHSULkNyO-HiTuk8O85utHWH6y-sWpU/edit?usp=sharing

**database schema, with relationships** - <br> https://drawsql.app/teams/my-team-1594/diagrams/database-design

**api documentation** - <br> https://docs.google.com/document/d/1a2At_XN91P3vOqfyu6V7dqiHpiBzVquJT5nvDEXN56Y/edit?usp=sharing


## Технологии

- NestJS
- GraphQL
- TypeORM
- PostgreSQL
- Docker-compose

## Установка и запуск

### Предварительные требования

- Node.js (v18+)
- Docker Compose (для базы, если локально не установлено)
- npm или yarn

### Шаги по установке и запуску

- Клонируйте репозиторий:
   - git clone https://github.com/torarchi/mma-platform
   - cd mma-platform

- Установите зависимости:
   - npm install

- Создайте .env файл и запишите туда:
  ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=postgres
   DB_NAME=mma
  ```

- Если у вас локально не установлен PostgreSQL, запустите базу данных через Docker:
   - docker-compose up -d

- Запустите приложение:
   -npm run start:dev

- Откройте GraphQL playground по адресу http://localhost:3000/graphql

### Архитектура проекта
- Проект построен с использованием принципов Domain-Driven Design (DDD) и чистой архитектуры:

   - /domain: Содержит бизнес-сущности, репозитории и объекты значений
   - /application: Сервисы и сценарии использования
   -  /infrastructure: Реализация репозиториев, настройки базы данных
   - /modules: GraphQL модули с резолверами, типами и инпутами
 
// todo: tests
