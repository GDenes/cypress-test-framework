import { ASSERT_OPTION } from '../enums/AssertOptions';

const PAGE_HEADING = '.page-heading';
const CREATE_NEW_ACCOUNT_TITLE = 'form#create-account_form > .page-subheading';

class LoginPage {
	constructor() {
		cy.get(PAGE_HEADING).should(ASSERT_OPTION.isVisible).as('pageHeader');

		cy.get(CREATE_NEW_ACCOUNT_TITLE).should(ASSERT_OPTION.isVisible).as('createAnAccountText');
	}
	getPageHeaderText() {
		return cy.get('@pageHeader');
	}

	getCreateAnAccountText() {
		return cy.get('@createAnAccountText');
	}
}

export default LoginPage;
