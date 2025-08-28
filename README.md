 Article API (NestJS + Prisma + Swagger)

This is a simple CRUD API built with NestJS, Prisma ORM, and Swagger documentation. It allows you to manage articles with features like:

Create a new article

Retrieve all articles

Retrieve a specific article by ID

Update an existing article

Delete an article

Tech Stack
NestJS
 - Node.js framework

Prisma
 - ORM for database access

SQLite
 (default, can switch via .env)

Swagger
 - API documentation

⚙️ Installation

Clone the repository:
https://github.com/Glory-mmachi/My-blog.git

cd My-blog


Install dependencies:

npm install


Set up your environment file .env:

DATABASE_URL="file:./dev.db"


Run Prisma migrations:

npx prisma migrate dev --name init


Start the application:

npm run start:dev

🔗 API Endpoints

Base URL: http://localhost:3000/article

Method	Endpoint	Description	Body Example
GET	/article	Retrieve all articles	–
GET	/article/:id	Retrieve a single article by ID	–
POST	/article	Create a new article	{ "title": "My Article", "content": "Some content" }
PUT	/article/:id	Update an existing article	{ "title": "Updated", "content": "Updated content" }
DELETE	/article/:id	Delete an article by ID	–
