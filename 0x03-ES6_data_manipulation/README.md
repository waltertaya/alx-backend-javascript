# ES6 Data Manipulation

## Curriculum

### Short Specializations

## 0x03. ES6 Data Manipulation

### Resources

### Learning Objectives

By the end of this project, you should be able to explain to anyone, without the help of Google:

- How to use `map`, `filter`, and `reduce` on arrays
- Typed arrays
- The Set, Map, and WeakMap data structures

### Requirements

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
- All functions must be exported

### Setup

1. **Install NodeJS 12.11.x**
   
   Run the following commands in your home directory:
   ```sh
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```

   Verify installation:
   ```sh
   nodejs -v
   # v12.11.1
   npm -v
   # 6.11.3
   ```

2. **Install Jest, Babel, and ESLint**

   In your project directory, install Jest, Babel, and ESLint by using the supplied `package.json` and running:
   ```sh
   npm install
   ```

### Configuration Files

Ensure you have the following configuration files in your project directory:

- `package.json`
- `babel.config.js`
- `.eslintrc.js`

Run `npm install` after adding the `package.json`.

### Tasks

#### 0. Basic List of Objects

Create a function named `getListStudents` that returns an array of objects, each with attributes: `id` (Number), `firstName` (String), and `location` (String).

#### 1. More Mapping

Create a function `getListStudentIds` that returns an array of ids from a list of objects. If the argument is not an array, return an empty array. Use the `map` function.

#### 2. Filter

Create a function `getStudentsByLocation` that returns an array of objects located in a specific city. Use the `filter` function.

#### 3. Reduce

Create a function `getStudentIdsSum` that returns the sum of all student ids. Use the `reduce` function.

#### 4. Combine

Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grades. Combine `filter` and `map`.

#### 5. Typed Arrays

Create a function `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position. Throw an error if the position is outside the range.

#### 6. Set Data Structure

Create a function `setFromArray` that returns a Set from an array.

#### 7. More Set Data Structure

Create a function `hasValuesFromArray` that returns a boolean if all elements in the array exist within the set.

#### 8. Clean Set

Create a function `cleanSet` that returns a string of all set values starting with a specific string, separated by `-`.

#### 9. Map Data Structure

Create a function `groceriesList` that returns a map of groceries with predefined items and quantities.

#### 10. More Map Data Structure

Create a function `updateUniqueItems` that updates the quantity of items in a map to 100 if their initial quantity is 1. Throw an error if the argument is not a map.

#### 11. Weak Link Data Structure

Export a `const` instance of `WeakMap` named `weakMap`. Export a function `queryAPI` that tracks the number of times it is called for each endpoint. Throw an error when the number of queries is >= 5.

### Repository

- **GitHub repository:** `alx-backend-javascript`
- **Directory:** `0x03-ES6_data_manipulation`
