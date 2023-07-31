function login() {
    cy.visit("/login.aspx");
    cy.get('#txtLoginName').type("sys.admin.hieutt")
    cy.get("#txtPassword").type("1")
    cy.get("#btnLogin").click();
}

function goToFunctionFromMenu(wpid) {

    cy.get(`#side-menu a[href*='${wpid}']:first`).click({force: true});
}


function enterSelectBoxNormal(selectTagId, value) {
    cy.get(`#${selectTagId}`).parent().find('span.selection span.select2-selection').click();
    cy.get('span.select2-search').find('input.select2-search__field').type(`${value}{downArrow}{enter}`);
}

function enterSelectBoxElas(selectTagId, value) {
    cy.get(`#${selectTagId}`).parent().find('span.selection span.select2-selection').click();
    cy.get('span.select2-search').find('input.select2-search__field').type(`${value}`);
    cy.get(`#select2-${selectTagId}-results`).find('tr:first').click();
}

function enterSelectBoxFocus(selectTagId, value) {
    cy.get(`#${selectTagId}`).parent().find('span.selection span.select2-selection').focus();
    cy.get('span.select2-search').find('input.select2-search__field').type(`${value}`);
    cy.get(`#select2-${selectTagId}-results`).find('tr:first').click();
}

function enterSelectBoxUlLi(selectTagId, value){
    cy.get(`#${selectTagId}`).parent().find('span.selection span.select2-selection').click();
    cy.get('span.select2-search').find('input.select2-search__field').type(`${value}`);
    cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click({force: true});

}

function  btnID(selectTagId){
    cy.get(`#${selectTagId}`).click();
}

function  btnConfirm(){
    cy.get('.confirm').click();
}

module.exports = {
    login: login,
    goToFunctionFromMenu: goToFunctionFromMenu,
    enterSelectBoxNormal: enterSelectBoxNormal,
    enterSelectBoxElas: enterSelectBoxElas,
    enterSelectBoxFocus: enterSelectBoxFocus,
    enterSelectBoxUlLi: enterSelectBoxUlLi,
    btnID: btnID,
    btnConfirm: btnConfirm,
}