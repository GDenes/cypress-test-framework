import { ASSERT_OPTION } from '../enums/AssertOptions';
import LoginPage from '../pageObjects/LoginPage';

var navigationBar;
const EXPEXTED_EMPLOYEE_CLAIMS_NUM = 6;
const TEST_DATA_JSON_FILE_NAME = 'testData';

var testDataJsonObj;
describe('Users Page', function() {
	beforeEach(function() {
		cy.visit('/', { failOnStatusCode: false });

		const loginPage = new LoginPage();
		navigationBar = loginPage.loginWithPreEnteredValues();

		cy.fixture(TEST_DATA_JSON_FILE_NAME).then((jsonData) => {
			this.testDataJsonObj = jsonData;
		});
	});

	it('Print all user', function() {
		const userPage = navigationBar.navigateToUsersPage();
		userPage.printAllUsernameFromDefaultPage();
	});

	it('Check My info', function() {
		const testData = this.testDataJsonObj.checkMyInfoTestData;
		const myInfoPage = navigationBar.navigateToMyInfoPage();

		myInfoPage.getFirstNameField().should(ASSERT_OPTION.haveValue, testData.firstName);
		myInfoPage.getLastNameField().should(ASSERT_OPTION.haveValue, testData.lastName);
		myInfoPage.getMiddleNameField().should(ASSERT_OPTION.haveValue, testData.middleName);
		myInfoPage.getEmployeeIdField().should(ASSERT_OPTION.haveValue, testData.employeeId);
		myInfoPage.getEmpBirthdayField().should(ASSERT_OPTION.haveValue, testData.empBirthday);
		myInfoPage.getMartialStatusField().should(ASSERT_OPTION.contain, testData.martialStatus);
		myInfoPage.getGenderField().should(ASSERT_OPTION.contain, testData.gender);
		myInfoPage.getNationalityField().should(ASSERT_OPTION.contain, testData.nationality);
		myInfoPage.getLicenseExpDateField().should(ASSERT_OPTION.haveValue, testData.licenseExpDate);
	});

	it('Print Employee Claims', function() {
		const employeeClaimsPage = navigationBar.navigateToEmployeeClaims();
		employeeClaimsPage.checkRowNumber(EXPEXTED_EMPLOYEE_CLAIMS_NUM);
		employeeClaimsPage.printAllExpenseClaimIdFromActualPage();
	});
});
