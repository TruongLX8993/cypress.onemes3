function visitAndLogin(baseUrl) {

    if (baseUrl === undefined) baseUrl = '';
    cy.visit(`${baseUrl}/login.aspx`);
    cy.get('#txtLoginName').type("sys.admin.hieutt")
    cy.get("#txtPassword").type("1")
    cy.get("#btnLogin").click();
}

function goToFunctionFromMenu(wpid) {

    cy.get(`#side-menu a[href*='${wpid}']:first`).click({force: true});
}


function enterSelectNormalBox(selectTagId, value) {
    cy.get(`#${selectTagId}`).parent().find('span.selection span.select2-selection').click();
    cy.get('span.select2-search').find('input.select2-search__field').type(`${value}{downArrow}{enter}`);
}

function enterSelectBoxElasticSearch(selectTagId, value) {
    cy.get(`#${selectTagId}`).parent().find('span.selection span.select2-selection').click();
    cy.get('span.select2-search').find('input.select2-search__field').type(`${value}`);
    cy.get(`#select2-${selectTagId}-results`).find('tr:first').click();
}

function compareValueOfInputElementDescending(sourceElementSelector, detinationSelector) {
    cy.get(sourceElementSelector).invoke('text').then((text1) => {
        cy.get(detinationSelector).invoke('text').then((text2) => {
            if (text1 >= text2) {
                cy.log('Danh sách được sắp xếp theo thứ tự giảm dần');
            } else {
                cy.fail('Danh sách không được sắp xếp theo thứ tự giảm dần');
            }
        });
    });
}

function compareValueOfInputElementAscending(sourceElementSelector, detinationSelector) {
    cy.get(sourceElementSelector).invoke('text').then((text1) => {
        cy.get(detinationSelector).invoke('text').then((text2) => {
            if (text1 < text2) {
                cy.log('Danh sách được sắp xếp theo thứ tự tăng dần');
            } else {
                cy.fail('Danh sách không được sắp xếp theo thứ tự tăng dần');
            }
        });
    });
}


function enterSelectBoxFocus(selectTagId, value) {
    cy.get(`#${selectTagId}`).parent().find('span.selection span.select2-selection').focus();
    cy.get('span.select2-search').find('input.select2-search__field').type(`${value}`);
    cy.get(`#select2-${selectTagId}-results`).find('tr:first').click();
}

function enterSelectBoxUlLi(selectTagId, value) {
    cy.get(`#${selectTagId}`).parent().find('span.selection span.select2-selection').click();
    cy.get('span.select2-search').find('input.select2-search__field').type(`${value}`);
    cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();

}

function btnID(selectTagId) {
    cy.get(`#${selectTagId}`).click();
}

function clickConfirmBtn() {
    cy.get('.confirm').should('be.visible').click();
}

function setTomorrowToInput(selectTagId) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const formattedDate = `${String(tomorrow.getDate()).padStart(2, '0')}-${String(tomorrow.getMonth() + 1).padStart(2, '0')}-${tomorrow.getFullYear()}`;
    cy.get(`#${selectTagId}`).clear();
    cy.get(`#${selectTagId}`).type(`${formattedDate}`);

}

async function getHtml(selection) {
    return new Cypress.Promise((resolve) => {
        cy.get(selection)
            .invoke('prop', 'outerHTML')
            .then((txt) => resolve(txt.toString()))
    });
}


async function getCurrentUrl() {
    return new Cypress.Promise((resolve) => {
        cy.url()
            .then((txt) => resolve(txt.toString()))
    });
}


module.exports = {
    getCurrentUrl: getCurrentUrl,
    getHtml: getHtml,
    visitAndLogin: visitAndLogin,
    goToFunctionFromMenu: goToFunctionFromMenu,
    enterSelectBoxNormal: enterSelectNormalBox,
    enterSelectBoxElasticSearch: enterSelectBoxElasticSearch,
    compareValueDescending: compareValueOfInputElementDescending,
    compareValueAscending: compareValueOfInputElementAscending,
    enterSelectBoxFocus: enterSelectBoxFocus,
    enterSelectBoxUlLi: enterSelectBoxUlLi,
    btnID: btnID,
    clickConfirmBtn: clickConfirmBtn,
    setTomorrowToInput: setTomorrowToInput
}