import { ASSERT_OPTION } from '../enums/AssertOptions';

const PERSONAL_DETAILS_TITLE = 'div#personal_details_tab > h4';
const FIRST_NAME = '#firstName';
const LAST_NAME = '#lastName';
const MIDDLE_NAME = '#middleName';
const EMPLOYEE_ID = '#employeeId';
const EMPLOYEE_BITH_D = '#emp_birthday';
const MARTIAL_STATUS = 'div#emp_marital_status_inputfileddiv > .select-wrapper';
const GENDER = 'div#emp_gender_inputfileddiv > .select-wrapper';
const NATIONALITY = 'div#nation_code_inputfileddiv > .select-wrapper';
const LICENSE_EXP_DATE = '#emp_dri_lice_exp_date';

const TIMEOUT_VALUE_IN_MILLISEC = 30000;

class MyInfoPage {
	constructor() {
		cy.get(PERSONAL_DETAILS_TITLE, { timeout: TIMEOUT_VALUE_IN_MILLISEC }).should(ASSERT_OPTION.isVisible);
		cy.get(FIRST_NAME, { timeout: TIMEOUT_VALUE_IN_MILLISEC }).should(ASSERT_OPTION.isVisible).as('firstName');
		cy.get(LAST_NAME).should(ASSERT_OPTION.isVisible).as('lastName');
		cy.get(MIDDLE_NAME).should(ASSERT_OPTION.isVisible).as('middleName');
		cy.get(EMPLOYEE_ID).should(ASSERT_OPTION.isVisible).as('employeeId');
		cy.get(EMPLOYEE_BITH_D).should(ASSERT_OPTION.isVisible).as('empBirthday');
		cy.get(MARTIAL_STATUS).should(ASSERT_OPTION.isVisible).as('martialStatus');
		cy.get(GENDER).should(ASSERT_OPTION.isVisible).as('gender');
		cy.get(NATIONALITY).should(ASSERT_OPTION.isVisible).as('nationality');
		cy.get(LICENSE_EXP_DATE).should(ASSERT_OPTION.isVisible).as('licenseExpDate');
	}

	getFirstNameField() {
		return cy.get('@firstName');
	}

	getLastNameField() {
		return cy.get('@lastName');
	}

	getMiddleNameField() {
		return cy.get('@middleName');
	}

	getEmployeeIdField() {
		return cy.get('@employeeId');
	}

	getEmpBirthdayField() {
		return cy.get('@empBirthday');
	}

	getMartialStatusField() {
		return cy.get('@martialStatus');
	}

	getGenderField() {
		return cy.get('@gender');
	}

	getNationalityField() {
		return cy.get('@nationality');
	}

	getLicenseExpDateField() {
		return cy.get('@licenseExpDate');
	}
}

export default MyInfoPage;
