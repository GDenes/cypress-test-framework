import { ASSERT_OPTION } from '../enums/AssertOptions';
import { COLOR } from '../enums/ProductColor';
import { SIZE } from '../enums/ProductSize';
import NavigationBar from '../pageObjects/NavigationBar';
var navigationBar;

const TEST_DATA_JSON_FILE_NAME = 'orderTestData';

var testDataJsonObj;
describe('Order Tests', function() {
	beforeEach(function() {
		cy.visit('/');
		navigationBar = new NavigationBar();

		cy.fixture(TEST_DATA_JSON_FILE_NAME).then((jsonData) => {
			this.testDataJsonObj = jsonData;
			console.log(jsonData);
		});
	});

	it('Faded Short order test', function() {
		let fadedShortTestData = this.testDataJsonObj.fadedShortTestData;

		const tshirtsPage = navigationBar.hoverWomenAndSelectTshirstLink();

		const productPage = tshirtsPage.clickFadedShortProductLink();
		productPage.selectSize(SIZE.medium);
		productPage.selectColor(COLOR.blue);
		productPage.increaseQuantity();

		const productDialogBox = productPage.clickAddToCartButton();
		checkProductDialogBoxData(productDialogBox, fadedShortTestData);

		const orderPage = productDialogBox.clickProceedToCheckoutButton();
		checkOrderPageData(orderPage, fadedShortTestData);

		const loginPage = orderPage.clickProceedToCheckoutButton();
		checkLoginPageData(loginPage, this.testDataJsonObj);
	});

	it('Blouse order test', function() {
		const blouseTestData = this.testDataJsonObj.blouseTestData;

		const blousePage = navigationBar.hoverWomenAndSelectBlousesLink();

		const productPage = blousePage.clickBlouseProductLink();
		productPage.selectSize(SIZE.medium);
		productPage.increaseQuantity();

		const productDialogBox = productPage.clickAddToCartButton();
		checkProductDialogBoxData(productDialogBox, blouseTestData);

		const orderPage = productDialogBox.clickProceedToCheckoutButton();
		checkOrderPageData(orderPage, blouseTestData);

		const loginPage = orderPage.clickProceedToCheckoutButton();
		checkLoginPageData(loginPage, this.testDataJsonObj);
	});

	it('Printed Dress order test', function() {
		const printedDressTestData = this.testDataJsonObj.printedDressTestData;

		const casualDressesPage = navigationBar.hoverWomenAndSelectCasualDressLink();

		const productPage = casualDressesPage.clickPrintedDressProductLink();
		productPage.selectSize(SIZE.medium);
		productPage.increaseQuantity();

		const productDialogBox = productPage.clickAddToCartButton();
		checkProductDialogBoxData(productDialogBox, printedDressTestData);

		const orderPage = productDialogBox.clickProceedToCheckoutButton();
		checkOrderPageData(orderPage, printedDressTestData);

		const loginPage = orderPage.clickProceedToCheckoutButton();
		checkLoginPageData(loginPage, this.testDataJsonObj);
	});

	it('Printed Summer Dress order test', function() {
		const printedSummerDressTestData = this.testDataJsonObj.printedSummerDressTestData;

		const summerDressesPage = navigationBar.hoverWomenAndSelectSummerDressesLink();

		const productPage = summerDressesPage.clickPrintedSummerDressProductLink();
		productPage.selectSize(SIZE.medium);
		productPage.increaseQuantity();

		const productDialogBox = productPage.clickAddToCartButton();
		checkProductDialogBoxData(productDialogBox, printedSummerDressTestData);

		const orderPage = productDialogBox.clickProceedToCheckoutButton();
		checkOrderPageData(orderPage, printedSummerDressTestData);

		const loginPage = orderPage.clickProceedToCheckoutButton();
		checkLoginPageData(loginPage, this.testDataJsonObj);
	});

	it('Printed Chiffon Dress order test', function() {
		const printedChiffonDressTestData = this.testDataJsonObj.printedChiffonDressTestData;

		const summerDressesPage = navigationBar.hoverWomenAndSelectSummerDressesLink();

		const productPage = summerDressesPage.clickPrintedChiffonDressProductLink();
		productPage.selectSize(SIZE.medium);
		productPage.increaseQuantity();

		const productDialogBox = productPage.clickAddToCartButton();
		checkProductDialogBoxData(productDialogBox, printedChiffonDressTestData);

		const orderPage = productDialogBox.clickProceedToCheckoutButton();
		checkOrderPageData(orderPage, printedChiffonDressTestData);

		const loginPage = orderPage.clickProceedToCheckoutButton();
		checkLoginPageData(loginPage, this.testDataJsonObj);
	});
});

function checkProductDialogBoxData(page, testDataGroup) {
	page.getPrdouctTitle().should(ASSERT_OPTION.haveText, testDataGroup.productName);
	page.getProductAttributes().should(ASSERT_OPTION.haveText, testDataGroup.productAttributes);
	page.getQuantityNumber().should(ASSERT_OPTION.haveText, testDataGroup.quantityNumber);
}

function checkOrderPageData(page, testDataGroup) {
	page.getProductAttributes().should(ASSERT_OPTION.haveText, testDataGroup.orderProductAttributes);
	page.getTotalPrice().should(ASSERT_OPTION.haveText, testDataGroup.orderTotalPrice);
}

function checkLoginPageData(page, testDataGroup) {
	page.getPageHeaderText().should(ASSERT_OPTION.haveText, testDataGroup.loginPageData.loginPageHeader);
	page.getCreateAnAccountText().should(ASSERT_OPTION.haveText, testDataGroup.loginPageData.createAccountText);
}
