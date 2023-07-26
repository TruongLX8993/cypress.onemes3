const common = require('../common.cy');

describe("Tiếp nhận", () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('chandoanhinhanhdanhsachdraw');

    });

    it('should ', function () {
        cy.get ('#txtTimKiem').type ('test') ;
        //common.enterSelectBoxElas('drpSelectKhoaPhong','LS20.3');
       // common.enterSelectBoxElas('drpSelectHangDoiChiDinh','BGD');
       // common.enterSelectBoxElas('drpSelectLoaiDichVu','0924');
        common.enterSelectBoxNormal('drpSelectTrangThai','CHO THUC HIEN');
        common.enterSelectBoxNormal('cbbLoai','3 THANG');
        cy.get ('#btnTimKiem').click()
        cy.get('#divChanDoanHinhAnhDanhSachContent tbody tr:nth-child(1) td:nth-child(4) a').click();
    });

});