const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json')
const {getHtml, getAttribute, getCurrentUrl} = require("../../common.cy");
const testCases = require('./phauthuat.testcase.json');

describe("Phau Thuat", async () => {

    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('danhsachphauthuatdraw');
    });


    for (let i = 0; i < testCases.length; i++) {
        let testcase = testCases[i];
        it('Check tác vụ "Vào thực hiện"', function () {
            common.enterSelectBoxElasticSearch('cboCfHangDoi', testcase.cboCfHangDoi);
            cy.get('.btn-danger').click();
            common.enterSelectBoxNormal('cbbLoai', testcase.cbbLoai);
            common.enterSelectBoxNormal('drpSelectTrangThai', testcase.drpSelectTrangThai);
            cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
            cy.get('#btnTimKiem').click();
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("checkBanGiaoPT\\('(.*)'\\)");
                    let phauThuatId = re.exec(text)[1];
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
                            currentUrl += `&phauthuatid=${phauThuatId}`;
                            cy.visit(currentUrl);
                            cy.wait(1000);
                            cy.document().then(doc => {
                                const alert = doc.querySelectorAll('.sweet-alert');
                                if (alert.length > 0) {
                                    cy.get('.sweet-alert p').invoke('text').then(error => {
                                        cy.fail(error)
                                    })
                                    // throw new Error('Data lỗi')
                                } else {
                                    cy.get('#btnVAOTH').click();
                                    cy.get('#aTrangThai i')
                                        .should('have.text', 'Đang thực hiện')
                                        .then(($i) => {
                                            const text = $i.text().trim();
                                            if (text === 'Đang thực hiện') {
                                                cy.log('Đổi trạng thái thành công');
                                            } else {
                                                cy.fail('Đổi trạng thái thất bại');
                                            }
                                        });
                                }
                            });

                        });
                })
        });


        it('Check tác vụ "kết thúc mổ"', function () {
            common.enterSelectBoxElasticSearch('cboCfHangDoi', testcase.cboCfHangDoi);
            cy.get('.btn-danger').click();
            common.enterSelectBoxNormal('cbbLoai', testcase.cbbLoai);
            common.enterSelectBoxNormal('drpSelectTrangThai', testcase.drpSelectTrangThai);
            cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
            cy.get('#btnTimKiem').click();
            getHtml('#divWebPartContent tbody tr:nth-child(7) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("checkBanGiaoPT\\('(.*)'\\)");
                    let phauThuatId = re.exec(text)[1];
                    getCurrentUrl().then(currentUrl => {
                        currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
                        currentUrl += `&phauthuatid=${phauThuatId}`;
                        cy.visit(currentUrl);

                        cy.wait(1000);
                        cy.document().then(doc => {
                            const alert = doc.querySelectorAll('.sweet-alert');
                            if (alert.length > 0) {
                                cy.get('.sweet-alert p').invoke('text').then(error => {
                                    cy.fail(error)
                                })
                                // throw new Error('Data lỗi')
                            } else {
                                cy.log('pass')
                                common.btnID('btnVAOTH');
                                common.btnID('txtKetThucPT');
                                cy.get('#txtChuanDoanTruocMoPT').type(testcase.txtChuanDoanTruocMoPT);
                                cy.get('#txtChuanDoanSauMoPT').type(testcase.txtChuanDoanSauMoPT);
                                common.btnID('btnHOANTAT');
                                common.clickConfirmBtn();
                                common.enterSelectBoxElasticSearch('cbbPPGayMePT', testcase.cbbPPGayMePT);
                                common.enterSelectBoxElasticSearch('cbbBacSiPT', testcase.cbbBacSiPT);
                                common.enterSelectBoxUlLi('cbbChiDinhMoPT', testcase.cbbChiDinhMoPT);
                                common.btnID('btnHOANTAT');

                                cy.wait(1000);
                                cy.get('#aTrangThai i')
                                    .invoke('text')
                                    .then(($i) => {
                                        const text = $i.trim();
                                        if (text === 'Hoàn tất') {
                                            cy.log('Đổi trạng thái thành công');
                                        } else {
                                            cy.fail('Đổi trạng thái thất bại');
                                        }
                                    });
                            }
                        });

                    });


                });
        });


        it('Check tác vụ "thu hồi"', async function () {
            common.enterSelectBoxElasticSearch('cboCfHangDoi', testcase.cboCfHangDoi);
            cy.get('.btn-danger').click();
            common.enterSelectBoxNormal('cbbLoai', testcase.cbbLoai);
            common.enterSelectBoxNormal('drpSelectTrangThai', 'dang thuc hien');
            cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
            cy.get('#btnTimKiem').click();

            cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a').click();

            common.btnID('txtKetThucPT');
            cy.get('#txtChuanDoanTruocMoPT').type(testcase.txtChuanDoanTruocMoPT);
            cy.get('#txtChuanDoanSauMoPT').type(testcase.txtChuanDoanSauMoPT);
            common.btnID('btnHOANTAT');
            common.clickConfirmBtn();
            common.enterSelectBoxElasticSearch('cbbPPGayMePT', testcase.cbbPPGayMePT);
            common.enterSelectBoxElasticSearch('cbbBacSiPT', testcase.cbbBacSiPT);
            common.enterSelectBoxUlLi('cbbChiDinhMoPT', testcase.cbbChiDinhMoPT);
            common.btnID('btnHOANTAT');

            common.btnID('btnTHUHOI');
            cy.get('#aTrangThai i')
                .should('have.text', 'Đang thực hiện')
                .then(($i) => {
                    const text = $i.text().trim();
                    if (text === 'Đang thực hiện') {
                        cy.log('Đổi trạng thái thành công');
                    } else if (text === 'Hoàn tất' && common.checkDialogNotVisible()) {
                        cy.fail('Đổi trạng thái thất bại');
                    } else {
                        cy.log('BN đã hoàn tất KB hoặc kết thúc điều trị NT/NGT nên không thể thu hồi');
                    }
                });


        });


        it('Check tác vụ "không mổ"', async function () {
            common.enterSelectBoxElasticSearch('cboCfHangDoi', testcase.cboCfHangDoi);
            cy.get('.btn-danger').click();
            common.enterSelectBoxNormal('cbbLoai', testcase.cbbLoai);
            common.enterSelectBoxNormal('drpSelectTrangThai', testcase.drpSelectTrangThai);
            cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
            cy.get('#btnTimKiem').click();
            getHtml('#divWebPartContent tbody tr:nth-child(7) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("checkBanGiaoPT\\('(.*)'\\)");
                    let phauThuatId = re.exec(text)[1];
                    getCurrentUrl().then(currentUrl => {
                        currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
                        currentUrl += `&phauthuatid=${phauThuatId}`;
                        cy.visit(currentUrl);
                        cy.wait(1000);

                        cy.document().then(doc => {
                            const alert = doc.querySelectorAll('.sweet-alert');
                            if (alert.length > 0) {
                                cy.get('.sweet-alert p').invoke('text').then(error => {
                                    cy.fail(error)
                                })
                            } else {
                                common.btnID('btnVAOTH');
                                common.btnID('btnHUY');
                                cy.get('#txtLyDoHoanTraUpdate').type(testcase.txtLyDoHoanTraUpdate);
                                cy.get('.form-group > button:first').click();

                                cy.get('#aTrangThai i')
                                    .should('have.text', 'Hủy')
                                    .then(($i) => {
                                        const text = $i.text().trim();
                                        if (text === 'Hủy') {
                                            cy.log('Đổi trạng thái thành công');
                                        } else {
                                            cy.fail('Đổi trạng thái thất bại');
                                        }
                                    });
                            }
                        });

                    });
                });


        });

        it('Check tác vụ "thêm phẫu thuật"', async function () {
            common.enterSelectBoxElasticSearch('cboCfHangDoi', testcase.cboCfHangDoi);
            cy.get('.btn-danger').click();
            common.enterSelectBoxNormal('cbbLoai', testcase.cbbLoai);
            common.enterSelectBoxNormal('drpSelectTrangThai', testcase.drpSelectTrangThai);
            cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
            cy.get('#btnTimKiem').click();
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("checkBanGiaoPT\\('(.*)'\\)");
                    let phauThuatId = re.exec(text)[1];
                    getCurrentUrl().then(currentUrl => {
                        currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
                        currentUrl += `&phauthuatid=${phauThuatId}`;
                        cy.visit(currentUrl);

                        cy.document().then(doc => {
                            const alert = doc.querySelectorAll('.sweet-alert');
                            if (alert.length > 0) {
                                cy.get('.sweet-alert p').invoke('text').then(error => {
                                    cy.fail(error)
                                })
                            } else {
                                cy.get('#btnVAOTH').should('be.visible').click();
                                common.enterSelectBoxUlLi('cbbChiDinhMoPT', testcase.cbbChiDinhMoPT);
                                cy.contains('Thêm phẫu thuật').click();
                                cy.wait(1500);
                                common.enterSelectBoxUlLi('cbbChiDinhMoPopup', testcase.cbbChiDinhMoPopup);
                                common.enterSelectBoxElasticSearch('cbbBacSiPopup', testcase.cbbBacSiPopup);
                                cy.get('#txtTyLeTTPopup').select('80%');
                                cy.get('form > :nth-child(2) > .ibox-content > .row > .col-sm-12 > .btn').click();
                                cy.get('#divPhauThuatCon table tbody tr:first td:nth-child(3) a').click();
                                // cy.wait(5000);
                                // common.btnID('btnVAOTH');
                                cy.get('#btnVAOTH').should('be.visible').click();


                                // nhập thông tin phẫu thuật phụ
                                common.btnID('txtKetThucPT');
                                cy.get('#txtChuanDoanTruocMoPT').type(testcase.txtChuanDoanTruocMoPT);
                                cy.get('#txtChuanDoanSauMoPT').type(testcase.txtChuanDoanSauMoPT);
                                common.enterSelectBoxElasticSearch('cbbPPGayMePT', testcase.cbbPPGayMePT);
                                common.enterSelectBoxElasticSearch('cbbBacSiPT', testcase.cbbBacSiPT);
                                common.enterSelectBoxUlLi('cbbChiDinhMoPT', testcase.cbbChiDinhMoPT);

                                // nhập DV,VTYT
                                common.btnID('showKHCS');
                                common.enterSelectBoxUlLi('cbbDichVu', testcase.cbbDichVu);
                                cy.get('#txtDichVuChiTiet').type(testcase.txtDichVuChiTiet);
                                common.enterSelectBoxElasticSearch('cbbHangDoi', testcase.cbbHangDoi);
                                common.btnID('btnAddDichVu');
                                cy.get('[onclick="clickChonTTDV();"]').click();
                                common.btnID('lnkVTYT');
                                cy.get('#cbbDonVTYTMauByDichVu').parent().find('span.selection span.select2-selection').click();
                                cy.get('span.select2-results > ul.select2-results__options').find('li:first').invoke('text').then((tenVTYT) => {
                                    if (tenVTYT === 'Không có kết quả') {
                                        cy.log('Trong phẫu thuật này không thể kê thêm VTYT');
                                    } else {
                                        cy.get(`#select2-cbbDonVTYTMauByDichVu-results`).find('li').eq(2).click();
                                    }

                                });

                                cy.get(':nth-child(2) > .icheckbox_square-green > .iCheck-helper').click();
                                cy.get('#cbbVTYT').parent().find('span.selection span.select2-selection').click();
                                cy.get('span.select2-search').find('input.select2-search__field').type('03');
                                cy.get('span.select2-results > ul.select2-results__options').find('li').eq(1).click({timeout: 7500});
                                cy.get('#txtSoLuongVTYT').type(testcase.txtSoLuongVTYT);
                                common.btnID('btnAddVTYTThongThuong');


                            }
                        });


                    });
                });

        });


        it('Check chức năng kê thuốc/VT"', function () {
            // common.enterSelectBoxElas('cboCfHangDoi', testcase.cboCfHangDoi);
            // cy.get('.btn-danger').click();
            // common.enterSelectBoxNormal('cbbLoai', testcase.cbbLoai);
            // common.enterSelectBoxNormal('drpSelectTrangThai', testcase.drpSelectTrangThai);
            // cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
            cy.contains('Đóng').click();
            common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện{enter}');
            common.enterSelectBoxNormal('cbbLoai', '3{enter}');
            cy.get('#btnTimKiem').click();
            // getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(3) a')
            //     .then(text => {
            //         const re = new RegExp("checkBanGiaoPT\\('(.*)'\\)");
            //         let phauThuatId = re.exec(text);
            //         getCurrentUrl()
            //             .then(currentUrl => {
            //                 currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
            //                 currentUrl += `&phauthuatid=${phauThuatId}`;
            //                 cy.visit(currentUrl);
            //                 cy.get('#btnVAOTH').click();
            //                 cy.get('#aTrangThai i')
            //                     .should('have.text', 'Đang thực hiện')
            //                     .then(($i) => {
            //                         const text = $i.text().trim();
            //                         if (text === 'Đang thực hiện') {
            //                             cy.log('Đổi trạng thái thành công');
            //                         } else {
            //                             cy.fail('Đổi trạng thái thất bại');
            //                         }
            //                     });
            //
            //
            //
            //
            //             });
            cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(3) a').click();
            cy.get('#lnkVTYT').click();
            // cy.get('div.col-sm-12 > div.row > div.col-sm-2 > div.icheckbox_square-green > ins..iCheck-helper').click();
            cy.viewport(1500, 800);
            cy.contains('label', 'Trong phẫu thuật')
                .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
                .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
                .click() // tick vào checkbox
// cy.get(':nth-child(2) > .icheckbox_square-green > .iCheck-helper').click();
            // common.enterSelectBoxNormal('cbbVTYT','0{enter}');
            cy.get('#cbbVTYT').parent().find('span.selection span.select2-selection').click();
            cy.get('span.select2-search').find('input.select2-search__field').type('0').wait(1000);
            cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
            cy.get('#txtSoLuongVTYT').type('1555');
            cy.get('#btnAddVTYTThongThuong').click();
            cy.get('.confirm').click();
            cy.get('#txtSoLuongVTYT').clear().type('1.5');
            cy.get('#btnAddVTYTThongThuong').click();
            cy.get('body').type('{esc}');
            cy.get('#cbbVTYT').parent().find('span.selection span.select2-selection').click();
            cy.get('span.select2-search').find('input.select2-search__field').type('B2').wait(1000);
            cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
            cy.get('#txtSoLuongVTYT').clear().type('1');
            cy.get('#btnAddVTYTThongThuong').click();
            cy.get('body').type('{esc}');
            cy.get('#divVTYT tr:first td:nth-child(7)').invoke('text').then((TrangthaiTT) => {
                cy.log(TrangthaiTT);
                if (TrangthaiTT === 'Trong gói') {
                    cy.log('Đúng đối tượng')
                } else {
                    cy.log('Sai đối tượng')
                }
            });
            cy.get('body').type('{esc}');
            cy.contains('label', 'Ngoài phẫu thuật')
                .prev()
                .find('ins.iCheck-helper')
                .click()
            cy.get('#cbbVTYT').parent().find('span.selection span.select2-selection').click();
            cy.get('span.select2-search').find('input.select2-search__field').type('B2').wait(1000);
            cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
            cy.get('#txtSoLuongVTYT').type(2.5);
            cy.get('#btnAddVTYTThongThuong').click();
            cy.get('body').type('{esc}');
            cy.get('#divVTYT tr:first td:nth-child(7)').invoke('text').then((TrangthaiTT2) => {
                cy.log(TrangthaiTT2);
                if (TrangthaiTT2 === 'Ngoài gói') {
                    cy.log('Đúng đối tượng')
                } else {
                    cy.log('Sai đối tượng')
                }
            });
            cy.contains('label', 'Tự trả (Ngoài BHYT)')
                .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
                .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
                .click() // tick vào checkbox
            cy.get('#cbbVTYT').parent().find('span.selection span.select2-selection').click();
            cy.get('span.select2-search').find('input.select2-search__field').type('B2').wait(1000);
            cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
            cy.get('#txtSoLuongVTYT').type(1);
            cy.get('#btnAddVTYTThongThuong').click();
            cy.get('#divVTYT tr:first td:nth-child(7)').invoke('text').then((TrangthaiTT3) => {
                cy.log(TrangthaiTT3);
                if (TrangthaiTT3 === 'Tự trả') {
                    cy.log('Đúng đối tượng')
                } else {
                    cy.log('Sai đối tượng')
                }
            });
            cy.get('#divVTYT tr:nth-child(1) td:nth-child(5) input.divslThuong').clear().type('3');
            cy.get('#divVTYT > tr:nth-child(3) > td:nth-child(8) > .icheckbox_square-green > .iCheck-helper').click();
            cy.get('[style="text-align: center; width:65px"] > .btn').click();
            cy.wait(1000);
            cy.get('.confirm').click();
            cy.get('#lnkThuoc').click();
            cy.contains('label', 'Trong phẫu thuật')
                .prev()
                .find('ins.iCheck-helper')
                .click()
            common.enterSelectBoxNormal('cbbThuoc', '1{enter}');
            cy.get('#txtSoLuongThuoc').type('1000');
            cy.get('#btnAddThuoc').click();
            cy.wait(1000);
            cy.get('.confirm').click();
            cy.get('#txtSoLuongThuoc').clear().type('0.5');
            cy.get('#btnAddThuoc').click();
            cy.get('body').type('{esc}');
            cy.get('#divThuoc tr:first td:nth-child(9)').invoke('text').then((TTT) => {
                cy.log(TTT);
                if (TTT === 'Trong gói') {
                    cy.log('Đúng đối tượng')
                } else {
                    cy.log('Sai đối tượng')
                }
            });
            common.enterSelectBoxNormal('cbbThuoc', '1{enter}');
            cy.get('#txtSoLuongThuoc').type('1');
            cy.get('#btnAddThuoc').click();
            cy.get('body').type('{esc}');
            cy.contains('label', 'Ngoài phẫu thuật')
                .prev()
                .find('ins.iCheck-helper')
                .click()
            cy.viewport(1500, 800);
            cy.get('#cbbThuoc').parent().find('span.selection span.select2-selection').click();
            cy.get('span.select2-search').find('input.select2-search__field').type('Natri').wait(2000);
            cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(3)').click();
            cy.get('#txtSoLuongThuoc').type('2');
            cy.get('#btnAddThuoc').click();
            cy.get('body').type('{esc}');
            cy.get('#divThuoc tr:first td:nth-child(9)').invoke('text').then((TTT1) => {
                cy.log(TTT1);
                if (TTT1 === 'Ngoài gói') {
                    cy.log('Đúng đối tượng')
                } else {
                    cy.log('Sai đối tượng')
                }
            });
            cy.contains('label', 'Tự trả (Ngoài BHYT)')
                .prev()
                .find('ins.iCheck-helper')
                .click()
            cy.get('#cbbThuoc').parent().find('span.selection span.select2-selection').click();
            cy.get('span.select2-search').find('input.select2-search__field').type('Natri').wait(2000);
            cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(3)').click();
            cy.get('#txtSoLuongThuoc').type('2');
            cy.get('#btnAddThuoc').click();
            cy.get('#divThuoc tr:first td:nth-child(9)').invoke('text').then((TTT2) => {
                cy.log(TTT2);
                if (TTT2 === 'Tự trả') {
                    cy.log('Đúng đối tượng')
                } else {
                    cy.log('Sai đối tượng')
                }
            });
            cy.get('#divThuoc tr:nth-child(1) td:nth-child(7) input.divslThuoc').clear().type('1.5');
            cy.get('#divThuoc > tr:nth-child(3) > td:nth-child(10) > .icheckbox_square-green > .iCheck-helper').click();
            // cy.get('#tr2ddb2487-13d3-4cb9-9b08-4fb48a866389 > [style="text-align:center; vertical-align: middle;"] > .icheckbox_square-green > .iCheck-helper')
            cy.get('[style="text-align: center; width:65px"] > .btn').click();
            cy.wait(1000);
            cy.get('.confirm').click();


        })


        it('"Check chức năng kê DVKT"', function () {
            cy.contains('Đóng').click();
            common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện{enter}');
            common.enterSelectBoxNormal('cbbLoai', '3{enter}');
            cy.get('#btnTimKiem').click();
            cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(3) a').click();
            cy.get('#showKHCS').click();
            cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').click();
            cy.get('span.select2-search').find('input.select2-search__field').type('09214503').wait(1000);
            cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
            common.enterSelectBoxElasticSearch('cbbHangDoi', '2{enter}');
            cy.get('#btnAddDichVu').click().wait(1000);
            cy.contains('Chấp nhận').click();
            cy.get('body').type('{esc}');
            cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').click();
            cy.get('span.select2-search').find('input.select2-search__field').type('02093617').wait(1000);
            cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
            common.enterSelectBoxElasticSearch('cbbHangDoi', '2{enter}');
            cy.get('#btnAddDichVu').click();
            cy.get('#tblDichVu > tbody > tr:nth-child(2) > td:nth-child(10)>.badge')
                .invoke('text')
                .then(($badge) => {
                    if ($badge.trim() === 'Mới') {
                        cy.get('#tblDichVu > tbody > tr:nth-child(2) > td:nth-child(11) > a[title=Sửa]>.fa').click();
                        cy.get('#txtMotadaiUpdate').clear().type('Test sửa');
                        cy.contains('Cập nhập').click();
                        cy.get('#tblDichVu > tbody > tr:nth-child(2) > td:nth-child(11) > a[title=Xóa]>.fas').click();
                        cy.get('.confirm').click();
                    } else {
                        cy.fail('Không thể xóa DV');
                    }
                });
            cy.get('#textMaBn').invoke('text').then((doituong) => {
                cy.log(doituong);
                const parts = doituong.split(' | ');
                const text = parts[1];
                cy.log(`Text: ${text}`);
                if (`${text}` === 'Bảo hiểm') {
                    cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').click();
                    cy.get('span.select2-search').find('input.select2-search__field').type('Laser').wait(1000);
                    cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
                    common.enterSelectBoxElasticSearch('cbbHangDoi', '2{enter}');
                    cy.get('#btnAddDichVu').click().wait(1000);
                    cy.contains('Chấp nhận').click();
                    cy.get('#tblDichVu > tbody > tr:last > td:nth-child(5)').invoke('text').then((Dt) => {
                        cy.log(Dt);
                        if (Dt === 'Không BH') {
                            cy.log('Đúng đối tượng DV')
                        } else {
                            cy.fail('Sai đối tượng DV')
                        }
                    })
                    cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').click();
                    cy.get('span.select2-search').find('input.select2-search__field').type('Siêu âm').wait(1000);
                    cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
                    common.enterSelectBoxElasticSearch('cbbHangDoi', '2{enter}');
                    cy.get('#btnAddDichVu').click();
                    cy.get('#tblDichVu > tbody > tr:last > td:nth-child(5)').invoke('text').then((Dt1) => {
                        cy.log(Dt1);
                        if (Dt1 === 'Bảo hiểm') {
                            cy.log('Đúng đối tượng DV')
                        } else {
                            cy.fail('Bảo hiểm đã hết hạn')
                        }
                    })
                    cy.get('#btnChuyenDVKT').click();
                    cy.get('#tblDichVu > tbody > tr:last > td:nth-child(10)>.badge')
                        .invoke('text')
                        .then(($badge) => {
                            if ($badge.trim() === 'Chờ thực hiện') {
                                cy.log('Đổi trạng thái thực hiện thành công');
                            } else {
                                cy.fail('Đổi trạng thái thực hiện thất bại');
                            }
                        });
                    cy.get('#btnThuHoiDVKT').click();
                    cy.get('#tblDichVu > tbody > tr:last > td:nth-child(10)>.badge')
                        .invoke('text')
                        .then(($badge) => {
                            if ($badge.trim() === 'Mới') {
                                cy.log('Đổi trạng thái thực hiện thành công');
                            } else {
                                cy.fail('Đổi trạng thái thực hiện thất bại');
                            }
                        });
                } else {
                    cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').click();
                    cy.get('span.select2-search').find('input.select2-search__field').type('Siêu âm').wait(1000);
                    cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
                    common.enterSelectBoxElasticSearch('cbbHangDoi', '2{enter}');
                    cy.get('#btnAddDichVu').click();
                    cy.get('#btnChuyenDVKT').click();
                    cy.get('#tblDichVu > tbody > tr:first > td:nth-child(10)>.badge')
                        .invoke('text')
                        .then(($badge) => {
                            if ($badge.trim() === 'Đang thực hiện') {
                                cy.log('Đổi trạng thái thực hiện thành công');
                            } else {
                                cy.fail('Đổi trạng thái thực hiện thất bại');
                            }
                        });
                    cy.get('#tblDichVu > tbody > tr:last > td:nth-child(10)>.badge')
                        .invoke('text')
                        .then(($badge) => {
                            if ($badge.trim() === 'Chờ thực hiện') {
                                cy.log('Đổi trạng thái thực hiện thành công');
                            } else {
                                cy.fail('Đổi trạng thái thực hiện thất bại');
                            }
                        });
                    cy.get('#btnThuHoiDVKT').click();
                    cy.get('#tblDichVu > tbody > tr:last > td:nth-child(10)>.badge')
                        .invoke('text')
                        .then(($badge) => {
                            if ($badge.trim() === 'Mới') {
                                cy.log('Đổi trạng thái thực hiện thành công');
                            } else {
                                cy.fail('Đổi trạng thái thực hiện thất bại');
                            }
                        });
                    cy.get('#tblDichVu > tbody > tr:first > td:nth-child(10)>.badge')
                        .invoke('text')
                        .then(($badge) => {
                            if ($badge.trim() === 'Đang thực hiện') {
                                cy.log('Đổi trạng thái thực hiện thành công');
                            } else {
                                cy.fail('Đổi trạng thái thực hiện thất bại');
                            }
                        });


                }
            })


            cy.contains('In lại DV').click();
            cy.get('body').type('{esc}');


        });


        it('"Check chức năng xử trí sau PT"', function () {
            cy.contains('Đóng').click();
            common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện{enter}');
            common.enterSelectBoxNormal('cbbLoai', '3{enter}');
            cy.get('#btnTimKiem').click();
            cy.get('#divWebPartContent tbody tr:last td:nth-child(3) a').click();
            cy.viewport(1500, 1000);
            const currentTime = new Date
            const formattedTime = `${String(currentTime.getHours())}:${String(currentTime.getMinutes() < 10 ? '0' : '')} ${String(currentTime.getDate()).padStart(2, '0')}-${String(currentTime.getMonth() + 1).padStart(2, '0')}-${currentTime.getFullYear()}`;
            cy.get('#txtKetThucPT').type(formattedTime);
            common.enterSelectBoxUlLi('cbbChiDinhMoPT', '2{enter}');
            cy.wait(800);
            common.enterSelectBoxUlLi('cbbPPGayMePT', '1{enter}');
            cy.get('#txtChuanDoanTruocMoPT').clear().type('Đi mổ');
            cy.get('#txtChuanDoanSauMoPT').clear().type('Phòng hồi sức');
            common.enterSelectBoxUlLi('cbbBacSiPT', '3{enter}');
            common.enterSelectBoxNormal('cbbMauTuongTrinh', '1{enter}');
            cy.get('#btnHOANTAT').click();
            cy.get('#divTinhTrang').invoke('text').then((Tinhtrangmo) => {
                cy.log(Tinhtrangmo);
                if (Tinhtrangmo !== 'Mổ phiên') {
                    cy.log('Không cần xử trí sau PT')
                } else {
                    cy.get('#divMenuContent :nth-child(3) #textMaBn').invoke('text').then((MaBN) => {
                        cy.log(MaBN)
                        const numberOnly = MaBN.match(/\d+/);
                        const numberWithoutBrackets = numberOnly[0].replace(/ \[|\ ] /g, '');
                        cy.log(numberWithoutBrackets);
                        common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');
                        cy.get('#txtTimKiem').clear().type(`${numberWithoutBrackets}`);
                        cy.get('#select2-drpSelectTrangThai-container > .select2-selection__clear').click();
                        cy.get('#btnTimKiem').click().wait(2000);
                        cy.get('#tblNoiTru tbody tr:nth-child(2) td:nth-child(5) a').click();
                        cy.get('#showDsYLenh').click();
                        // Sử dụng cy.get() để chọn tất cả các phần tử có lớp .ibox-title và lấy độ dài của chúng
                        cy.get('#divDsYLenh .ibox-title').its('length').should('be.gt', 0).then((count) => {
                            // In ra số lượng phần tử .ibox-title
                            cy.log(`Số lượng trước .ibox-title: ${count}`);
                            common.goToFunctionFromMenu('danhsachphauthuatdraw');
                            cy.contains('Đóng').click();
                            cy.get('#txtTimKiem').clear().type(`${numberWithoutBrackets}`);
                            common.enterSelectBoxNormal('cbbLoai', '3{enter}');
                            cy.get('#btnTimKiem').click()
                            cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(3) a').click();
                            cy.get('#divMenuContent :nth-child(4) #textMaBn').invoke('text').then((Khoacu) => {
                                cy.log(Khoacu);
                                cy.get('#txtKetThucPT').invoke('text').then((KetThucPT) => {
                                    cy.log(KetThucPT);
                                    const existingTime = new Date(KetThucPT);
                                    const newTime = new Date(existingTime.getTime() + 60 * 60 * 1000);
                                    const formattedTime = `${String(newTime.getHours())}:${String(newTime.getMinutes() < 10 ? '0' : '')} ${String(newTime.getDate()).padStart(2, '0')}-${String(newTime.getMonth() + 1).padStart(2, '0')}-${newTime.getFullYear()}`;
                                    cy.get('#lnkXuTriPT').click().wait(1000);
                                    // cy.get('#txtThoiGianRa').type(formattedTime);
                                    // cy.get('#cbbXuTri').select('Chuyển khoa{force: true}');
                                    // common.enterSelectBoxNormal('cboKhoanhap','22{enter}');
                                    // cy.get('#btnSaveXuTri').click().wait(1000);
                                    // cy.get('.confirm').click();
                                    cy.get('#btnSaveXuTri').should('be.disabled');
                                    // nội tru
                                    // vào bn
                                    // lịch sử y lệnh
                                    common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');
                                    cy.get('#txtTimKiem').clear().type(`${numberWithoutBrackets}`);
                                    cy.get('#btnTimKiem').click()
                                    cy.get('#tblNoiTru tbody tr:nth-child(2) td:nth-child(5) a').click();
                                    cy.get('#showDsYLenh').click();
                                    // tên khoa mới
                                    cy.get('#divMenuContent :nth-child(5) #textMaBn').invoke('text').then((Khoamoi) => {
                                        cy.log(Khoamoi);
                                        cy.get('#divDsYLenh .ibox-title').its('length').should('be.gt', 0).then((count1) => {
                                            cy.log(`Số lượng sau .ibox-title: ${count1}`);
                                            if (Khoacu !== Khoamoi && count !== count1) {
                                                cy.log('Chuyển khoa')
                                            } else {
                                                cy.log('Chuyển về khoa cũ')
                                            }
                                        });
                                    });
                                });


                            });


                        });
                    });

                }
            })


        });


    }


});