const common = require('../common.cy');
const insuaranceNumber = require('../rd');

describe("Ngoại trú", () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('danhsachdieutringoaitrudraw');

    });
    it ('Check chức năng thêm y lệnh', function () {
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click();
        cy.get('#tblNgoaiTru tbody tr:nth-child(4) td:nth-child(3) a').click();
        cy.get('#showDsYLenh').click();
        cy.contains('Thêm y lệnh').click();
        cy.get('.col-md-9 > a > .fa-arrow-alt-circle-left').click();
        cy.contains('Thêm y lệnh').click();
        cy.get('#txtChanDoanTheoTen').clear();
        cy.get('#txtChanDoanTheoTen').type('Nhiễm khuẩn');
        cy.get('#txtDienBienBenh').type('Ngoại trú');
        common.enterSelectBoxElas('cboCheDoChamSoc','c2');
        cy.get('#btnPopupHOANTAT').click();
        cy.wait(20000);
        cy.get('.col-md-9 > a > .fa-arrow-alt-circle-left').click();
        cy.get('#showThamKham').click();



    });






    it('Check chức năng hoàn tất y lệnh', function () {
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click();
        cy.get('#tblNgoaiTru tbody tr:nth-child(4) td:nth-child(3) a').click();
        cy.get('#showDsYLenh').click();
        cy.contains('Thêm y lệnh').click();
        cy.get('#txtChanDoanTheoTen').clear();
        cy.get('#txtChanDoanTheoTen').type('Nhiễm khuẩn');
        cy.get('#txtDienBienBenh').type('Ngoại trú');
        common.enterSelectBoxElas('cboCheDoChamSoc','c2');
        cy.get('#btnCDHA').click();
        cy.viewport(1500,800);
        cy.wait(1000);
        // cy.get('#cbbHangDoiPopupCDHA ul li:nth-cjild(2)').click();
        common.enterSelectBoxElas('cbbHangDoiPopupCDHA','ls14');
        cy.get('div#divContentCDHA_ChiDinh div.icheckbox_square-green ins.iCheck-helper').eq(0).click({ force: true })
        cy.get('#btnChuyenTh_ThamKham_CDHA').click();
        cy.get('#btnPopupHOANTAT').click();
        cy.get('#divStatusPopup i.badge')
            .should('have.text', 'Hoàn tất')
            .then(($badge) => {
                const hasBadgeClass = $badge.hasClass('badge');
                if (hasBadgeClass) {
                    cy.log('Đổi trạng thái thực hiện thành công');
                } else {
                    cy.fail('Đổi trạng thái thực hiện thất bại');
                }
            });
        cy.get('#divStatusPopup i.badge')
            .should('have.text', 'Hoàn tất')
            .then(($badge) => {
                const hasBadgeClass = $badge.hasClass('badge');
                if (hasBadgeClass) {
                    cy.log('Đổi trạng thái thực hiện thành công');
                } else {
                    cy.fail('Đổi trạng thái thực hiện thất bại');
                }
            });
        cy.get(':nth-child(11) > .badge')
            .should('have.text', 'Chờ thực hiện')
            .then(($badge) => {
                const hasBadgeClass = $badge.hasClass('badge');
                if (hasBadgeClass) {
                    cy.log('Đổi trạng thái thực hiện thành công');
                } else {
                    cy.fail('Đổi trạng thái thực hiện thất bại');
                }
            });


    });





    it('Check chức năng sao chép y lệnh', function () {
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click();
        cy.get('#tblNgoaiTru tbody tr:nth-child(4) td:nth-child(3) a').click();
        cy.get('#showDsYLenh').click();
        cy.contains('Thêm y lệnh').click();
        cy.get('#txtChanDoanTheoTen').clear();
        cy.get('#txtChanDoanTheoTen').type('Nhiễm khuẩn');
        cy.get('#txtDienBienBenh').type('Ngoại trú');
        common.enterSelectBoxElas('cboCheDoChamSoc','c2');
        cy.get('#btnCDHA').click();
        cy.viewport(1500,800);
        cy.wait(1000);
        common.enterSelectBoxElas('cbbHangDoiPopupCDHA','ls14');
        cy.get('div#divContentCDHA_ChiDinh div.icheckbox_square-green ins.iCheck-helper').eq(0).click({ force: true })
        cy.get('#btnChuyenTh_ThamKham_CDHA').click();
        cy.get('#btnToaThuocMau').click();
        cy.viewport(1500,800);
        common.enterSelectBoxUlLi('cboThuocKD','1');
        cy.get('#txtSlKD').type('1');
        cy.get('#txtSlNKD').type('1');
        cy.get('#btnChon').click();
        cy.get('#btnChuyenTH').click();
        cy.get('#btnPopupHOANTAT').click();
        cy.wait(20000);
        cy.get('#btnSaoChep').click();
        cy.get('#divStatusPopup i.badge')
            .should('have.text', 'Mới')
            .then(($badge) => {
                const hasBadgeClass = $badge.hasClass('badge');
                if (hasBadgeClass) {
                    cy.log('Đổi trạng thái thực hiện thành công');
                } else {
                    cy.fail('Đổi trạng thái thực hiện thất bại');
                }
            });
        cy.get(':nth-child(11) > .badge')
            .should('have.text', 'Mới')
            .then(($badge) => {
                const hasBadgeClass = $badge.hasClass('badge');
                if (hasBadgeClass) {
                    cy.log('Đổi trạng thái thực hiện thành công');
                } else {
                    cy.fail('Đổi trạng thái thực hiện thất bại');
                }
            });


    });





    it('Check chức năng sao chép y lệnh nhiều ngày', function () {
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click();
        cy.get('#tblNgoaiTru tbody tr:nth-child(4) td:nth-child(3) a').click();
        cy.get('#showDsYLenh').click();
        cy.contains('Thêm y lệnh').click();
        cy.get('#txtChanDoanTheoTen').clear();
        cy.get('#txtChanDoanTheoTen').type('Nhiễm khuẩn');
        cy.get('#txtDienBienBenh').type('Ngoại trú');
        common.enterSelectBoxElas('cboCheDoChamSoc','c2');
        cy.get('#btnCDHA').click();
        cy.viewport(1500,800);
        cy.wait(1000);
        common.enterSelectBoxElas('cbbHangDoiPopupCDHA','ls14');
        cy.get('div#divContentCDHA_ChiDinh div.icheckbox_square-green ins.iCheck-helper').eq(0).click({ force: true })
        cy.get('#btnChuyenTh_ThamKham_CDHA').click();
        cy.get('#btnToaThuocMau').click();
        cy.viewport(1500,800);
        common.enterSelectBoxUlLi('cboThuocKD','1');
        cy.get('#txtSlKD').type('1');
        cy.get('#txtSlNKD').type('1');
        cy.get('#btnChon').click();
        cy.get('#btnChuyenTH').click();
        cy.get('#cboSoLanSaoYLenh').select('2');
        cy.get('#cboLoaiSao').select('Sao thuốc dự trù và dịch vụ');
        cy.get('#btnPopupHOANTAT').click();
        cy.wait(20000);
        cy.get('.confirm').click();
        cy.get('#divStatusPopup i.badge')
                .should('have.text', 'Hoàn tất')
                .then(($badge) => {
                    const hasBadgeClass = $badge.hasClass('badge');
                    if (hasBadgeClass) {
                        cy.log('Đổi trạng thái thực hiện thành công');
                    } else {
                        cy.fail('Đổi trạng thái thực hiện thất bại');
                    }
                });
            cy.get(':nth-child(11) > .badge')
                .should('have.text', 'Chờ thực hiện')
                .then(($badge) => {
                    const hasBadgeClass = $badge.hasClass('badge');
                    if (hasBadgeClass) {
                        cy.log('Đổi trạng thái thực hiện thành công');
                    } else {
                        cy.fail('Đổi trạng thái thực hiện thất bại');
                    }
                });
        cy.get('.col-md-9 > a > .fa-arrow-alt-circle-left').click();

    });
});