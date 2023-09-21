const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');
const testCases = require('./tanky.testcase.json');
const {getHtml, getCurrentUrl} = require("../../common.cy");

describe("Quy trình khám chữa bệnh - ngoại trú", () => {


    beforeEach(() => {
        common.visitAndLoginOther(enviroment.natk)
    });

    for (let i = 0; i < testCases.length; i++) {
        let testCase = testCases[0];

        let mabenhnhan='23121266';
        let thoigiannhapkhoa;

        it('Tiếp nhận, khám bệnh', function () {
            common.goToFunctionFromMenu('tiepnhandraw');
            cy.get('#txtTenBenhNhan').type("Cypress Noi Tru 2");
            cy.get('#txtTuoi').type("20");

            cy.get('#cbbDonViHanhChinh').parent().find('span.selection span.select2-selection').focus();
            cy.get('input.select2-search__field').eq(1).type('BK{downArrow}{enter}');
            cy.get('.select2-results tr:first').click();

            cy.get('#txtDiaChiSoNha').type("Số nhà test");

            cy.document().then(doc => {
                const dialog = doc.querySelectorAll('#divFormModalChung');
                if (dialog.length > 0) {
                    // style = "overflow: hidden; display: block; padding-left: 17px;"
                    cy.get('#divFormModalChung').invoke('attr', 'style').then(status => {
                        if (status.trim().includes('display: block;')) {
                            cy.get('#divFormModalChung > #dialogChung > .modal-content > .panel-heading > .close').click();
                        } else {
                            cy.log('dialog khong xuat hien');
                        }
                    });
                } else {
                    cy.log('dialog khong xuat hien');
                }
            })
            cy.get('#txtDienThoai').type("09897312421");
            cy.get('#txtSoCMND').type("038092256");

            cy.get('#cboQuocGia').parent().find('span.selection span.select2-selection').focus();
            cy.get('input.select2-search__field').eq(1).type('VN{downArrow}{enter}');
            cy.get('.select2-results tr:first').click();

            cy.get('#cbbDanToc').parent().find('span.selection span.select2-selection').focus();
            cy.get('input.select2-search__field').eq(1).type('25{downArrow}{enter}');
            cy.get('.select2-results tr:first').click();

            cy.get('#cbbNgheNghiep').parent().find('span.selection span.select2-selection').focus();
            cy.get('input.select2-search__field').eq(1).type('7{downArrow}{enter}');
            cy.get('.select2-results tr:first').click();

            common.enterSelectBoxNormal('cbbDoiTuong', 'thu phi');

            cy.get('#cbbKhoaPhong').parent().find('span.selection span.select2-selection').focus();
            cy.get('input.select2-search__field').eq(1).type('pk{downArrow}{enter}');
            cy.get('.select2-results tr:first').click();

            cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').focus();
            cy.get('span.select2-search').find('input.select2-search__field').type('tt{downArrow}{enter}');
            cy.get('#select2-cbbDichVu-results').find('tr:last').click().wait(1500);
            cy.get('#btnCHUYENTH').click();
            cy.wait(1000);
            cy.get('#txtMaBenhNhan').invoke('val').then(mabn => {
                cy.log(mabn)
                mabenhnhan = mabn;

                common.goToFunctionFromMenu('vienphidanhsachdraw');
                cy.get('#txtTimKiem').clear().type(mabenhnhan);
                common.btnID('btnTimKiem');
                cy.wait(1000);
                getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                    .then(text => {
                        const re = new RegExp("hoadonid=([^&]*)");
                        let hoadonid = re.exec(text)[1];
                        getCurrentUrl()
                            .then(currentUrl => {
                                currentUrl = currentUrl.replace('wpid=vienphidanhsachdraw', 'wpid=giaodienhoadondraw')
                                currentUrl += `&hoadonid=${hoadonid}`;
                                cy.visit(currentUrl);

                                cy.wait(3000);
                                // common.btnID('btnBienLai1');
                                getCurrentUrl()
                                    .then(currentUrl => {
                                        currentUrl = currentUrl.replace('wpid=giaodienhoadondraw', 'wpid=bienlaithudraw')
                                        currentUrl = currentUrl.replace('&hoadonid', '&vienphiid')
                                        cy.visit(currentUrl);

                                        common.btnID('btnHOANTAT');
                                        cy.wait(1000);

                                    });
                            });
                    });
                // chi dinh kham phoi hop
                common.goToFunctionFromMenu('khambenhdanhsachdraw');
                cy.get('#txtTimKiem').clear().type(mabn);
                common.enterSelectBoxNormal('drpSelectTrangThai', 'cho thuc hien');
                cy.get('#btnTimKiem').click();
                cy.wait(1000);
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
                                cy.get('#txtChanDoanSoBo').type(testCase.txtChanDoanSoBo);
                                common.enterSelectBoxElasticSearch('cbbCDBChinh', 'a00');
                                cy.contains('Chỉ định theo nhiều nhóm').click();
                                cy.wait(1000);
                                cy.get('#all_using_json ul:first li:nth-child(3) a').click();
                                common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', '94');
                                cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').first().click({force: true})
                                cy.get('#previewPDFChonDV').click();
                                cy.wait(2000);
                                cy.get('#modalReportPdf > .modal-dialog').should('be.visible').then(() => {
                                    cy.get('body').type('{esc}');
                                });
                                cy.get('#aTrangThai i')
                                    .invoke('text')
                                    .then((text) => {
                                        if (text.trim() === 'Đang làm DV') {
                                            cy.log('Đổi trạng thái thành công');
                                            common.goToFunctionFromMenu('vienphidanhsachdraw');
                                            cy.get('#txtTimKiem').clear().type(mabenhnhan);
                                            common.btnID('btnTimKiem');
                                            cy.wait(1000);
                                            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                                                .then(text => {
                                                    const re = new RegExp("hoadonid=([^&]*)");
                                                    let hoadonid = re.exec(text)[1];
                                                    getCurrentUrl()
                                                        .then(currentUrl => {
                                                            currentUrl = currentUrl.replace('wpid=vienphidanhsachdraw', 'wpid=giaodienhoadondraw')
                                                            currentUrl += `&hoadonid=${hoadonid}`;
                                                            cy.visit(currentUrl);

                                                            cy.wait(3000);
                                                            getCurrentUrl()
                                                                .then(currentUrl => {
                                                                    currentUrl = currentUrl.replace('wpid=giaodienhoadondraw', 'wpid=bienlaithudraw')
                                                                    currentUrl = currentUrl.replace('&hoadonid', '&vienphiid')
                                                                    cy.visit(currentUrl);

                                                                    common.btnID('btnHOANTAT');
                                                                    cy.wait(1000);

                                                                });
                                                        });
                                                });
                                        } else {
                                            cy.fail('Đổi trạng thái thất bại');
                                        }
                                    });
                            });
                    });


                // thuc hien kham phoi hop
                common.goToFunctionFromMenu('khambenhdanhsachdraw');
                cy.get('#txtTimKiem').clear().type(mabn);
                common.enterSelectBoxNormal('drpSelectTrangThai', 'cho thuc hien');
                common.btnID('btnTimKiem');
                cy.wait(1000);
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
                                cy.get('#txtChanDoanSoBo').type(testCase.txtChanDoanSoBo);
                                common.enterSelectBoxElasticSearch('cbbBacSi', 'anh');
                                common.enterSelectBoxElasticSearch('cbbCDBChinh', 'm07');
                                cy.get(':nth-child(5) > .col-md-12 > .select2-container > .selection > .select2-selection > ul > li > .select2-search__field').type('bệnh tả');
                                cy.get('#select2-cbbCDBKemTheo-results').find('tr:first').click();
                                common.btnID('btnHOANTAT');
                                cy.wait(500);
                                common.goToFunctionFromMenu('khambenhdanhsachdraw');
                                cy.get('#txtTimKiem').clear().type(mabn);
                                common.enterSelectBoxNormal('drpSelectTrangThai', 'cho thuc hien');
                                common.btnID('btnTimKiem');
                                cy.wait(1000);
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
                                                cy.get('#txtNgayKham').invoke('val').then(timekham => {
                                                    const tomorrow = common.inputDateTimeSevenMinutes(timekham);
                                                    thoigiannhapkhoa = tomorrow;
                                                    cy.log(tomorrow);

                                                    // cy.get('#fromdonthuoc span#divMenuThuoc a:nth-child(5)').click();
                                                    // cy.get(':nth-child(1) > label > .icheckbox_square-green > .iCheck-helper').click();
                                                    // common.enterSelectBoxElasticSearch('cboKhoVTYT', 'ttdy');
                                                    // cy.get('#cboThuocVTYT').parent().find('span.selection span.select2-selection').click();
                                                    // cy.get('span.select2-search').find('input.select2-search__field').type('byt');
                                                    // cy.get(`span.select2-results > ul.select2-results__options `).find('li:nth-child(2)').click();
                                                    // cy.get('#txtSlVTYT').type('0.5');
                                                    // cy.contains('Thêm').click();
                                                    // common.btnID('btnChuyenTh_TKXN');
                                                    //
                                                    // // Click Đơn tủ trực
                                                    // cy.get('#fromdonthuoc span#divMenuThuoc a:nth-child(7)').click();
                                                    // cy.get(':nth-child(1) > label > .icheckbox_square-green > .iCheck-helper').click();
                                                    // common.enterSelectBoxElasticSearch('cboKhoTuTruc', 'kmp');
                                                    // cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
                                                    // cy.get('span.select2-search').find('input.select2-search__field').type('mn');
                                                    // cy.get(`span.select2-results > ul.select2-results__options `).find('li:nth-child(2)').click();
                                                    // cy.get('#txtSl').type('0.5');
                                                    // cy.get('#txtSN').type('1');
                                                    // cy.get('#txtSlN').type('1');
                                                    // cy.get('#txtSlL').type('1');
                                                    // common.btnID('btnAddTuTruc');
                                                    // common.btnID('btnChuyenTh_TKXN');
                                                    cy.wait(500);
                                                    common.enterSelectBoxNormal('cbbXuTri', 'dieu tri ngoai tru');
                                                    cy.wait(500)
                                                    cy.get('body').type('{esc}')
                                                    common.enterSelectBoxElasticSearch('cboKhoanhap', 'k30');
                                                    cy.get('#txtThoigianRa').clear().type(tomorrow);
                                                    common.btnID('btnSaveXuTri');
                                                    common.btnID('btnHOANTAT');
                                                    cy.wait(1000);
                                                });


                                            });
                                    });

                            });
                    });
            });
        });

        it('Thực hiện điều trị ngoại trú', function () {
            common.goToFunctionFromMenu('danhsachtiepnhanngoaitrudraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');
            cy.wait(1000);
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("ttvaorakhoaid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachtiepnhanngoaitrudraw', 'wpid=tiepnhanngoaitrudraw')
                            currentUrl += `&ttvaorakhoaid=${phauThuatId}`;
                            cy.visit(currentUrl);

                            cy.get('#cboLoaiBenhAn').select(0);
                            cy.get('#txtThoiGianVaoKhoa').clear().type(thoigiannhapkhoa);
                            cy.get('#btnNHAPKHOA').click();
                            cy.wait(1000);
                        });




                });

            common.goToFunctionFromMenu('danhsachdieutringoaitrudraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');
            cy.wait(1000);
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("ngoaitruid=([^&]*)");
                    let hoadonid = re.exec(text)[1];
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachdieutringoaitrudraw', 'wpid=dieutringoaitrudraw')
                            currentUrl += `&ngoaitruid=${hoadonid}`;
                            cy.visit(currentUrl);

                            cy.wait(50000);
                            cy.wait(50000);
                            cy.wait(50000);
                            common.btnID('showThamKham');
                            cy.get('.col-xs-12 > [onclick="showChiDinhNhanh();"]').click();
                            cy.wait(1000);
                            cy.get('#using_json ul.jstree-container-ul li:nth-child(3) a').click();
                            common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', testCase.cbbHangDoiPopupNhieuNhom);
                            cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').first().click({force: true})
                            common.btnID('btnDongYChon');
                            common.btnID('btnChapNhan');
                            // cy.wait(30000);
                            cy.wait(500);
                            cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(2) a').click();
                            // cy.wait(30000);
                            cy.wait(500);
                            cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(4)').invoke('text').then(timeDV => {
                                cy.get('#txtThoigian').clear().type(timeDV);

                            });
                            cy.wait(500);
                            common.enterSelectBoxElasticSearch('cboCheDoChamSoc', 'c2');
                            cy.get('#txtDienBienBenh').type('abc');
                            common.btnID('btnPopupHOANTAT');
                            cy.wait(500);

                        });
                });

            common.goToFunctionFromMenu('vienphidanhsachdraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');
            cy.wait(1000);
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("hoadonid=([^&]*)");
                    let hoadonid = re.exec(text)[1];
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=vienphidanhsachdraw', 'wpid=giaodienhoadondraw')
                            currentUrl += `&hoadonid=${hoadonid}`;
                            cy.visit(currentUrl);

                            cy.wait(3000);
                            // common.btnID('btnBienLai1');
                            getCurrentUrl()
                                .then(currentUrl => {
                                    currentUrl = currentUrl.replace('wpid=giaodienhoadondraw', 'wpid=bienlaithudraw')
                                    currentUrl = currentUrl.replace('&hoadonid', '&vienphiid')
                                    cy.visit(currentUrl);

                                    common.btnID('btnHOANTAT');
                                    cy.wait(1000);

                                });
                        });
                });

            common.goToFunctionFromMenu('khambenhdanhsachdraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.enterSelectBoxNormal('drpSelectTrangThai', 'cho thuc hien');
            common.btnID('btnTimKiem');
            cy.wait(1000);
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
                            cy.get('#txtChanDoanSoBo').type(testCase.txtChanDoanSoBo);
                            common.enterSelectBoxElasticSearch('cbbBacSi', 'anh');
                            common.enterSelectBoxElasticSearch('cbbCDBChinh', 'm07');
                            common.btnID('btnHOANTAT');
                            cy.wait(500);

                        });
                });

            common.goToFunctionFromMenu('danhsachdieutringoaitrudraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');
            cy.wait(1000);
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(5) a')
                .then(text => {
                    const re = new RegExp("ngoaitruid=([^&]*)");
                    let hoadonid = re.exec(text)[1];
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachdieutringoaitrudraw', 'wpid=dieutringoaitrudraw')
                            currentUrl += `&ngoaitruid=${hoadonid}`;
                            cy.visit(currentUrl);

                            common.btnID('showDsYLenh');
                            cy.get('tbody > :nth-child(2) > :nth-child(5)').click();
                            cy.wait(500);
                            // common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'c2');
                            // cy.get('#txtDienBienYLenhThamKham').type('abc');
                            // common.btnID('btnPopupHOANTAT');
                            // cy.wait(500);
                            cy.get('#txtThoigian').invoke('val').then(time => {
                                const timeTomorrow = common.inputDateTimeTomorrow(time);
                                cy.log(timeTomorrow);
                                // sao chep y lenh
                                // common.btnID('btnSaoChep');
                                cy.get('#btnSaoChep').click({force: true})
                                cy.wait(300);

                                cy.document().then(doc => {
                                    const alert = doc.querySelectorAll('.sweet-alert');
                                    if (alert.length > 0) {
                                        common.clickConfirmBtn();
                                    } else {
                                        cy.log('Khong co dialog xuat hien')
                                    }
                                });

                                cy.wait(1000);
                                cy.get('#txtThoigian').invoke('val').then(time2 => {
                                    if (timeTomorrow === time2) {
                                        cy.log('Sao chep y lenh 1 ngay thanh cong');
                                        common.btnID('btnPopupXOA');
                                        cy.wait(1000);
                                    } else {
                                        throw new Error('Sao chep y lenh that bai');
                                    }
                                });

                            });

                        });
                });
        });

        it('tổng kết ra khoa', function () {
            common.goToFunctionFromMenu('danhsachdieutringoaitrudraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');

            cy.wait(1000);
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(2) a')
                .then(text => {
                    const re = new RegExp("ngoaitruid=([^&]*)");
                    let hoadonid = re.exec(text)[1];
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachdieutringoaitrudraw', 'wpid=dieutringoaitrudraw')
                            currentUrl += `&ngoaitruid=${hoadonid}`;
                            cy.visit(currentUrl);

                            cy.get('.active > ul > :nth-child(5) > a').click();
                            cy.get('#txtThoiGianRa').clear();
                            common.btnID('btnSaveXuTri');
                            common.clickConfirmBtn();
                            cy.get('#txtThoiGianRa').click();
                            common.btnID('btnSaveXuTri');
                            common.btnID('btnTongHopXml');
                            cy.wait(2000);
                            common.clickConfirmBtn();
                            cy.get('.active > ul > :nth-child(8) > a').click();
                            cy.get('#leftMenu ul li ul.jstree-children li a:first').click();

                            cy.wait(2000);
                            cy.document().then(doc => {
                                const pdf = doc.querySelectorAll('#divNgoaiTruContent #divMrViewer .ibox-content #divXmlContent iframe');
                                if (pdf.length > 0) {
                                    cy.log('Đã hiển thị hồ sơ Bệnh Án')
                                } else {
                                    cy.get('.sweet-alert p[style="display: block;"]').invoke('text').then(alert=>{
                                        throw new Error(alert);
                                    })
                                }
                            })

                            cy.get('.active > ul > :nth-child(5) > a').click();
                            cy.get('#txtThoiGianRa').click();
                            common.enterSelectBoxElasticSearch('cboBacsi', 'duy');
                            common.btnID('btnHOANTAT');
                            cy.wait(1000);
                        });


                });
        });

        // it('Tất toán viện phí', function () {
        //     common.goToFunctionFromMenu('vienphidanhsachdraw');
        //     cy.get('#txtTimKiem').clear().type(mabenhnhan);
        //     common.btnID('btnTimKiem');
        //     // cy.get('#divVienPhiDanhSachContent tbody tr:first td a').eq(3).click();
        //
        //     cy.wait(1000);
        //     getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
        //         .then(text => {
        //             const re = new RegExp("hoadonid=([^&]*)");
        //             let hoadonid = re.exec(text)[1];
        //             getCurrentUrl()
        //                 .then(currentUrl => {
        //                     currentUrl = currentUrl.replace('wpid=vienphidanhsachdraw', 'wpid=giaodienhoadondraw')
        //                     currentUrl += `&hoadonid=${hoadonid}`;
        //                     cy.visit(currentUrl);
        //                     cy.wait(500);
        //                     // common.enterSelectBoxElasticSearch('cboHangDoiCauHinh', 'hc10.6');
        //                     // cy.get('.form-group button:first').click();
        //                     common.btnID('btnHOANTAT');
        //                     cy.wait(300);
        //                     common.btnID('btnAddBienlai');
        //                     cy.wait(300);
        //                     cy.get('body').type('{esc}');
        //
        //
        //                 });
        //         });
        // });

    }
});