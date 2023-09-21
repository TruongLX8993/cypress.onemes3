const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');
const testCases = require('./tanky.testcase.json');
const {getHtml, getCurrentUrl} = require("../../common.cy");

describe("Quy trình khám chữa bệnh - nội trú", () => {


    beforeEach(() => {
        common.visitAndLoginOther(enviroment.natk)
    });


    for (let i = 0; i < testCases.length; i++) {
        let testCase = testCases[0];

        let mabenhnhan = '23121239';

        it('Tiếp nhận, khám bệnh', function () {
            common.goToFunctionFromMenu('tiepnhandraw');
            cy.get('#txtTenBenhNhan').type("Cypress Noi Tru 2");
            cy.get('#txtNgaySinh').type("26/11/2020");

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
            // cy.get('.form-group > .btn').click()
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
                // cy.get('#divKhamBenhDanhSachContent tbody tr:nth-child(1) td:nth-child(4) a').click();
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
                                // cy.contains('Khám bệnh').click();
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
                // cy.get('#divKhamBenhDanhSachContent tbody tr:first td a').eq(4).click();
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
                                // cy.get('#divKhamBenhDanhSachContent tbody tr:first td a').eq(4).click();
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
                                                    common.enterSelectBoxNormal('cbbXuTri', 'dieu tri noi tru');
                                                    cy.wait(500)
                                                    cy.get('body').type('{esc}')
                                                    common.enterSelectBoxElasticSearch('cboKhoanhap', 'k19');
                                                    common.enterSelectBoxElasticSearch('cboLyDoVaoVien', '1');
                                                    cy.get('#txtLyDoVaoVienNT').type('dau bung');
                                                    cy.get('#txtThoigianRa').clear().type(tomorrow);
                                                    cy.get('#txtThoigianXuTri').clear().type(tomorrow);
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

        it('Thực hiện điều trị nội trú và điều dưỡng', function () {
            common.goToFunctionFromMenu('danhsachttvaorakhoadraw');
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
                            currentUrl = currentUrl.replace('wpid=danhsachttvaorakhoadraw', 'wpid=tiepnhandieutridraw')
                            currentUrl += `&ttvaorakhoaid=${phauThuatId}`;
                            cy.visit(currentUrl);

                            cy.get('#cboLoaiBenhAn').select(0);
                            cy.get('#btnNHAPKHOA').click();
                            cy.wait(500);
                        });

                });

            // dieu duong
            common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');
            // cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(2) td:nth-child(2) a').click();

            cy.wait(1000);
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(2) a')
                .then(text => {
                    const re = new RegExp("noitruid=([^&]*)");
                    let hoadonid = re.exec(text)[1];
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachdieutrinoitrudraw', 'wpid=dieuduongdraw')
                            currentUrl += `&noitruid=${hoadonid}`;
                            cy.visit(currentUrl);

                            common.btnID('btnBG');
                            common.btnID('btnPhanBuongGiuong');
                            cy.get('body').type('{esc}');
                            cy.get('#cboGiuongPG').parent().find('span.selection span.select2-selection').click();
                            cy.get(`span.select2-results > ul.select2-results__options `).find('li').eq(1).click();
                            cy.wait(1000);
                            cy.document().then(doc => {
                                const alert = doc.querySelectorAll('.sweet-alert');
                                if (alert.length > 0) {
                                    common.clickConfirmBtn();
                                    cy.get('#txtSoNgayNamPBG').type('5');
                                } else {
                                    cy.get('#txtSoNgayNamPBG').type('5');
                                }
                            });

                            cy.get('button[onclick="fnKetThucGiuongVaTaoGiuongMoi()"]').click();
                            cy.get('a[onclick="fnKetThucGiuong()"]').click();

                            // lap ke hoach cham soc
                            common.btnID('btnTTCS');
                            cy.get('#txtDHSTMach').clear();
                            cy.get('#txtDHSTHuyetAp').clear();
                            cy.get('#txtDHSTNhietDo').clear();
                            cy.get('#txtDHSTNhipTho').clear();
                            cy.get('#txtDienBienCS').clear().type(testCase.txtDienBienCS);
                            // common.btnID('btnLuu');
                            cy.get('#btnLuu').click({force: true});
                            cy.contains('Lịch sử KH chăm sóc').click();
                            cy.get('#BodyChiTietDraw > tr:nth-child(2) > td:nth-child(3) > a').click();
                            common.btnID('btnHoanTat');
                            cy.wait(1000);
                            common.btnID('btnDSCS');
                            cy.get('#BodyChiTietDraw > tr:nth-child(2) > td:nth-child(3) > a').click();
                            common.btnID('btnSaoChep');
                            cy.get('#txtDHSTMach').clear().type(testCase.txtDHSTMach);
                            cy.get('#txtDHSTHuyetAp').clear().type(testCase.txtDHSTHuyetAp);
                            cy.get('#txtDHSTNhietDo').clear().type(testCase.txtDHSTNhietDo);
                            cy.get('#txtDHSTNhipTho').clear().type(testCase.txtDHSTNhipTho);
                            cy.get('#txtDienBienCS').clear().type(testCase.txtDienBienCS);
                            common.btnID('btnLuu');
                            cy.contains('Lịch sử KH chăm sóc').click();
                            cy.get('#BodyChiTietDraw > tr').each((row, index) => {
                                const status = row.find('td:nth-child(6) span.badge').text();
                                if (status === 'Mới') {
                                    cy.get(`#BodyChiTietDraw > tr:nth-child(${index + 1}) > td:nth-child(3) > a`).click();
                                    common.btnID('btnXoa');
                                    // cy.wait(33500);
                                    cy.wait(500);
                                }
                            });

                            common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');
                            cy.get('#txtTimKiem').clear().type(mabenhnhan);
                            common.btnID('btnTimKiem');
                            cy.wait(1000);
                            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                                .then(text => {
                                    const re = new RegExp("noitruid=([^&]*)");
                                    let hoadonid = re.exec(text)[1];
                                    getCurrentUrl()
                                        .then(currentUrl => {
                                            currentUrl = currentUrl.replace('wpid=danhsachdieutrinoitrudraw', 'wpid=bacsidraw')
                                            currentUrl += `&noitruid=${hoadonid}`;
                                            cy.visit(currentUrl);

                                            cy.wait(30000);
                                            cy.wait(30000);
                                            cy.wait(30000);
                                            cy.wait(30000);
                                            cy.wait(30000);
                                            cy.wait(30000);
                                            common.btnID('showThamKham');
                                            cy.get('button[onclick="showChiDinhNhanh()"]').click();
                                            cy.wait(1000);
                                            cy.get('#using_json ul.jstree-container-ul li:nth-child(3) a').click();
                                            common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', testCase.cbbHangDoiPopupNhieuNhom);
                                            cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').first().click({force: true})
                                            common.btnID('btnDongYChon');
                                            common.btnID('btnChapNhan');
                                            cy.wait(1000);

                                            cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(2) a').click();
                                            cy.wait(500);
                                            cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(4)').invoke('text').then(timeDV => {
                                                cy.get('#txtThoigianThucHienThamKham').clear().type(timeDV);
                                                cy.get('#txtThoigianThamKham').clear().type(timeDV);

                                            });

                                            cy.wait(500);
                                            common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'c2');
                                            cy.get('#txtDienBienYLenhThamKham').type('abc');
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

                            common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');
                            cy.get('#txtTimKiem').clear().type(mabenhnhan);
                            common.btnID('btnTimKiem');
                            cy.wait(1000);
                            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(5) a')
                                .then(text => {
                                    const re = new RegExp("noitruid=([^&]*)");
                                    let hoadonid = re.exec(text)[1];
                                    getCurrentUrl()
                                        .then(currentUrl => {
                                            currentUrl = currentUrl.replace('wpid=danhsachdieutrinoitrudraw', 'wpid=bacsidraw')
                                            currentUrl += `&noitruid=${hoadonid}`;
                                            cy.visit(currentUrl);

                                            common.btnID('showDsYLenh');
                                            cy.get('#divDsYLenh .ibox-content:first tbody#tbodyylenh tr:first td:nth-child(4) a').click();
                                            cy.wait(500);
                                            cy.get('#txtThoigianThamKham').invoke('attr', 'data-value').then(time => {
                                                const timeTomorrow = common.inputDateTimeTomorrow(time);
                                                cy.log(timeTomorrow);
                                                // sao chep y lenh
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
                                                cy.get('#txtThoigianThamKham').invoke('attr', 'data-value').then(time2 => {
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
                });
        });

        it(' Thêm mổ và Thực hiện mổ', function () {
            common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');
            cy.wait(1000);
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(5) a')
                .then(text => {
                    const re = new RegExp("noitruid=([^&]*)");
                    let hoadonid = re.exec(text)[1];
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachdieutrinoitrudraw', 'wpid=bacsidraw')
                            currentUrl += `&noitruid=${hoadonid}`;
                            cy.visit(currentUrl);

                            // thêm y lệnh phẫu thuật
                            common.btnID('showThamKham');
                            common.btnID('btnHoiChan');
                            common.enterSelectBoxElasticSearch('cboHangDoiPT', '17');
                            common.enterSelectBoxUlLi('cboDichVuPT', 'tt13.0721');
                            common.btnID('btnChapNhanNhapTheBhyt');
                            cy.get('#txtDienBienYLenhThamKham').type('abc');
                            common.btnID('btnPopupHOANTAT');
                            cy.wait(1000);
                        });
                });

            common.goToFunctionFromMenu('danhsachphauthuatdraw');
            cy.get('.panel-heading strong:first a').click();
            cy.wait(300);
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            cy.get('#select2-drpSelectHangDoi-container span.select2-selection__clear').click();
            common.enterSelectBoxNormal('cbbLoai', 'trong ngay');
            common.btnID('btnTimKiem');
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("phauthuatid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
                            currentUrl += `&phauthuatid=${phauThuatId}`;
                            cy.visit(currentUrl);
                            cy.wait(1000);

                            common.btnID('btnVAOTH');
                            common.btnID('txtKetThucPT');
                            cy.get('#txtChuanDoanTruocMoPT').type(testCase.txtChuanDoanTruocMoPT);
                            cy.get('#txtChuanDoanSauMoPT').type(testCase.txtChuanDoanSauMoPT);
                            common.btnID('btnHOANTAT');
                            common.clickConfirmBtn();
                            common.enterSelectBoxElasticSearch('cbbPPGayMePT', testCase.cbbPPGayMePT);
                            common.enterSelectBoxElasticSearch('cbbBacSiPT', testCase.cbbBacSiPT);
                            common.enterSelectBoxUlLi('cbbChiDinhMoPT', testCase.cbbChiDinhMoPT);
                            common.enterSelectBoxElasticSearch('cbbPhuongPhapPT', 'tt13.0578');
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

                        });
                });
        });

        it('tổng kết ra khoa', function () {
            common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');

            cy.wait(1000);
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(2) a')
                .then(text => {
                    const re = new RegExp("noitruid=([^&]*)");
                    let hoadonid = re.exec(text)[1];
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachdieutrinoitrudraw', 'wpid=bacsidraw')
                            currentUrl += `&noitruid=${hoadonid}`;
                            cy.visit(currentUrl);

                            cy.get(':nth-child(3) > .accordion-btn-wrap').click();
                            cy.get('.active > ul > :nth-child(2) > a').click();
                            cy.get('#txtThoiGianRa').click();
                            common.btnID('btnSaveXuTri');
                            common.btnID('btnTongHopXml');
                            cy.wait(2000);
                            common.clickConfirmBtn();
                            cy.get('.active > ul > :nth-child(5) > a').click();
                            cy.get('#leftMenu ul li ul.jstree-children li a:first').click();

                            cy.wait(2000);
                            cy.document().then(doc => {

                                const pdf = doc.querySelectorAll('#divNoiTruContent #divMrViewer .ibox-content #divXmlContent iframe');
                                if (pdf.length > 0) {
                                    cy.log('Đã hiển thị hồ sơ Bệnh Án')
                                } else {
                                    cy.get('.sweet-alert p[style="display: block;"]').invoke('text').then(alert=>{
                                        throw new Error(alert);
                                    })
                                }
                            })

                            cy.get('.active > ul > :nth-child(2) > a').click();
                            cy.get('#txtThoiGianRa').click();
                            common.enterSelectBoxElasticSearch('cboBacsi', 'duy');
                            common.btnID('btnHOANTAT');
                            cy.wait(1000);
                        });


                });
        });

        it('Tất toán viện phí', function () {
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
                            cy.wait(500);
                            common.btnID('btnHOANTAT');
                            cy.wait(300);
                            common.btnID('btnAddBienlai');
                            cy.wait(1000);

                            cy.get('#aTrangThai i.badge').invoke('text').then(status => {
                                if (status.trim() === 'Hoàn tất') {
                                    cy.log('Hoàn tất tất toán thành công');
                                } else {
                                    throw new Error('Hoàn tất tất toán không thành công')
                                }
                            });
                        });
                    ss
                });
        });

    }
});