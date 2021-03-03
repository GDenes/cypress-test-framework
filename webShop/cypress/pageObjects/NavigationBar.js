import SearchPage from '../pageObjects/SearchPage';
import TshirtsPage from '../pageObjects/TshirtsPage';
import BlousesPage from '../pageObjects/BlousesPage';
import CasualDressesPage from '../pageObjects/CasualDressesPage';
import SummerDressesPage from '../pageObjects/SummerDressesPage';
import { ASSERT_OPTION } from '../enums/AssertOptions';

const HOME_LOGO_BUTTON = "[alt='My Store']";
const SEARCH_FIELD_TOP = '#search_query_top';
const SEARCH_FIELD_TOP_SUBMIT_BTN = "[name='submit_search']";
const NAVIGATION_WOMEN_BTN = "a[title='Women']";
const UNDER_WOMEN_BTN_TSHIRT_OPTION = "ul.sf-menu .submenu-container [title='T-shirts']";
const UNDER_WOMEN_BTN_BLOUSES_OPTION = "a[title='Blouses']";
const UNDER_WOMEN_BTN_RIGHT_COLUMN_CASUAL_DRESSES = "ul.sf-menu .submenu-container ul [title='Casual Dresses']";
const UNDER_WOMEN_BTN_RIGHT_COLUMN_SUMMER_DRESSES = "ul.sf-menu .submenu-container ul [title='Summer Dresses']";

class NavigationBar {
	constructor() {
		cy.get(HOME_LOGO_BUTTON).should(ASSERT_OPTION.isVisible).as('logoImage');

		cy.get(SEARCH_FIELD_TOP).should(ASSERT_OPTION.isVisible).as('searchField');

		cy.get(SEARCH_FIELD_TOP_SUBMIT_BTN).should(ASSERT_OPTION.isVisible).as('searchButton');

		cy.get(NAVIGATION_WOMEN_BTN).should(ASSERT_OPTION.isVisible).as('womenPageButton');

		cy.get(UNDER_WOMEN_BTN_TSHIRT_OPTION).as('tshirtLink');

		cy.get(UNDER_WOMEN_BTN_BLOUSES_OPTION).as('blousesLink');
		//casualDressLink
		cy.get(UNDER_WOMEN_BTN_RIGHT_COLUMN_CASUAL_DRESSES).as('casualDressLink');
		//summerDresses
		cy.get(UNDER_WOMEN_BTN_RIGHT_COLUMN_SUMMER_DRESSES).as('summerDresses');
	}

	hoverWomenAndSelectSummerDressesLink() {
		cy.get('@womenPageButton');
		cy.get('@summerDresses').click({ force: true });
		return new SummerDressesPage();
	}

	hoverWomenAndSelectCasualDressLink() {
		cy.get('@womenPageButton');
		cy.get('@casualDressLink').click({ force: true });
		return new CasualDressesPage();
	}

	hoverWomenAndSelectBlousesLink() {
		cy.get('@womenPageButton');
		cy.get('@blousesLink').click({ force: true });
		return new BlousesPage();
	}

	hoverWomenAndSelectTshirstLink() {
		cy.get('@womenPageButton');
		cy.get('@tshirtLink').click({ force: true });
		return new TshirtsPage();
	}

	getSearcField() {
		return cy.get('@searchField');
	}

	clickSearchButton() {
		cy.get('@searchButton').click();
		return new SearchPage();
	}
}
export default NavigationBar;
