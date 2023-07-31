const common = require('../../common.cy');

describe("Ngoại trú", () => {


    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('dieutringoaitrudraw');

    });

    it('Check khi kê VTYT / Thuốc', function () {
        cy.get('#tblNgoaiTru tbody tr:nth-child(4) td:nth-child(3) a').click();
        cy.viewport(1500,800);
        cy.get('li.accordion-header-only a#showThamKham').click();
        cy.get('#btnToaThuocMau').click();
        common.enterSelectBoxUlLi('cboThuocKD','20.13126');
        cy.get('#txtSlKD').type('1');
        cy.get('#txtSlNKD').type('2');
        cy.get(':nth-child(4) > .checkbox-inline > .icheckbox_square-green > .iCheck-helper').click();
        cy.get(':nth-child(1) > :nth-child(8) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
        cy.get(':nth-child(2) > :nth-child(7) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
        common.btnID('btnChon');
        cy.get('body').type('{esc}');
        // common.enterSelectBoxUlLi('cboThuocKD','20.01100{enter}');

        cy.get('#cboThuocKD').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('20.01100{enter}');
        cy.get('#txtSlKD').type('1');
        cy.get('#txtSlNKD').type('2');
        cy.get(':nth-child(4) > .checkbox-inline > .icheckbox_square-green > .iCheck-helper').click();
        cy.get(':nth-child(1) > :nth-child(8) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
        cy.get(':nth-child(2) > :nth-child(7) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
        common.btnID('btnChon');
        cy.get('.table-responsive table#tblThuoc thead:first tr th:nth-child(10) .ylenh-a .fa').click();
        common.btnConfirm();

    });
});

