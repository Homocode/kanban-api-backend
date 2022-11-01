# Kanban Board API

REST API created with Typescript, Express and Mongo DB . Is host in a [AWS EC2 instance](http://ec2-54-207-162-78.sa-east-1.compute.amazonaws.com:3001/).

It has three main URI`s " URL/api/ ": users, cards-containers, cards

The project is structured by layers:
 - HTTP logic layer
 - Business logic layer:
    * Service layer
    * Data base access layer

Inside each layer the project is divided into three main components USERS, CARDS-CONTAINER, CARDS.

<br>

**HTTP logic layer**: Is divided into two folders, Routes and Controllers. Handles the http requests from the client, route them to the respective controllers for validation, delegate to the correspondent service and send the response back. The HTTP/Express context ends in this layer.

**Business logic layer**: Is divided into two main folders, Services and Data base. Handles the task send by the controllers and manage the data acces for the data base.

  * Services Layer: Process the task from the controller and access the data base to save and/or retrive the process data.
  
  * Data base access layer: Controls how to access the data and the connection to the data base.

<br>


 
 
  
