const common = require('../../common.cy');
const testCases = require('./dieutringoaitru.testcase.json')
const enviroment = require('../../../../enviroment.json');
const {getHtml, getCurrentUrl} = require("../../common.cy");

describe("Ngoại trú", () => {


    beforeEach(() => {
        common.visitAndLoginOther(enviroment.tanky);
        common.goToFunctionFromMenu('dieutringoaitrudraw');

    });

    for (let i = 0; i < testCases.length; i++) {
        let testCase = testCases[0];
        it('Check khi kê VTYT / Thuốc', function () {
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("ngoaitruid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachdieutringoaitrudraw', 'wpid=dieutringoaitrudraw')
                            currentUrl += `&ngoaitruid=${phauThuatId}`;
                            cy.visit(currentUrl);

                            cy.get('li.accordion-header-only a#showThamKham').click();
                            cy.get('#btnToaThuocMau').click();
                            common.enterSelectBoxElasticSearch('cboKhoKD','kc02');
                            cy.get('#cboThuocKD').parent().find('span.selection span.select2-selection').click();
                            cy.get('span.select2-search').find('input.select2-search__field').type('a472');
                            cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
                            cy.get('#txtSlKD').type(testCase.txtSlKD);
                            cy.get('#txtSNKD').type('1');
                            cy.get('#txtSlNKD').type(testCase.txtSlNKD);
                            cy.get(':nth-child(4) > .checkbox-inline > .icheckbox_square-green > .iCheck-helper').click();
                            cy.get(':nth-child(1) > :nth-child(8) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
                            cy.get(':nth-child(2) > :nth-child(7) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
                            common.btnID('btnChon');
                            cy.get('span.select2-search').find('input.select2-search__field').type('a472');
                            cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
                            cy.get('#txtSlKD').type('1');
                            cy.get('#txtSNKD').type('1');
                            cy.get('#txtSlNKD').type('2');
                            // cy.get(':nth-child(4) > .checkbox-inline > .icheckbox_square-green > .iCheck-helper').click();
                            cy.get(':nth-child(1) > :nth-child(8) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
                            cy.get(':nth-child(2) > :nth-child(7) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
                            common.btnID('btnChon');
                            // cy.wait(1000);
                            common.clickConfirmBtn({timeout:4000})

                            cy.get('table#tblThuoc > thead > tr > th:nth-child(11) > .ylenh-a > .fa').click();
                            common.clickConfirmBtn();

                            // xóa từng loại thuốc/ VTYT trong popup
                            // common.enterSelectBoxUlLi('cboThuocKD', '20.13126');
                            cy.get('#cboThuocKD').parent().find('span.selection span.select2-selection').click();
                            // cy.get('span.select2-search').find('input.select2-search__field').type(`a472{enter}`);
                            cy.get('span.select2-results > ul.select2-results__options').find('li').eq(5).click();


                            cy.get('#txtSlKD').type(testCase.txtSlKD);
                            cy.get('#txtSNKD').type('1');
                            cy.get('#txtSlNKD').type(testCase.txtSlNKD);
                            cy.get(':nth-child(1) > :nth-child(8) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
                            cy.get(':nth-child(2) > :nth-child(7) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
                            common.btnID('btnChon');
                            cy.get('body').type('{esc}');
                            // common.enterSelectBoxUlLi('cboThuocKD','20.01100{enter}');

                            cy.get('#cboThuocKD').parent().find('span.selection span.select2-selection').click();
                            // cy.get('span.select2-search').find('input.select2-search__field').type(`a472{enter}`);
                            cy.get('span.select2-results > ul.select2-results__options').find('li').eq(5).click();

                            cy.get('#txtSlKD').type(testCase.txtSlKD);
                            cy.get('#txtSNKD').type('1');
                            cy.get('#txtSlNKD').type(testCase.txtSlNKD);
                            cy.get(':nth-child(1) > :nth-child(8) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
                            cy.get(':nth-child(2) > :nth-child(7) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
                            common.btnID('btnChon');
                            common.clickConfirmBtn();
                            cy.get('table#tblThuoc > tbody > tr:first > td:nth-child(12) > .ylenh-a > .fas').click();
                            common.clickConfirmBtn();
                            common.btnID('btnChuyenTH');

                            //sua thong tin thuoc /VTYT
                            cy.get('#tblThuoc > tbody > tr:nth-child(2) > td:nth-child(11) > .ylenh-a > .fa').click({force:true});
                            cy.get('#txtSlLUpdate').clear().type('1');
                            cy.get('#txtSlNUpdate').clear().type('2');
                            cy.get('#txtSNUpdate').clear().type('2');
                            cy.get('#txtSlUpdate').clear().type('2');
                            cy.get('.modal-footer button:first').click();

                            cy.get('#YLMainContentCdThuoc > #divThuocVTYT > .table-responsive > #tblThuoc > thead > tr > th:nth-child(11) > .ylenh-a > .fa').click();
                            common.clickConfirmBtn();
                        });

                })
            // cy.get('#tblNgoaiTru tbody tr:nth-child(5) td:nth-child(3) a').click();

        });

        it('Check chức năng kết thúc điều trị và thu hồi điều trị', function () {
            cy.get('#txtTimKiem').type(' 23001825');
            common.btnID('btnTimKiem');
                getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                    .then(text => {
                        const re = new RegExp("ngoaitruid=([^&]*)");
                        let phauThuatId = re.exec(text)[1];
                        cy.log(phauThuatId);
                        getCurrentUrl()
                            .then(currentUrl => {
                                currentUrl = currentUrl.replace('wpid=danhsachdieutringoaitrudraw', 'wpid=dieutringoaitrudraw')
                                currentUrl += `&ngoaitruid=${phauThuatId}`;
                                cy.visit(currentUrl);
                });
            });
            cy.get('.active > ul > :nth-child(5) > a').click();
            cy.get('#txtThoiGianRa').clear();
            common.btnID('btnHOANTAT');
            common.clickConfirmBtn();
            cy.get('#txtThoiGianRa').click();
            common.btnID('btnHOANTAT');
            cy.get('#btnTHUHOI').click({timeout: 5000});
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


        it('Check chức năng thêm y lệnh', function () {
            common.enterSelectBoxNormal('cbbLoai', testCase.cbbLoai);
            cy.get('#btnTimKiem').click();
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("ngoaitruid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachdieutringoaitrudraw', 'wpid=dieutringoaitrudraw')
                            currentUrl += `&ngoaitruid=${phauThuatId}`;
                            cy.visit(currentUrl);
                        });
                });
            cy.get('#showDsYLenh').click();
            cy.contains('Thêm y lệnh').click();
            cy.get('.col-md-9 > a > .fa-arrow-alt-circle-left').click();
            cy.contains('Thêm y lệnh').click();
            cy.get('#txtChanDoanTheoTen').clear();
            cy.get('#txtChanDoanTheoTen').type(testCase.txtChanDoanTheoTen);
            cy.get('#txtDienBienBenh').type(testCase.txtDienBienBenh);
            common.enterSelectBoxElasticSearch('cboCheDoChamSoc', 'c2');
            cy.get('#btnPopupHOANTAT').click();
            cy.wait(20000);
            cy.get('.col-md-9 > a > .fa-arrow-alt-circle-left').click();
            cy.get('#showThamKham').click();

        });


        it('Check chức năng hoàn tất y lệnh và sao chép y lệnh', function () {
            common.enterSelectBoxNormal('cbbLoai', '3');
            cy.get('#btnTimKiem').click();
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("ngoaitruid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachdieutringoaitrudraw', 'wpid=dieutringoaitrudraw')
                            currentUrl += `&ngoaitruid=${phauThuatId}`;
                            cy.visit(currentUrl);
                        });
                });
            cy.get('#showDsYLenh').click();
            cy.contains('Thêm y lệnh').click();
            cy.get('#txtChanDoanTheoTen').clear();
            cy.get('#txtChanDoanTheoTen').type('Nhiễm khuẩn');
            cy.get('#txtDienBienBenh').type('Ngoại trú');
            common.enterSelectBoxElasticSearch('cboCheDoChamSoc', 'c2');
            cy.get('.col-xs-12 > [onclick="showChiDinhNhanh();"]').click();
            cy.get('#using_json  ul li:nth-child(3) a.jstree-anchor').click();
            common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom','94');
            cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').eq(0).click({ force: true });
            common.btnID('btnDongYChon');
            cy.get('#btnChapNhan').should('be.visible').click();
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
            common.enterSelectBoxNormal('cbbLoai', '3');
            cy.get('#btnTimKiem').click();
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("ngoaitruid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachdieutringoaitrudraw', 'wpid=dieutringoaitrudraw')
                            currentUrl += `&ngoaitruid=${phauThuatId}`;
                            cy.visit(currentUrl);
                        });
                });
            cy.get('#showDsYLenh').click();
            cy.contains('Thêm y lệnh').click();
            cy.get('#txtChanDoanTheoTen').clear();
            cy.get('#txtChanDoanTheoTen').type('Nhiễm khuẩn');
            cy.get('#txtDienBienBenh').type('Ngoại trú');
            common.enterSelectBoxElasticSearch('cboCheDoChamSoc', 'c2');
            cy.get('.col-xs-12 > [onclick="showChiDinhNhanh();"]').click();
            cy.get('#using_json  ul li:nth-child(3) a.jstree-anchor').click();
            common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', '94');
            cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').eq(0).click({force: true});
            common.btnID('btnDongYChon');
            cy.get('#btnChapNhan').should('be.visible').click();
            cy.get('#cboSoLanSaoYLenh').select('2');
            cy.get('#cboLoaiSao').select('Sao thuốc dự trù và dịch vụ');
            cy.get('#btnPopupHOANTAT').click();
            // cy.wait(20000);
            cy.get('.confirm').should('be.visible').click();
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

        it('Chức năng thu hồi y lệnh', () => {
            common.enterSelectBoxNormal('cbbLoai', '3 tháng');
            cy.get('#btnTimKiem').click();
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("ngoaitruid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachdieutringoaitrudraw', 'wpid=dieutringoaitrudraw')
                            currentUrl += `&ngoaitruid=${phauThuatId}`;
                            cy.visit(currentUrl);
                        });
                });            //thêm 1 y lệnh mới
            cy.get('#showThamKham').click();
            cy.get('#txtDienBienBenh').type('Diễn biến 1');
            common.enterSelectBoxElasticSearch('cboCheDoChamSoc', '1');
            cy.get('#btnPopupHOANTAT').click();
            // thu hồi y lệnh
            cy.get('#btnPopupTHUHOI').click();
            cy.get(".loadingoverlay").should('be.visible').then(() => {
                cy.wait(1000);
                cy.get("#divStatusPopup i").invoke('text').then((text) => {
                    cy.log(text);
                    if (text === 'Mới') {
                        cy.log('Thu hồi thành công');
                    } else {
                        cy.fail('Thu hồi thất bại');
                    }
                });
            });
        });

        it('Chức năng xóa y lệnh', () => {
            common.enterSelectBoxNormal('cbbLoai', '3 tháng');
            cy.get('#btnTimKiem').click();
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("ngoaitruid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachdieutringoaitrudraw', 'wpid=dieutringoaitrudraw')
                            currentUrl += `&ngoaitruid=${phauThuatId}`;
                            cy.visit(currentUrl);
                        });
                });            // kiểm tra có bao nhiêu y lệnh
            let soYlenh;
            cy.get('#showDsYLenh').click();
            cy.get('#divNgoaiTruContent tbody').find('tr').its('length').then((length) => {
                soYlenh = length;
            });
            //thêm 1 y lệnh mới
            cy.get('#showThamKham').click();
            //kiểm tra DV/Thuốc/VT
            let dv;
            cy.get('#tblThuoc').then(($el) => {
                if ($el.find('tbody').length > 0) {
                    cy.log('Có DV/Thuốc/VT');
                    dv = true;
                } else {
                    cy.log('Không có DV/Thuốc/VT');
                    dv = false;
                }
            });
            // xóa y lệnh
            cy.wrap(null).then(() => {
                if (dv) {
                    cy.log('Có DV/Thuốc/VT không thể xóa');
                    cy.get('#btnPopupXOA').click();
                } else {
                    cy.get('#btnPopupXOA').click();
                    cy.wait(2000);
                    cy.get('#divNgoaiTruContent tbody').find('tr').its('length').then((length) => {
                        if (soYlenh == length) {
                            cy.log('Xóa y lệnh thành công');
                        } else {
                            cy.fail('Xóa y lệnh không thành công');
                        }
                    });
                }
            });
        });

        it('Chỉ định các dịch vụ bằng gói nhóm/ gói mẫu / chỉnh sửa DV', () => {
            common.enterSelectBoxNormal('cbbLoai', '3 tháng');
            cy.get('#btnTimKiem').click();
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("ngoaitruid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachdieutringoaitrudraw', 'wpid=dieutringoaitrudraw')
                            currentUrl += `&ngoaitruid=${phauThuatId}`;
                            cy.visit(currentUrl);
                        });
                });
            //thêm 1 y lệnh mới
            cy.get('#showThamKham').click();
            // cy.get('#txtDienBienBenh').type('Diễn biến 1');
            // common.enterSelectBoxElasticSearch('cboCheDoChamSoc','1');

            // Thêm dịch vụ bằng nhiều gói mẫu
            cy.get('#btnChiDinhMau').click();
            cy.get('#txtTimKiemDvMau').type('Phaco');
            cy.get('#btnTimKiem').click();
            cy.get('#divContentDMChiDinh tbody tr:first td:nth-child(2) a').click();
            cy.get('#trDichVuMauPopupEdit0 > :nth-child(3) > .icheckbox_square-green > .iCheck-helper').click();
            cy.get('#btnChapNhan').click();
            cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(11) .badge').eq(0).invoke('text').then((value) => {
                if (value === 'Chờ thực hiện') {
                    cy.log('Chỉ định gói mẫu thành công');
                } else {
                    cy.log('Chỉ định gói mẫu không thành công');
                }

            });

            // Thêm chỉ định dịch vụ bằng nhiều nhóm
            cy.get('.col-xs-12 > [onclick="showChiDinhNhanh();"]').click();
            cy.get('#using_json  ul li:nth-child(3) a.jstree-anchor').click();
            common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', '94');
            cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').eq(0).click({force: true});
            common.btnID('btnDongYChon');
            cy.get('#btnChapNhan').should('be.visible').click();
            cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(11) .badge').eq(0).invoke('text').then((value) => {
                if (value === 'Mới') {
                    cy.log('Chỉ định nhiều nhóm thành công');
                } else {
                    cy.log('Chỉ định nhiều nhóm không thành công');
                }

            });
        });


    }


});

