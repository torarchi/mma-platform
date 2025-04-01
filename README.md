# MMA Platform API

Бэкенд для платформы с информацией о MMA событиях, бойцах, боях и рейтингах.

## Ссылки на документы связанные с проектом

Доступ открыт по ссылкам, если у Вас не будет доступа то напиши мне в тг пожалуйста - https://t.me/nearchil

**docs - database design** - <br> https://docs.google.com/document/d/1urqdya624cEcSeY9uNsI8grpY05QUvwM_G6a48KWpEo/edit?usp=sharing

**postgre sql db implementation** - <br> https://docs.google.com/document/d/1SadDMgR3QCRZWHSULkNyO-HiTuk8O85utHWH6y-sWpU/edit?usp=sharing

**database schema, with relationships** - <br> https://drawsql.app/teams/my-team-1594/diagrams/database-design


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

Клонируйте репозиторий: <br>

   git clone https://github.com/torarchi/mma-platform <br>
   cd mma-platform
   

Если у вас локально не установлен postgresql, то нужно будет либо установить, либо написать 
<br>
docker-compose up -d
<br>
Затем напишите (если через npm) - npm run dev <br>
И откройте playground - localhost:3000/graphql