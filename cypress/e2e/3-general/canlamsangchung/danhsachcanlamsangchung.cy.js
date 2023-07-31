const common = require('../../common.cy');
const testCases = require('../canlamsangchung/canlamsangchung.testcase.json');

//cong 2025
describe("Cận lâm sàng chung", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('canlamsangdanhsachdraw');

    });

    it('Danh sách cận lâm sàng chung', () => {
        common.enterSelectBoxNormal('cbbLoai',testCases[0].cbbLoai);
        cy.get('#txtTimKiem').type(testCases[0].name);
        common.enterSelectBoxElasticSearch('drpSelectHangDoi',testCases[0].drpSelectHangDoi);
        common.enterSelectBoxElasticSearch('drpSelectHangDoiChiDinh',testCases[0].drpSelectHangDoiChiDinh);
        common.enterSelectBoxNormal('drpSelectTrangThai',testCases[0].drpSelectTrangThai);
        cy.get('#btnTimKiem').click();
        cy.get('#divCanLamSangChungDanhSachContent tbody')
        .then(($tbody) => {
            if ($tbody.find('tr').length > 0) {
                cy.get('#divCanLamSangChungDanhSachContent tbody tr').then(($tr)=>{
                    if ($tr.length >= 2) {
                        if(common.compareValue(
                            '#divCanLamSangChungDanhSachContent tbody tr:first  td:nth-child(2) a',
                            '#divCanLamSangChungDanhSachContent tbody tr:nth-child(2)  td:nth-child(2) a'
                        )){
                            cy.fail('Thời gian không sắp xếp tăng dần');
                        }
                      }
                })
                cy.get('#divCanLamSangChungDanhSachContent tbody tr:first  td a').eq(4).click();
            } 
            });

         });
        
        
       
    
});