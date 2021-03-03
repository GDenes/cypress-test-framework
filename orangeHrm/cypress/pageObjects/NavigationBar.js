import UseresPage from './../pageObjects/UseresPage';
import MyInfoPage from './MyInfoPage';
import EmployeeClaimsPage from './EmployeeClaimsPage';
import { ASSERT_OPTION } from '../enums/AssertOptions';

const ADMIN_BTN = 'li#menu_admin_viewAdminModule > .collapsible-header > .left-menu-title';
const USER_MANAGMENT_BTN = 'li#menu_admin_UserManagement > .collapsible-header > .left-menu-title';
const USERS_BTN = 'a#menu_admin_viewSystemUsers > .left-menu-title';
const MY_INFO_BTN = 'a#menu_pim_viewMyDetails > .left-menu-title';
const EXPENSE_BTN = 'li#menu_expense_viewExpenseModule > .collapsible-header > .left-menu-title';
const CLAIMS_BTN = 'li#menu_expense_Claims > .collapsible-header > .left-menu-title';
const EMPLOYED_CLAIMS_BTN = 'a#menu_expense_viewExpenseClaims > .left-menu-title';

class NavigationBar {
	constructor() {
		cy.get(ADMIN_BTN).should(ASSERT_OPTION.isVisible).as('adminButton');
		cy.get(USER_MANAGMENT_BTN).as('userManagmentButton');
		cy.get(USERS_BTN).as('usersButton');
		cy.get(MY_INFO_BTN).should(ASSERT_OPTION.isVisible).as('myInfoButton');
		cy.get(EXPENSE_BTN).should(ASSERT_OPTION.isVisible).as('expenseButton');
		cy.get(CLAIMS_BTN).as('claimsButton');
		cy.get(EMPLOYED_CLAIMS_BTN).as('employeeClaimsButton');
	}

	navigateToUsersPage() {
		cy.get('@adminButton').click();
		cy.get('@userManagmentButton').should(ASSERT_OPTION.isVisible).click();
		cy.get('@usersButton').should(ASSERT_OPTION.isVisible).click();

		return new UseresPage();
	}

	navigateToMyInfoPage() {
		cy.get('@myInfoButton').click();
		return new MyInfoPage();
	}

	navigateToEmployeeClaims() {
		cy.get('@expenseButton').click();
		cy.get('@claimsButton').should(ASSERT_OPTION.isVisible).click();
		cy.get('@employeeClaimsButton').should(ASSERT_OPTION.isVisible).click();
		return new EmployeeClaimsPage();
	}

	getAdminButton() {
		return cy.get('@adminButton');
	}
}

export default NavigationBar;
