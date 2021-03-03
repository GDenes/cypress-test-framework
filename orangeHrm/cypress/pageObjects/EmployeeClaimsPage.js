import 'cypress-iframe';
import { ASSERT_OPTION } from '../enums/AssertOptions';

const NON_CORE_IFRAME = '#noncoreIframe';
const EXPENSE_CLAIM_ID = "[data-sort-field='id']";
const FORMLIST_LIST_TOTAL_COMPONENT = '#frmList_ohrmListComponenttotal';
const DATA_TABLE_ROW = '.dataRaw';
const EXPENSE_TABLE_ROW_START = 'table#resultTable tr:nth-of-type(';
const EXPENSE_TABLE_ROW_END = ') > td:nth-of-type(1)';

const DEFAULT_EXPENSE_CLAIMS_ITEM_PER_PAGE = 6;

const TIMEOUT_VALUE_IN_MILLISEC = 30000;

class EmployeeClaimsPage {
	constructor() {
		cy.get(NON_CORE_IFRAME, { timeout: TIMEOUT_VALUE_IN_MILLISEC }).should(ASSERT_OPTION.isVisible);

		cy.frameLoaded(NON_CORE_IFRAME);
		cy.iframe().find(EXPENSE_CLAIM_ID, { timeout: TIMEOUT_VALUE_IN_MILLISEC });
	}

	checkRowNumber(itemPerPageNumber) {
		cy.iframe().find(FORMLIST_LIST_TOTAL_COMPONENT).should(ASSERT_OPTION.haveText, itemPerPageNumber);
		cy.iframe().find(DATA_TABLE_ROW).should(ASSERT_OPTION.length, itemPerPageNumber);
	}

	printAllExpenseClaimIdFromActualPage() {
		for (var i = 1; i <= DEFAULT_EXPENSE_CLAIMS_ITEM_PER_PAGE; i++) {
			cy.iframe().find(EXPENSE_TABLE_ROW_START + i + EXPENSE_TABLE_ROW_END).then(function($item) {
				cy.log($item.text());
			});
		}
	}
}
export default EmployeeClaimsPage;
