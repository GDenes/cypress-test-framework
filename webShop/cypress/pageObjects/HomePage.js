import { ASSERT_OPTION } from '../enums/AssertOptions';

const FIRST_ELEMENT_FROM_POPULAR_LIST = 'ul#homefeatured > li:nth-of-type(1)';
const BEST_SELLER_CLOUMN = '#center_column';
const PRODUCT_ITEM_FOR_SCREENSHOT = "ul#homefeatured [alt='Faded Short Sleeve T-shirts']";

class HomePage {
	constructor() {
		cy.get(FIRST_ELEMENT_FROM_POPULAR_LIST).should(ASSERT_OPTION.isVisible).as('firstElementInPopularList');

		cy.get(BEST_SELLER_CLOUMN).as('printedDressProduct');
	}

	createScreenshotInFirstElement() {
		cy.get(PRODUCT_ITEM_FOR_SCREENSHOT).screenshot();
	}
}

export default HomePage;
