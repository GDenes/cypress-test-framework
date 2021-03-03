import { ASSERT_OPTION } from '../enums/AssertOptions';

const DYNAMIC_PROPERTIES_PAGE = '/dynamic-properties';

const PARAGRAPH_ELEMENT = 'p';
const ENABLE_AFTER_ELEMENT = '#enableAfter';
const COLOR_CHANGE_BTN = '#colorChange';
const VISIBLE_AFTER = '#visibleAfter';

const CSS_TEST_ELEMENT_PROPERTY_NAME_1 = 'color';
const CSS_TEST_ELEMENT_PROPERTY_VALUE_1 = 'rgb(220, 53, 69)';

const TIMEOUT_VALUE_IN_MILLISEC = 5500;

describe('Dynamic Properies', function() {
	it('Check dynamic elements', function() {
		cy.visit(DYNAMIC_PROPERTIES_PAGE, { failOnStatusCode: false });

		cy.get(PARAGRAPH_ELEMENT).should(ASSERT_OPTION.isVisible);
		cy.get(ENABLE_AFTER_ELEMENT, { timeout: TIMEOUT_VALUE_IN_MILLISEC }).should(ASSERT_OPTION.isEnabled);
		cy
			.get(COLOR_CHANGE_BTN)
			.should(ASSERT_OPTION.haveCSS, CSS_TEST_ELEMENT_PROPERTY_NAME_1, CSS_TEST_ELEMENT_PROPERTY_VALUE_1);
		cy.get(VISIBLE_AFTER).should(ASSERT_OPTION.isVisible);
	});
});
