Prerequisite for the project:--
--------------------------------------------------------------------------------

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

Request Name 		                            	HTTP request type	      	    Request URL		   	         Authentication
-----------------------------------------------------------------------------------------------------------------------
Register user	        	                            POST	              		{{URL}}/users				               No
Login user	        	                               POST		      	        {{URL}}/users/login			          No
Logout from the current session                    POST		      		       {{URL}}/users/logout			         Yes
Logout from all the sessions	                      POST		      		       {{URL}}/users/logoutAll			      Yes
View my profile			                                 GET		      		        {{URL}}/get/me				              Yes
Get all users			                                   GET		      		        {{URL}}/users				               Yes
Get user by Id			                                  GET		      		        {{URL}}/user_by_id/:Id			       No
Find user by name		                                GET		      		        {{URL}}/users/:Name			          No
Find user by contact		                             GET		      		        {{URL}}/user/:Contact			        No

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


Postman Test script to automate the requests for authentication

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
 
 Key Columns to Register the user
 ---------------------------------------------------------------------------------------
 A.) name
 
 B.) password
 
 C.) contact      (Unique Column)
 
 D.) address
 
 E.) gender
 
 F.) country


E.g.
-------------------------------------------------------------------------------------------

{
      "name": "Robin",
      "password":"my@1234",
      "contact":9877054097,
      "address":"Jamshedpur, Jharakhand",
      "gender": "Male",
      "country":"India"
}

--------------------------------------------------------------------------------------------


To Login to the system
--------------------------------------------------------------------------------------
  
 A.)  contact
  
 B.)  password
 
 E.g.
 --------------------------------------------------------------------------------------

{
        "contact":"9877054097",
        "password":"my@1234"
}

Screenshots

![image](https://user-images.githubusercontent.com/36421233/131258537-b01c5e9e-1243-44eb-a145-278fa4cbad3d.png)

![image](https://user-images.githubusercontent.com/36421233/131258550-84ddcf94-3ced-4839-b773-d605568e5d1b.png)

![image](https://user-images.githubusercontent.com/36421233/131259710-99c2a3fa-c973-45ed-bae0-fd8ab5789560.png)

![image](https://user-images.githubusercontent.com/36421233/131259744-7571e712-e440-4487-b27c-05ed372f5aeb.png)

![image](https://user-images.githubusercontent.com/36421233/131259802-4edceda3-a8f1-4e1d-a13e-35b2795ff67d.png)

![image](https://user-images.githubusercontent.com/36421233/131259823-5c5923bf-c7b6-44af-88dc-c522bb124226.png)

![image](https://user-images.githubusercontent.com/36421233/131259842-a7eb2d29-3752-441e-a473-0ba4e8819e8d.png)

![image](https://user-images.githubusercontent.com/36421233/131259859-d868bd52-a7a6-4d8a-8364-0369672e083a.png)

![image](https://user-images.githubusercontent.com/36421233/131259871-bb122d1d-55ea-4ec2-aff3-20072bf7d8c3.png)

![image](https://user-images.githubusercontent.com/36421233/131259887-ba7e3074-9a3f-453e-ae74-ae2258cbc997.png)

