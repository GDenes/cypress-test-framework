import { ASSERT_OPTION } from '../enums/AssertOptions';

const TABLE_USERNAME_TITLE = "th[data-field='username']";
const TABLE_ROW_START_SECTION = "tbody[ng-if='!listData.staticBody'] > tr:nth-of-type(";
const TABLE_ROW_END_SECTION = ') > td:nth-of-type(2) span';

const TIMEOUT_VALUE_IN_MILLISEC = 30000;

const DEFAULT_USER_ITEM_PER_PAGE = 50;

class UsersPage {
	constructor() {
		cy.get(TABLE_USERNAME_TITLE, { timeout: TIMEOUT_VALUE_IN_MILLISEC }).should(ASSERT_OPTION.isVisible);
	}

	printAllUsernameFromDefaultPage() {
		for (var i = 1; i <= DEFAULT_USER_ITEM_PER_PAGE; i++) {
			cy.get(TABLE_ROW_START_SECTION + i + TABLE_ROW_END_SECTION).then(function(item) {
				cy.log(item.text());
			});
		}
	}
}

export default UsersPage;
