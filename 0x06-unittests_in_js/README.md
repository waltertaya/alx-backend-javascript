# 0x06. Unittests in JS

## Description

This project focuses on learning and applying unit testing in JavaScript using various tools such as Mocha, Chai, and Sinon. The tasks involve creating and testing functions, using spies and stubs, and performing both unit and integration tests.

## Learning Objectives

By the end of this project, you should be able to:

- Use Mocha to write a test suite.
- Use different assertion libraries (Node or Chai).
- Present long test suites.
- Use spies and stubs appropriately.
- Understand and utilize hooks.
- Perform unit testing with asynchronous functions.
- Write integration tests with a small Node.js server.

## Requirements

- All code will be executed on Ubuntu 18.04 using Node 12.x.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- A `README.md` file, at the root of the project folder, is mandatory.
- Code should use the `.js` extension.
- Running tests with `npm run test *.test.js` should pass correctly without any warnings or errors.

## Tasks

### 0. Basic test with Mocha and Node assertion library

- Install Mocha using npm.
- Set up a script in `package.json` to quickly run Mocha using `npm test`.
- Create `0-calcul.js` with a function `calculateNumber` that rounds two numbers and returns their sum.
- Create `0-calcul.test.js` with test cases for `calculateNumber`.

### 1. Combining descriptions

- Upgrade the function in `1-calcul.js` to handle SUM, SUBTRACT, and DIVIDE operations.
- Create `1-calcul.test.js` with test cases for the updated function.

### 2. Basic test using Chai assertion library

- Copy `1-calcul.js` to `2-calcul_chai.js`.
- Rewrite tests in `2-calcul_chai.test.js` using Chai's `expect`.

### 3. Spies

- Create `utils.js` with a module `Utils` containing `calculateNumber`.
- Create `3-payment.js` with a function `sendPaymentRequestToApi`.
- Create `3-payment.test.js` to test `sendPaymentRequestToApi` using `sinon.spy`.

### 4. Stubs

- Copy `3-payment.js` to `4-payment.js`.
- Create `4-payment.test.js` to test `sendPaymentRequestToApi` using `sinon.stub`.

### 5. Hooks

- Copy `4-payment.js` to `5-payment.js`.
- Create `5-payment.test.js` to test `sendPaymentRequestToApi` using hooks.

### 6. Async tests with done

- Create `6-payment_token.js` with an async function `getPaymentTokenFromAPI`.
- Create `6-payment_token.test.js` to test `getPaymentTokenFromAPI`.

### 7. Skip

- Modify `7-skip.test.js` to skip a failing test without removing it.

### 8. Basic Integration testing

- Create an Express server in `8-api/api.js`.
- Create `8-api/api.test.js` with integration tests for the server.

### 9. Regex integration testing

- Modify `9-api/api.js` to add a route `GET /cart/:id` with regex validation.
- Update `9-api/api.test.js` to test the new route.

### 10. Deep equality & Post integration testing

- Modify `10-api/api.js` to add `GET /available_payments` and `POST /login` routes.
- Update `10-api/api.test.js` to test these routes.

## Repository

- **GitHub repository**: [alx-backend-javascript](https://github.com/your_username/alx-backend-javascript)
- **Directory**: `0x06-unittests_in_js`

## Resources

- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://www.npmjs.com/package/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.sitepoint.com/unit-test-nodejs-using-mocha-chai-sinon/)

## Author

- [waltertaya](https://www.github.com/waltertaya)
