const common = require('../../common.cy');
const insuaranceNumber = require('../../rd');
const enviroment = require('../../../../enviroment.json')

describe("Phẫu thuật", () => {

    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('danhsachphauthuatdraw');


    });

    it('Check các bộ lọc trong DS PT ', function () {
        common.enterSelectBoxElasticSearch('cboCfHangDoi', 'LS12.22');
        cy.get('.btn-danger').click();
        cy.get('#txtTimKiem').type('test');
        //common.enterSelectBoxElasticSearch('drpSelectHangDoi','LS013');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'HOAN TAT');
        common.enterSelectBoxNormal('cbbLoai', '3 THANG');
        cy.get('#btnTimKiem').click();
        // cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
        // cy.get('#btnTimKiem').click();
        cy.get('#divDanhSachPhauThuatContent tbody tr:nth-child(2) td:nth-child(3)').click();
        // cy.get('.confirm').click();
        // cy.get('#divDanhSachPhauThuatContent tbody tr:nth-child(3) td:nth-child(3)').click();
    });











    });