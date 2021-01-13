
# Graphback NestJS + Apollo Server with MongoDB Template

> NOTE: This is a preview template - we are continuing to enhance it - we welcome your feedback.

A template that provides you with an easy setup for your application's backend using NestJS and Apollo server with TypeScript, and MongoDB as the database.


## Quickstart Guide

The project has been created using Graphback. Run the project using the following steps:

1. Install dependencies
 
	```
	yarn install
	```
	Or, if using npm:
	```
	npm install
	```
	
2. Inspect your schema in the `datamodel.graphql` file.
3. Start the server in:
	- watch mode
		```
		yarn start:dev
		```
	- development mode
		```
		yarn start
		```

	- production mode
		```
		yarn start:prod
		```

	If you're using npm, just replace `yarn` with `npm run`.

For more on customizing your Graphback application, check out [the docs](https://graphback.dev/docs/gettingstarted)


## Updating the business model

The `model` folder contains a GraphQL schema file named `datamodel.graphql` defining your [business model](https://graphback.dev/docs/model/datamodel). This file can be edited to suit your needs.

After you have made changes to this file, it is necessary to regenerate the Graphback API by restarting the server (ie. reimplementing **Step 3** of the Quickstart Guide mentioned above).

After restarting the server, the Graphback API will be regenerated and your latest changes will be reflected in the schema.


## Dependencies and Tools

The following tools and technologies have been used to create this template:

- [GraphQL](https://graphql.org/): GraphQL is an open-source data query and manipulation language for APIs which was publically released by Facebook in 2015.

- [Apollo Server](https://www.apollographql.com/docs/apollo-server/): Apollo Server provides a way to simplify building the GraphQL server. It can be used with several popular libraries for Node.js like Express, Koa, Hapi. Here we have used it with Express.

- [NestJS](https://nestjs.com/): NestJS is a progressive Node.js framework which is used for building efficient and scalable server-side applications. It uses robust HTTP Server frameworks like Express or Fastify to make building a Node.js server easier by providing a wide range of features.

- [GraphQL Code Generator](https://graphql-code-generator.com/): GraphQL Code Generator is a tool that generates code out of your GraphQL schema by analyzing it.

- [MongoDB](https://www.mongodb.com/): MongoDB is a popular open-source document NoSQL database written in C++.
