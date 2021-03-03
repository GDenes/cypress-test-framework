import { ASSERT_OPTION } from '../enums/AssertOptions';
import LoginPage from '../pageObjects/LoginPage';

const CART_DESCRIPTION = 'td.cart_description > small:nth-of-type(2)';
const CART_TOTAL_PRICE = '#total_price';
const CART_PROCEED_TO_CHECKOUT = 'a.standard-checkout > span';

class OrderPage {
	constructor() {
		cy.get(CART_DESCRIPTION).should(ASSERT_OPTION.isVisible).as('productAttributes');

		cy.get(CART_TOTAL_PRICE).should(ASSERT_OPTION.isVisible).as('totalPrice');

		cy.get(CART_PROCEED_TO_CHECKOUT).should(ASSERT_OPTION.isVisible).as('proceedToCheckoutButton');
	}

	getProductAttributes() {
		return cy.get('@productAttributes');
	}

	getTotalPrice() {
		return cy.get('@totalPrice');
	}

	clickProceedToCheckoutButton() {
		cy.get('@proceedToCheckoutButton').click();
		return new LoginPage();
	}
}

export default OrderPage;
