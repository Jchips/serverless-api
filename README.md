# LAB - Class 18

## Project: serverless-api

### Author: Jelani R

### Problem Domain

Create a serverless REST API using AWS.

- Create one table for one data model at Dynamo DB.
- Create a Dynamoose schema to define the structure of your table.
- Write lambda functions that will separately perform the proper CRUD operation on the database.
- Create routes using API Gateway.
- Routes should integrate with the appropriate Lambda function to perform the operation.

### Links and Resources

- [Pull Request](https://github.com/Jchips/serverless-api/pull/1)
- [API URL](https://p3mh8ixfvf.execute-api.us-west-2.amazonaws.com/dev/people)

### Setup

#### Features / Routes

- GET: `/people`
  - input: none
  - output: array of objects (all the `people` objects in the database)
- GET: `/people/{id}`
  - input: none
  - output: array of objects (the item from the `people` table with the given id)
- POST: `/people`
  - input: object (an item to add to `people` table)
  - output: object (the item newly added to the `people` table)
- PUT: `/people/{id}`
  - input: object (an item to edit in the `people` table)
  - output: object (the edited item in the `people` table)
- DELETE: `/people/{id}`
  - input: none
  - output: an empty object

Pull requests:

- <https://github.com/Jchips/serverless-api/pull/1>

#### Tests

No Tests

#### UML

![Lab 18 UML](/lab-18-uml.jpg)
