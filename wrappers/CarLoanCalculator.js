/**
 * Copyright Mind Powered Corporation 2020
 * 
 * https://mindpowered.dev/
 */

const maglev = require('@mindpowered/maglev');
const carloancalculator = require('@mindpowered/carloancalculator');

/**
 * car loan
 * calculator
 */
class CarLoanCalculatorWrapper {
	constructor() {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let lib = new carloancalculator.carloancalculator.CarLoanCalculator(bus);
	}

	/**
	 * calc payments from price
	 * @param newCarPrice 
	 * @param tradeInAllowance 
	 * @param tradeInLoanBalance 
	 * @param downPaymentAndRebates 
	 * @param loanDuration in months
	 * @param salesTaxRate percent
	 * @param interestRate percent
	 * @return {array} payments and total interest
	*/
	CalcPayments(newCarPrice, tradeInAllowance, tradeInLoanBalance, downPaymentAndRebates, loanDuration, salesTaxRate, interestRate) {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let args = [newCarPrice, tradeInAllowance, tradeInLoanBalance, downPaymentAndRebates, loanDuration, salesTaxRate, interestRate];
		let ret = bus.call('CarLoanCalculator.CalcPayments', args);
		return ret;
	}

	/**
	 * calc price from payment
	 * @param monthlyPayment 
	 * @param tradeInAllowance 
	 * @param tradeInLoanBalance 
	 * @param downPaymentAndRebates 
	 * @param loanDuration in months
	 * @param salesTaxRate percent
	 * @param interestRate percent
	 * @return {number} target price with tax and fees
	*/
	CalcAffordability(monthlyPayment, tradeInAllowance, tradeInLoanBalance, downPaymentAndRebates, loanDuration, salesTaxRate, interestRate) {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let args = [monthlyPayment, tradeInAllowance, tradeInLoanBalance, downPaymentAndRebates, loanDuration, salesTaxRate, interestRate];
		let ret = bus.call('CarLoanCalculator.CalcAffordability', args);
		return ret;
	}

}

