const common = require('../../common.cy');
const testCases = require('../chandoanhinhanh/chandoanhinhanh.testcase.json');

//cong 2025
describe("Chẩn đoán hình ảnh", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('chandoanhinhanhdanhsachdraw');

    });

    it('Danh sách chuẩn đoán hình ảnh', () => {
        common.enterSelectBoxNormal('cbbLoai',testCases[0].cbbLoai);
        cy.get('#txtTimKiem').type(testCases[0].name);
        common.enterSelectBoxElasticSearch('drpSelectKhoaPhong',testCases[0].drpSelectKhoaPhong);
        //common.enterSelectBoxElas('drpSelectDichVu','');
        common.enterSelectBoxElasticSearch('drpSelectHangDoiChiDinh',testCases[0].drpSelectHangDoiChiDinh);
        common.enterSelectBoxElasticSearch('drpSelectLoaiDichVu',testCases[0].drpSelectLoaiDichVu);
        common.enterSelectBoxNormal('drpSelectTrangThai',testCases[0].drpSelectTrangThai);
        cy.get('#btnTimKiem').click();
        cy.get('#divChanDoanHinhAnhDanhSachContent tbody')
            .then(($tbody) => {
                if ($tbody.find('tr').length > 0) {
                    cy.get('#divChanDoanHinhAnhDanhSachContent tbody tr').then(($tr)=>{
                        if ($tr.length >= 2) {
                            if(common.compareValue(
                                '#divChanDoanHinhAnhDanhSachContent tbody tr:first  td:nth-child(2) a',
                                '#divChanDoanHinhAnhDanhSachContent tbody tr:nth-child(2)  td:nth-child(2) a'
                            )){
                                cy.fail('Thời gian không sắp xếp tăng dần');
                            }
                          }
                    })
                    cy.get('#divChanDoanHinhAnhDanhSachContent tbody tr:first  td a').eq(4).click();
                    cy.get('#divPopupQuickConfig a').click();
                } 
         });
         });
        
       
    
});