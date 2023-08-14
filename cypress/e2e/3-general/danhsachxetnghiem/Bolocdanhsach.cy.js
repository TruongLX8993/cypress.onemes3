const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');

describe("Danh sách xét nghiệm", () => {


    beforeEach(() => {
        common.visitAndLogin();
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
        common.compareValueDescending('#divChanDoanHinhAnhDanhSachContent tbody tr:nth-child(1) td:nth-child(3) a',
            '#divChanDoanHinhAnhDanhSachContent tbody tr:nth-child(2) td:nth-child(3) a');
        cy.get('#divChanDoanHinhAnhDanhSachContent tbody tr:nth-child(1) td:nth-child(4) a').click();
        cy.get('.btn-danger');

    });

});