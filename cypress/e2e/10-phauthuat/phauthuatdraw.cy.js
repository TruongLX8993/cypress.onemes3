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
//     it('Vao thuc hien', function () {
//         console.log('abc');
//         common.enterSelectBoxElas('cboCfHangDoi',"LS12.22");
//         cy.get('.btn-danger').click();
//         common.enterSelectBoxNormal('cbbLoai', '3');
//         common.enterSelectBoxNormal('drpSelectTrangThai',"dang thực hiện");
//         cy.get('#btnTimKiem').click();
//         cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(4) a').click();
//         cy.wait(20000);
//         cy.get('#btnVAOTH').click();
//         // cy.contains('Vào mổ').click();
//
//     });
// });