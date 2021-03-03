import { ASSERT_OPTION } from '../enums/AssertOptions';
import ProductPage from '../pageObjects/ProductPage';

const FADED_SHORT_PRODUCT_LIST = ".product-name[title='Faded Short Sleeve T-shirts']";

class TshirtsPage {
	constructor() {
		cy.get(FADED_SHORT_PRODUCT_LIST).should(ASSERT_OPTION.isVisible).as('fadedShortProductLink');
	}

	clickFadedShortProductLink() {
		cy.get('@fadedShortProductLink').click();
		return new ProductPage();
	}
}
export default TshirtsPage;
