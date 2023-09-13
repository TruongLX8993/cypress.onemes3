const common = require('../common.cy');
const enviroment = require('../../../enviroment.json');
const testCases = require('./vietduc.testcase.json');

describe("Quy trình khám chữa bệnh - ngoại trú", () => {

    for (let i = 0; i < testCases.length; i++) {
        let testCase = testCases[0];

        let mabenhnhan;

        it('Tiếp nhận và khám bệnh', function () {
            common.visitAndLogin(enviroment.kcb);
            common.goToFunctionFromMenu('tiepnhandraw');
            cy.get('#txtTenBenhNhan').type('Cypress Ngoai Tru');
            cy.get('#txtNgaySinh').type('22/01/2008');
            cy.get('#txtDiaChiSoNha').type('44');
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
                    const dialog = doc.querySelectorAll('#divModalContentTamUng');
                    if (dialog.length > 0) {
                        cy.get('#dialogChung > .modal-content > .panel-heading > .close').click();
                        cy.get('#txtTimKiem').clear().type(mabn);
                        common.btnID('btnTimKiem');
                    } else {
                        cy.get('#txtTimKiem').clear().type(mabn);
                        common.btnID('btnTimKiem');
                    }
                });
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
                // cy.wait(7000);
                cy.get('#modalReportPdf > .modal-dialog').should('be.visible').then(() => {
                    cy.get('body').type('{esc}');
                })
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
                common.enterSelectBoxNormal('cbbXuTri', 'dieu tri ngoai tru');
                cy.wait(500)
                cy.get('body').type('{esc}')
                common.enterSelectBoxElasticSearch('cboKhoanhap', 'ls30');
                common.btnID('btnSaveXuTri');
                common.btnID('btnHOANTAT');
                cy.wait(1000);
            });

        });

        it('Thực hiện điều trị ngoại trú', function () {
            common.visitAndLogin(enviroment.kcb);
            common.goToFunctionFromMenu('danhsachtiepnhanngoaitrudraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');
            cy.get('#divWebPartContent tbody tr:first td a').eq(3).click();
            cy.wait(200);
            common.enterSelectBoxElasticSearch('cboBacSi','1002');
            common.btnID('btnNHAPKHOA');
            cy.wait(500);
            common.goToFunctionFromMenu('danhsachdieutringoaitrudraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');
            cy.get('#divWebPartContent tbody tr:nth-child(1) td a').eq(5).click();
            common.btnID('showThamKham');
            cy.get('.col-xs-12 > [onclick="showChiDinhNhanh();"]').click();
            cy.wait(1000);
            cy.get('#using_json ul.jstree-container-ul li:first a').click();
            common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', testCase.cbbHangDoiPopupNhieuNhom);
            cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').first().click({force: true})
            common.btnID('btnDongYChon');
            common.btnID('btnChapNhan');
            cy.wait(1000);

            common.enterSelectBoxElasticSearch('cboCheDoChamSoc', 'c2');
            cy.get('#txtDienBienBenh').type('abc');
            common.btnID('btnPopupHOANTAT');
            cy.wait(500);

            common.goToFunctionFromMenu('khambenhdanhsachdraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');
            cy.get('#divWebPartContent tbody tr:first td a').eq(4).click();
            common.btnID('btnVAOKHAM');
            common.enterSelectBoxElasticSearch('cbbBacSi', 'anh');
            common.btnID('btnHOANTAT');
            cy.wait(500);
            common.goToFunctionFromMenu('danhsachdieutringoaitrudraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');
            cy.get('#divWebPartContent tbody tr:nth-child(1) td a').eq(5).click();
            common.btnID('showDsYLenh');
            cy.get('tbody > :nth-child(2) > :nth-child(5)').click();
            cy.wait(300);
            // sao chep y lenh
            cy.get('#txtThoigian').invoke('val').then(time => {
                const timeTomorrow = common.inputDateTimeTomorrow(time);
                cy.log(timeTomorrow);
                common.btnID('btnSaoChep');
                cy.wait(1000);

                cy.document().then(doc=>{
                    const alert = doc.querySelectorAll('.sweet-alert');
                    if(alert.length > 0){
                        common.clickConfirmBtn();
                    }else{
                        cy.log('khong co dialog xuat hien')
                    }
                });

                cy.wait(1000);
                cy.get('#txtThoigian').invoke('val').then(time2 => {
                    if (timeTomorrow === time2) {
                        cy.log('Sao chep y lenh 1 ngay thanh cong');
                        common.btnID('btnPopupXOA');
                    } else {
                        throw new Error('Sao chep y lenh that bai');
                    }
                });

            });

            // Ke thuoc / VTYT
            common.btnID('showThamKham');
            cy.get('#btnToaThuocMau').click();
            cy.get('#cboThuocKD').parent().find('span.selection span.select2-selection').click();
            cy.get('span.select2-search').find('input.select2-search__field').type('20');
            cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(3)').click();

            cy.get('#txtSlKD').type(testCase.txtSlKD);
            cy.get('#txtSlNKD').type(testCase.txtSlNKD);
            cy.get(':nth-child(4) > .checkbox-inline > .icheckbox_square-green > .iCheck-helper').click();
            cy.get(':nth-child(1) > :nth-child(8) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
            cy.get(':nth-child(2) > :nth-child(7) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
            common.btnID('btnChon');
            cy.get('span.select2-search').find('input.select2-search__field').type('20');
            cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(3)').click();

            cy.get('#txtSlKD').type('1');
            cy.get('#txtSlNKD').type('2');
            // cy.get(':nth-child(4) > .checkbox-inline > .icheckbox_square-green > .iCheck-helper').click();
            cy.get(':nth-child(1) > :nth-child(8) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
            cy.get(':nth-child(2) > :nth-child(7) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
            common.btnID('btnChon');
            common.clickConfirmBtn({timeout: 4000})
            cy.get('table#tblThuoc > thead > tr > th:nth-child(10) > .ylenh-a > .fa').click();
            common.clickConfirmBtn();
            cy.get('#cboThuocKD').parent().find('span.selection span.select2-selection').click();
            cy.get('span.select2-search').find('input.select2-search__field').type('20');
            cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(3)').click();
            cy.get('#txtSlKD').type(testCase.txtSlKD);
            cy.get('#txtSlNKD').type(testCase.txtSlNKD);
            cy.get(':nth-child(1) > :nth-child(8) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
            cy.get(':nth-child(2) > :nth-child(7) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
            common.btnID('btnChon');
            cy.get('body').type('{esc}');
            cy.get('#cboThuocKD').parent().find('span.selection span.select2-selection').click();
            cy.get('span.select2-search').find('input.select2-search__field').type('20');
            cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(3)').click();

            cy.get('#txtSlKD').type(testCase.txtSlKD);
            cy.get('#txtSlNKD').type(testCase.txtSlNKD);
            cy.get(':nth-child(1) > :nth-child(8) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
            cy.get(':nth-child(2) > :nth-child(7) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
            common.btnID('btnChon');
            common.clickConfirmBtn();
            cy.get('table#tblThuoc > tbody > tr:first > td:nth-child(11) > .ylenh-a > .fas').click();
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
            common.enterSelectBoxElasticSearch('cboCheDoChamSoc', 'c2');
            cy.get('#txtDienBienBenh').type('abc');
            common.btnID('btnPopupHOANTAT');
            cy.wait(1000);

        });

        it('Tổng kết ra khoa', function () {
            common.visitAndLogin(enviroment.kcb);
            common.goToFunctionFromMenu('danhsachdieutringoaitrudraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');
            cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(5) a').click();
            cy.get('.active > ul > :nth-child(5) > a').click();
            cy.get('#txtThoiGianRa').clear();
            cy.get('#txtLyDoVaoVien').type('đau bụng');
            cy.get('#txtThoiGianRa').click();
            common.btnID('btnSaveXuTri');
            common.btnID('btnTongHopXml');
            cy.wait(500);
            common.clickConfirmBtn();
            cy.get('.active > ul > :nth-child(7) > a').click();
            common.btnID('btnXemBiaBA');
            cy.wait(1000);
            cy.get('body').type('{esc}');
            cy.wait(500);
            cy.get('.active > ul > :nth-child(5) > a').click();
            cy.get('#txtThoiGianRa').click();
            common.enterSelectBoxElasticSearch('cboBacsi','duy');
            common.btnID('btnHOANTAT');
            cy.wait(1000);

        });

        it('Tất toán viện phí', function () {
            common.visitAndLogin(enviroment.kcb);
            common.goToFunctionFromMenu('vienphidanhsachdraw');
            cy.get('#txtTimKiem').clear().type(mabenhnhan);
            common.btnID('btnTimKiem');
            cy.get('#divWebPartContent tbody tr:first td a').eq(3).click();
            cy.wait(500);
            common.enterSelectBoxElasticSearch('cboHangDoiCauHinh','hc10.6');
            cy.get('.form-group button:first').click();
            common.btnID('btnCHUYENTHANHTOAN');
            cy.wait(300);
            common.btnID('btnHOANTATTUDANGTT');
            common.enterSelectBoxUlLi('cboQuyenBienLai','qblt01');
            cy.get('#txtSoDinhDanh').type('12345');
            common.btnID('btnAddBienlai');
            cy.wait(300);
            common.clickConfirmBtn();
            cy.wait(1000);
            cy.get('body').type('{esc}');
            cy.get('body').type('{esc}');

        });


    }
});