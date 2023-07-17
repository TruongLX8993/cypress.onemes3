function login() {
    cy.visit("/login.aspx");
    cy.get('#txtLoginName').type("sys.admin.hieutt")
    cy.get("#txtPassword").type("1")
    cy.get("#btnLogin").click();
}

function goToFunctionFromMenu(wpid) {

    cy.get(`#side-menu a[href*='${wpid}']:first`).click({force: true});
}

module.exports = {
    login: login, goToFunctionFromMenu: goToFunctionFromMenu
}