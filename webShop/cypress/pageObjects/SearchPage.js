import { TRIGGER_OPTION } from '../enums/TriggerOptions';
import QuickViewtDialogBox from '../pageObjects/QuickViewtDialogBox';

const QUICK_VIEW_BTN = 'a.quick-view > span';
const BLOUSE_ALT = "[alt='Blouse']";
const QUICK_VIEW_SPAN = 'a.quick-view > span';

class SearchPage {
	constructor() {
		cy.get(QUICK_VIEW_BTN);
	}

	clickQuickViewButton() {
		cy.get(BLOUSE_ALT).trigger(TRIGGER_OPTION.MOUSE_OVER);
		cy.get(QUICK_VIEW_SPAN).click();
		return new QuickViewtDialogBox();
	}
}

export default SearchPage;
