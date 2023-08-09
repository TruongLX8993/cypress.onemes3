const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json')

describe("Nội trú", () => {

    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('danhsachttvaorakhoadraw');


    });

    it('Check các bộ lọc trong DS nhập khoa NT ', function () {
        // cy.get('#txtTimKiem').type('test');
        //common.enterSelectBoxElasticSearch('drpSelectKhoaPhong','LS14');
        cy.get('#drpSelectTrangThai').select('Mới');
        common.enterSelectBoxNormal('cbbLoai', '3');
        cy.get('#btnTimKiem').click();
        // cy.get('#divDanhSachContent tbody tr:nth-child(1) td:nth-child(3) a').click();

        common.compareValueDescending('#divDanhSachContent tbody tr:nth-child(1) td:nth-child(2) a',
            '#divDanhSachContent tbody tr:nth-child(2) td:nth-child(2) a');
        cy.get('#divDanhSachContent tbody tr:nth-child(1) td:nth-child(3) a').click();


    });


});
