import { ASSERT_OPTION } from '../enums/AssertOptions';
import OrderPage from '../pageObjects/OrderPage';

const PRODUCT_PROPERTY = '#layer_cart_product_attributes';
const PRODUCT_QUANTITY = '#layer_cart_product_quantity';
const PRODUCT_NAME_TITLE = '#layer_cart_product_title';
const PROCEED_TO_CHECKOUT_BTN = 'a.button-medium > span';

class ProductDialogBox {
	constructor() {
		cy.get(PRODUCT_PROPERTY).should(ASSERT_OPTION.isVisible).as('productAttributes');

		cy.get(PRODUCT_QUANTITY).should(ASSERT_OPTION.isVisible).as('quantityNumber');

		cy.get(PRODUCT_NAME_TITLE).should(ASSERT_OPTION.isVisible).as('prdouctTitle');

		cy.get(PROCEED_TO_CHECKOUT_BTN).should(ASSERT_OPTION.isVisible).as('proceedToCheckoutButton');
	}

	getProductAttributes() {
		return cy.get('@productAttributes');
	}

	getQuantityNumber() {
		return cy.get('@quantityNumber');
	}

	getPrdouctTitle() {
		return cy.get('@prdouctTitle');
	}

	clickProceedToCheckoutButton() {
		cy.get('@proceedToCheckoutButton').click();
		return new OrderPage();
	}
}

export default ProductDialogBox;
