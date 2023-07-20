const common = require('../common.cy');
const insuaranceNumber = require('../rd');


describe("Viện phí", () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('vienphidanhsachdraw');

    });
    it('Danh sách viện phí', () => {
        cy.get('#txtTimKiem').type("2300520759");
        //common.enterSelectBoxElas('drpSelectKhoaPhong','Khoa Dinh Dưỡng');
        common.enterSelectBoxElas('drpSelectHangDoi','Thanh toán 1C');
        common.enterSelectBoxNormal('cbbLoai','Trong tháng');
        common.enterSelectBoxElas('drpSelectNguoiLap','sys.admin.hieutt');
        common.enterSelectBoxElas('drpSelectDoiTuong','Bảo Hiểm');
        //common.enterSelectBoxElas('drpSelectHopDong','01/HĐCG');
        common.enterSelectBoxNormal('drpSelectLoaiDieuTri','Khám bệnh');
        common.enterSelectBoxNormal('drpSelectTrangThai','Hoàn tất');
        cy.get('#btnTimKiem').click();
        cy.get('#divVienPhiDanhSachContent tbody tr:first  td a').eq(4).click();
    });

   
});