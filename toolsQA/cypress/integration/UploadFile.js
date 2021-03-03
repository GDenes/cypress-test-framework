import 'cypress-file-upload';
import { ASSERT_OPTION } from '../enums/AssertOptions';
const UPLOAD_DOWNLOAD_PAGE = '/upload-download';

const UPLOAD_FILE_PATH = '../upload/sampleFile';

const BROWSE_BUTTON = '#uploadFile';
const UPLOAD_FILE_PATH_STRING = '#uploadedFilePath';
const SELECTED_FAKE_FILE_PATH = 'C:\\fakepath\\sampleFile';

describe('', function() {
	it('Upload file', function() {
		cy.visit(UPLOAD_DOWNLOAD_PAGE, { failOnStatusCode: false });

		cy.get(BROWSE_BUTTON).attachFile(UPLOAD_FILE_PATH);

		cy.get(UPLOAD_FILE_PATH_STRING).should(ASSERT_OPTION.haveText, SELECTED_FAKE_FILE_PATH);
	});
});
