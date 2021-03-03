import { ASSERT_OPTION } from '../enums/AssertOptions';
import ProductPage from '../pageObjects/ProductPage';

const BLOUSE_PRODUCT = ".product-name[title='Blouse']";

class BlousesPage {
	constructor() {
		cy.get(BLOUSE_PRODUCT).should(ASSERT_OPTION.isVisible).as('blousesProductLink');
	}

	clickBlouseProductLink() {
		cy.get('@blousesProductLink').click();
		return new ProductPage();
	}
}

export default BlousesPage;
