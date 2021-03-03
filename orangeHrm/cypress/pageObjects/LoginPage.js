import { ASSERT_OPTION } from '../enums/AssertOptions';
import NavigationBar from './../pageObjects/NavigationBar';

const LOGIN_BUTTON_SELECTOR = '#btnLogin';

class LoginPage {
	constructor() {
		cy.get(LOGIN_BUTTON_SELECTOR).should(ASSERT_OPTION.isVisible).as('loginButton');
	}

	loginWithPreEnteredValues() {
		cy.get('@loginButton').click();

		return new NavigationBar();
	}
}

export default LoginPage;
