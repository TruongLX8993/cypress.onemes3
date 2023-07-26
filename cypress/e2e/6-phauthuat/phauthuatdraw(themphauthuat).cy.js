//
//
// const common = require('../common.cy');
// const insuaranceNumber = require('../rd');
//
//
// describe("Phau Thuat", () => {
//
//     beforeEach(() => {
//         common.login();
//         common.goToFunctionFromMenu('danhsachphauthuatdraw');
//
//     });
//
//     it('Them PT', function () {
//         console.log('abc');
//         common.enterSelectBoxElas('cboCfHangDoi',"LS12.22");
//         cy.get('.btn-danger').click();
//         common.enterSelectBoxNormal('cbbLoai', '3 tháng');
//         common.enterSelectBoxNormal('drpSelectTrangThai',"Chờ thực hiện");
//         cy.get('#btnTimKiem').click();
//         cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a').click();
//         cy.wait(6000);
//         common.goToFunctionFromMenu('phauthuatdraw');
//         //cy.get('#btnVAOTH').click();
//         cy.contains('Vào mổ').click();
//
//         //cy.get('#btnVAOTH').contains('Vào mổ').click();
//
//
//         // cy.get('#btnChange').click();
//         // common.enterSelectBoxNormal('cbbPhongMoPopup',"LS12.22");
//         // common.enterSelectBoxNormal('cbbChiDinhMoPopup',"08111876");
//         // common.enterSelectBoxNormal('cbbBacSiPopup',"1893");
//
//     });
// });