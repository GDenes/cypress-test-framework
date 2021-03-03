import { ASSERT_OPTION } from '../enums/AssertOptions';
import ProductPage from '../pageObjects/ProductPage';

const PRINTED_DRESS = ".product-name[title='Printed Dress']";

class CasualDressesPage {
	constructor() {
		cy.get(PRINTED_DRESS).should(ASSERT_OPTION.isVisible).as('printedDressProductLink');
	}

	clickPrintedDressProductLink() {
		cy.get('@printedDressProductLink').click();
		return new ProductPage();
	}
}
export default CasualDressesPage;
