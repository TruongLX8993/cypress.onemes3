const common = require('../../common.cy');
const testCases = require('../danhsachtiepnhan/danhsachtiepnhan.testcase.json');

describe("Tiếp nhận", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('danhsachtiepnhandraw');

    });

    it('Danh sách tiếp nhận', function () {
        cy.get('#txtTimKiem').type(testCases[0].name);
        common.enterSelectBoxElasticSearch('drpSelectKhoaPhong',testCases[0].drpSelectKhoaPhong);
        common.enterSelectBoxNormal('drpSelectQuocGia',testCases[0].drpSelectQuocGia);
        common.enterSelectBoxNormal('drpSelectGioiTinh',testCases[0].drpSelectGioiTinh);
        common.enterSelectBoxNormal('drpSelectTu',testCases[0].drpSelectTu);
        common.enterSelectBoxNormal('drpSelectUuTien',testCases[0].drpSelectUuTien);
        common.enterSelectBoxNormal('drpSelectTrangThai',testCases[0].drpSelectTrangThai);
        cy.get('[style="padding-top: 12px; min-width: 185px; padding-left: 0px;"] > .select2 > .selection > .select2-selection > .select2-selection__rendered > .select2-search').type("Không BH");
        cy.get('#select2-drpDoiTuong-results').find('tr:first').click();
        common.enterSelectBoxElasticSearch('cbbNguoiTiepNhan',testCases[0].cbbNguoiTiepNhan);
        common.enterSelectBoxNormal('cbbLoai',testCases[0].cbbLoai);
        cy.get('#btnTimKiem').click();

        cy.get('#divTiepNhanDanhSachContent tbody')
        .then(($tbody) => {
            if ($tbody.find('tr').length > 0) {
                cy.get('#divTiepNhanDanhSachContent tbody tr').then(($tr)=>{
                    if ($tr.length >= 2) {
                        if(common.compareValue(
                            '#divTiepNhanDanhSachContent tbody tr:first  td:nth-child(3) a',
                            '#divTiepNhanDanhSachContent tbody tr:nth-child(2)  td:nth-child(3) a'
                        )){
                            cy.fail('Thời gian không sắp xếp tăng dần');
                        }
                      }
                })
                cy.get('#divTiepNhanDanhSachContent tbody tr:first  td a').eq(4).click();
                cy.get('.confirm').click();
            } 
        });
    });
    
    
});


