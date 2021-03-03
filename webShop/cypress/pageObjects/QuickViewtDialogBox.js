import 'cypress-iframe';
import { ASSERT_OPTION } from '../enums/AssertOptions';

const IFRAME_FANCY_BOX = '.fancybox-iframe';
const PRODUCT_SHORT_DESC = 'div#short_description_content > p';

class QuickViewtDialogBox {
	constructor() {
		cy.frameLoaded(IFRAME_FANCY_BOX);
		cy.iframe().find(PRODUCT_SHORT_DESC).should(ASSERT_OPTION.isVisible);
	}

	getDescriptionText() {
		return cy.iframe().find(PRODUCT_SHORT_DESC);
	}
}

export default QuickViewtDialogBox;
