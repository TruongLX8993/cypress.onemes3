const common = require('../common.cy');
const insuaranceNumber = require('../rd');


describe("Tiếp nhận", () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('tiepnhandraw');

    });

    // it('should ', function () {
    //     console.log('abc');
    // cy.get ('#txtTenBenhNhan').type ('Hann Test0') ;
    // cy.get ('#txtNgaySinh').type ('11/01/2011') ;
    // cy.get ('#txtDiaChiSoNha').type ('57') ;
    // common.enterSelectBoxElas('cbbDonViHanhChinh','HG');
    // cy.get ('#txtDienThoai').type ('0123462781') ;
    // cy.get ('#txtSoCMND').type ('0022993849') ;
    // common.enterSelectBoxElas('cboQuocGia','VN');
    // common.enterSelectBoxElas('cbbDanToc','35');
    // common.enterSelectBoxElas('cbbNgheNghiep','09');
    // common.enterSelectBoxElas('cbbKhoaPhong','LS03');
    // common.enterSelectBoxNormal('cbbHangDoi','tttk.1');
    // cy.get ('#btnCHUYENTH').click() ;
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // });
    // it('should ', function () {
    //     console.log('abc');
    //     cy.get ('#txtTenBenhNhan').type ('Hann Test 1') ;
    //     cy.get ('#txtNgaySinh').type ('11/01/2012') ;
    //     cy.get ('#txtDiaChiSoNha').type ('33') ;
    //     common.enterSelectBoxElas('cbbDonViHanhChinh','HG');
    //     cy.get ('#txtDienThoai').type ('0123462781') ;
    //     cy.get ('#txtSoCMND').type ('0022993849') ;
    //     common.enterSelectBoxElas('cboQuocGia','VN');
    //     common.enterSelectBoxElas('cbbDanToc','35');
    //     common.enterSelectBoxElas('cbbNgheNghiep','09');
    //     //common.enterSelectBoxElas('cbbDoiTuong','Bao hiem');
    //     //cy.get ('#txtBaoHiemMst').type ('DN4019283736473') ;
    //     common.enterSelectBoxElas('cbbKhoaPhong','LS03');
    //     common.enterSelectBoxNormal('cbbHangDoi','tttk.1');
    //     cy.get('#btnCHUYENTH').click();
    //
    //
    // });
    // it('should ', function () {
    //     console.log('abc');
    //     cy.get ('#txtTenBenhNhan').type ('Hann Test 2') ;
    //     cy.get ('#txtNgaySinh').type ('22/01/2010') ;
    //     cy.get ('#txtDiaChiSoNha').type ('23') ;
    //     common.enterSelectBoxElas('cbbDonViHanhChinh','HG');
    //     cy.get ('#txtDienThoai').type ('0123462781') ;
    //     cy.get ('#txtSoCMND').type ('0022993849') ;
    //     common.enterSelectBoxElas('cboQuocGia','VN');
    //     common.enterSelectBoxElas('cbbDanToc','48');
    //     common.enterSelectBoxElas('cbbNgheNghiep','12');
    //     //common.enterSelectBoxElas('cbbDoiTuong','Không BH');
    //     //cy.get ('#txtBaoHiemMst').type ('DN4019283733476') ;
    //     common.enterSelectBoxElas('cbbKhoaPhong','LS03');
    //     common.enterSelectBoxNormal('cbbHangDoi','tttk.1');
    //     cy.get('#btnCHUYENTH').click();
    //
    //
    //
    // });
    // it('should ', function () {
    //     console.log('abc');
    //     cy.get ('#txtTenBenhNhan').type ('Hann Test 3') ;
    //     cy.get ('#txtNgaySinh').type ('11/01/2000') ;
    //     cy.get ('#txtDiaChiSoNha').type ('75') ;
    //     common.enterSelectBoxElas('cbbDonViHanhChinh','HG');
    //     cy.get ('#txtDienThoai').type ('0123462781') ;
    //     cy.get ('#txtSoCMND').type ('0022993849') ;
    //     common.enterSelectBoxElas('cboQuocGia','VN');
    //     common.enterSelectBoxElas('cbbDanToc','35');
    //     common.enterSelectBoxElas('cbbNgheNghiep','09');
    //     //common.enterSelectBoxNormal('cbbDoiTuong','Bao hiem');
    //     //cy.get ('#txtBaoHiemMst').type ('DN4019283733647') ;
    //     common.enterSelectBoxElas('cbbKhoaPhong','LS03');
    //     common.enterSelectBoxNormal('cbbHangDoi','tttk.1');
    //     cy.get('#btnCHUYENTH').click();
    //
    // });


    it('should ', function () {
        console.log('abc');
        cy.get ('#txtTenBenhNhan').type ('Hann Test 6') ;
        cy.get ('#txtNgaySinh').type ('22/01/2015') ;
        cy.get ('#txtDiaChiSoNha').type ('44') ;
        common.enterSelectBoxElas('cbbDonViHanhChinh','HG');
        cy.get ('#txtDienThoai').type ('0123462781') ;
        cy.get ('#txtSoCMND').type ('0022993849') ;
        common.enterSelectBoxElas('cboQuocGia','VN');
        common.enterSelectBoxElas('cbbDanToc','48');
        common.enterSelectBoxElas('cbbNgheNghiep','09');
        //common.enterSelectBoxNormal('cbbDoiTuong','Không BH');
        //cy.get ('#txtBaoHiemMst').type ('DN4019283733476') ;
        common.enterSelectBoxElas('cbbKhoaPhong','LS03');
        common.enterSelectBoxNormal('cbbHangDoi','tttk.1');
        cy.get('#btnCHUYENTH').click();



    });

});