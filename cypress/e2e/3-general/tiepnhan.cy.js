const common = require('../common.cy');
const insuaranceNumber = require('../rd');


describe("Tiếp nhận", () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('tiepnhandraw');

    });

    it('should ', function () {
        console.log('abc');
        cy.get('#txtTenBenhNhan').type("MAI TESTT");
        cy.get('#txtTuoi').type("20");
        common.enterSelectBoxElas('cbbDonViHanhChinh', "HG");
        cy.get('#txtDiaChiSoNha').type("So 26");
        cy.get('#txtDienThoai').type("0332");
        cy.get('#txtSoCMND').type("00130102");
        common.enterSelectBoxElas('cboQuocGia', 'AIA');
        common.enterSelectBoxNormal('cbbDanToc', 'Tay');
        common.enterSelectBoxElas('cbbNgheNghiep', '07');
        //common.enterSelectBoxElas('cbbDoiTuong', 'Không BH');
        common.enterSelectBoxElas('cbbKhoaPhong', 'LS03');
        common.enterSelectBoxNormal('cbbNoiGioiThieu', 'Tự đến');
         common.enterSelectBoxNormal('cbbDichVu', '01010003');
         common.enterSelectBoxElas('cbbHangDoi', 'LS16.6');
        cy.get('#btnCHUYENTH').click();
    });

    it
});