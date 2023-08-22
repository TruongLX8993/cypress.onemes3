const common = require('../../e2e/common.cy');
const {getHtml, getAttribute, getCurrentUrl} = require("../../e2e/common.cy");
const testCases = require('./phauthuat.testcase.json');


describe("Phau Thuat", async () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('danhsachphauthuatdraw');
    });

    // for (let i = 0; i < testCases.length; i++) {
    //     let testcase = testCases[i];
        it('Check chức năng kê thuốc/VT"', function () {
            // common.enterSelectBoxElas('cboCfHangDoi', testcase.cboCfHangDoi);
            // cy.get('.btn-danger').click();
            // common.enterSelectBoxNormal('cbbLoai', testcase.cbbLoai);
            // common.enterSelectBoxNormal('drpSelectTrangThai', testcase.drpSelectTrangThai);
            // cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
            cy.contains('Đóng').click();
            // common.enterSelectBoxElas('drpSelectTrangThai','Đang thực hiện');
            cy.get('#txtTimKiem').type('2300521032');
            common.enterSelectBoxNormal('cbbLoai','3{enter}');
            cy.get('#btnTimKiem').click();
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(3) a')
                .then(text => {
                    const re = new RegExp("checkBanGiaoPT\\('(.*)'\\)");
                    let phauThuatId = re.exec(text);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
                            currentUrl += `&phauthuatid=${phauThuatId}`;
                            cy.visit(currentUrl);
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
                            cy.get('#lnkVTYT').click();
                            cy.get('div.col-sm-2 > div.icheckbox_square-green > ckboxTrongGoi').click();
                            // cy.get('span.select2-container > .select2-dropdown > .select2-results > ul.select2-results__options > li').eq(2).click();
                            common.enterSelectBoxUlLi('cbbVTYT','0');
                            cy.get('#txtSoLuongVTYT').type('15');
                            cy.get('.confirm').click();
                            cy.get('#txtSoLuongVTYT').clear().type('1.5');
                            cy.get('#btnAddVTYTThongThuong').click();
                            cy.get('div.col-sm-2 > div.icheckbox_square-green > ckboxNgoaiGoi').click();
                            common.enterSelectBoxUlLi('cbbVTYT','3');
                            cy.get('#txtSoLuongVTYT').type(2);
                            cy.get('#btnAddVTYTThongThuong').click();
                            cy.get('div.col-sm-3 > div.icheckbox_square-green > ckboxNguoiBenhTT').click();
                            common.enterSelectBoxUlLi('cbbVTYT','03');
                            cy.get('#txtSoLuongVTYT').type(1);
                            cy.get('#btnAddVTYTThongThuong').click();
                            cy.get('#divVTYT tr:nth-child(1) td:nth-child(5) input.divslThuong').clear().type('3');
                            cy.get('#divVTYT tr:nth-child(1) td:nth-child(9) div.icheckbox_square-green ins.iCheck-helper').click();
                            cy.contains('Xóa').click();
                            cy.get('.confirm');



                        });

                })
        });


        // it('Check tác vụ "kết thúc mổ"', function () {
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
        //                 common.btnID('btnVAOTH');
        //                 common.btnID('txtKetThucPT');
        //                 cy.get('#txtChuanDoanTruocMoPT').type(testcase.txtChuanDoanTruocMoPT);
        //                 cy.get('#txtChuanDoanSauMoPT').type(testcase.txtChuanDoanSauMoPT);
        //                 common.btnID('btnHOANTAT');
        //                 common.clickConfirmBtn();
        //                 common.enterSelectBoxElasticSearch('cbbPPGayMePT', testcase.cbbPPGayMePT);
        //                 common.enterSelectBoxElasticSearch('cbbBacSiPT', testcase.cbbBacSiPT);
        //                 common.enterSelectBoxUlLi('cbbChiDinhMoPT', testcase.cbbChiDinhMoPT);
        //                 common.btnID('btnHOANTAT');
        //
        //                 cy.get('#aTrangThai i')
        //                     .should('have.text', 'Hoàn tất')
        //                     .then(($i) => {
        //                         const text = $i.text().trim();
        //                         if (text === 'Hoàn tất') {
        //                             cy.log('Đổi trạng thái thành công');
        //                         } else {
        //                             cy.fail('Đổi trạng thái thất bại');
        //                         }
        //                     });
        //             });
        //         });
        // });

        // it('Check tác vụ "thu hồi"', async function () {
        //     common.enterSelectBoxElasticSearch('cboCfHangDoi', testcase.cboCfHangDoi);
        //     cy.get('.btn-danger').click();
        //     common.enterSelectBoxNormal('cbbLoai', testcase.cbbLoai);
        //     common.enterSelectBoxNormal('drpSelectTrangThai', testcase.drpSelectTrangThai);
        //     cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
        //     cy.get('#btnTimKiem').click();
        //     const text = await getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a');
        //     const re = new RegExp("checkBanGiaoPT\\('(.*)'\\)");
        //     let phauThuatId = re.exec(text)[1];
        //     let currentUrl = await getCurrentUrl();
        //     currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
        //     currentUrl += `&phauthuatid=${phauThuatId}`;
        //     cy.visit(currentUrl);
        //     common.btnID('btnVAOTH');
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
        //             } else {
        //                 cy.fail('Đổi trạng thái thất bại');
        //             }
        //         });
        //
        //     cy.get('#txtChuanDoanTruocMoPT').type(testcase.txtChuanDoanTruocMoPT);
        //     common.btnID('btnHOANTAT');
        //
        // });

        // it('Check tác vụ "không mổ"', async function () {
        //     common.enterSelectBoxElasticSearch('cboCfHangDoi', testcase.cboCfHangDoi);
        //     cy.get('.btn-danger').click();
        //     common.enterSelectBoxNormal('cbbLoai', testcase.cbbLoai);
        //     common.enterSelectBoxNormal('drpSelectTrangThai', testcase.drpSelectTrangThai);
        //     cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
        //     cy.get('#btnTimKiem').click();
        //     const text = await getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a');
        //     const re = new RegExp("checkBanGiaoPT\\('(.*)'\\)");
        //     let phauThuatId = re.exec(text)[1];
        //     let currentUrl = await getCurrentUrl();
        //     currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
        //     currentUrl += `&phauthuatid=${phauThuatId}`;
        //     cy.visit(currentUrl);
        //     common.btnID('btnVAOTH');
        //     common.btnID('btnHUY');
        //     cy.get('#txtLyDoHoanTraUpdate').type(testcase.txtLyDoHoanTraUpdate);
        //     cy.get('.form-group > button:first').click();
        //
        //     cy.get('#aTrangThai i')
        //         .should('have.text', 'Hủy')
        //         .then(($i) => {
        //             const text = $i.text().trim();
        //             if (text === 'Hủy') {
        //                 cy.log('Đổi trạng thái thành công');
        //             } else {
        //                 cy.fail('Đổi trạng thái thất bại');
        //             }
        //         });
        //
        //
        // });
        //
        // it('Check tác vụ "thêm phẫu thuật"', async function () {
        //     common.enterSelectBoxElasticSearch('cboCfHangDoi', testcase.cboCfHangDoi);
        //     cy.get('.btn-danger').click();
        //     // common.enterSelectBoxNormal('cbbLoai', '3');
        //     // cy.get('#dtTuNgay').clear().type('00:00 10/08/2022');
        //     common.enterSelectBoxNormal('drpSelectTrangThai', testcase.drpSelectTrangThai);
        //     cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
        //     // cy.get('#txtTimKiem').type('2200113440');
        //     cy.get('#btnTimKiem').click();
        //     const text = await getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(3) a');
        //     const re = new RegExp("checkBanGiaoPT\\('(.*)'\\)");
        //     let phauThuatId = re.exec(text)[1];
        //     let currentUrl = await getCurrentUrl();
        //     currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
        //     currentUrl += `&phauthuatid=${phauThuatId}`;
        //     cy.visit(currentUrl);
        //
        //     // cy.wait(3000);
        //     // common.btnID('btnVAOTH');
        //     cy.get('#btnVAOTH').should('be.visible').click();
        //     common.enterSelectBoxUlLi('cbbChiDinhMoPT', testcase.cbbChiDinhMoPT);
        //     cy.contains('Thêm phẫu thuật').click();
        //     cy.wait(1500);
        //     common.enterSelectBoxUlLi('cbbChiDinhMoPopup', testcase.cbbChiDinhMoPopup);
        //     common.enterSelectBoxElasticSearch('cbbBacSiPopup', testcase.cbbBacSiPopup);
        //     cy.get('#txtTyLeTTPopup').select('80%');
        //     cy.get('form > :nth-child(2) > .ibox-content > .row > .col-sm-12 > .btn').click();
        //     cy.get('#divPhauThuatCon table tbody tr:first td:nth-child(3) a').click();
        //     // cy.wait(5000);
        //     // common.btnID('btnVAOTH');
        //     cy.get('#btnVAOTH').should('be.visible').click();
        //
        //
        //     // nhập thông tin phẫu thuật phụ
        //     common.btnID('txtKetThucPT');
        //     cy.get('#txtChuanDoanTruocMoPT').type(testcase.txtChuanDoanTruocMoPT);
        //     cy.get('#txtChuanDoanSauMoPT').type(testcase.txtChuanDoanSauMoPT);
        //     common.enterSelectBoxElasticSearch('cbbPPGayMePT', testcase.cbbPPGayMePT);
        //     common.enterSelectBoxElasticSearch('cbbBacSiPT', testcase.cbbBacSiPT);
        //     common.enterSelectBoxUlLi('cbbChiDinhMoPT', testcase.cbbChiDinhMoPT);
        //
        //     // nhập DV,VTYT
        //     common.btnID('showKHCS');
        //     common.enterSelectBoxUlLi('cbbDichVu', testcase.cbbDichVu);
        //     cy.get('#txtDichVuChiTiet').type(testcase.txtDichVuChiTiet);
        //     common.enterSelectBoxElasticSearch('cbbHangDoi', testcase.cbbHangDoi);
        //     common.btnID('btnAddDichVu');
        //     cy.get('[onclick="clickChonTTDV();"]').click();
        //     common.btnID('lnkVTYT');
        //     cy.get('#cbbDonVTYTMauByDichVu').parent().find('span.selection span.select2-selection').click();
        //     cy.get('span.select2-results > ul.select2-results__options').find('li:first').invoke('text').then((tenVTYT) => {
        //         if (tenVTYT === 'Không có kết quả') {
        //             cy.log('Trong phẫu thuật này không thể kê thêm VTYT');
        //         }else{
        //             cy.get(`#select2-cbbDonVTYTMauByDichVu-results`).find('li').eq(2).click();
        //         }
        //
        //     })
        //
        //     cy.get(':nth-child(2) > .icheckbox_square-green > .iCheck-helper').click();
        //     cy.get('#cbbVTYT').parent().find('span.selection span.select2-selection').click();
        //     cy.get('span.select2-search').find('input.select2-search__field').type('03');
        //     cy.get('span.select2-results > ul.select2-results__options').find('li').eq(1).click({timeout:7500});
        //     cy.get('#txtSoLuongVTYT').type(testcase.txtSoLuongVTYT);
        //     common.btnID('btnAddVTYTThongThuong');
        //
        //
        // });

    // }


});