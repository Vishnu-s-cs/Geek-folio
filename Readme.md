# MERN employee directory management app

[Link to the live application](https://traverze.ml/)

## Technologies used:
* Node js
* React js
* Express js
* MongoDB
* Nginx
* Material UI

## Services used:
* Google cloud platform (GCP): hosted on


# Getting Started with vite react app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `vite build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

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