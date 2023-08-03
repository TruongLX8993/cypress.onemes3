const common = require('../../common.cy');

describe("Xét nghiệm", () => {

    beforeEach(() => {
        // common.login();
        // common.goToFunctionFromMenu('chandoanhinhanhdanhsachdraw');

        cy.visit('http://192.168.1.11:2025/login.aspx')
        cy.get('#txtLoginName').type("sys.admin.hieutt")
        cy.get("#txtPassword").type("1")
        cy.get("#btnLogin").click();
        cy.get(`#side-menu a[href*='chandoanhinhanhdanhsachdraw']:first`).click({force: true});

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
    });

});