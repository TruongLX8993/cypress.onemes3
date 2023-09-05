const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');
const testCases = require('./giaodienkhambenh.testcase.json');
const {getHtml, getCurrentUrl} = require("../../common.cy");


describe("Khám bệnh", () => {

    beforeEach(() => {
        common.visitAndLoginOther(enviroment.natk);
        common.goToFunctionFromMenu('khambenhdanhsachdraw');

    });

    for (let i = 0; i < testCases.length; i++) {
        let testCase = testCases[0];
        it('check vào khám ', function () {
            common.enterSelectBoxNormal('drpSelectTrangThai', testCase.drpSelectTrangThai);
            common.enterSelectBoxNormal('cbbLoai', testCase.cbbLoai);
            cy.get('#btnTimKiem').click();


            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("khambenhid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=khambenhdanhsachdraw', 'wpid=giaodienkhambenhdraw')
                            currentUrl += `&khambenhid=${phauThuatId}`;
                            cy.visit(currentUrl);

                            cy.get('#btnVAOKHAM').click();

                            cy.get('a#aTrangThai i.badge')
                                .should('have.text', 'Đang thực hiện')
                                .then(($badge) => {
                                    const hasBadgeClass = $badge.hasClass('badge');
                                    if (hasBadgeClass) {
                                        cy.log('Đổi trạng thái thực hiện thành công');
                                        cy.get('#btnDoiPhongKham').click();

                                        cy.document().then(doc=>{
                                            const alert = doc.querySelectorAll('.sweet-alert');
                                            if(alert.length > 0){
                                                cy.get('.sweet-alert p[style="display: block;"]').invoke('text').then(error=>{
                                                    cy.log(error);
                                                })
                                            }else{
                                                common.enterSelectBoxElasticSearch('cboHangDoiKhamBenh', testCase.cboHangDoiKhamBenh);
                                                cy.get('#btnAddBienlai').click();
                                                cy.get('body').type('{esc}');

                                                cy.get('#aTrangThai i')
                                                    .should('have.text', 'Chờ thực hiện')
                                                    .then(($i) => {
                                                        const text = $i.text().trim();
                                                        if (text === 'Chờ thực hiện') {
                                                            cy.log('Đổi trạng thái thành công');
                                                        } else {
                                                            cy.fail('Đổi trạng thái thất bại');
                                                        }
                                                    });
                                            }
                                        })

                                    } else {
                                        cy.fail('Đổi trạng thái thực hiện thất bại');
                                    }
                                });
                        });
                });
            // cy.get('#divKhamBenhDanhSachContent tbody tr:nth-child(3)  td a').eq(4).click();



        });

        it('Chỉ định dịch vụ bằng nhiều nhóm', function () {
            common.enterSelectBoxNormal('drpSelectTrangThai', testCase.drpSelectTrangThai);
            common.enterSelectBoxNormal('cbbLoai', testCase.cbbLoai);
            cy.get('#btnTimKiem').click();

            getHtml('#divWebPartContent tbody tr:nth-child(5) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("khambenhid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=khambenhdanhsachdraw', 'wpid=giaodienkhambenhdraw')
                            currentUrl += `&khambenhid=${phauThuatId}`;
                            cy.visit(currentUrl);

                            cy.get('#btnVAOKHAM').click();
                            cy.get('#txtChanDoanSoBo').type(testCase.txtChanDoanSoBo);
                            common.enterSelectBoxElasticSearch('cbbCDBChinh', 'a00');
                            cy.contains('Chỉ định theo nhiều nhóm').click();
                            cy.wait(1000);
                            // cy.contains('Khám bệnh').click();
                            cy.get('#all_using_json ul:first li:nth-child(3) a').click();
                            common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', '94');
                            cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').first().click({force: true})
                            cy.get('#previewPDFChonDV').click();
                            cy.wait(2000);
                            cy.get('#modalReportPdf > .modal-dialog').should('be.visible').then(() => {
                                cy.get('body').type('{esc}');
                            })
                            cy.get('#aTrangThai i')
                                .should('have.text', 'Đang làm DV')
                                .then(($i) => {
                                    const text = $i.text().trim();
                                    if (text === 'Đang làm DV') {
                                        cy.log('Đổi trạng thái thành công');
                                        common.btnID('btnTHUHOIDV');
                                        cy.get('table#tblDichVu tbody tr.dichvu td:nth-child(1) > [title="Sửa"]').click();
                                        cy.get('#cboDoiTuongUpdate').select(3);
                                        common.enterSelectBoxElasticSearch('cboHangdoiUpdate', '4');
                                        cy.contains('Cập nhập').click();
                                        cy.get('table#tblDichVu tbody tr.dichvu td:nth-child(1) > [title="Xóa"]').click();
                                        common.clickConfirmBtn();

                                        //bo sung them chi dinh nhieu nhom
                                        cy.contains('Chỉ định theo nhiều nhóm').click();
                                        cy.get('#all_using_json ul:first li:nth-child(3) a').click();
                                        common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', '94');
                                        cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').first().click({force: true})
                                        cy.get('#previewPDFChonDV').click();
                                        cy.wait(2000);
                                        cy.get('#modalReportPdf > .modal-dialog').should('be.visible').then(() => {
                                            cy.get('body').type('{esc}');
                                        })
                                    } else {
                                        cy.fail('Đổi trạng thái thất bại');
                                    }
                                });
                        });
                });
            // cy.get('#divKhamBenhDanhSachContent tbody tr:nth-child(3) td:nth-child(4) a').click();


        });

        it('Chỉ định dịch vụ bằng nhóm mẫu', function () {
            common.enterSelectBoxNormal('drpSelectTrangThai', 'dang thuc hien');
            // cy.get('#txtTimKiem').type('2300516992');
            common.enterSelectBoxNormal('cbbLoai', testCase.cbbLoai);
            cy.get('#btnTimKiem').click();

            getHtml('#divWebPartContent tbody tr:nth-child(5) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("khambenhid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=khambenhdanhsachdraw', 'wpid=giaodienkhambenhdraw')
                            currentUrl += `&khambenhid=${phauThuatId}`;
                            cy.visit(currentUrl);

                            // cy.get('#btnVAOKHAM').click();
                            cy.get('#txtChanDoanSoBo').type(testCase.txtChanDoanSoBo);
        common.enterSelectBoxElasticSearch('cbbCDBChinh', 'a00');
                            cy.get('[onclick="if(checkChungChiHanhNghe()){ addDvMau();ConnectToPrintServer();coreLstPhieuIn = [];coreDemPhieuIn = 0;}"] > .btn').click();
                            cy.get('#divContentDMChiDinh > .table-responsive > .table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click();

                            cy.get('#trDichVuMauPopupEdit0 > :nth-child(2)').click({timeout:10000});
                            cy.get('#previewPDFCDHA').click();
                            cy.wait(2000);

                            cy.document().then(doc=>{
                               const alert = doc.querySelectorAll('.sweet-alert');
                               if(alert.length > 0){
                                   common.clickConfirmBtn();
                                   cy.get('#modalReportPdf > .modal-dialog').should('be.visible').then(() =>{
                                       cy.get('body').type('{esc}');
                                   })

                                   cy.get('#aTrangThai i')
                                       .should('have.text', 'Đang làm DV')
                                       .then(($i) => {
                                           const text = $i.text().trim();
                                           if (text === 'Đang làm DV') {
                                               cy.log('Đổi trạng thái thành công');
                                               common.btnID('btnTHUHOIDV');
                                               // cy.wait(10000);
                                               cy.get('#divDichVuXNContent > .table-responsive > #tblDichVuXN > tbody > tr:nth-child(5) > td > [title="Sửa"] > .fa').click({timeout: 15000});
                                               cy.get('#cboDoiTuongUpdate').select('Miễn phí');

                                               cy.contains('Cập nhập').click();
                                               cy.get('#divDichVuXNContent > .table-responsive > #tblDichVuXN > tbody > tr:nth-child(3) > td > [title="Xóa"] > .fas').click();
                                               // cy.get('.confirm').click();
                                               common.clickConfirmBtn();
                                               common.btnID('btnDILAMDV');
                                           } else {
                                               cy.fail('Đổi trạng thái thất bại');
                                           }
                                       });
                               }else{
                                   cy.get('#modalReportPdf > .modal-dialog').should('be.visible').then(() =>{
                                       cy.get('body').type('{esc}');
                                   })

                                   cy.get('#aTrangThai i')
                                       .should('have.text', 'Đang làm DV')
                                       .then(($i) => {
                                           const text = $i.text().trim();
                                           if (text === 'Đang làm DV') {
                                               cy.log('Đổi trạng thái thành công');
                                               common.btnID('btnTHUHOIDV');
                                               // cy.wait(10000);
                                               cy.get('#divDichVuXNContent > .table-responsive > #tblDichVuXN > tbody > tr:nth-child(5) > td > [title="Sửa"] > .fa').click({timeout: 15000});
                                               cy.get('#cboDoiTuongUpdate').select('Miễn phí');
                                               // common.enterSelectBoxElasticSearch('cboHangdoiUpdate', testCase.cboHangdoiUpdate);
                                               cy.contains('Cập nhập').click();
                                               cy.get('#divDichVuXNContent > .table-responsive > #tblDichVuXN > tbody > tr:nth-child(3) > td > [title="Xóa"] > .fas').click();
                                               // cy.get('.confirm').click();
                                               common.clickConfirmBtn();
                                               common.btnID('btnDILAMDV');
                                           } else {
                                               cy.fail('Đổi trạng thái thất bại');
                                           }
                                       });
                               }
                            });


                        });
                });
            // cy.get('#divKhamBenhDanhSachContent tbody tr:nth-child(3) td:nth-child(4) a').click();


        });

        it('Check tác vụ không khám  ', function () {
            common.enterSelectBoxNormal('drpSelectTrangThai', testCase.drpSelectTrangThai);
            // cy.get('#txtTimKiem').type('2300516926');
            common.enterSelectBoxNormal('cbbLoai', testCase.cbbLoai);
            cy.get('#btnTimKiem').click();

            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("khambenhid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=khambenhdanhsachdraw', 'wpid=giaodienkhambenhdraw')
                            currentUrl += `&khambenhid=${phauThuatId}`;
                            cy.visit(currentUrl);

                            common.btnID('btnVAOKHAM');
                            common.btnID('btnHOANTRA');
                            // cy.get('.confirm').click();
                            common.clickConfirmBtn();
                        });
                });
            // cy.get('#divKhamBenhDanhSachContent tbody tr:nth-child(3) td:nth-child(4) a').click();

        });

        it('Check khi kê VTYT / Thuốc tủ trực', function () {
            common.enterSelectBoxNormal('drpSelectTrangThai', testCase.drpSelectTrangThai);
            // cy.get('#txtTimKiem').type('2300520842');
            common.enterSelectBoxNormal('cbbLoai', testCase.cbbLoai);
            cy.get('#btnTimKiem').click();

            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("khambenhid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=khambenhdanhsachdraw', 'wpid=giaodienkhambenhdraw')
                            currentUrl += `&khambenhid=${phauThuatId}`;
                            cy.visit(currentUrl);

                            common.btnID('btnVAOKHAM');

                            // click VTYT, xóa toàn bộ, xóa từng VTYT trong popup kê
                            cy.get('#fromdonthuoc span#divMenuThuoc a:nth-child(5)').click();
                            cy.get(':nth-child(1) > label > .icheckbox_square-green > .iCheck-helper').click();
                            common.enterSelectBoxElasticSearch('cboKhoVTYT', 'ttdy');
                            cy.get('#cboThuocVTYT').parent().find('span.selection span.select2-selection').click();
                            cy.get('span.select2-search').find('input.select2-search__field').type('byt');
                            cy.get(`span.select2-results > ul.select2-results__options `).find('li:nth-child(2)').click();
                            cy.get('#txtSlVTYT').type('0.5');
                            cy.contains('Thêm').click();
                            cy.wait(700);
                            cy.get('#divDonVTYTContent > .table-responsive > #tblVatTu > thead > tr:nth-child(1) > th:nth-child(8) > .khambenh-a > .fa').click();
                            // cy.wait(1000);
                            // cy.get('.confirm').click();
                            cy.wait(500);
                            common.clickConfirmBtn();
                            cy.contains('Thêm').click();
                            cy.get(`span.select2-results > ul.select2-results__options `).find('li:nth-child(3)').click();
                            cy.get('#txtSlVTYT').type('2');
                            cy.contains('Thêm').click();
                            cy.get('#divDonVTYTContent > .table-responsive > #tblVatTu > tbody > tr:nth-child(1) > td:nth-child(9) > .khambenh-a > .fas').click();
                            // cy.wait(2000);
                            // cy.get('.confirm').click();
                            common.clickConfirmBtn();
                            common.btnID('btnChuyenTh_TKXN');

                            // Click Đơn tủ trực , xóa toàn bộ, xóa từng VTYT trong popup kê
                            cy.get('#fromdonthuoc span#divMenuThuoc a:nth-child(7)').click();
                            cy.get(':nth-child(1) > label > .icheckbox_square-green > .iCheck-helper').click();
                            common.enterSelectBoxElasticSearch('cboKhoTuTruc', 'kmp');
                            cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
                            cy.get('span.select2-search').find('input.select2-search__field').type('mn');
                            cy.get(`span.select2-results > ul.select2-results__options `).find('li:nth-child(2)').click();
                            cy.get('#txtSl').type('0.5');
                            cy.get('#txtSN').type('1');
                            cy.get('#txtSlN').type('1');
                            cy.get('#txtSlL').type('1');
                           common.btnID('btnAddTuTruc');
                            cy.get('#divDonThuocDonTuTrucContent > .table-responsive > table#tblThuoc >  thead > tr:nth-child(1) > th:nth-child(12) > .khambenh-a > .fa').click();
                            // cy.wait(2000);
                            // cy.get('.confirm').click();
                            common.clickConfirmBtn();
                            cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
                            cy.get('span.select2-search').find('input.select2-search__field').type('mn{enter}');
                            cy.get('#txtSl').type('0.5');
                            cy.get('#txtSN').type('1');
                            cy.get('#txtSlN').type('1');
                            cy.get('#txtSlL').type('1');
                            common.btnID('btnAddTuTruc');

                            cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').focus();
                            cy.get(`span.select2-results > ul.select2-results__options `).find('li').eq(1).click();
                            cy.get('#txtSl').type('0.5');
                            cy.get('#txtSN').type('1');
                            cy.get('#txtSlN').type('1');
                            cy.get('#txtSlL').type('1');
                            common.btnID('btnAddTuTruc');

                            cy.get('#divDonThuocDonTuTrucContent > .table-responsive > table#tblThuoc > tbody > tr:nth-child(1) > td:nth-child(13) > .khambenh-a > .fas').click();
                            // cy.get('.confirm').click();
                            common.clickConfirmBtn();
                            common.btnID('btnChuyenTh_TKXN');

                            //xóa sau khi kê ở phần kê đơn
                            cy.get('#divDonThuocContent> .table-responsive > #tblThuoc > tbody > tr:nth-child(2)  > td:nth-child(12) > a.khambenh-a > .fas').click();
                            common.clickConfirmBtn();
                            cy.contains('Vật tư').click();

                            //xóa sau khi kê ở phần vật tư
                            cy.get('#divVatTuContent > .table-responsive > #tblVatTu > tbody > tr:nth-child(2)   > td:nth-child(9) > a.khambenh-a > .fas').click();
                            // cy.get('.confirm').click();
                            common.clickConfirmBtn();
                        });
                });

        });

        it('Check tác vụ Hoàn tất khám và Thu hồi', function () {
            common.enterSelectBoxNormal('drpSelectTrangThai','cho thuc hien');
            common.enterSelectBoxNormal('cbbLoai', testCase.cbbLoai);
            cy.get('#btnTimKiem').click();

            getHtml('#divWebPartContent tbody tr:nth-child(5) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("khambenhid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=khambenhdanhsachdraw', 'wpid=giaodienkhambenhdraw')
                            currentUrl += `&khambenhid=${phauThuatId}`;
                            cy.visit(currentUrl);

                            common.btnID('btnVAOKHAM');
                            cy.get('#textMaBn').invoke('text').then(mabn=>{
                                cy.get('#txtChanDoanSoBo').clear().type(testCase.txtChanDoanSoBo);
                                common.enterSelectBoxElasticSearch('cbbBacSi','anh');
                                common.enterSelectBoxElasticSearch('cbbChuyenKhoa', '2');
                                common.enterSelectBoxElasticSearch('cbbCDBChinh', 'a00');
                                common.enterSelectBoxNormal(
                                    'cbbXuTri', 'bo ve');
                                // cy.get('#showXutri').click();
                                //
                                // cy.get('#txtSoNgayDungThuoc').type('10');
                                // cy.get('#txtGhichu').type('Nhớ ăn uống đầy đủ không được bỏ bữa');
                                // common.enterSelectBoxElasticSearch('cboLydoChove', 'Cho về');
                                // common.btnID('btnSaveXuTri');
                                common.btnID('btnHOANTAT');

                                cy.get('a#aTrangThai i.badge')
                                    .should('have.text', 'Hoàn tất')
                                    .then(($badge) => {
                                        const hasBadgeClass = $badge.hasClass('badge');
                                        if (hasBadgeClass) {
                                            cy.log('Hoàn tất thành công');
                                            common.btnID('btnTHUHOI');
                                            cy.wait(1000);
                                            cy.document().then(doc=>{
                                                const alert = doc.querySelectorAll('.sweet-alert');
                                                if(alert.length > 0) {
                                                    common.clickConfirmBtn();
                                                    cy.wait(1000);

                                                    getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                                                        .then(text => {
                                                            const re = new RegExp("hoadonid=([^&]*)");
                                                            let phauThuatId = re.exec(text)[1];
                                                            cy.log(phauThuatId);
                                                            getCurrentUrl()
                                                                .then(currentUrl => {
                                                                    currentUrl = currentUrl.replace('wpid=vienphidanhsachdraw', 'wpid=giaodienhoadondraw')
                                                                    currentUrl += `&hoadonid=${phauThuatId}`;
                                                                    cy.visit(currentUrl);

                                                                    common.btnID('btnTHUHOI');
                                                                    cy.wait(500);
                                                                    common.goToFunctionFromMenu(khambenhdanhsachdraw);
                                                                    cy.get('#txtTimKiem').click().type(mabn);
                                                                    common.enterSelectBoxNormal('drpSelectTrangThai', 'hoan tat');
                                                                    common.enterSelectBoxNormal('cbbLoai', '3');
                                                                    common.btnID('btnTimKiem');
                                                                    cy.wait(1000);
                                                                    getHtml('#divWebPartContent tbody tr:nth-child(3) td:nth-child(4) a')
                                                                        .then(text => {
                                                                            const re = new RegExp("khambenhid=([^&]*)");
                                                                            let phauThuatId = re.exec(text)[1];
                                                                            cy.log(phauThuatId);
                                                                            getCurrentUrl()
                                                                                .then(currentUrl => {
                                                                                    currentUrl = currentUrl.replace('wpid=khambenhdanhsachdraw', 'wpid=giaodienkhambenhdraw')
                                                                                    currentUrl += `&khambenhid=${phauThuatId}`;
                                                                                    cy.visit(currentUrl);

                                                                                    common.btnID('btnTHUHOI');

                                                                                });
                                                                        });
                                                                });
                                                        });
                                                }else{
                                                    cy.get('#aTrangThai .badge').invoke('text').then(status=>{
                                                        if(status.trim() === 'Đang thực hiện'){
                                                            cy.log('Thu hồi thành công')
                                                        }else{
                                                            throw new Error('Thu hồi thất bại')
                                                        }
                                                    })
                                                }
                                            })
                                        } else {
                                            cy.fail('Hoàn tất thất bại');
                                        }
                                    });
                            });

                        });
                });

            // cy.get('#divKhamBenhDanhSachContent tbody tr:nth-child(2) td:nth-child(4) a').click();
            // common.btnID('btnVAOKHAM');


        });

    }

});

