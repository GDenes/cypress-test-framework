import { ASSERT_OPTION } from '../enums/AssertOptions';
import ProductDialogBox from '../pageObjects/ProductDialogBox';

const PRODUCT_DESC = 'div#short_description_content > p';
const PRODUCT_SIZE_DROP_DOWN = '.attribute_select';
const QUANTITY_PLUS_BTN = '.icon-plus';
const ADD_TO_CHART_BTN = "button[name='Submit'] > span";
const COLOR_SELECTOR_START = "[name='";
const COLOR_SELECTOR_END = "']";

class ProductPage {
	constructor() {
		cy.get(PRODUCT_DESC).should(ASSERT_OPTION.isVisible);
		cy.get(PRODUCT_SIZE_DROP_DOWN).should(ASSERT_OPTION.isVisible).as('sizeDropDown');
		cy.get(QUANTITY_PLUS_BTN).should(ASSERT_OPTION.isVisible).as('IncreaseQuantityButton');
		cy.get(ADD_TO_CHART_BTN).should(ASSERT_OPTION.isVisible).as('addToChartButton');
	}

	selectSize(size) {
		cy.get('@sizeDropDown').select(size);
	}

	selectColor(color) {
		cy.get(COLOR_SELECTOR_START + color + COLOR_SELECTOR_END).should(ASSERT_OPTION.isVisible).click();
	}

	increaseQuantity() {
		cy.get('@IncreaseQuantityButton').click();
	}

	clickAddToCartButton() {
		cy.get('@addToChartButton').click();
		return new ProductDialogBox();
	}
}

export default ProductPage;
