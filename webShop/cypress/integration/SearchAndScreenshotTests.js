import { ASSERT_OPTION } from '../enums/AssertOptions';
import HomePage from '../pageObjects/HomePage';
import NavigationBar from '../pageObjects/NavigationBar';

const SEARCH_TEXT = 'blouse';

describe('Search and screenshot Tests', function() {
	beforeEach(function() {
		cy.visit('/');
	});

	it('Create a screenshot about the element with the girl in the red dress', function() {
		const homePage = new HomePage();
		homePage.createScreenshotInFirstElement();
	});

	it("Search for 'blouse'", function() {
		const description = 'Short sleeved blouse with feminine draped sleeve detail.';

		const navigationBar = new NavigationBar();
		navigationBar.getSearcField().type(SEARCH_TEXT);
		const searchPage = navigationBar.clickSearchButton();
		const quickViewtDialogBox = searchPage.clickQuickViewButton();
		quickViewtDialogBox.getDescriptionText().should(ASSERT_OPTION.haveText, description);
	});
});
