const common = require('../../common.cy');
const testCases = require('../thuthuat/thuthuat.testcase.json');

describe("Thủ thuật", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('danhsachthuthuatdraw');

    });

    it('Danh sách thủ thuật', () => {
        common.enterSelectBoxNormal('cbbLoai',testCases[0].cbbLoai);
        cy.get('#txtTimKiem').type(testCases[0].name);
        common.enterSelectBoxElasticSearch('drpSelectHangDoi',testCases[0].drpSelectHangDoi);
        common.enterSelectBoxNormal('drpSelectDichVu',testCases[0].drpSelectDichVu);
        cy.get('.select2-results__option--highlighted > table > tbody > tr > [style="color:maroon;font-weight:bold; width:20%;padding:4px; text-align: left;"]').click();
        //common.enterSelectBoxNormal('drpSelectLoaiDichVu','');
        common.enterSelectBoxNormal('drpSelectTrangThai',testCases[0].drpSelectTrangThai);
        cy.get('#btnTimKiem').click();
        cy.get('#divDanhSachThuThuatContent tbody')
        .then(($tbody) => {
            if ($tbody.find('tr').length > 0) {
                cy.get('#divDanhSachThuThuatContent tbody tr').then(($tr)=>{
                    if ($tr.length >= 2) {
                        if(common.compareValue(
                            '#divDanhSachThuThuatContent tbody tr:first  td:nth-child(2) a',
                            '#divDanhSachThuThuatContent tbody tr:nth-child(2)  td:nth-child(2) a'
                        )){
                            cy.fail('Thời gian không sắp xếp tăng dần');
                        }
                      }
                })
                cy.get('#divDanhSachThuThuatContent tbody tr:first  td a').eq(4).click();
            } 
     });
    
    
    });

    
});