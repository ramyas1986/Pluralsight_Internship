# Javascript_Capstone_Todoist

Setting up the REST API

The capstone project is supported by a Node.js REST API that you can clone from:

git clone https://github.com/DevelopIntelligenceBoulder/stay-organized-workshop-express-server
After you clone this repository to your local computer, change directories (cd) into the newly cloned project folder and Install the projects dependencies with NPM 
cd stay-organized-workshop-express-server  
npm install
Start the local server using the command:
npm start
Expected Output
  App listening at port 8083
You can verify the server is working as expected by using a browser to access http://localhost:8083/api/users

EST API Endpoints
The supported endpoints are shown below.  Please note you will need to prepend them with http://localhost:8083/ before sending the request to the API
GET api/users
GET api/categories
GET api/todos
GET api/todos/1  					(other other todo id)
GET api/todos/byuser/1   			(or other user id)
GET api/username_available/sallie71  	(or other user id)
GET api/users/gamer04				(or other user id)
POST api/todos
PUT api/todos/2					(or other todo id)
POST api/users

You can use a browser to test the GET endpoints.  VS Code's REST Client shown on Thursday to can be used to test the POST and PUT endpoints.  Read the link provided!

The site already has some users registered.  You can see them by looking at the server's data/users.json file.  It resembles:

[
  {
    "id":1,
    "name": "Ian Auston", 
    "username": "gamer04", 
    "password": "gamer04!"
  },
  ...
]

This website includes the pages below

1. A home page named index.html that highlights our "Stay Organized" web site.
2. A page that allows you to view all of the ToDo tasks for a user by picking the user from a dropdown.  The page will be named user-todos.html
3. A page that allows the user to add a ToDo task named new-todo.html
4. A page named new_user.html that allows a new user to register for our services 