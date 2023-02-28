# MERN directory management app

[Link to the live application](https://www.prosper-media.cf/)

## Technologies used:
* Node js
* React js
* Express js
* MongoDB
* Nginx
* Material UI

## Services used:
* Google cloud services: hosted on

# Backend(Nodejs + MongoDB)

User Management API
This API allows you to manage user information, including retrieving lists of users and individual user details.

API Endpoints
GET /users
This endpoint returns a list of users, including their names, job titles, email addresses, and phone numbers.

Request
bash
Copy code
GET /users
Response
makefile
Copy code
Status: 200 OK
Content-Type: application/json

[
  {
    "name": "John Doe",
    "job_title": "Software Engineer",
    "email": "john.doe@example.com",
    "phone_number": "+1 (555) 123-4567"
  },
  {
    "name": "Jane Smith",
    "job_title": "Marketing Manager",
    "email": "jane.smith@example.com",
    "phone_number": "+1 (555) 987-6543"
  }
  // ...
]
The response is an array of objects, each containing user details as described above.

Errors
If the server encounters an error while processing the request, it will return an appropriate HTTP status code along with a JSON response containing an error message. Possible error status codes are:

400 Bad Request: The request was malformed or invalid.
401 Unauthorized: The request requires authentication, but the user is not authenticated.
403 Forbidden: The authenticated user does not have permission to access this endpoint.
500 Internal Server Error: The server encountered an unexpected error while processing the request.
GET /users/:user_id
This endpoint returns details of a single user specified by their unique user_id, including their name, job title, email address, phone number, employment history, age, department, and education.

Request
bash
Copy code
GET /users/:user_id
user_id (string): The unique ID of the user to retrieve.
Response
makefile
Copy code
Status: 200 OK
Content-Type: application/json

{
  "name": "John Doe",
  "job_title": "Software Engineer",
  "email": "john.doe@example.com",
  "phone_number": "+1 (555) 123-4567",
  "emp_hist": "Software Developer at Acme Corp",
  "age": 30,
  "department": "Engineering",
  "education": "Bachelor's Degree in Computer Science"
}
The response is an object containing user details as described above.

Errors
If the server encounters an error while processing the request, it will return an appropriate HTTP status code along with a JSON response containing an error message. Possible error status codes are:

400 Bad Request: The request was malformed or invalid.
401 Unauthorized: The request requires authentication, but the user is not authenticated.
403 Forbidden: The authenticated user does not have permission to access this endpoint.
404 Not Found: The user with the specified ID does not exist.
500 Internal Server Error: The server encountered an unexpected error while processing the request.
Running the API
To run the API, follow these steps:

Clone this repository to your local machine.
Install the required dependencies by running npm install.
Start the server by running npm start.
Use a web browser or API testing tool to access the endpoints described above.
Conclusion
That's it! You now have a simple API for managing user information. Feel free to modify the code to suit your needs, and to add additional endpoints as necessary. If you have any questions or feedback, please don't hesitate to reach out to me.