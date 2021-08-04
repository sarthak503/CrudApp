To start the server, go to terminal and run : 
npm start

The data is stored in MongoDB database.

To test the server , go to 
http://localhost:4242/

To see the users, go to 
http://localhost:4242/users

All the operations such as get , get by id , post and delete 
works in this URL http://localhost:4242/users

Download Postman, test all the routes
using the url told above

**How to Use Postman**

Url Used : http://localhost:4242/users
* To get all users,
Select get, type the url, Click send 

* To get a single user, 
Copy the id of that user, paste it after url, Click send.

* To add a new user,
Select post, go to body section, type in the details of user,
in the json format, click send. A confirmation 
message will be displayed

* To delete a user,
Select delete,Copy the id of the user to be deleted,
paste it after url, click send.A confirmation 
message will be displayed.