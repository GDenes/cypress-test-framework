import { ASSERT_OPTION } from '../enums/AssertOptions';
import { TRIGGER_OPTION } from '../enums/TriggerOptions';

const DRAG_ME_ELEMENT = '#draggable';
const DROPABLE_ELEMENT = '#droppable';

const CSS_TEST_ELEMENT = 'background-color';
const CSS_TEST_ELEMENT_VALUE = 'rgb(70, 130, 180)';

const DROPABLE_PAGE = '/droppable';

describe('Drag and Drop', function() {
	it('Dropabble', function() {
		cy.visit(DROPABLE_PAGE, { failOnStatusCode: false });

		cy
			.get(DRAG_ME_ELEMENT)
			.trigger(TRIGGER_OPTION.MOUSE_DOWN, { which: 1, pageX: 600, pageY: 100 }) //To simulate drag and drop using jQuery UI sortable requires pageX and pageY properties along with which:1
			.trigger(TRIGGER_OPTION.MOUSE_MOVE, { which: 1, pageX: 800, pageY: 120 })
			.trigger(TRIGGER_OPTION.MOUSE_UP);

		cy.get(DROPABLE_ELEMENT).should(ASSERT_OPTION.haveCSS, CSS_TEST_ELEMENT, CSS_TEST_ELEMENT_VALUE);
	});
});
