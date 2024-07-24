# 0x05. NodeJS Basics

## Description
This project focuses on the basics of Node.js, including creating small HTTP servers, reading files, handling command-line inputs, and using Express.js. The goal is to build a foundation in Node.js and understand how to use it for backend development.

## Learning Objectives
By the end of this project, you should be able to:
- Run JavaScript using Node.js
- Use Node.js modules
- Read files using specific Node.js modules
- Access command-line arguments and the environment using the process API
- Create small HTTP servers using Node.js and Express.js
- Create advanced routes with Express.js
- Use ES6 with Node.js using Babel-node
- Develop faster with Nodemon

## Resources
Read or watch:
- [Node.js Getting Started](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Process API documentation](https://nodejs.org/api/process.html)
- [Child Process](https://nodejs.org/api/child_process.html)
- [Express Getting Started](https://expressjs.com/en/starter/installing.html)
- [Mocha Documentation](https://mochajs.org/)
- [Nodemon Documentation](https://nodemon.io/)

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files will be interpreted/compiled on Ubuntu 18.04 LTS using Node.js (version 12.x.x)
- All files should end with a new line
- A `README.md` file at the root of the project folder is mandatory
- Code should use the `.js` extension
- Code will be tested using Jest and the command `npm run test`
- Code will be verified against lint using ESLint
- Code needs to pass all tests and lint. Verify the entire project by running `npm run full-test`
- All functions/classes must be exported using `module.exports = myFunction;`

## Provided Files
- `database.csv`
- `package.json`
- `babel.config.js`
- `.eslintrc.js`

## Tasks
### 0. Executing basic JavaScript with Node.js
Create a function `displayMessage` in `0-console.js` that prints a string argument to STDOUT.

### 1. Using Process stdin
Create a program `1-stdin.js` that interacts with the user via command line, asking for their name and displaying a message.

### 2. Reading a file synchronously with Node.js
Create a function `countStudents` in `2-read_file.js` that reads and processes a CSV file synchronously.

### 3. Reading a file asynchronously with Node.js
Create a function `countStudents` in `3-read_file_async.js` that reads and processes a CSV file asynchronously.

### 4. Create a small HTTP server using Node's HTTP module
Create an HTTP server in `4-http.js` that listens on port 1245 and responds with "Hello Holberton School!" to any endpoint.

### 5. Create a more complex HTTP server using Node's HTTP module
Create an HTTP server in `5-http.js` that handles different URL paths and reads the student database.

### 6. Create a small HTTP server using Express
Create an HTTP server in `6-http_express.js` using Express that listens on port 1245 and responds with "Hello Holberton School!" to the root endpoint.

### 7. Create a more complex HTTP server using Express
Create an HTTP server in `7-http_express.js` using Express that handles different URL paths and reads the student database.

### 8. Organize a complex HTTP server using Express
Organize the server into separate directories and files:
- `full_server/utils.js`: Utility functions
- `full_server/controllers/AppController.js`: Controller for the homepage
- `full_server/controllers/StudentsController.js`: Controller for student-related endpoints
- `full_server/routes/index.js`: Route definitions
- `full_server/server.js`: Server setup and execution

## Setup
1. Clone the repository: `git clone https://github.com/your_username/alx-backend-javascript.git`
2. Navigate to the project directory: `cd alx-backend-javascript/0x05-Node_JS_basic`
3. Install dependencies: `npm install`
4. Run the server: `npm start`

## Running Tests
To run tests, use the following command:
```sh
npm run test
```

To run the full test suite including lint checks, use:
```sh
npm run full-test
```

## Linting
Ensure your code adheres to the linting rules by running:
```sh
npm run lint
```

## Notes
- Remember to export your Express app at the end of `server.js` with `export default app;`
- The database filename should be passed as an argument when running the server.

## Author
- [Waltertaya](https://github.com/waltertaya)
