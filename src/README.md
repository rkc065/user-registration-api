Prerequisite for the project:--

1.) NPM packages

a.) npm i mongodb

b.) npm i validate-phone-number-node-js

c.) npm i express

d.) npm i bcryptjs

e.) npm i jsonwebtoken

------------------------------------------------------------------------------------
2.) MongoDB compass
3.) Postman(API client)
-----------------------------------------------------------------------------------
Production URL of the Project

https://robin-user-registration-api.herokuapp.com/
------------------------------------------------------------------------------------

HTTP Requests:

Request Name 			HTTP request type	      	  Request URL			Authentication
-----------------------------------------------------------------------------------------------------------------------
Register user	        	 POST	              		{{URL}}/users				No
Login user	        	 POST		      		{{URL}}/users/login			No
Logout from the current session  POST		      		{{URL}}/users/logout			Yes
Logout from all the sessions	 POST		      		{{URL}}/users/logoutAll			Yes
View my profile			 GET		      		{{URL}}/get/me				Yes
Get all users			 GET		      		{{URL}}/users				Yes
Get user by Id			 GET		      		{{URL}}/user_by_id/:Id			No
Find user by name		 GET		      		{{URL}}/users/:Name			No
Find user by contact		 GET		      		{{URL}}/user/:Contact			No

{{URL}}= https://robin-user-registration-api.herokuapp.com  (Set this an Environment variables in Postman)


Register user 				(POST) --- {{URL}}/users

Login user    				(POST) --- {{URL}}/users/login

Logout from the current session  	(POST) --- {{URL}}/users/logout

Logout from all the sessions		(POST) --- {{URL}}/users/logoutAll

View my profile				(GET)  --- {{URL}}/get/me

Get all users				(GET)  --- {{URL}}/users

Get user by Id				(GET)  --- {{URL}}/user_by_id/:Id

Find user by name			(GET)  --- {{URL}}/users/:Name

Find user by contact			(GET)  --- {{URL}}/user/:Contact

![image](https://user-images.githubusercontent.com/36421233/131257749-893d52fe-065d-43b0-86ad-1f6736281fe5.png)


Set the Bearer Token in the Postman for authentication

![image](https://user-images.githubusercontent.com/36421233/131258289-e960d00f-d446-4ce9-9746-f24f1c62ac37.png)


Postman Test script to automate the responses

a.) Register user(request)

if(pm.response.code===201)
{
pm.environment.set('authToken',pm.response.json().token)
}

![image](https://user-images.githubusercontent.com/36421233/131258361-25303e99-7bc4-4337-8333-0bae09288ee8.png)


b.) Login User (request)

if(pm.response.code===200)
{
pm.environment.set('authToken',pm.response.json().token)
}

![image](https://user-images.githubusercontent.com/36421233/131258392-758843a5-ca68-4ee3-b067-f2db5b3c1520.png)


		
		
		
		
		
		
	

