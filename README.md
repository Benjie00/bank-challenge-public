# The Bank Challenge 

- [The Bank Challenge](#the-bank-challenge)
  - [About](#about)
    - [Methodology](#methodology)
  - [Getting Started](#getting-started)
    - [Prerequisites:](#prerequisites)
    - [Installation:](#installation)
    - [Project Structure:](#project-structure)
  - [Problem Statements](#problem-statements)
    - [**User Story 1:**](#user-story-1)
    - [**User Story 2:**](#user-story-2)
    - [**User Story 3**](#user-story-3)
    - [**User Story 4:**](#user-story-4)
    - [**User Story 5:**](#user-story-5)
  - [Project Review](#project-review)
    - [Main Takeaways:](#main-takeaways)
    - [Future ideas:](#future-ideas)

## About
**Date of Completion: 23/09/2022**
 
 This project is designed to develop skills in Test-Driven Developement (TTD). It tests someones ability to create user stories and tranform them into domain models. Additionally, it challenges someones ability to impletlement and utilise [Jasmine](https://jasmine.github.io/) testing-framework, develop tests, and write the code required to pass each test in an Object-Orientated Programming (OOP) style. The classes needed to be decoupled, the methods should follow single responsibility, and the properties must be encapsulated. 


### Methodology
1. User stories were created and transformed into a series of domain models and tests.
2. Jasmine test-framework was implemented using npm. `expect()` function was used to compare the equality of actual and expected results. 
3. The test was run and subsequently failed.
4. The code was written to pass the test. 

## Getting Started

### Prerequisites:
- [NodeJs](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Jasmine](https://jasmine.github.io/)

  
### Installation:
1. Clone the repository
   ```
    git clone https://github.com/Benjie00/bank-challenge.git
   ```
 
2. Enter directory
   ```
    cd bank-challenge
   ```

3. Set up Jasmine test-framework. Set the entry point to `index.js` and the test command to `jasmine` in the npm initialisation. Additionally, in the package.json, set `type` to "module"
   ``` 
    npm init 
    npm i --save-dev jasmine
    npx jasmine init
   ```

4. Enter src directory
   ```
   cd src 
   ```
5. Run index file from terminal
   ```
   node ./index
   ```
   

### Project Structure:
- Spec/test files are located in `spec` directory.
- Classes and the index file are located in `src` directory.
- `Docs` contains a list of project requirements

## Problem Statements
**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```

### **User Story 1:**
```
As a bank manager,
Clients should be able to make a deposit
So they can save their money
```

| **OBJECTS** | **PROPERTIES** | **MESSAGES**    | **OUTPUTS** |
| ----------- | -------------- | --------------- | ----------- |
| Transaction | credit@number  | getCredit()     | @string     |
| Transaction | balance@number | getBalance()    | @string     |
| Transaction | date@date      | getDate()       | @string     |
| Transaction | -              | checkNegative() | @bool       |

- **Test 1a:** Instantiate a new `Transaction(1000)`, call `getCredit()`, expect a **string** **"1000.00"** to be returned.
- **Test 1b:** Instantiate a new `Transaction(-0.01)`, call `checkNegative()` expect result to be `true`.
- **Test 1c:** Call `getCredit()`, expect a `new Error` to be thrown. 

### **User Story 2:**
```
As a bank manager, 
Clients should be able to make a withdrawal from the bank, 
So they can use their money
```

| **OBJECTS** | **PROPERTIES**   | **MESSAGES**    | **OUTPUTS** |
| ----------- | ---------------- | --------------- | ----------- |
| Transaction | balance(@number) | getBalance()    | @number     |
| Transaction | debit@number     | getDebit()      | @string     |
| Transaction | -                | checkNegative() | @bool       |

- **Test2a:** Instantiate a new `Transaction(0, 500)`, call `getDebit()`, expect a **string** **"500.00"** to be returned.
- **Test2b:** Call `checkNegative()`, expect true to be returned when a negative transaction debt is inputted.
- **Test 2c:** Call `getDebit()`, expect a `new Error` to be thrown.

### **User Story 3**
```
As a bank manager
When a customer makes a deposit or a withdrawal
I want the date, amount and type of transaction to be recorded.

```
| **OBJECTS** | **PROPERTIES** | **MESSAGES** | **OUTPUTS** |
| ----------- | -------------- | ------------ | ----------- |
| Transaction | credit@number  | -            | -           |
| Transaction | debit@number   | -            | -           |
| Transaction | date@Date      | @getDate()   | @string     |
| Transaction | amount@number  | @getAmount() | @number     |
| Transaction | -              | @getType()   | @string     |

- **Test3a:** Instatiante a transaction and supply a **string** **'January 10, 2012'**, call `getDate()`, expect a **string** **'10/01/2012'** to be returned.
- **Test3b:** make a credit transaction (`debit` = 0), call `getType()`, expect a **string**, **"type: credit"** to be returned. 
- **Test3c:** make a transaction with both `credit` and `debit` values > 0, expect a `new Error` to be thrown.
- **Test3d:** make a transaction with a `debt` value > 0 and a `credit` value of 0, expect an exception to be thrown.
- **Test3e:** make a `credit` transaction of 500, call `getAmount` expect the amount to be **500**.
  


### **User Story 4:**
```
As a bank manager 
When a customer makes a transaction
I want the details to be recorded on a bank statement
```
| **OBJECTS** | **PROPERTIES**                   | **MESSAGES**                | **OUTPUTS** |
| ----------- | -------------------------------- | --------------------------- | ----------- |
| Transaction | balance(@number)                 | getBalance()                | @number     |
| Account     | totalBalance(@number)            | @setTotalBalance(@number)   | @number     |
| Account     | listOfTransactions[@transaction] | @arrayCreator(@transaction) | @array      |

- **Test4a:** call `setTotalBalance(transaction)` two times, expect the balance to equal 1000.
- **Test4b:** call `arrayCreator(transaction)`, expect the array to contain `mockTransaction`.
- **Test 4c:** call `arrayCreator(transaction)`, expect array **length** to be 1.

### **User Story 5:**

```
As a Bank manager,
The user should be able to print their bank statements,
It should display a table of transaction details, expressing the date, credit, debit, and available balance
If a credit or debit value is 0, it should be shown as a blank space.
```

| **OBJECTS** | **PROPERTIES**       | **MESSAGES**                                      | **OUTPUTS** |
| ----------- | -------------------- | ------------------------------------------------- | ----------- |
| Transaction | -                    | checkZeroCredit()                                 | @bool       |
| Transaction | -                    | checkZeroDebit()                                  | @bool       |
| Transaction | credit@number        | getCredit()                                       | @String     |
| Account     | @array[@transaction] | -                                                 | @number     |
| Statement   | -                    | printStatement(@listOfTransactions[@transaction]) | @void       |
| Statement   | -                    | printHeader()                                     | @void       |


- **Test5a:** instantiate a transaction with a `credit` of **0**. Call `checkZeroCredit()`, expect `true` to be returned.
- **Testb:** instantiate a transaction with a `debit` of **0**. Call `checkZeroDebit()`, expect `true` to be returned.
- **Test5c:** call `getCredit`, expect a **string** with empty space to be returned.
- **Test5d:** call `printHeader`, expect 'date       || credit  || debit  || balance' to be **logged** to the **console**.
- **Test5e:** call `printStatement()`, expect the transaction details (date, credit, debit, and balance) to be logged to the console.  


## Project Review
### Main Takeaways:
- The advantage of decoupling classes and following single responsibility - to make code less dependent on each other, making it highly adaptable. 
- How to develop tests and programmes using Jasmine test-framework.
- The use of mock classes/variables - to make the function being unit-tested more isolated.
- Basics of OOP (classes, singularity, decoupling).


### Future ideas:
- Reduce the complexitiy of methods. 
- Make the transactions a user-input system, rather than being constructed in the index file. 
- Create a secure data-base to store transaction history and details.

  




