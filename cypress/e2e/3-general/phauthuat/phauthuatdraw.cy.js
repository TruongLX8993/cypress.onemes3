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
        // it('Check tác vụ "Vào thực hiện"', function () {
        //     common.enterSelectBoxElasticSearch('cboCfHangDoi', testcase.cboCfHangDoi);
        //     cy.get('.btn-danger').click();
        //     common.enterSelectBoxNormal('cbbLoai', testcase.cbbLoai);
        //     common.enterSelectBoxNormal('drpSelectTrangThai', testcase.drpSelectTrangThai);
        //     cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
        //     cy.get('#btnTimKiem').click();
        //     getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
        //         .then(text => {
        //             const re = new RegExp("checkBanGiaoPT\\('(.*)'\\)");
        //             let phauThuatId = re.exec(text)[1];
        //             getCurrentUrl()
        //                 .then(currentUrl => {
        //                     currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
        //                     currentUrl += `&phauthuatid=${phauThuatId}`;
        //                     cy.visit(currentUrl);
        //                     cy.wait(1000);
        //                     cy.document().then(doc => {
        //                         const alert = doc.querySelectorAll('.sweet-alert');
        //                         if (alert.length > 0) {
        //                             cy.get('.sweet-alert p').invoke('text').then(error => {
        //                                 cy.fail(error)
        //                             })
        //                             // throw new Error('Data lỗi')
        //                         } else {
        //                             cy.get('#btnVAOTH').click();
        //                             cy.get('#aTrangThai i')
        //                                 .should('have.text', 'Đang thực hiện')
        //                                 .then(($i) => {
        //                                     const text = $i.text().trim();
        //                                     if (text === 'Đang thực hiện') {
        //                                         cy.log('Đổi trạng thái thành công');
        //                                     } else {
        //                                         cy.fail('Đổi trạng thái thất bại');
        //                                     }
        //                                 });
        //                         }
        //                     });
        //
        //                 });
        //         })
        // });


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


        // it('Check tác vụ "thu hồi"', async function () {
        //     common.enterSelectBoxElasticSearch('cboCfHangDoi', testcase.cboCfHangDoi);
        //     cy.get('.btn-danger').click();
        //     common.enterSelectBoxNormal('cbbLoai', testcase.cbbLoai);
        //     common.enterSelectBoxNormal('drpSelectTrangThai', 'dang thuc hien');
        //     cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
        //     cy.get('#btnTimKiem').click();
        //
        //     cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a').click();
        //
        //     common.btnID('txtKetThucPT');
        //     cy.get('#txtChuanDoanTruocMoPT').type(testcase.txtChuanDoanTruocMoPT);
        //     cy.get('#txtChuanDoanSauMoPT').type(testcase.txtChuanDoanSauMoPT);
        //     common.btnID('btnHOANTAT');
        //     common.clickConfirmBtn();
        //     common.enterSelectBoxElasticSearch('cbbPPGayMePT', testcase.cbbPPGayMePT);
        //     common.enterSelectBoxElasticSearch('cbbBacSiPT', testcase.cbbBacSiPT);
        //     common.enterSelectBoxUlLi('cbbChiDinhMoPT', testcase.cbbChiDinhMoPT);
        //     common.btnID('btnHOANTAT');
        //
        //     common.btnID('btnTHUHOI');
        //     cy.get('#aTrangThai i')
        //         .should('have.text', 'Đang thực hiện')
        //         .then(($i) => {
        //             const text = $i.text().trim();
        //             if (text === 'Đang thực hiện') {
        //                 cy.log('Đổi trạng thái thành công');
        //             } else if(text === 'Hoàn tất' && common.checkDialogNotVisible()){
        //                 cy.fail('Đổi trạng thái thất bại');
        //             }else {
        //                 cy.log('BN đã hoàn tất KB hoặc kết thúc điều trị NT/NGT nên không thể thu hồi');
        //             }
        //         });
        //
        //
        // });


        // it('Check tác vụ "không mổ"', async function () {
        //     common.enterSelectBoxElasticSearch('cboCfHangDoi', testcase.cboCfHangDoi);
        //     cy.get('.btn-danger').click();
        //     common.enterSelectBoxNormal('cbbLoai', testcase.cbbLoai);
        //     common.enterSelectBoxNormal('drpSelectTrangThai', testcase.drpSelectTrangThai);
        //     cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
        //     cy.get('#btnTimKiem').click();
        //     getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
        //         .then(text => {
        //             const re = new RegExp("checkBanGiaoPT\\('(.*)'\\)");
        //             let phauThuatId = re.exec(text)[1];
        //             getCurrentUrl().then(currentUrl => {
        //                 currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
        //                 currentUrl += `&phauthuatid=${phauThuatId}`;
        //                 cy.visit(currentUrl);
        //
        //                 cy.document().then(doc => {
        //                     const alert = doc.querySelectorAll('.sweet-alert');
        //                     if (alert.length > 0) {
        //                         cy.get('.sweet-alert p').invoke('text').then(error => {
        //                             cy.fail(error)
        //                         })
        //                     } else {
        //                         common.btnID('btnVAOTH');
        //                         common.btnID('btnHUY');
        //                         cy.get('#txtLyDoHoanTraUpdate').type(testcase.txtLyDoHoanTraUpdate);
        //                         cy.get('.form-group > button:first').click();
        //
        //                         cy.get('#aTrangThai i')
        //                             .should('have.text', 'Hủy')
        //                             .then(($i) => {
        //                                 const text = $i.text().trim();
        //                                 if (text === 'Hủy') {
        //                                     cy.log('Đổi trạng thái thành công');
        //                                 } else {
        //                                     cy.fail('Đổi trạng thái thất bại');
        //                                 }
        //                             });
        //                     }
        //                 });
        //
        //             });
        //         });
        //
        //
        // });

        // it('Check tác vụ "thêm phẫu thuật"', async function () {
        //     common.enterSelectBoxElasticSearch('cboCfHangDoi', testcase.cboCfHangDoi);
        //     cy.get('.btn-danger').click();
        //     common.enterSelectBoxNormal('cbbLoai', testcase.cbbLoai);
        //     common.enterSelectBoxNormal('drpSelectTrangThai', testcase.drpSelectTrangThai);
        //     cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
        //     cy.get('#btnTimKiem').click();
        //     getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
        //         .then(text => {
        //             const re = new RegExp("checkBanGiaoPT\\('(.*)'\\)");
        //             let phauThuatId = re.exec(text)[1];
        //             getCurrentUrl().then(currentUrl => {
        //                 currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
        //                 currentUrl += `&phauthuatid=${phauThuatId}`;
        //                 cy.visit(currentUrl);
        //
        //                 cy.document().then(doc=>{
        //                    const alert = doc.querySelectorAll('.sweet-alert');
        //                    if(alert.length > 0){
        //                        cy.get('.sweet-alert p').invoke('text').then(error => {
        //                            cy.fail(error)
        //                        })
        //                    }else{
        //                        cy.get('#btnVAOTH').should('be.visible').click();
        //                        common.enterSelectBoxUlLi('cbbChiDinhMoPT', testcase.cbbChiDinhMoPT);
        //                        cy.contains('Thêm phẫu thuật').click();
        //                        cy.wait(1500);
        //                        common.enterSelectBoxUlLi('cbbChiDinhMoPopup', testcase.cbbChiDinhMoPopup);
        //                        common.enterSelectBoxElasticSearch('cbbBacSiPopup', testcase.cbbBacSiPopup);
        //                        cy.get('#txtTyLeTTPopup').select('80%');
        //                        cy.get('form > :nth-child(2) > .ibox-content > .row > .col-sm-12 > .btn').click();
        //                        cy.get('#divPhauThuatCon table tbody tr:first td:nth-child(3) a').click();
        //                        // cy.wait(5000);
        //                        // common.btnID('btnVAOTH');
        //                        cy.get('#btnVAOTH').should('be.visible').click();
        //
        //
        //                        // nhập thông tin phẫu thuật phụ
        //                        common.btnID('txtKetThucPT');
        //                        cy.get('#txtChuanDoanTruocMoPT').type(testcase.txtChuanDoanTruocMoPT);
        //                        cy.get('#txtChuanDoanSauMoPT').type(testcase.txtChuanDoanSauMoPT);
        //                        common.enterSelectBoxElasticSearch('cbbPPGayMePT', testcase.cbbPPGayMePT);
        //                        common.enterSelectBoxElasticSearch('cbbBacSiPT', testcase.cbbBacSiPT);
        //                        common.enterSelectBoxUlLi('cbbChiDinhMoPT', testcase.cbbChiDinhMoPT);
        //
        //                        // nhập DV,VTYT
        //                        common.btnID('showKHCS');
        //                        common.enterSelectBoxUlLi('cbbDichVu', testcase.cbbDichVu);
        //                        cy.get('#txtDichVuChiTiet').type(testcase.txtDichVuChiTiet);
        //                        common.enterSelectBoxElasticSearch('cbbHangDoi', testcase.cbbHangDoi);
        //                        common.btnID('btnAddDichVu');
        //                        cy.get('[onclick="clickChonTTDV();"]').click();
        //                        common.btnID('lnkVTYT');
        //                        cy.get('#cbbDonVTYTMauByDichVu').parent().find('span.selection span.select2-selection').click();
        //                        cy.get('span.select2-results > ul.select2-results__options').find('li:first').invoke('text').then((tenVTYT) => {
        //                            if (tenVTYT === 'Không có kết quả') {
        //                                cy.log('Trong phẫu thuật này không thể kê thêm VTYT');
        //                            } else {
        //                                cy.get(`#select2-cbbDonVTYTMauByDichVu-results`).find('li').eq(2).click();
        //                            }
        //
        //                        });
        //
        //                        cy.get(':nth-child(2) > .icheckbox_square-green > .iCheck-helper').click();
        //                        cy.get('#cbbVTYT').parent().find('span.selection span.select2-selection').click();
        //                        cy.get('span.select2-search').find('input.select2-search__field').type('03');
        //                        cy.get('span.select2-results > ul.select2-results__options').find('li').eq(1).click({timeout: 7500});
        //                        cy.get('#txtSoLuongVTYT').type(testcase.txtSoLuongVTYT);
        //                        common.btnID('btnAddVTYTThongThuong');
        //
        //
        //                    }
        //                 });
        //
        //
        //             });
        //         });
        //
        // });


    }


});