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
//     it('Thu hoi', function () {
//         console.log('abc');
//         common.enterSelectBoxElas('cboCfHangDoi',"LS12.22");
//         cy.get('.btn-danger').click();
//         common.enterSelectBoxNormal('cbbLoai', '3 tháng');
//         common.enterSelectBoxNormal('drpSelectTrangThai',"Đang thực hiện");
//         cy.get('#btnTimKiem').click();
//         cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a').click();
//         cy.get('#txtKetThucPT').type('11:09 25/07/2023{enter}');
//         common.enterSelectBoxNormal('cbbChiDinhMoPT',"08111624");
//         common.enterSelectBoxElas('cbbPPGayMePT',"3");
//         cy.get('#txtChuanDoanTruocMoPT').type('Truoc Phau Thuat');
//         cy.get('#txtChuanDoanSauMoPT').type('Sau Phau Thuat');
//         common.enterSelectBoxElas('cbbBacSiPT',"3767");
//         cy.get('#btnHOANTAT').click();
//         cy.get('#btnTHUHOI').click();
//         cy.get('#aTrangThai i')
//             .should('have.text', 'Đang thực hiện')
//             .then(($i) => {
//                 const text = $i.text().trim();
//                 if (text === 'Đang thực hiện')
//                 {
//                     cy.log('Đổi trạng thái thành công');
//                 }
//                 else
//                 {
//                     cy.fail('Đổi trạng thái thất bại');
//                 }
//             });
//     });
//         it('Thu hoi 1', function () {
//             console.log('abc');
//             common.enterSelectBoxElas('cboCfHangDoi',"LS12.22");
//             cy.get('.btn-danger').click();
//             common.enterSelectBoxNormal('cbbLoai', '3 tháng');
//             common.enterSelectBoxNormal('drpSelectTrangThai',"Đang thực hiện");
//             cy.get('#btnTimKiem').click();
//             cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a').click();
//             cy.get('#txtKetThucPT').type('11:09 25/07/2023{enter}');
//             common.enterSelectBoxNormal('cbbChiDinhMoPT',"09276152");
//             common.enterSelectBoxElas('cbbPPGayMePT',"3");
//             cy.get('#txtChuanDoanTruocMoPT').type('Truoc Phau Thuat');
//             cy.get('#txtChuanDoanSauMoPT').type('Sau Phau Thuat');
//             common.enterSelectBoxElas('cbbBacSiPT',"3767");
//             cy.get('#btnHOANTAT').click();
//             cy.get('#btnTHUHOI').click();
//             cy.get('#aTrangThai i')
//                 .should('have.text', 'Đang thực hiện')
//                 .then(($i) => {
//                     const text = $i.text().trim();
//                     if (text === 'Đang thực hiện')
//                     {
//                         cy.log('Đổi trạng thái thành công');
//                     }
//                     else
//                     {
//                         cy.fail('Đổi trạng thái thất bại');
//                     }
//                 });
//     });
// });