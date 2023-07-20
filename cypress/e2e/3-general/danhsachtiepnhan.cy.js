const common = require('../common.cy');


describe("Tiếp nhận", () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('danhsachtiepnhandraw');

    });

    it('should ', function () {
        cy.get('#txtTimKiem').type('2300520705');
        common.enterSelectBoxElas('drpSelectKhoaPhong','tttk.1');
        common.enterSelectBoxNormal('drpSelectQuocGia','Việt Nam');
        common.enterSelectBoxNormal('drpSelectGioiTinh','Nam');
        common.enterSelectBoxNormal('drpSelectTu','Tự đến');
        common.enterSelectBoxNormal('drpSelectUuTien','Thường');
        common.enterSelectBoxNormal('drpSelectTrangThai','Mới');
        cy.get('[style="padding-top: 12px; min-width: 185px; padding-left: 0px;"] > .select2 > .selection > .select2-selection > .select2-selection__rendered > .select2-search').type("Không BH");
        cy.get('#select2-drpDoiTuong-results').find('tr:first').click();
        common.enterSelectBoxElas('cbbNguoiTiepNhan','sys.admin.hieutt');
        common.enterSelectBoxNormal('cbbLoai','Trong tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divTiepNhanDanhSachContent').find('table tbody tr:first-child td:nth-child(3)').click();
    });
    
    
});