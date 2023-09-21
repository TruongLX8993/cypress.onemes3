function visitAndLogin(baseUrl) {

    if (baseUrl === undefined) baseUrl = '';
    cy.visit(`${baseUrl}/login.aspx`);
    cy.get('#txtLoginName').type("sys.admin.hieutt")
    cy.get("#txtPassword").type("1")
    cy.get("#btnLogin").click();
}

function visitAndLoginOther(baseUrl) {

    if (baseUrl === undefined) baseUrl = '';
    cy.visit(`${baseUrl}/login.aspx`);
    cy.get('#txtLoginName').type("sys.admin")
    cy.get("#txtPassword").type("1111")
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
            const time1 = new Date(text1);
            const time2 = new Date(text2);
            if (time1 >= time2) {
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
            const time1 = new Date(text1);
            const time2 = new Date(text2);
            if (time1 < time2) {
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

function inputDateTimeTomorrow(selectTagTime){
    const [time, date] = selectTagTime.split(' ');
    const [hour, minute] = time.split(':');
    const [day, month, year] = date.split('/');
    const today = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const formattedDate = `${String(tomorrow.getHours()).padStart(2, '0')}:${String(tomorrow.getMinutes()).padStart(2, '0')} ${String(tomorrow.getDate()).padStart(2, '0')}/${String(tomorrow.getMonth() + 1).padStart(2, '0')}/${tomorrow.getFullYear()}`;
    return formattedDate;
}

function inputDateTimeSevenMinutes(selectTagTime) {
    const [time, date] = selectTagTime.split(' ');
    const [hour, minute] = time.split(':');
    const [day, month, year] = date.split('/');
    const inputDate = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
    const newTime = new Date(inputDate.getTime() + 6 * 60 * 1000);
    const formattedDate = `${String(newTime.getHours()).padStart(2, '0')}:${String(newTime.getMinutes()).padStart(2, '0')} ${String(newTime.getDate()).padStart(2, '0')}/${String(newTime.getMonth() + 1).padStart(2, '0')}/${newTime.getFullYear()}`;
    return formattedDate;
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
    visitAndLoginOther: visitAndLoginOther,
    goToFunctionFromMenu: goToFunctionFromMenu,
    enterSelectBoxNormal: enterSelectNormalBox,
    enterSelectBoxElasticSearch: enterSelectBoxElasticSearch,
    compareValueDescending: compareValueOfInputElementDescending,
    compareValueAscending: compareValueOfInputElementAscending,
    enterSelectBoxFocus: enterSelectBoxFocus,
    inputDateTimeTomorrow: inputDateTimeTomorrow,
    inputDateTimeSevenMinutes: inputDateTimeSevenMinutes,
    enterSelectBoxUlLi: enterSelectBoxUlLi,
    btnID: btnID,
    clickConfirmBtn: clickConfirmBtn
}