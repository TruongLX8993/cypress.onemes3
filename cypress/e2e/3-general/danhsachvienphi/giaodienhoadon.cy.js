const common = require('../../common.cy');


describe("Giao diện hóa đơn", () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('vienphidanhsachdraw');
        common.enterSelectBoxNormal('cbbLoai','3 tháng');   
    });

    
    // it('Check tác vụ lập biên lai', () => {
    //     common.enterSelectBoxNormal('drpSelectTrangThai','Chờ thanh toán');
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divVienPhiDanhSachContent tbody tr:first  td a').eq(4).click();
    //     cy.get('#btnBienLai1').click();
    // });
    


    it('Check tác vụ tính chi phí', () => {
        cy.get('#btnTimKiem').click();
        cy.get('#divVienPhiDanhSachContent tbody tr:first  td a').eq(4).click();
        cy.get('#btnTinhTien').click();
        cy.get('.confirm').click();
    });

   
});