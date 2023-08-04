const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');

describe("Danh sách xét nghiệm", () => {


    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('chandoanhinhanhdanhsachdraw');


    });

    it('should ', function () {
        cy.get ('#txtTimKiem').type ('test') ;
        //common.enterSelectBoxElasticSearch('drpSelectKhoaPhong','LS20.3');
       // common.enterSelectBoxElasticSearch('drpSelectHangDoiChiDinh','BGD');
       // common.enterSelectBoxElasticSearch('drpSelectLoaiDichVu','0924');
        common.enterSelectBoxNormal('drpSelectTrangThai','CHO THUC HIEN');
        common.enterSelectBoxNormal('cbbLoai','3 THANG');
        cy.get ('#btnTimKiem').click()
        cy.get('#divChanDoanHinhAnhDanhSachContent tbody tr:nth-child(1) td:nth-child(4) a').click();
        cy.get('.btn-danger');
    });

});