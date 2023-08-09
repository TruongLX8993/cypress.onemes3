const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');


describe("Nội trú", () => {

    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');


    });

    it('Check các bộ lọc trong DS điều trị NT', function () {
        // cy.get('#txtTimKiem').type('Han');
        //common.enterSelectBoxNormal('drpSelectKhoaPhong','LS22');
        //common.enterSelectBoxNormal('cboBuongGiuong','116');
        //common.enterSelectBoxNormal('cboBacSi','1712');
        common.enterSelectBoxElasticSearch('drpSelectDoiTuong','Bảo hiểm');
        //common.enterSelectBoxNormal('drpSelectTrangThai','Đi mổ');
        cy.get('#select2-drpSelectTrangThai-container > .select2-selection__clear').click();
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click();
        // cy.get('#tblNoiTru tbody tr:nth-child(2) td:nth-child(3) a').click();

        common.compareValueDescending('#tblNoiTru tbody tr:nth-child(2) td:nth-child(1) a',
            '#tblNoiTru tbody tr:nth-child(3) td:nth-child(1) a');
        cy.get('#tblNoiTru tbody tr:nth-child(2) td:nth-child(3) a').click();



    });






});