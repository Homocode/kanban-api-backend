# Kanban Board API

REST API created with Typescript, Express and Mongo DB . Is host in a [AWS EC2 instance](http://ec2-54-207-162-78.sa-east-1.compute.amazonaws.com:3001/).
The project is structured by layers:
 -HTTP logic layer
 -Business logic layer:
  -Service layer
  -Data base access layer
 
HTTP logic layer: Handles the http requests from the client, route them to the respective controllers for validation, delegate to the correspondent service and send the response back. Is divide in to two project folders, Routes and Controllers.

Business logic layer: 
 
 
  
