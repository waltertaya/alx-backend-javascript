# 0x01. ES6 Promises

This project covers various tasks that demonstrate the use of ES6 Promises in JavaScript. The tasks range from creating basic promises to handling multiple promises and errors. Each task is designed to solidify the understanding of asynchronous operations in JavaScript using Promises.

## Tasks

### 0. Keep every promise you make and only make promises you can keep

**Description:**
Implement a function `getResponseFromAPI` that returns a Promise.

**File:** `0-promise.js`

**Example:**

```javascript
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise); // true
```

### 1. Don't make a promise...if you know you can't keep it

**Description:**
Implement a function `getFullResponseFromAPI(success)` that returns a promise.

- If `success` is true, resolve with an object `{status: 200, body: 'Success'}`.
- If `success` is false, reject with an Error object with the message `The fake API is not working currently`.

**File:** `1-promise.js`

**Example:**

```javascript
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
```

### 2. Catch me if you can!

**Description:**
Implement a function `handleResponseFromAPI(promise)` that appends three handlers to the promise.

- When resolved, return an object `{status: 200, body: 'success'}`.
- When rejected, return an empty Error object.
- Log `Got a response from the API` for every resolution.

**File:** `2-then.js`

**Example:**

```javascript
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);
```

### 3. Handle multiple successful promises

**Description:**
Implement a function `handleProfileSignup` that imports `uploadPhoto` and `createUser` from `utils.js` and uses them to collectively resolve all promises and log `body firstName lastName` to the console. In case of an error, log `Signup system offline`.

**File:** `3-all.js`

**Example:**

```javascript
import handleProfileSignup from "./3-all";

handleProfileSignup();
```

### 4. Simple promise

**Description:**
Implement a function `signUpUser(firstName, lastName)` that returns a resolved promise with an object `{firstName, lastName}`.

**File:** `4-user-promise.js`

**Example:**

```javascript
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));
```

### 5. Reject the promises

**Description:**
Implement a function `uploadPhoto(filename)` that returns a promise rejecting with an Error and the string `${filename} cannot be processed`.

**File:** `5-photo-reject.js`

**Example:**

```javascript
import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));
```

### 6. Handle multiple promises

**Description:**
Implement a function `handleProfileSignup(firstName, lastName, fileName)` that calls `signUpUser` and `uploadPhoto`. When the promises are all settled, return an array with the structure:

```javascript
[
    {
        status: status_of_the_promise,
        value: value or error returned by the Promise
    },
    ...
]
```

**File:** `6-final-user.js`

**Example:**

```javascript
import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
```

### 7. Load balancer

**Description:**
Implement a function `loadBalancer(chinaDownload, USDownload)` that returns the value of the promise that resolved first.

**File:** `7-load_balancer.js`

**Example:**

```javascript
import loadBalancer from "./7-load_balancer";

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise(function(resolve, reject) {
    setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, frSuccess);
});

const test = async () => {
    console.log(await loadBalancer(promiseUK, promiseFR));
    console.log(await loadBalancer(promiseUKSlow, promiseFR));
}

test();
```

### 8. Throw error / try catch

**Description:**
Implement a function `divideFunction(numerator, denominator)` that throws an error if the denominator is 0, otherwise returns the result of the division.

**File:** `8-try.js`

**Example:**

```javascript
import divideFunction from './8-try';

console.log(divideFunction(10, 2));
console.log(divideFunction(10, 0));
```

### 9. Throw an error

**Description:**
Implement a function `guardrail(mathFunction)` that returns an array named `queue`.

- When `mathFunction` is executed, append the returned value to the queue.
- If it throws an error, append the error message to the queue.
- Always append `Guardrail was processed` to the queue.

**File:** `9-try.js`

**Example:**

```javascript
import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));
```

## Repository Information

**GitHub Repository:** `alx-backend-javascript`

**Directory:** `0x01-ES6_promise`

Each task has its own respective file in the directory as specified above. Ensure to implement the functions as described and test them using the provided examples.
