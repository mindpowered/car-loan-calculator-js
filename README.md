
carloancalculator
=================
Car Loan Auto Loan Payment Calculator - Calculate financing on a new car including trade-in and taxes

![Build Status](https://mindpowered.dev/assets/images/github-badges/build-passing.svg)

Contents
========

* [Source Code and Documentation](#source-code-and-documentation)
* [About](#about)
* [Requirements](#requirements)
* [Installation](#installation)
* [Usage](#usage)
* [Support](#support)
* [Licensing](#licensing)

# Source Code and Documentation
- Source Code: [https://github.com/mindpowered/car-loan-calculator-js](https://github.com/mindpowered/car-loan-calculator-js)
- Documentation: [https://mindpowered.github.io/car-loan-calculator-js](https://mindpowered.github.io/car-loan-calculator-js)

# About
This package aims to calculate the following:
- Given the price of a new car, what is the payment?
- Given a certain payment, what is the max price of the new car?

The calculation takes into account:
- The interest rate of the car loan
- The term (length) of the car loan
- Applicable Taxes
- Trade-in value and amount owing
- Down payment

# Requirements
- ES6
- npm


Third-party dependencies may have additional requirements.

# Installation
## npm

You can retrieve the carloancalculator package using npm https://www.npmjs.com/. After initializing your packages.json file in your project’s directory with `npm init`, you can install the carloancalculator package with
```
npm i @mindpowered/carloancalculator --save
```
hint: the `--save` option will add the newly installed dependency in your packages.json file.

## package.json

You can also add the package directly to your packages.json file.

...


# Usage
```javascript

let mpcclc = require('@mindpowered/carloancalculator');
const {CarLoanCalculator} = mpcclc;

let clc = new CarLoanCalculator();
clc.CalcPayments(33429, 4500, 0, 10000, 2000, 0.7, 3.99);

```


# Support
We are here to support using this package. If it doesn't do what you're looking for, isn't working, or you just need help, please [Contact us][contact].

There is also a public [Issue Tracker][bugs] available for this package.

# Licensing
This package is released under the MIT License.



[bugs]: https://github.com/mindpowered/car-loan-calculator-js/issues
[contact]: https://mindpowered.dev/support/?ref=car-loan-calculator-js/
[docs]: https://mindpowered.github.io/car-loan-calculator-js/
[licensing]: https://mindpowered.dev/?ref=car-loan-calculator-js
[purchase]: https://mindpowered.dev/purchase/
