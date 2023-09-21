const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');
const {getCurrentUrl} = require("../../common.cy");

describe('test chuyen cong', () => {
    it('should ', function () {
        cy.visit('http://192.168.1.11:2026/home.aspx?');
        cy.get('#txtLoginName').type("sys.admin.hieutt")
        cy.get("#txtPassword").type("1")
        cy.get("#btnLogin").click();
        cy.wait(5000);
        getCurrentUrl()
            .then(currentUrl => {
                currentUrl = currentUrl.replace('http://192.168.1.11:2026', 'http://192.168.1.11:2025')
                cy.visit(currentUrl);

                cy.once('uncaught:exception', () => false )
                common.goToFunctionFromMenu('canlamsangdanhsachdraw')
            });
    });

});