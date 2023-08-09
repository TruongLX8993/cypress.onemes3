const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');

describe("Thủ thuật", () => {

    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('danhsachthuthuatdraw');

    });


    // it('Tác vụ vào thực hiện', () => {
    //     common.enterSelectBoxNormal('cbbLoai', '3 tháng');
    //     common.enterSelectBoxNormal('drpSelectTrangThai', 'Chờ thực hiện');
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divDanhSachThuThuatContent tbody tr:first  td a').eq(4).click();
    //     cy.get('#btnVAOTH').click();
    //     cy.get('#aTrangThai i')
    //         .should('have.text', 'Đang thực hiện')
    //         .then(($i) => {
    //             const text = $i.text().trim();
    //             if (text === 'Đang thực hiện') {
    //                 cy.log('Thực hiện thành công');
    //             } else {
    //                 cy.fail('Thực hiện thất bại');
    //             }
    //         });
    //
    // });

    it('Tác vụ vào hoàn tất', () => {
        common.enterSelectBoxNormal('cbbLoai','3 tháng');
        common.enterSelectBoxNormal('drpSelectTrangThai','Đang thực hiện');
        cy.get('#btnTimKiem').click();
        cy.get('#divDanhSachThuThuatContent tbody tr:nth-child(2)  td a').eq(4).click();

        common.enterSelectBoxElasticSearch('cbbTTChinh','1');
        common.enterSelectBoxElasticSearch('cbbMauTuongTrinh','1');
        cy.get('#cbbPhuongPhapTT')
                .then(($i) => {
                  if ($i.val() === null) {
                    common.enterSelectBoxElasticSearch('cbbPhuongPhapTT','1');
                    cy.get('.select2-results__option--highlighted > table > tbody > tr > [style="color:maroon;font-weight:bold; width:20%;padding:4px; text-align: left;"]').click();
                  }
                });

        cy.get('#btnHOANTAT').click();

        cy.get('#aTrangThai i')
                .should('have.text', 'Hoàn tất')
                .then(($i) => {
                  const text = $i.text().trim();
                  if (text === 'Hoàn tất') {
                    cy.log('Hoàn tất thành công');
                  } else {
                    cy.fail('Hoàn tất thất bại');
                  }
                });
    });


    // it('Tác vụ thu hồi', () => {
    //     common.enterSelectBoxNormal('cbbLoai', '3 tháng');
    //     common.enterSelectBoxNormal('drpSelectTrangThai', 'Hoàn tất');
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divDanhSachThuThuatContent tbody tr:first  td a').eq(4).click();
    //
    //     cy.get('#btnTHUHOI').click();
    //     cy.wait(2000);
    //     cy.get('#aTrangThai')
    //         .then(($i) => {
    //             if ($i.text() === 'Đang thực hiện') {
    //                 cy.log('Thu hồi thành công');
    //             } else {
    //                 cy.fail('Thu hồi thất bại');
    //             }
    //         });
    // });
    //
    //
    // it('Tác vụ hủy', () => {
    //     common.enterSelectBoxNormal('cbbLoai', '3 tháng');
    //     common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divDanhSachThuThuatContent tbody tr:first  td a').eq(4).click();
    //
    //     //kiem tra vtyt,dv, thuốc
    //     let statusHuy = true;
    //     cy.get("#lnkVTYT").click();
    //     cy.get('#divVTYT')
    //         .then(($tbody) => {
    //             if ($tbody.find('tr').length > 0) {
    //                 statusHuy = false;
    //             }
    //         });
    //     cy.get("#lnkThuoc").click();
    //     cy.get('#divThuoc')
    //         .then(($tbody) => {
    //             if ($tbody.find('tr').length > 0) {
    //                 statusHuy = false;
    //             }
    //         });
    //     cy.get("#lnkTTCT").click();
    //     cy.get("#btnHUY").click();
    //     if (!statusHuy) {
    //         cy.wait(3000);
    //         cy.get(".confirm").click();
    //         cy.wait(5000);
    //         cy.get('#aTrangThai')
    //             .then(($i) => {
    //                 if ($i.text() === 'Hủy') {
    //                     cy.log('Hủy thành công');
    //                 } else {
    //                     cy.fail('Hủy thất bại');
    //                 }
    //
    //             });
    //     }else{
    //         cy.log('Không thể hủy do còn VTYT hoặc thuốc');
    //     }
    //
    // });
    //
    //
    // it('Chức năng kê thuốc', () => {
    //     common.enterSelectBoxNormal('cbbLoai', '3 tháng');
    //     common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divDanhSachThuThuatContent tbody tr:first  td a').eq(4).click();
    //     cy.get('#lnkThuoc').click();
    //
    //     cy.get(':nth-child(1) > .i-checksdt > label > .icheckbox_square-green > .iCheck-helper').click();
    //
    //     // common.enterSelectBoxNormal('cbbThuoc','13589');
    //     // cy.get('.select2-results__option--highlighted > table > tbody > tr > [style="color:maroon;overflow-wrap: break-word; font-weight:bold;width:13%;padding:4px"]').click();
    //     cy.get('#cbbThuoc').parent().find('span.selection span.select2-selection').click();
    //     cy.get('span.select2-search').find('input.select2-search__field').type('1');
    //     cy.get('span.select2-results > ul.select2-results__options').find('li').eq(3).click();
    //
    //     cy.get('#txtSoLuongThuoc').type('1');
    //     cy.get('#btnThemThuoc').click();
    //     cy.wait(5000);
    //
    //     cy.get('#divThuoc tr:first-child td:nth-child(5) input').type(2);
    //     cy.get('.iCheck-helper').click({multiple: true});
    //     cy.get('thead tr:nth-child(2) th:nth-child(8) button').click();
    //     cy.wait(5000);
    //     cy.get('.confirm').click();
    //
    // });
    //
    //
    // it('Chức năng kê khai VTYT', () => {
    //     common.enterSelectBoxNormal('cbbLoai', '3 tháng');
    //     common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divDanhSachThuThuatContent tbody tr:first  td a').eq(4).click();
    //     cy.get('#lnkVTYT').click();
    //
    //     cy.get(':nth-child(1) > .icheckbox_square-green > .iCheck-helper').click();
    //
    //     common.enterSelectBoxNormal('cbbVTYT', '');
    //     cy.get('.select2-results__option--highlighted > table > tbody > tr > [style="color:maroon; font-weight:bold;padding:4px;width:10%"]').click();
    //     cy.get('#txtSoLuongVTYT').type('1');
    //     cy.get('#btnAddVTYTThongThuong').click();
    //     cy.wait(5000);
    //
    //     cy.get('#divVTYT tr:first-child td:nth-child(5) input').type(2);
    //     cy.get('.iCheck-helper').click({multiple: true});
    //     cy.get('thead tr:nth-child(2) th:nth-child(8) button').click();
    //     cy.wait(5000);
    //     cy.get('.confirm').click();
    //
    // });
    //
    // it('Check chức năng kê DVKT', function () {
    //     common.enterSelectBoxNormal('cbbLoai', '3 tháng');
    //     common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divDanhSachThuThuatContent tbody tr:nth-child(3)  td a').eq(4).click();
    //     cy.get('#lnkChiDinhDVKT').click();
    //     common.enterSelectBoxElasticSearch('cbbHangDoi','cls06.1');
    //     // common.enterSelectBoxFocus('cbbDichVu','01010001');
    //     cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').focus();
    //     cy.get('span.select2-search').find('input.select2-search__field').type('01010001');
    //     cy.get('#select2-cbbDichVu-results').find('tr').eq(1).click();
    //     cy.get('#txtDichVuChiTiet').type('cho đi khám');
    //     common.btnID('btnAddDichVu');
    //
    //     cy.get('span.badge').each(($badge) => {
    //         cy.wrap($badge)
    //             .should('have.text', 'Mới')
    //             .then(() => {
    //                 cy.log('Đổi trạng thái thực hiện thành công');
    //                 const hasBadgeClass = $badge.hasClass('badge');
    //                 if (!hasBadgeClass) {
    //                     throw new Error('Đổi trạng thái thực hiện thất bại');
    //                 }
    //             });
    //     });
    //
    //     // common.enterSelectBoxUlLi('cbbDichVu','01010017');
    //     cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').click();
    //     cy.get('span.select2-search').find('input.select2-search__field').type('01010017');
    //     cy.get('#select2-cbbDichVu-results').find('tr').eq(1).click();
    //     cy.get('#txtDichVuChiTiet').type('aaaa');
    //     common.btnID('btnAddDichVu');
    //
    //     // common.enterSelectBoxUlLi('cbbDichVu','01010010');
    //     cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').click();
    //     cy.get('span.select2-search').find('input.select2-search__field').type('01010010');
    //     cy.get('#select2-cbbDichVu-results').find('tr').eq(1).click();
    //     cy.get('#txtDichVuChiTiet').type('bbbb');
    //     common.btnID('btnAddDichVu');
    //
    //     common.btnID('btnChuyenDVKT');
    //     cy.get('span.badge').each(($badge) => {
    //         cy.wrap($badge)
    //             .should('have.text', 'Chờ thực hiện')
    //             .then(() => {
    //                 cy.log('Đổi trạng thái thực hiện thành công');
    //                 const hasBadgeClass = $badge.hasClass('badge');
    //                 if (!hasBadgeClass) {
    //                     throw new Error('Đổi trạng thái thực hiện thất bại');
    //                 }
    //             });
    //     });
    //     common.btnID('btnThuHoiDVKT');
    //     cy.get('span.badge').each(($badge) => {
    //         cy.wrap($badge)
    //             .should('have.text', 'Mới')
    //             .then(() => {
    //                 cy.log('Đổi trạng thái thực hiện thành công');
    //                 const hasBadgeClass = $badge.hasClass('badge');
    //                 if (!hasBadgeClass) {
    //                     throw new Error('Đổi trạng thái thực hiện thất bại');
    //                 }
    //             });
    //     });
    //
    //     cy.get('#tblDichVu > tbody > tr:first > td:nth-child(11) > a:nth-child(2) > .fas').click();
    //     common.clickConfirmBtn();
    //     cy.get('#tblDichVu > thead > tr:first > th:nth-child(9) > a:nth-child(2) > .fa').click();
    //     common.clickConfirmBtn();
    //     // common.enterSelectBoxUlLi('cbbDichVu','01010001');
    //     cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').click();
    //     cy.get('span.select2-search').find('input.select2-search__field').type('01010001');
    //     cy.get('#select2-cbbDichVu-results').find('tr').eq(1).click();
    //     cy.get('#txtDichVuChiTiet').type('cho đi khám');
    //     common.btnID('btnAddDichVu');
    //     cy.get('#tblDichVu > tbody > tr:first > td:nth-child(11) > a:first > .fa').click();
    //     common.enterSelectBoxElasticSearch('cboHangdoiUpdate','bướu');
    //     cy.get('.modal-footer > button:first').click();
    //
    // });

});