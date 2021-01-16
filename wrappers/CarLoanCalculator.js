/**
 * Copyright Mind Powered Corporation 2020
 * 
 * https://mindpowered.dev/
 */

const maglev = require('@mindpowered/maglev');
const carloancalculator = require('../lib/carloancalculator.js');

/**
 * car loan
 * calculator
 */
class CarLoanCalculator {
	constructor() {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let lib = new carloancalculator.carloancalculator.CarLoanCalculator(bus);
	}

	/**
	 * Calculate what the payments would be from the price of the new car and the parameters of the monthly loan payments
	 * @param {number} newCarPrice price of the car new
	 * @param {number} tradeInAllowance trade-in value
	 * @param {number} tradeInLoanBalance loan balance after trade-in
	 * @param {number} downPaymentAndRebates total amount of rebates plus downpayment
	 * @param {number} loanDuration loan duration in months
	 * @param {number} salesTaxRate  sales tax as percentage
	 * @param {number} interestRate interest rate as percentage
	 * @return {Promise} payments and total interest Promise will resolve to type array.
	*/
	CalcPayments(newCarPrice, tradeInAllowance, tradeInLoanBalance, downPaymentAndRebates, loanDuration, salesTaxRate, interestRate) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [newCarPrice, tradeInAllowance, tradeInLoanBalance, downPaymentAndRebates, loanDuration, salesTaxRate, interestRate];
		let ret = jsbus.call('CarLoanCalculator.CalcPayments', args);
		return ret;
	}

	/**
	 * Calculate the price of the car from the monthly loan payment information
	 * @param {number} monthlyPayment monthly payment amount
	 * @param {number} tradeInAllowance trade-in value
	 * @param {number} tradeInLoanBalance loan balance after trade-in
	 * @param {number} downPaymentAndRebates total amount of rebates plus downpayment
	 * @param {number} loanDuration loan duration in months
	 * @param {number} salesTaxRate sales tax rate as percentage
	 * @param {number} interestRate interest rate as percentage
	 * @return {Promise} target price with tax and fees Promise will resolve to type number.
	*/
	CalcAffordability(monthlyPayment, tradeInAllowance, tradeInLoanBalance, downPaymentAndRebates, loanDuration, salesTaxRate, interestRate) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [monthlyPayment, tradeInAllowance, tradeInLoanBalance, downPaymentAndRebates, loanDuration, salesTaxRate, interestRate];
		let ret = jsbus.call('CarLoanCalculator.CalcAffordability', args);
		return ret;
	}

}
module.exports = CarLoanCalculator;

