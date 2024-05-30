# 0x02. ES6 Classes

## Overview

This project focuses on object-oriented programming (OOP) using ES6 classes in JavaScript. The tasks include defining classes, adding methods, using static methods, extending classes, and exploring metaprogramming and symbols.

## Learning Objectives

By the end of this project, you should be able to explain:

- How to define a Class
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another
- Metaprogramming and symbols

## Requirements

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A `README.md` file at the root of the project is mandatory
- Code should use the `.js` extension
- Code will be tested using Jest and the command `npm run test`
- Code will be verified against lint using ESLint
- Code needs to pass all tests and lint checks. Verify the entire project running `npm run full-test`

## Setup

### Install NodeJS 12.11.x

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
# v12.11.1
npm -v
# 6.11.3
```

### Install Jest, Babel, and ESLint

In your project directory, install Jest, Babel, and ESLint by using the supplied `package.json` and running:

```bash
npm install
```

### Configuration files

Ensure you add the following configuration files to your project directory:

- `package.json`
- `babel.config.js`
- `.eslintrc.js`

Run `npm install` after adding `package.json`.

## Tasks

### Task 0: You used to attend a place like this at some point

Implement a class named `ClassRoom`:

- Prototype: `export default class ClassRoom`
- Accepts one attribute named `maxStudentsSize` (Number) assigned to `_maxStudentsSize`

**Example:**

```js
import ClassRoom from "./0-classroom.js";

const room = new ClassRoom(10);
console.log(room._maxStudentsSize); // 10
```

**File:** `0-classroom.js`

### Task 1: Let's make some classrooms

Import `ClassRoom` from `0-classroom.js`.

Implement a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).

**Example:**

```js
import initializeRooms from './1-make_classrooms.js';

console.log(initializeRooms());
```

**File:** `1-make_classrooms.js`

### Task 2: A Course, Getters, and Setters

Implement a class named `HolbertonCourse`:

- Attributes: `name` (String), `length` (Number), `students` (Array of Strings)
- Verify the type of attributes during object creation
- Store each attribute in an underscore attribute version (e.g., `name` is stored in `_name`)
- Implement a getter and setter for each attribute

**Example:**

```js
import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
} catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
} catch(err) {
    console.log(err);
}
```

**File:** `2-hbtn_course.js`

### Task 3: Methods, static methods, computed methods names..... MONEY

Implement a class named `Currency`:

- Attributes: `code` (String), `name` (String)
- Store each attribute in an underscore attribute version
- Implement a getter and setter for each attribute
- Implement a method named `displayFullCurrency` that returns the attributes in the format `name (code)`

**Example:**

```js
import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency()); // Dollars ($)
```

**File:** `3-currency.js`

### Task 4: Pricing

Import `Currency` from `3-currency.js`.

Implement a class named `Pricing`:

- Attributes: `amount` (Number), `currency` (Currency)
- Store each attribute in an underscore attribute version
- Implement a getter and setter for each attribute
- Implement a method named `displayFullPrice` that returns the attributes in the format `amount currency_name (currency_code)`
- Implement a static method named `convertPrice` that accepts `amount` (Number) and `conversionRate` (Number), and returns the amount multiplied by the conversion rate

**Example:**

```js
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"));
console.log(p);
console.log(p.displayFullPrice()); // 100 Euro (EUR)
```

**File:** `4-pricing.js`

### Task 5: A Building

Implement a class named `Building`:

- Attribute: `sqft` (Number)
- Store each attribute in an underscore attribute version
- Implement a getter for the attribute
- Make this class an abstract class
- Ensure any class that extends from it implements a method named `evacuationWarningMessage`
- If a class extending from it does not have an `evacuationWarningMessage` method, throw an error with the message `Class extending Building must override evacuationWarningMessage`

**Example:**

```js
import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200);
} catch(err) {
    console.log(err);
}
```

**File:** `5-building.js`

### Task 6: Inheritance

Import `Building` from `5-building.js`.

Implement a class named `SkyHighBuilding` that extends from `Building`:

- Attributes: `sqft` (Number) (must be assigned to the parent class `Building`), `floors` (Number)
- Store each attribute in an underscore attribute version
- Implement a getter for each attribute
- Override the method `evacuationWarningMessage` to return the string `Evacuate slowly the NUMBER_OF_FLOORS floors`

**Example:**

```js
import SkyHighBuilding from './6-sky_high.js';

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft);
console.log(building.floors);
console.log(building.evacuationWarningMessage()); // Evacuate slowly the 60 floors
```

**File:** `6-sky_high.js`

### Task 7: Airport

Implement a class named `Airport`:

- Attributes: `name` (String), `code` (String)
- Store each attribute in an underscore attribute version
- The default string description of the class should return the airport code

**Example:**

```js
import Airport from "./7-airport.js";

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF);
console.log(airportSF.toString()); // [object SFO]
```

**File:** `7-airport.js`

### Task 8: Primitive - Holberton Class

Implement a class named `HolbertonClass`:

- Attributes: `size` (Number), `location` (String)
- Store each attribute in an underscore attribute version
- When the class is cast into a Number, it should return the size
- When the class is cast into a String, it should return the location

**Example:**

```js
import HolbertonClass from "./8-hbtn_class.js";

const hc = new HolbertonClass(12, "Mezzanine");
console.log(Number(hc)); // 12
console.log(String(hc)); // Mezzanine
```

**File:** `8-hbtn_class.js`

### Task 9: Hoisting

Fix the provided code and make it work.

**Example:**

```js
import listOfStudents from "./9-hoisting.js";

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted);
```

**File:** `9-hoisting.js`

### Task 10: Vroom

Implement a class named `Car`:

- Attributes: `brand` (String), `motor` (String), `color` (String)
- Store each attribute in an underscore attribute version
- Add a method named `cloneCar` that returns a new object of the class

**Example:**

```js
import Car from "./10-car.js";

class TestCar extends Car {}

const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();

console.log(tc1);
console.log(tc1 instanceof TestCar);

console.log(tc2);
console.log(tc2 instanceof TestCar);

console.log(tc1 == tc2); // false
```

**File:** `10-car.js`

## Repository

- **GitHub repository:** alx-backend-javascript
- **Directory:** `0x02-ES6_classes`
