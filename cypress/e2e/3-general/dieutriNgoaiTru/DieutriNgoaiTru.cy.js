const common = require('../../common.cy');
const testCases = require('./dieutringoaitru.testcase.json')
const enviroment = require('../../../../enviroment.json');

describe("Ngoại trú", () => {


    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('dieutringoaitrudraw');

    });

    for (let i = 0; i < testCases.length; i++) {
        let testCase = testCases[0];
        it('Check khi kê VTYT / Thuốc', function () {
            cy.get('#tblNgoaiTru tbody tr:nth-child(5) td:nth-child(3) a').click();
            cy.get('li.accordion-header-only a#showThamKham').click();
            cy.get('#btnToaThuocMau').click();

            // Xóa toàn bộ thuốc/ VTYT trong popup
            // common.enterSelectBoxUlLi('cboThuocKD', '20');
            cy.get('#cboThuocKD').parent().find('span.selection span.select2-selection').click();
            cy.get('span.select2-search').find('input.select2-search__field').type('20');
            cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(3)').click();

            cy.get('#txtSlKD').type(testCase.txtSlKD);
            cy.get('#txtSlNKD').type(testCase.txtSlNKD);
            cy.get(':nth-child(4) > .checkbox-inline > .icheckbox_square-green > .iCheck-helper').click();
            cy.get(':nth-child(1) > :nth-child(8) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
            cy.get(':nth-child(2) > :nth-child(7) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
            common.btnID('btnChon');
            // cy.get('body').type('{esc}');
            // common.enterSelectBoxUlLi('cboThuocKD','20.01100{enter}');

            // cy.get('#cboThuocKD').parent().find('span.selection span.select2-selection').click();
            cy.get('span.select2-search').find('input.select2-search__field').type('20');
            cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(3)').click();

            cy.get('#txtSlKD').type('1');
            cy.get('#txtSlNKD').type('2');
            // cy.get(':nth-child(4) > .checkbox-inline > .icheckbox_square-green > .iCheck-helper').click();
            cy.get(':nth-child(1) > :nth-child(8) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
            cy.get(':nth-child(2) > :nth-child(7) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
            common.btnID('btnChon');
            cy.wait(1000);
            common.clickConfirmBtn()

            cy.get('div#divThuocVTYT div.table-responsive > table#tblThuoc > thead > tr > th:nth-child(10) > .ylenh-a > .fa').click();
            common.clickConfirmBtn();

            // xóa từng loại thuốc/ VTYT trong popup
            // common.enterSelectBoxUlLi('cboThuocKD', '20.13126');
            cy.get('#cboThuocKD').parent().find('span.selection span.select2-selection').click();
            cy.get('span.select2-search').find('input.select2-search__field').type('20');
            cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(3)').click();


            cy.get('#txtSlKD').type(testCase.txtSlKD);
            cy.get('#txtSlNKD').type(testCase.txtSlNKD);
            cy.get(':nth-child(1) > :nth-child(8) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
            cy.get(':nth-child(2) > :nth-child(7) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
            common.btnID('btnChon');
            cy.get('body').type('{esc}');
            // common.enterSelectBoxUlLi('cboThuocKD','20.01100{enter}');

            cy.get('#cboThuocKD').parent().find('span.selection span.select2-selection').click();
            cy.get('span.select2-search').find('input.select2-search__field').type('20');
            cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(3)').click();

            cy.get('#txtSlKD').type(testCase.txtSlKD);
            cy.get('#txtSlNKD').type(testCase.txtSlNKD);
            cy.get(':nth-child(1) > :nth-child(8) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
            cy.get(':nth-child(2) > :nth-child(7) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
            common.btnID('btnChon');
            common.clickConfirmBtn();
            cy.get('div#divThuocVTYT div.table-responsive > table#tblThuoc > tbody > tr:first > td:nth-child(11) > .ylenh-a > .fas').click();
            common.clickConfirmBtn();
            common.btnID('btnChuyenTH');

            //sua thong tin thuoc /VTYT
            cy.get('#tblThuoc > tbody > tr:nth-child(2) > td:nth-child(11) > .ylenh-a > .fa').click();
            cy.get('#txtSlLUpdate').clear().type('1');
            cy.get('#txtSlNUpdate').clear().type('2');
            cy.get('#txtSNUpdate').clear().type('2');
            cy.get('#txtSlUpdate').clear().type('2');
            cy.get('.modal-footer button:first').click();

            cy.get('#YLMainContentCdThuoc > #divThuocVTYT > .table-responsive > #tblThuoc > thead > tr > th:nth-child(11) > .ylenh-a > .fa').click();
            common.clickConfirmBtn();
        });

        it('Check chức năng kết thúc điều trị và thu hồi điều trị', function () {
            cy.get('#txtTimKiem').type(testCase.txtTimKiem);
            common.btnID('btnTimKiem');
            cy.get('#tblNgoaiTru tbody tr:nth-child(1) td:nth-child(3) a').click();
            cy.get('.active > ul > :nth-child(5) > a').click();
            cy.get('#txtThoiGianRa').clear();
            common.btnID('btnHOANTAT');
            common.clickConfirmBtn();
            cy.get('#txtThoiGianRa').click();
            // common.enterSelectBoxElasticSearch('cboBacsi','s');
            common.btnID('btnHOANTAT');

            // cy.wait(2000);
            // cy.get('a#aTrangThai i.badge')
            //     .should('have.text', 'Hoàn tất')
            //     .then(($badge) => {
            //         const hasBadgeClass = $badge.hasClass('badge');
            //         if (hasBadgeClass) {
            //             cy.log('Đổi trạng thái về Hoàn tất thành công');
            //         } else {
            //             cy.fail('Đổi trạng thái về Hoàn tất thất bại');
            //         }
            //     });
            cy.wait(5000);

            common.btnID('btnTHUHOI');
            cy.get('a#aTrangThai i.badge')
                .should('have.text', 'Đang thực hiện')
                .then(($badge) => {
                    const hasBadgeClass = $badge.hasClass('badge');
                    if (hasBadgeClass) {
                        cy.log('Đổi trạng thái về Đang thực hiện thành công');
                    } else {
                        cy.fail('Đổi trạng thái về Đang thực hiện thất bại');
                    }
                });




        });


        it ('Check chức năng thêm y lệnh', function () {
            common.enterSelectBoxNormal('cbbLoai',testCase.cbbLoai);
            cy.get('#btnTimKiem').click();
            cy.get('#tblNgoaiTru tbody tr:nth-child(4) td:nth-child(3) a').click();
            cy.get('#showDsYLenh').click();
            cy.contains('Thêm y lệnh').click();
            cy.get('.col-md-9 > a > .fa-arrow-alt-circle-left').click();
            cy.contains('Thêm y lệnh').click();
            cy.get('#txtChanDoanTheoTen').clear();
            cy.get('#txtChanDoanTheoTen').type(testCase.txtChanDoanTheoTen);
            cy.get('#txtDienBienBenh').type(testCase.txtDienBienBenh);
            common.enterSelectBoxElasticSearch('cboCheDoChamSoc','c2');
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
            common.enterSelectBoxElasticSearch('cboCheDoChamSoc','c2');
            cy.get('#btnCDHA').click();
            cy.viewport(1500,800);
            cy.wait(1000);
            // cy.get('#cbbHangDoiPopupCDHA ul li:nth-cjild(2)').click();
            common.enterSelectBoxElasticSearch('cbbHangDoiPopupCDHA','ls14');
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
            // cy.wait(15000);
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
            cy.get('#tblNgoaiTru tbody tr:nth-child(2) td:nth-child(3) a').click();
            cy.get('#showDsYLenh').click();
            cy.contains('Thêm y lệnh').click();
            cy.get('#txtChanDoanTheoTen').clear();
            cy.get('#txtChanDoanTheoTen').type('Nhiễm khuẩn');
            cy.get('#txtDienBienBenh').type('Ngoại trú');
            common.enterSelectBoxElasticSearch('cboCheDoChamSoc','c2');
            cy.get('#btnCDHA').click();
            cy.wait(1000);
            common.enterSelectBoxElasticSearch('cbbHangDoiPopupCDHA','ls14');
            cy.get('div#divContentCDHA_ChiDinh div.icheckbox_square-green ins.iCheck-helper').eq(0).click({ force: true })
            cy.get('#btnChuyenTh_ThamKham_CDHA').click();
            cy.get('#btnToaThuocMau').click();
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

    }


});

