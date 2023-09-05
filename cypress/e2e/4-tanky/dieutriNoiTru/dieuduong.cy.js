const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');
const testCases = require('./dieuduong.testcase.json');
const {getHtml, getCurrentUrl} = require("../../common.cy");

describe("Điều trị nội trú", () => {

    beforeEach(() => {
        common.visitAndLoginOther(enviroment.natk);
        common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');


    });

    for (let i = 0; i < testCases.length; i++) {
        let testCase = testCases[0];

        it('Check chức năng kê buồng giường', function () {

            getHtml('#divWebPartContent tbody tr:nth-child(2) td:nth-child(2) a')
                .then(text => {
                    const re = new RegExp("noitruid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachdieutrinoitrudraw', 'wpid=dieuduongdraw')
                            currentUrl += `&noitruid=${phauThuatId}`;
                            cy.visit(currentUrl);

                            cy.contains('Buồng giường').click();
                            cy.get('#thongTinBuongGiuongBtns > a:first > span').click();
                            cy.get('#cboGiuongPG').parent().find('span.selection span.select2-selection').click();
                            cy.get(`span.select2-results > ul.select2-results__options `).find('li').eq(1).click();
                            cy.wait(1000);
                            cy.document().then(doc => {
                                const alert = doc.querySelectorAll('.sweet-alert');
                                if (alert.length > 0) {
                                    common.clickConfirmBtn();

                                } else {
                                    cy.get('#txtSoNgayNamPBG').type('5');
                                    cy.contains('Chấp nhận').click();
                                    cy.wait(1000);
                                    cy.document().then(doc => {
                                        const alert = doc.querySelectorAll('.sweet-alert');
                                        if (alert.length > 0) {
                                            cy.get('.sweet-alert p').invoke('text').then(error => {
                                                cy.log(error);
                                            });
                                        } else {
                                            // kết thúc buồng giường
                                            cy.get('#thongTinBuongGiuongBtns > a:nth-child(3) > span').click();
                                            console.log('kết thúc buồng giường thành công');
                                        }
                                    });
                                }
                            });
                        });
                });

            // cy.get('#tblNoiTru > tbody > tr:nth-child(2) > td:nth-child(2) > a').click();
        });

        it('Check chức năng thông tin chăm sóc', function () {

            getHtml('#divWebPartContent tbody tr:nth-child(2) td:nth-child(2) a')
                .then(text => {
                    const re = new RegExp("noitruid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachdieutrinoitrudraw', 'wpid=dieuduongdraw')
                            currentUrl += `&noitruid=${phauThuatId}`;
                            cy.visit(currentUrl);

                            cy.contains('Lập kế hoạch CS').click();
                            cy.get('#txtDHSTMach').clear();
                            cy.get('#txtDHSTHuyetAp').clear();
                            cy.get('#txtDHSTNhietDo').clear();
                            cy.get('#txtDHSTNhipTho').clear();
                            cy.get('#txtDienBienCS').clear().type(testCase.txtDienBienCS);
                            // common.btnID('btnLuu');
                            cy.get('#btnLuu').click({force: true});
                            // cy.get('a[onclick="onShowChamSoc(this);"]').click();
                            // cy.get('#divDanhSachChamSocContent tbody tr:nth-child(2) > td:nth-child(4) > a').click();
                            common.btnID('btnHoanTat');

                            cy.document().then(doc => {
                                const alert = doc.querySelectorAll('.sweet-alert');
                                if (alert.length > 0) {
                                    cy.get('.sweet-alert p').invoke('text').then(error => {
                                        cy.log(error);
                                    });
                                } else {
                                    common.btnID('btnSaoChep');
                                    cy.get('#txtDHSTMach').clear().type(testCase.txtDHSTMach);
                                    cy.get('#txtDHSTHuyetAp').clear().type(testCase.txtDHSTHuyetAp);
                                    cy.get('#txtDHSTNhietDo').clear().type(testCase.txtDHSTNhietDo);
                                    cy.get('#txtDHSTNhipTho').clear().type(testCase.txtDHSTNhipTho);
                                    cy.get('#txtDienBienCS').clear().type(testCase.txtDienBienCS);
                                    common.btnID('btnLuu');
                                    common.btnID('btnHoanTat');
                                    common.btnID('btnThuHoi');
                                    cy.get('#txtDHSTMach').clear().type(testCase.txtDHSTMach);
                                    cy.get('#txtDHSTHuyetAp').clear().type(testCase.txtDHSTHuyetAp);
                                    cy.get('#txtDHSTNhietDo').clear().type(testCase.txtDHSTNhietDo);
                                    cy.get('#txtDHSTNhipTho').clear().type(testCase.txtDHSTNhipTho);
                                    cy.get('#txtDienBienCS').clear().type(testCase.txtDienBienCS);
                                    common.btnID('btnHoanTat');
                                    cy.get('a[onclick="onShowChamSoc(this);"]').click();

                                }
                            });
                        });
                });

            // cy.get('#tblNoiTru > tbody > tr:nth-child(9) > td:nth-child(2) > a > .far').click();

        });


        it('Check chức năng nhập thuốc/VT', function () {

            getHtml('#divWebPartContent tbody tr:nth-child(2) td:nth-child(2) a')
                .then(text => {
                    const re = new RegExp("noitruid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachdieutrinoitrudraw', 'wpid=dieuduongdraw')
                            currentUrl += `&noitruid=${phauThuatId}`;
                            cy.visit(currentUrl);

                            cy.contains(' Nhập thuốc, VTYT').click();
                            common.btnID('DD_KeNhapThuocSuDung');
                            cy.get('#cbbGoiVTYT').parent().find('span.selection span.select2-selection').click();
                            cy.get(`#select2-cbbGoiVTYT-results`).find('tr').eq(3).click({force: true});
                            common.clickConfirmBtn();
                            cy.get(':nth-child(2) > .icheckbox_square-green > .iCheck-helper').click();
                            cy.get('#txtHang').parent().find('span.selection span.select2-selection').click();
                            cy.get(`#select2-txtHang-results`).find('tr').eq(3).click({force: true});
                            cy.get('#txtSoLuong').type('1');
                            common.btnID('btnThemVatTuThuong');
                            cy.get('body').type('{esc}');
                            cy.get('#tabVTYT > :nth-child(1) > .ibox-content > :nth-child(3) > .form-group > :nth-child(1) > .col-sm-12 > button:nth-child(1)').click();
                            cy.get('.form-group > .table-responsive > table > thead > tr:first > th > button:nth-child(2)').click();
                            cy.get('#tabVTYT > :nth-child(1) > .ibox-content > :nth-child(3) > .form-group > :nth-child(1) > .col-sm-12 > button:nth-child(2)').click();
                            cy.get('#divListFormThongTinYLenh:first thead tr th:first button:nth-child(2)').click();
                            cy.get('#tabVTYT > :nth-child(1) > .ibox-content > :nth-child(3) > .form-group > :nth-child(1) > .col-sm-12 > button:nth-child(1)').click();
                        });
                });

            // cy.get('#tblNoiTru > tbody > tr:nth-child(2) > td:nth-child(2) > a > .far').click();
        });


        it('Check chức năng kết thúc điều trị', function () {
            // cy.get('#txtTimKiem').clear().type(testCase.txtTimKiem);
            common.btnID('btnTimKiem');

            getHtml('#divWebPartContent tbody tr:nth-child(2) td:nth-child(2) a')
                .then(text => {
                    const re = new RegExp("noitruid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachdieutrinoitrudraw', 'wpid=dieuduongdraw')
                            currentUrl += `&noitruid=${phauThuatId}`;
                            cy.visit(currentUrl);

                            cy.get('#divMenuContent h5:nth-child(3) b').invoke('text').then((textMaBn) => {
                                const result = textMaBn.split(' | ')[1];
                                cy.log(result);

                                if (result == "Không BH") {
                                    cy.get(':nth-child(3) > .accordion-btn-wrap').click();
                                    cy.get('.active > ul > :nth-child(4) > a').click();
                                    cy.get('#txtThoiGianRa').click();
                                    common.enterSelectBoxElasticSearch('cboBacsi', 's');
                                    common.btnID('btnHOANTAT');
                                    cy.wait(1000);
                                    cy.document().then(doc => {
                                        const alert = doc.querySelectorAll('.sweet-alert');
                                        if (alert.length > 0) {
                                            cy.get('.sweet-alert p').invoke('text').then(error => {
                                                cy.log(error)
                                            });
                                        } else {
                                            common.clickConfirmBtn();
                                        }

                                    });
                                } else {
                                    cy.get(':nth-child(3) > .accordion-btn-wrap').click();
                                    cy.get('.active > ul > :nth-child(3) > a').click();
                                    cy.get('#txtThoiGianRa').clear();
                                    common.btnID('btnHOANTAT');
                                    common.clickConfirmBtn();
                                    cy.get('#txtThoiGianRa').click();
                                    common.enterSelectBoxElasticSearch('cboBacsi', 's');
                                    common.enterSelectBoxElasticSearch('cboLydoChove', '01');
                                    common.btnID('btnHOANTAT');
                                    cy.log(1000);
                                    cy.document().then(doc => {
                                        const alert = doc.querySelectorAll('.sweet-alert');
                                        const popup = doc.querySelectorAll('div#divModalContentDVKTnew');
                                        if (alert.length > 1) {
                                            cy.get('.sweet-alert p').invoke('text').then(error => {
                                                cy.log(error)
                                            });
                                        }else if(popup.length > 0){
                                            cy.log('Bệnh nhân còn các dịch vụ chưa hoàn tất nên không thể thu hồi');
                                        } else {
                                            cy.log('Kết thúc điều trị thành công');
                                        }
                                    });
                                }

                            });
                        });
                });

            // cy.get('#tblNoiTru > tbody > tr:nth-child(2) > td:nth-child(5) > a').click();

        });


        it('Check chức năng thu hồi điều trị', function () {
            // cy.get('#txtTimKiem').clear().type(testCase.txtTimKiem);
            common.btnID('btnTimKiem');

            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(2) a')
                .then(text => {
                    const re = new RegExp("noitruid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachdieutrinoitrudraw', 'wpid=dieuduongdraw')
                            currentUrl += `&noitruid=${phauThuatId}`;
                            cy.visit(currentUrl);

                            cy.get('#divMenuContent h5:nth-child(3) b').invoke('text').then((textMaBn) => {
                                const result = textMaBn.split(' | ')[1];
                                cy.log(result);

                                if (result.trim() === "Thu phí") {
                                    cy.get(':nth-child(3) > .accordion-btn-wrap').click();
                                    cy.get('.active > ul > :nth-child(3) > a').click();
                                    cy.get('#txtThoiGianRa').click();
                                    common.enterSelectBoxElasticSearch('cboBacsi', 's');
                                    common.enterSelectBoxElasticSearch('cboLydoChove', '01');
                                    common.btnID('btnHOANTAT');
                                    cy.wait(1000);
                                    cy.document().then(doc => {
                                        const alert = doc.querySelectorAll('.sweet-alert');
                                        if (alert.length > 0) {
                                            cy.get('.sweet-alert p[style="display: block;"]').invoke('text').then(error => {
                                                if(error.trim() === 'Chưa kết thúc buồng giường, không thể hoàn tất, không thể xử trí'){
                                                    common.clickConfirmBtn();
                                                    cy.get('.selected > .accordion-btn-wrap').click();
                                                    common.btnID('btnBG');
                                                    cy.get('a[onclick="fnKetThucGiuong()"]').click();
                                                    cy.get(':nth-child(3) > .accordion-btn-wrap').click();
                                                    cy.get('.active > ul > :nth-child(3) > a').click();
                                                    common.btnID('btnHOANTAT');

                                                    cy.wait(1000);
                                                    cy.document().then(doc => {
                                                        const alert = doc.querySelectorAll('.sweet-alert');
                                                        if (alert.length > 0) {
                                                            cy.get('.sweet-alert p[style : display: block;]').invoke('text').then(error => {
                                                                cy.log(error)
                                                            });
                                                        } else {
                                                            // chức năng thu hồi
                                                            common.btnID('btnTHUHOI');
                                                            cy.wait(500);

                                                            cy.document().then(doc => {
                                                                const alert = doc.querySelectorAll('.sweet-alert');
                                                                if (alert.length > 0) {
                                                                    cy.get('.sweet-alert p').invoke('text').then(text=>{
                                                                        cy.log(text);
                                                                    })
                                                                } else {
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

                                                                }
                                                            });
                                                        }
                                                    });
                                                }else{
                                                    cy.log(error);
                                                }
                                            });
                                        } else {
                                            common.clickConfirmBtn();
                                        }

                                    });
                                }
                                else {
                                    cy.get(':nth-child(3) > .accordion-btn-wrap').click();
                                    cy.get('.active > ul > :nth-child(3) > a').click();
                                    cy.get('#txtThoiGianRa').clear();
                                    common.btnID('btnHOANTAT');
                                    common.clickConfirmBtn();
                                    cy.get('#txtThoiGianRa').click();
                                    common.enterSelectBoxElasticSearch('cboBacsi', 's');
                                    common.enterSelectBoxElasticSearch('cboLydoChove', '01');
                                    common.btnID('btnHOANTAT');
                                    cy.wait(1500);
                                    cy.document().then(doc => {
                                        const alert = doc.querySelectorAll('.sweet-alert');
                                        const popup = doc.querySelectorAll('div#divModalContentDVKTnew');
                                        if (alert.length > 0) {
                                            cy.get('.sweet-alert p[style="display: block;"]').invoke('text').then(error => {
                                                if(error.trim() === 'Chưa kết thúc buồng giường, không thể hoàn tất, không thể xử trí'){
                                                    common.clickConfirmBtn();
                                                    cy.get('.selected > .accordion-btn-wrap').click();
                                                    common.btnID('btnBG');
                                                    cy.get('a[onclick="fnKetThucGiuong()"]').click();
                                                    cy.get(':nth-child(3) > .accordion-btn-wrap').click();
                                                    cy.get('.active > ul > :nth-child(3) > a').click();
                                                    common.btnID('btnHOANTAT');
                                                }
                                                else {
                                                    // chức năng thu hồi
                                                    common.btnID('btnTHUHOI');
                                                    cy.wait(500);

                                                    cy.document().then(doc => {
                                                        const alert = doc.querySelectorAll('.sweet-alert');
                                                        if (alert.length > 2) {
                                                            cy.get('.sweet-alert p').invoke('text').then(text=>{
                                                                cy.log(text);
                                                            })
                                                        } else {
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

                                                        }
                                                    });
                                                }

                                            });
                                        } else if (popup.length > 0) {
                                            cy.log('Bệnh nhân còn các dịch vụ chưa hoàn tất nên không thể thu hồi');
                                        } else {
                                            // chức năng thu hồi
                                            common.btnID('btnTHUHOI');
                                            cy.wait(500);

                                            cy.document().then(doc => {
                                                const alert = doc.querySelectorAll('.sweet-alert');
                                                if (alert.length > 2) {
                                                    cy.get('.sweet-alert p').invoke('text').then(text=>{
                                                        cy.log(text);
                                                    })
                                                } else {
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

                                                }
                                            });
                                        }
                                    });
                                }


                            });
                        });
                });

            // cy.get('#tblNoiTru > tbody > tr:nth-child(2) > td:nth-child(5) > a').click();

        });

    }

});
