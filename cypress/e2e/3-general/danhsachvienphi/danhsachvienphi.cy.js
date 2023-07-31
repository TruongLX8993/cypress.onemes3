const common = require('../../common.cy');
const testCases = require('../danhsachvienphi/danhsachvienphi.testcase.json');

describe("Viện phí", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('vienphidanhsachdraw');

    });
    it('Danh sách viện phí', () => {
        cy.get('#txtTimKiem').type(testCases[0].name);
        common.enterSelectBoxElasticSearch('drpSelectKhoaPhong',testCases[0].drpSelectKhoaPhong);
        common.enterSelectBoxElasticSearch('drpSelectHangDoi',testCases[0].drpSelectHangDoi);
        common.enterSelectBoxNormal('cbbLoai',testCases[0].cbbLoai);
        common.enterSelectBoxElasticSearch('drpSelectNguoiLap',testCases[0].drpSelectNguoiLap);
        common.enterSelectBoxElasticSearch('drpSelectDoiTuong',testCases[0].drpSelectDoiTuong);
        common.enterSelectBoxElasticSearch('drpSelectHopDong',testCases[0].drpSelectHopDong);
        common.enterSelectBoxNormal('drpSelectLoaiDieuTri',testCases[0].drpSelectLoaiDieuTri);
        common.enterSelectBoxNormal('drpSelectTrangThai',testCases[0].drpSelectTrangThai);
        cy.get('#btnTimKiem').click();

        cy.get('#divVienPhiDanhSachContent tbody')
        .then(($tbody) => {
            if ($tbody.find('tr').length > 0) {
                cy.get('#divVienPhiDanhSachContent tbody tr').then(($tr)=>{
                    if ($tr.length >= 2) {
                        if(common.compareValue(
                            '#divVienPhiDanhSachContent tbody tr:first  td:nth-child(2) a',
                            '#divVienPhiDanhSachContent tbody tr:nth-child(2)  td:nth-child(2) a'
                        )){
                            cy.fail('Thời gian không sắp xếp tăng dần');
                        }
                      }
                })
                cy.get('#divVienPhiDanhSachContent tbody tr:first  td a').eq(4).click();
            } 
        });
    });

   
});