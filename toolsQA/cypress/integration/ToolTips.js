import { ASSERT_OPTION } from '../enums/AssertOptions';
import { TRIGGER_OPTION } from '../enums/TriggerOptions';

const TOOL_TIPS_PAGE = '/tool-tips';

const TOOL_TIP_BUTTON = '#toolTipButton';
const TOOL_TIP_HOVERED = '.tooltip-inner';
const TOOL_TIP_TEXT_FIEL = '#toolTipTextField';

const EXPECTED_HOVERED_BUTTON_TOOL_TIP_TEXT = 'You hovered over the Button';
const EXPECTED_HOVERED_FIELD_TOOL_TIP_TEXT = 'You hovered over the text field';

describe('Tool tips', function() {
	it('Check dynamic elements', function() {
		cy.visit(TOOL_TIPS_PAGE, { failOnStatusCode: false });

		cy.get(TOOL_TIP_BUTTON).trigger(TRIGGER_OPTION.MOUSE_OVER);
		cy
			.get(TOOL_TIP_HOVERED)
			.should(ASSERT_OPTION.haveText, EXPECTED_HOVERED_BUTTON_TOOL_TIP_TEXT)
			.trigger(TRIGGER_OPTION.MOUSE_OUT);
		cy.get(TOOL_TIP_BUTTON).trigger(TRIGGER_OPTION.MOUSE_OUT);

		cy.get(TOOL_TIP_TEXT_FIEL).trigger(TRIGGER_OPTION.MOUSE_OVER);
		cy
			.get(TOOL_TIP_HOVERED)
			.should(ASSERT_OPTION.haveText, EXPECTED_HOVERED_FIELD_TOOL_TIP_TEXT)
			.trigger(TRIGGER_OPTION.MOUSE_OUT);
		cy.get(TOOL_TIP_BUTTON).trigger(TRIGGER_OPTION.MOUSE_LEAVE);
	});
});
