Programs required on your computer: 
  NodeJS - http://nodejs.org/download/
  MongoDB - http://www.mongodb.org/downloads


Starting up node.JS:
  Open a terminal and browse to project-folder and type 'npm start'.

  Default port is 3000, this can be changed in server.js
  Open up a browser and go to http://localhost:3000/ and it should work.

Starting up mongoDB-server:
  Option 1) Via bitnami or other GUI-interface.
  Option 2) Open a new terminal and browse to the project-folder. 
            Type 'mongod --dbpath pathToTheDBFolder' 
            For example 'mongod --dbpath c:/projects/project1/db'


Connecting to the mongoDB:
  Option 1) GUI, for example Rockmongo
  Option 2) Open a new terminal (leave the other ones open and active) and type 'mongo'
  Default name on the DB for this project is cms (can be changed in server.js), so type 'use cms' when connected to use it.

