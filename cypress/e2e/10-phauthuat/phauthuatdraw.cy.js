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




//it('Them PT', function () {
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
//it('Thu hoi', function () {
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