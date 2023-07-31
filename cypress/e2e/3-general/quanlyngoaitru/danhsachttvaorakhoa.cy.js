const common = require('../../common.cy');
const testCases = require('../quanlyngoaitru/danhsachttvaorakhoa.testcase.json');

describe("Quản lý ngoại trú", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('danhsachtiepnhanngoaitrudraw');

    });

    it('Danh sách tiếp nhận ngoại chú', () => {
        common.enterSelectBoxNormal('cbbLoai',testCases[0].cbbLoai);
        cy.get('#txtTimKiem').type(testCases[0].name);
        common.enterSelectBoxElasticSearch('drpSelectKhoaPhong',testCases[0].drpSelectKhoaPhong);
        cy.get('#drpSelectTrangThai').select(testCases[0].drpSelectTrangThai);
        common.enterSelectBoxNormal('drpSelectHinhThuc',testCases[0].drpSelectHinhThuc);
        cy.get('#btnTimKiem').click();
        cy.get('#divDanhSachContent tbody')
            .then(($tbody) => {
                if ($tbody.find('tr').length > 0) {
                    cy.get('#divDanhSachContent tbody tr').then(($tr)=>{
                        if ($tr.length >= 2) {
                            if(common.compareValue(
                                '#divDanhSachContent tbody tr:first  td:nth-child(2) a',
                                '#divDanhSachContent tbody tr:nth-child(2)  td:nth-child(2) a'
                            )){
                                cy.fail('Thời gian không sắp xếp tăng dần');
                            }
                          }
                    })
                    cy.get('#divDanhSachContent tbody tr:first  td a').eq(4).click();
                } 
         });
        });
        
});