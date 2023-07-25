// const common = require('../common.cy');
//
// describe("Tiếp nhận", () => {
//
//     beforeEach(() => {
//         common.login();
//         common.goToFunctionFromMenu('xetnghiemdanhsachdraw');
//
//     });
//
//     it('Check tác vụ "thu hồi" ', function () {
//         common.enterSelectBoxNormal('drpSelectTrangThai','CHO THUC HIEN');
//         common.enterSelectBoxNormal('cbbLoai','3 THANG');
//         cy.get ('#btnTimKiem').click();
//         cy.get('#divXetNghiemDanhSachContent tbody tr:nth-child(1) td:nth-child(4) a').click();
//         cy.get ('#btnVAOTH').click();
//         cy.get ('#txtThoiGianTraKetQua').type('16:29 24/07/2023');
//         common.enterSelectBoxElas('cbbNoiThucHien','CLS08.1');
//         common.enterSelectBoxElas('cbbNguoiThucHien','4721');
//         common.enterSelectBoxElas('cbbBacSiDocKetQua','1893');
//         cy.get ('#btnHOANTAT').click();
//         cy.get ('#btnTHUHOI').click();
//         cy.get('#aTrangThai i')
//             .should('have.text', 'Đang thực hiện')
//             .then(($i) => {
//                 const text = $i.text().trim();
//                 if (text === 'Đang thực hiện') {
//                     cy.log('Đổi trạng thái thành công');
//                 } else {
//                     cy.fail('Đổi trạng thái thất bại');
//                 }
//         cy.get ('#txtThoiGianTraKetQua').type('16:41 24/07/2023');
//         common.enterSelectBoxElas('cbbBacSiDocKetQua','4324');
//         cy.get ('#btnHOANTAT').click();
//     it('Check tác vụ "thu hồi" ', function () {
//         cy.get('#txtTimKiem').type('20839');
//         cy.get('#btnTimKiem').click();
//         cy.get('#divXetNghiemDanhSachContent tbody tr:nth-child(2) td:nth-child(4) a').click();
//         cy.get('#btnTHUHOI').click();
//         cy.get('.confirm').click();
//
//     });
//     });
//
// });