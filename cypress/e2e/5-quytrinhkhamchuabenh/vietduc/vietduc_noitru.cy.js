const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');
const testCases = require('./vietduc.testcase.json');
const {getHtml, getCurrentUrl} = require("../../common.cy");

describe("Quy trình khám chữa bệnh - nội trú", () => {


    for (let i = 0; i < testCases.length; i++) {
        let testCase = testCases[0];

        let mabenhnhan;

        it('Tiếp nhận, khám bệnh', function () {
            common.visitAndLogin(enviroment.kcb);
            common.goToFunctionFromMenu('tiepnhandraw');
            cy.get('#txtTenBenhNhan').type('Cypress Noi Tru1');
            cy.get('#txtNgaySinh').type('22/01/2008');
            cy.get('#txtDiaChiSoNha').type('44');
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
            common.enterSelectBoxElasticSearch('cbbDonViHanhChinh', 'HG');
            cy.get('#txtDienThoai').type('0123462781');
            cy.get('#txtSoCMND').type('0022993849');
            common.enterSelectBoxElasticSearch('cboQuocGia', 'VN');
            common.enterSelectBoxElasticSearch('cbbDanToc', '48');
            common.enterSelectBoxElasticSearch('cbbNgheNghiep', '09');
            common.enterSelectBoxElasticSearch('cbbKhoaPhong', 'LS03');
            common.enterSelectBoxNormal('cbbHangDoi', 'tttk.1');
            cy.get('#btnCHUYENTH').click();
            cy.wait(1000);
            cy.get('#txtMaBenhNhan').invoke('val').then(mabn => {
                cy.log(mabn)
                mabenhnhan = mabn;

                // dong tam thu
                common.goToFunctionFromMenu('dongtamung');
                cy.wait(1000);

                cy.document().then(doc => {
                    const dialog = doc.querySelectorAll('#divModalContentTamUng form');
                    if (dialog.length > 0) {
                        cy.get('#dialogChung > .modal-content > .panel-heading > .close').click();
                        cy.get('#txtTimKiem').clear().type(mabn);
                        common.btnID('btnTimKiem');
                    } else {
                        cy.get('#txtTimKiem').clear().type(mabn);
                        common.btnID('btnTimKiem');
                    }
                });
                cy.get('#txtTimKiem').clear().type(mabn);
                common.btnID('btnTimKiem');
                cy.get('#divVienPhiDanhSachContent tbody tr:first td a').eq(3).click();
                cy.get('#txtTienTamUng').type('111111111');
                common.btnID('btnHoanTatTamUng');

                // chi dinh kham phoi hop
                common.goToFunctionFromMenu('khambenhdanhsachdraw');
                cy.get('#txtTimKiem').clear().type(mabn);
                cy.get('#btnTimKiem').click();
                cy.get('#divKhamBenhDanhSachContent tbody tr:nth-child(1) td:nth-child(4) a').click();
                cy.get('#btnVAOKHAM').click();
                cy.get('#txtChanDoanSoBo').type(testCase.txtChanDoanSoBo);
                cy.contains('Chỉ định theo nhiều nhóm').click();
                cy.wait(1000);
                cy.contains('Khám bệnh').click();
                common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', testCase.cbbHangDoiPopupNhieuNhom);
                cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').first().click({force: true})
                cy.get('#previewPDFChonDV').click();
                cy.wait(500);
                cy.get('#modalReportPdf > .modal-dialog').should('be.visible').then(() => {
                    cy.get('body').type('{esc}');
                });
                cy.wait(500);

                cy.get('#aTrangThai i')
                    .should('have.text', 'Đang làm DV')
                    .then(($i) => {
                        const text = $i.text().trim();
                        if (text === 'Đang làm DV') {
                            cy.log('Đổi trạng thái thành công');
                        } else {
                            cy.fail('Đổi trạng thái thất bại');
                        }
                    });

                // thuc hien kham phoi hop
                common.goToFunctionFromMenu('khambenhdanhsachdraw');
                cy.get('#txtTimKiem').clear().type(mabn);
                common.btnID('btnTimKiem');
                cy.get('#divKhamBenhDanhSachContent tbody tr:first td a').eq(4).click();
                common.btnID('btnVAOKHAM');
                cy.get('#txtChanDoanSoBo').type(testCase.txtChanDoanSoBo);
                common.enterSelectBoxElasticSearch('cbbBacSi', 'anh');
                common.enterSelectBoxElasticSearch('cbbCDBChinh', 'm07');
                cy.get(':nth-child(5) > .col-md-12 > .select2-container > .selection > .select2-selection > ul > li > .select2-search__field').type('bệnh tả');
                cy.get('#select2-cbbCDBKemTheo-results').find('tr:first').click();
                common.btnID('btnHOANTAT');
                cy.wait(500);
                common.btnID('buttonBackKB');
                cy.get('#txtTimKiem').clear().type(mabn);
                common.btnID('btnTimKiem');
                cy.get('#divKhamBenhDanhSachContent tbody tr:first td a').eq(4).click();
                common.btnID('btnVAOKHAM');
                cy.get('#txtChanDoanSoBo').type(testCase.txtChanDoanSoBo);
                common.enterSelectBoxElasticSearch('cbbBacSi', 'anh');
                common.enterSelectBoxElasticSearch('cbbBacSi', 'anh');
                common.enterSelectBoxElasticSearch('cbbCDBChinh', 'm07');
                cy.get(':nth-child(5) > .col-md-12 > .select2-container > .selection > .select2-selection > ul > li > .select2-search__field').type('bệnh tả');
                cy.get('#select2-cbbCDBKemTheo-results').find('tr:first').click();

                // chi dinh VTYT/ Thuoc roi chi dinh noi tru
                cy.get('#fromdonthuoc span#divMenuThuoc a:nth-child(5)').click();
                cy.get(':nth-child(1) > label > .icheckbox_square-green > .iCheck-helper').click();
                common.enterSelectBoxElasticSearch('cboKhoVTYT', testCase.cboKhoVTYT);
                cy.get('#cboThuocVTYT').parent().find('span.selection span.select2-selection').click();
                cy.get('span.select2-search').find('input.select2-search__field').type(testCase.cboThuocVTYT);
                cy.get(`span.select2-results > ul.select2-results__options `).find('li:nth-child(2)').click();
                cy.get('#txtSlVTYT').type('0.5');
                cy.contains('Thêm').click();
                common.btnID('btnChuyenTh_TKXN');

                // Click Đơn tủ trực , xóa toàn bộ, xóa từng VTYT trong popup kê
                cy.get('#fromdonthuoc span#divMenuThuoc a:nth-child(7)').click();
                cy.get(':nth-child(1) > label > .icheckbox_square-green > .iCheck-helper').click();
                common.enterSelectBoxElasticSearch('cboKhoTuTruc', testCase.cboKhoTuTruc);
                cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
                cy.get('span.select2-search').find('input.select2-search__field').type('20S13094');
                cy.get(`span.select2-results > ul.select2-results__options `).find('li:nth-child(2)').click();
                cy.get('#txtSl').type('0.5');
                cy.get('#txtSN').type('1');
                cy.get('#txtSlN').type('1');
                cy.get('#txtSlL').type('1');
                cy.contains('Thêm').click();
                common.btnID('btnChuyenTh_TKXN');
                cy.wait(500);
                common.enterSelectBoxNormal('cbbXuTri', 'dieu tri noi tru');
                cy.wait(500)
                cy.get('body').type('{esc}')
                common.enterSelectBoxElasticSearch('cboKhoanhap', 'ls25');
                common.enterSelectBoxElasticSearch('cboLyDoVaoVien', '01');
                cy.get('#txtLyDoVaoVienNT').type('dau bung');
                common.btnID('btnSaveXuTri');
                common.btnID('btnHOANTAT');
                cy.wait(1000);

            });
        });

        it('Thực hiện điều trị nội trú', function () {
            common.visitAndLogin(enviroment.kcb);
            common.goToFunctionFromMenu('danhsachttvaorakhoadraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');
            cy.get('#divDanhSachContent tbody tr:first td a').eq(3).click();
            common.btnID('btnNHAPKHOA');
            cy.wait(500);
            common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');
            cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(2) td a').eq(5).click();
            common.btnID('showThamKham');
            cy.get('button[onclick="showChiDinhNhanh()"]').click();
            cy.wait(1000);
            cy.get('#using_json ul.jstree-container-ul li:first a').click();
            common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', testCase.cbbHangDoiPopupNhieuNhom);
            cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').first().click({force: true})
            common.btnID('btnDongYChon');
            common.btnID('btnChapNhan');
            cy.wait(1000);
            common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'c2');
            cy.get('#txtDienBienYLenhThamKham').type('abc');
            common.btnID('btnPopupHOANTAT');
            cy.wait(500);

            common.goToFunctionFromMenu('khambenhdanhsachdraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');
            cy.get('#divKhamBenhDanhSachContent tbody tr:first td a').eq(4).click();
            common.btnID('btnVAOKHAM');
            common.enterSelectBoxElasticSearch('cbbBacSi', 'anh');
            common.btnID('btnHOANTAT');
            cy.wait(500);

            common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');
            cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(2) td a').eq(5).click();
            common.btnID('showDsYLenh');
            cy.get('#divDsYLenh .ibox-content:first tbody#tbodyylenh tr:first td:nth-child(4) a').click();
            cy.wait(300);
            cy.get('#txtThoigianThamKham').invoke('attr', 'data-value').then(time => {
                const timeTomorrow = common.inputDateTimeTomorrow(time);
                cy.log(timeTomorrow);
                // sao chep y lenh
                common.btnID('btnSaoChep');
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
                    } else {
                        throw new Error('Sao chep y lenh that bai');
                    }
                });

            });

            // thêm y lệnh phẫu thuật
            common.btnID('showThamKham');
            cy.get('button[onclick="DrawHoiChanInThamKham();"]').click();
            common.enterSelectBoxElasticSearch('cboHangDoiPT', 'b2');
            common.btnID('btnChapNhanNhapTheBhyt');
            cy.get('#txtDienBienYLenhThamKham').type('abc');
            common.btnID('btnPopupHOANTAT');
            cy.wait(200);
            cy.get('a[onclick="fnCustomBack();"]').click();
            cy.wait(500);
            common.btnID('btnCHUYENMO');
            common.clickConfirmBtn();

        });

        it('Thực hiện mổ', function () {
            common.visitAndLogin(enviroment.kcb);
            common.goToFunctionFromMenu('danhsachphauthuatdraw');

            cy.get('.panel-heading strong:first a').click();
            cy.wait(300);
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            cy.get('#select2-drpSelectHangDoi-container span.select2-selection__clear').click();
            common.enterSelectBoxNormal('cbbLoai', 'trong ngay');
            common.btnID('btnTimKiem');
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

                            common.btnID('btnVAOTH');
                            common.btnID('txtKetThucPT');
                            cy.get('#txtChuanDoanTruocMoPT').type(testCase.txtChuanDoanTruocMoPT);
                            cy.get('#txtChuanDoanSauMoPT').type(testCase.txtChuanDoanSauMoPT);
                            common.btnID('btnHOANTAT');
                            common.clickConfirmBtn();
                            common.enterSelectBoxElasticSearch('cbbPPGayMePT', testCase.cbbPPGayMePT);
                            common.enterSelectBoxElasticSearch('cbbBacSiPT', testCase.cbbBacSiPT);
                            common.enterSelectBoxUlLi('cbbChiDinhMoPT', testCase.cbbChiDinhMoPT);
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

                            common.btnID('lnkXuTriPT');
                            cy.wait(200);
                            cy.get('body').type('{esc}');
                            common.enterSelectBoxElasticSearch('cboKhoanhap', 'ls25');
                            common.btnID('btnSaveXuTri');
                        });
                });
        });

        it('Thực hiện điều dưỡng và tổng kết ra khoa', function () {
            common.visitAndLogin(enviroment.kcb);
            common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');
            cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(2) td:nth-child(2) a').click();
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
            cy.contains('Lịch sử chăm sóc').click();
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
            cy.contains('Lịch sử chăm sóc').click();
            cy.get('#BodyChiTietDraw > tr:nth-child(3) > td:nth-child(3) > a').click();
            common.btnID('btnXoa');

            // tong ket ra khoa
            common.btnID('buttonBackNT');
            cy.wait(500);
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');
            cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(2) td:nth-child(5) a').click();
            cy.get(':nth-child(3) > .accordion-btn-wrap').click();

            cy.get('.active > ul > :nth-child(4) > a').click();
            cy.get('#txtThoiGianRa').click();
            common.btnID('btnSaveXuTri');
            common.btnID('btnTongHopXml');
            cy.wait(2000);
            common.clickConfirmBtn();
            cy.get('.active > ul > :nth-child(7) > a').click();
            common.btnID('btnXemBiaBA');
            cy.wait(1000);
            cy.get('body').type('{esc}');
            cy.wait(500);
            cy.get('.active > ul > :nth-child(4) > a').click();
            cy.get('#txtThoiGianRa').click();
            common.enterSelectBoxElasticSearch('cboBacsi', 'duy');
            common.btnID('btnHOANTAT');
            cy.wait(1000);

        });

        it('Tất toán viện phí', function () {
            common.visitAndLogin(enviroment.kcb);
            common.goToFunctionFromMenu('vienphidanhsachdraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');
            cy.get('#divVienPhiDanhSachContent tbody tr:first td a').eq(3).click();
            cy.wait(500);
            common.enterSelectBoxElasticSearch('cboHangDoiCauHinh', 'hc10.6');
            cy.get('.form-group button:first').click();
            common.btnID('btnCHUYENTHANHTOAN');
            cy.wait(300);
            common.btnID('btnHOANTATTUDANGTT');
            common.enterSelectBoxUlLi('cboQuyenBienLai', 'qblt01');
            cy.get('#txtSoDinhDanh').type('12345');
            common.btnID('btnAddBienlai');
            cy.wait(300);
            common.clickConfirmBtn();
            cy.wait(1000);
            cy.get('body').type('{esc}');
            cy.wait(1000);

            cy.get('#aTrangThai i.badge').invoke('text').then(status => {
                if (status.trim() === 'Hoàn tất') {
                    cy.log('Hoàn tất tất toán thành công');
                } else {
                    throw new Error('Hoàn tất tất toán không thành công')
                }
            });

        });

    }
});