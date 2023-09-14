const common = require('../common.cy');
const insuaranceNumber = require('../rd');


describe("Tiếp nhận cấp cứu", () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('tiepnhancapcuudraw');

    });
    // for (let i = 0; i < testCases.length; i++) {
    //     let testcase = testCases[i];
    it("Check khi hoàn tất tiếp nhận với BN BH", function () {

        cy.get('#cbbGioiTinh').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('Nam{downArrow}{enter}');
        cy.get('#txtTuoi').type('43');
        cy.get('#cbbDonViHanhChinh').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('HN{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();
        cy.get('#txtDiaChiSoNha').type('Đình Thôn');
        cy.get('#txtDienThoai').type('0389422805');
        cy.get('#cbbDanToc').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('49{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();
        cy.get('#cbbQuocTich').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('VN{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();
        cy.get('#txtGhiChu').type('Khám CC');
        cy.get('#cbbLyDoCapCuu').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('Tai nạn lao động{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();
        cy.get('#cbbNguyenNhanTaiNan').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('TD{downArrow}{enter}');
        cy.get('#cbbDoiTuong').parent().find('span.selection span.select2-selection').focus();
        cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(1)').click();
        cy.get('#lblTheBaoHiem i.fa-paste').click();
        cy.get('#txtBaoHiemMst').type(insuaranceNumber.generate());
        cy.get('#txtBaoHiemGiaTriTu').clear().type('01/01/2022');
        cy.get('#cbbDiaChiBvDkBd').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('25114{downArrow}{enter}', {force: true});
        cy.get('#select2-cbbDiaChiBvDkBd-results').find('tr:first').click();
        cy.get('#txtBaoHiemDct').type('Hà Nội')
        cy.get('#btnChapNhanNhapTheBhyt').click();
        cy.get('#cbbKhoaPhong').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('LS02.2{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();
        cy.viewport(1500, 800);
        cy.get('#btnCHUYENTH').click();
        cy.log('Còn trường bắt buộc chưa nhập')
        cy.get('.confirm').click();
        cy.get('#txtTenBenhNhan').type('CypressTest BH13919');
        cy.get('#btnCHUYENTH').click().wait(1000);
        // cy.get('body').type('{esc}');
        // cy.get('#aTrangThai i.badge')
        //     .should('have.text', 'Đang thực hiện')
        //     .then(($badge) => {
        //         const hasBadgeClass = $badge.hasClass('badge');
        //         if (hasBadgeClass) {
        //             cy.log('Đổi trạng thái thành công');
        //         } else {
        //             cy.fail('Đổi trạng thái thất bại');
        //         }
        //     });
        // cy.get('#txtMaBenhNhan').invoke('val').then((MaBN) => {
        //     cy.log(MaBN);
        //     common.goToFunctionFromMenu('danhsachkhamcapcuu');
        //     cy.get('#txtTimKiem').clear().type(MaBN);
        //     common.enterSelectBoxNormal('cbbLoai', '3{enter}');
        //     cy.get('#btnTimKiem').click();
        //     cy.get('#divDanhSachContent .table-responsive .table tbody tr:nth-child(1) td:nth-child(9) a .badge')
        //         .should('have.text', 'Chờ thực hiện')
        //         .then(($badge) => {
        //             const hasBadgeClass = $badge.hasClass('badge');
        //             if (hasBadgeClass) {
        //                 cy.log('Đổi trạng thái dịch vụ thành công');
        //             } else {
        //                 cy.fail('Đổi trạng thái dịch vụ thất bại');
        //             }
        //         });
        // });
    });


    it("Check khi hoàn tất tiếp nhận với BN TP", function () {

        cy.get('#cbbGioiTinh').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('Nữ{downArrow}{enter}');
        cy.get('#txtTuoi').type('33');
        cy.get('#cbbDonViHanhChinh').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('HN{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();
        cy.get('#txtDiaChiSoNha').type('Đình Thôn');
        cy.get('#txtDienThoai').type('0389400805');
        cy.get('#cbbDanToc').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('49{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();
        cy.get('#cbbQuocTich').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('VN{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();
        cy.get('#txtGhiChu').type('Khám CC');
        cy.get('#cbbLyDoCapCuu').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('Tai nạn lao động{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();
        cy.get('#cbbNguyenNhanTaiNan').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('TD{downArrow}{enter}');
        cy.get('#cbbDoiTuong').parent().find('span.selection span.select2-selection').focus();
        cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
        cy.get('#cbbKhoaPhong').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('LS02.2{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();
        cy.viewport(1500, 800);
        cy.get('#btnCHUYENTH').click();
        cy.log('Còn trường bắt buộc chưa nhập');
        cy.get('.confirm').click();
        cy.get('#txtTenBenhNhan').type('Cypress Test TP13919');
        cy.get('#btnCHUYENTH').click().wait(1000);
        // cy.get('body').type('{esc}');
        // cy.get('#aTrangThai i.badge')
        //     .should('have.text', 'Đang thực hiện')
        //     .then(($badge) => {
        //         const hasBadgeClass = $badge.hasClass('badge');
        //         if (hasBadgeClass) {
        //             cy.log('Đổi trạng thái thành công');
        //         } else {
        //             cy.fail('Đổi trạng thái thất bại');
        //         }
        //     });
        // cy.get('#txtMaBenhNhan').invoke('val').then((MaBN) => {
        //     cy.log(MaBN);
        //     common.goToFunctionFromMenu('danhsachkhamcapcuu');
        //     cy.get('#txtTimKiem').clear().type(MaBN);
        //     common.enterSelectBoxNormal('cbbLoai', '3{enter}');
        //     cy.get('#btnTimKiem').click();
        //     cy.get('#divDanhSachContent .table-responsive .table tbody tr:nth-child(1) td:nth-child(9) a .badge')
        //         .should('have.text', 'Chờ thực hiện')
        //         .then(($badge) => {
        //             const hasBadgeClass = $badge.hasClass('badge');
        //             if (hasBadgeClass) {
        //                 cy.log('Đổi trạng thái dịch vụ thành công');
        //             } else {
        //                 cy.fail('Đổi trạng thái dịch vụ thất bại');
        //             }
        //         });
        // });
    });



    // it("Check khi thu hồi tiếp nhận ", function (){
    //     common.goToFunctionFromMenu('danhsachtncapcuu');
    //     common.enterSelectBoxNormal('cbbLoai','3{enter}');
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divDanhSachContent tbody tr:nth-child(1) td:nth-child(2) a').click();
    //     cy.get('#txtMaBenhNhan').invoke('val').then((Mabn)=>{
    //         cy.log(Mabn);
    //         common.goToFunctionFromMenu('danhsachkhamcapcuu');
    //         cy.get('#txtTimKiem').clear().type(Mabn);
    //         common.enterSelectBoxNormal('cbbLoai', '3{enter}');
    //         cy.get('#btnTimKiem').click();
    //         cy.get('#divDanhSachContent .table-responsive .table tbody tr:nth-child(1) td:nth-child(9) a .badge')
    //             .should('have.text', 'Chờ thực hiện')
    //             .then(($badge) => {
    //                 const hasBadgeClass = $badge.hasClass('badge');
    //                 if (hasBadgeClass) {
    //                     cy.log('BN chưa vào khám');
    //                     common.goToFunctionFromMenu('danhsachtncapcuu');
    //                     cy.get('#txtTimKiem').clear().type(Mabn);
    //                     common.enterSelectBoxNormal('cbbLoai', '3{enter}');
    //                     cy.get('#btnTimKiem').click();
    //                     cy.get('#divDanhSachContent tbody tr:nth-child(1) td:nth-child(2) a').click();
    //                     cy.get('#btnTHUHOI').click();
    //                     cy.get('#aTrangThai i.badge')
    //                         .should('have.text', 'Mới')
    //                         .then(($badge) => {
    //                             const hasBadgeClass = $badge.hasClass('badge');
    //                             if (hasBadgeClass) {
    //                                 cy.log('Đổi trạng thái thành công');
    //                             } else {
    //                                 cy.fail('Đổi trạng thái thất bại');
    //                             }
    //                         });
    //                     cy.get('#txtDiaChiSoNha').clear().type('Thôn 3');
    //                     cy.get('#txtDienThoai').type('1');
    //                     cy.get('#btnCHUYENTH').click().wait(5000);
    //                     cy.get('body').type('{esc}');
    //                 } else {
    //                     cy.fail('BN ã vào khám không thể thu hồi');
    //                 }
    //             });
    //     })
    //
    // })


    // it('Check khi tiến hành hủy tiếp nhận BN mới', function () {
    //     cy.get('#txtTenBenhNhan').type('Cypress Test Hủy');
    //     cy.get('#cbbGioiTinh').parent().find('span.selection span.select2-selection').focus();
    //     cy.get('input.select2-search__field').eq(1).type('Nữ{downArrow}{enter}');
    //     cy.get('#txtTuoi').type('33');
    //     cy.get('#cbbDonViHanhChinh').parent().find('span.selection span.select2-selection').focus();
    //     cy.get('input.select2-search__field').eq(1).type('HN{downArrow}{enter}');
    //     cy.get('.select2-results tr:first').click();
    //     cy.get('#txtDiaChiSoNha').type('Đình Thôn');
    //     cy.get('#txtDienThoai').type('0389400805');
    //     cy.get('#cbbDanToc').parent().find('span.selection span.select2-selection').focus();
    //     cy.get('input.select2-search__field').eq(1).type('49{downArrow}{enter}');
    //     cy.get('.select2-results tr:first').click();
    //     cy.get('#cbbQuocTich').parent().find('span.selection span.select2-selection').focus();
    //     cy.get('input.select2-search__field').eq(1).type('VN{downArrow}{enter}');
    //     cy.get('.select2-results tr:first').click();
    //     cy.get('#txtGhiChu').type('Khám CC');
    //     cy.get('#cbbLyDoCapCuu').parent().find('span.selection span.select2-selection').focus();
    //     cy.get('input.select2-search__field').eq(1).type('Tai nạn lao động{downArrow}{enter}');
    //     cy.get('.select2-results tr:first').click();
    //     cy.get('#cbbNguyenNhanTaiNan').parent().find('span.selection span.select2-selection').focus();
    //     cy.get('input.select2-search__field').eq(1).type('TD{downArrow}{enter}');
    //     cy.get('#cbbDoiTuong').parent().find('span.selection span.select2-selection').focus();
    //     cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
    //     cy.get('#cbbKhoaPhong').parent().find('span.selection span.select2-selection').focus();
    //     cy.get('input.select2-search__field').eq(1).type('LS02.2{downArrow}{enter}');
    //     cy.get('.select2-results tr:first').click();
    //     cy.get('#btnCHUYENTH').click().wait(10000);
    //     cy.get('body').type('{esc}');
    //     cy.get('#btnTHUHOI').click();
    //     cy.get('#btnHUY').click();
    //     cy.get('#aTrangThai i.badge')
    //         .should('have.text', 'Hủy')
    //         .then(($badge) => {
    //             const hasBadgeClass = $badge.hasClass('badge');
    //             if (hasBadgeClass) {
    //                 cy.log('Đổi trạng thái thành công');
    //             } else {
    //                 cy.fail('Đổi trạng thái thất bại');
    //             }
    //         });
    //
    // });
// }




// });
})