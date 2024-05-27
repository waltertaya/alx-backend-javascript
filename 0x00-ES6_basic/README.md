# ES6 Basics Project

This project focuses on the basics of ES6 (ECMAScript 2015) and aims to enhance your understanding of new features introduced in ES6. You will be working with JavaScript, specifically ES6, to complete various tasks.

## Project Timeline

- **Start Date:** May 27, 2024, 6:00 AM
- **End Date:** May 28, 2024, 6:00 AM
- **Checker Release:** May 27, 2024, 12:00 PM
- **Auto Review:** Launched at the deadline

## Concepts

You should be familiar with the following concepts for this project:

- JavaScript programming
- Software Linter

## Resources

To complete this project, refer to the following resources:

- ECMAScript 6 - ECMAScript 2015
- Statements and declarations
- Arrow functions
- Default parameters
- Rest parameter
- JavaScript ES6 — Iterables and Iterators

## Learning Objectives

By the end of this project, you should be able to explain:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Requirements

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using the Jest Testing Framework
- Your code will be analyzed using the linter ESLint with provided rules
- All functions must be exported

## Setup

### Install NodeJS 12.11.x

Run the following commands in your home directory:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
npm -v
```

### Install Jest, Babel, and ESLint

In your project directory, use the supplied `package.json` and run:

```bash
npm install
```

### Configuration Files

Add the following configuration files to your project directory:

- `package.json`
- `babel.config.js`
- `.eslintrc.js`

Run `npm install` from the terminal of your project folder to install all necessary project dependencies.

## Tasks

### 0. Const or let?

- Modify `taskFirst` to use `const`
- Modify `taskNext` to use `let`

### 1. Block Scope

- Modify variables inside `taskBlock` so they aren’t overwritten inside the conditional block.

### 2. Arrow Functions

- Rewrite the function to use ES6’s arrow syntax.

### 3. Parameter Defaults

- Condense the function using default parameter values.

### 4. Rest Parameter Syntax for Functions

- Modify the function to return the number of arguments using the rest parameter syntax.

### 5. The Wonders of Spread Syntax

- Concatenate two arrays and a string using spread syntax in one line.

### 6. Take Advantage of Template Literals

- Rewrite the return statement to use a template literal.

### 7. Object Property Value Shorthand Syntax

- Modify the function’s object to use keyname shorthand.

### 8. No Need to Create Empty Objects Before Adding in Properties

- Use ES6 computed property names in the object.

### 9. ES6 Method Properties

- Rewrite the function to use ES6 method properties.

### 10. For...of Loops

- Rewrite the function to use ES6’s for...of operator.

### 11. Iterator

- Create a function that returns an object with the department name and employees list.

### 12. Let's Create a Report Object

- Create a report object with `allEmployees` and `getNumberOfDepartments`.

## Repository Structure

- **GitHub repository:** `alx-backend-javascript`
- **Directory:** `0x00-ES6_basic`

## Mandatory Files

- `0-constants.js`
- `1-block-scoped.js`
- `2-arrow.js`
- `3-default-parameter.js`
- `4-rest-parameter.js`
- `5-spread-operator.js`
- `6-string-interpolation.js`
- `7-getBudgetObject.js`
- `8-getBudgetCurrentYear.js`
- `9-getFullBudget.js`
- `10-loops.js`
- `11-createEmployeesObject.js`
- `12-createReportObject.js`
