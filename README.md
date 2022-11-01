# Kanban Board API

REST API created with Typescript, Express and Mongo DB. Is running in a **Docker container** host in a [AWS EC2 instance](http://ec2-54-207-162-78.sa-east-1.compute.amazonaws.com:3001/).

It has three main URI`s " URL/api/ ": users, cards-containers, cards

The project is structured by layers:
 - HTTP logic layer
 - Business logic layer:
    * Service layer
    * Data base access layer

Inside each layer the project is divided into three main components USERS, CARDS-CONTAINER, CARDS.

<br>

**HTTP logic layer**: Is divided into two folders, Routes and Controllers. Handles the http requests from the client, route them to the respective controllers for validation and delegate to the correspondent service and send the response back. The HTTP/Express context ends in this layer.

**Business logic layer**: Is divided into two main folders, Services and Data base. Handles the task send by the controllers and manage the data acces for the data base.

  * Services Layer: Process the task from the controller and access the data base to save and/or retrive the process data.
  
  * Data base access layer: Controls how to access the data and the connection to the data base.
  
<br>

#### Data base access

Mongo DB is access with mongoose. All db operations are handle with a **Generic Repository**.

#### Error handling

Errors ara handle with catch blocks and with the next function they are passed to a custom middleware that send the error info as a response to the client. 
The different status code erros are generated with a base class (see error-handling folder in src folder).

# Installation

```bash
    git clone https://github.com/Homocode/kanban-api-backend.git
    cd kanban-api-backend
    npm install
```
*****scripts:*****
```bash
    npm run dev (transpile typescript and start the app on localhost:3001. On save in the code automatically re-execute)
    npm run tsc ( transpile typescript and create the folder build with all the js code transpyle from typescript)
    npm start (start the app on localhost:3001)
```
   

***IMPORTANT***
<br>
This is the code running in production, so the sensitive data like the enviroment variables are not in this repo.
Mongo DB is not going to connect as is it. You need to have an instance of mongo to connect to, it can be a localhost mongodb or a cluster in mongodb atlas.

- Localhost: Install mongodb in your computer and set up an instance, then go to /src/data-base/index.data-base.ts and change line 11: <br>

    const connectionString = "mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.kdebkjh.mongodb.net/kanban-db?retryWrites=true&w=majority" <br>

    for <br>

    const connectionString = "mongodb://127.0.0.1:27017/name-of-the-db-instance"

- Cluster: Go to /src/data-base/index.data-base.ts and change the connection string of line 11 for the connection string provide for your cluster. After that create a .env file in the root of the project and put the varaibles:

     DB_USERNAME= here-goes-the-username-of-your-atlas-account <br>
     DB_PASSWORD= here-goes-the-password-of-your-atlas-account
     
 
     
     










 
 
  
