import { ASSERT_OPTION } from '../enums/AssertOptions';
import ProductPage from '../pageObjects/ProductPage';

const PRINTED_SUMMER_DRESS_PRODUCT_LINK =
	"ul.product_list > .first-item-of-tablet-line .right-block [title='Printed Summer Dress']";
const PREINTED_CHIFFON_DRESS_PRODUCT_LIST =
	"ul.product_list > .first-item-of-tablet-line .right-block [title='Printed Chiffon Dress']";

class SummerDressesPage {
	constructor() {
		cy.get(PRINTED_SUMMER_DRESS_PRODUCT_LINK).should(ASSERT_OPTION.isVisible).as('printedSummerDressProductLink');
		cy
			.get(PREINTED_CHIFFON_DRESS_PRODUCT_LIST)
			.should(ASSERT_OPTION.isVisible)
			.as('printedChiffonDressProductLink');
	}

	clickPrintedSummerDressProductLink() {
		cy.get('@printedSummerDressProductLink').click();
		return new ProductPage();
	}

	clickPrintedChiffonDressProductLink() {
		cy.get('@printedChiffonDressProductLink').click();
		return new ProductPage();
	}
}
export default SummerDressesPage;
