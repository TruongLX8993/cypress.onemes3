const common = require('../common.cy');
const enviroment = require('../../../enviroment.json');

describe("Giao diện khám bệnh", () => {


    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('khambenhdanhsachdraw');

    });

    it('check vào khám ', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai','cho thuc hien');
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click();
        cy.get('#divKhamBenhDanhSachContent tbody tr:nth-child(3)  td a').eq(4).click();
        cy.get('#btnVAOKHAM').click();

        cy.get('a#aTrangThai i.badge')
            .should('have.text', 'Đang thực hiện')
            .then(($badge) => {
                const hasBadgeClass = $badge.hasClass('badge');
                if (hasBadgeClass) {
                    cy.log('Đổi trạng thái thực hiện thành công');
                    cy.get('#btnDoiPhongKham').click();
                    common.enterSelectBoxElasticSearch('cboHangDoiKhamBenh','ls');
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

                } else {
                    cy.fail('Đổi trạng thái thực hiện thất bại');
                }
            });







    });

    it('Chỉ định dịch vụ bằng nhiều nhóm', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai','cho thuc hien');
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click();
        cy.get('#divKhamBenhDanhSachContent tbody tr:nth-child(3) td:nth-child(4) a')
            .click();
        cy.get('#btnVAOKHAM').click();
        cy.get('#txtChanDoanSoBo').type('viêm');
        // cy.get('#txtTimKiem').type('2300516992');
        // common.enterSelectBoxNormal('cbbLoai','3');
        // cy.get('#btnTimKiem').click();
        // cy.get('#divKhamBenhDanhSachContent tbody tr:nth-child(1) td:nth-child(4) a')
        //     .click();
        // cy.get('#btnVAOKHAM').click();
        // cy.get('#txtChanDoanSoBo').type('viêm');
        // cy.get('[onclick="if(checkChungChiHanhNghe()){ addDichVu();ConnectToPrintServer();coreLstPhieuIn = [];coreDemPhieuIn = 0;}"] > .btn').click();
        // cy.get('#0ff545a5-1838-435e-956d-0d4731233886_anchor').click()
        cy.contains('Chỉ định theo nhiều nhóm').click();
        cy.contains('Khám bệnh').click();
        common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom','cls01.1');
        cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').first().click({ force: true })
        cy.get('#previewPDFChonDV').click();
        cy.wait(7000);

        cy.get('body').type('{esc}');
        cy.get('#aTrangThai i')
            .should('have.text', 'Đang làm DV')
            .then(($i) => {
                const text = $i.text().trim();
                if (text === 'Đang làm DV') {
                    cy.log('Đổi trạng thái thành công');

                    // cy.get('table#tblDichVu tbody tr td')
                    //     .contains('Bảo hiểm')
                    //     .parent()
                    //     .find('td > span.badge')
                    //     .should('have.text', 'Chờ thực hiện')
                    //     .then(() => {
                    //         cy.log('Kiểm tra thành công') ;
                    //     }).then(()=>{
                    //         cy.fail('kiểm tra thất bại');
                    // });



                    common.btnID('btnTHUHOIDV');
                    cy.get('table#tblDichVu tbody tr.dichvu td:nth-child(1) > [title="Sửa"]').click();
                    cy.get('#cboDoiTuongUpdate').select('Không BH');
                    common.enterSelectBoxElasticSearch('cboHangdoiUpdate','LS01.2');

                    cy.contains('Cập nhập').click();
                    cy.get('table#tblDichVu tbody tr.dichvu td:nth-child(1) > [title="Xóa"]').click();
                    cy.get('.confirm').click();
                    common.btnID('btnDILAMDV');
                    // cy.get('.confirm').click();

                    //bo sung them chi dinh nhieu nhom
                    cy.contains('Chỉ định theo nhiều nhóm').click();
                    cy.contains('Khám bệnh').click();
                    common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom','tttk.1');
                    cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').first().click({ force: true })
                    cy.get('#previewPDFChonDV').click();
                    cy.wait(7000);
                    cy.get('body').type('{esc}');

                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });



    });

    it('Chỉ định dịch vụ bằng nhóm mẫu', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai','cho thuc hien');
        // cy.get('#txtTimKiem').type('2300516992');
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click();
        cy.get('#divKhamBenhDanhSachContent tbody tr:nth-child(3) td:nth-child(4) a')
            .click();
        cy.get('#btnVAOKHAM').click();
        cy.get('#txtChanDoanSoBo').type('viêm');
        cy.get('[onclick="if(checkChungChiHanhNghe()){ addDvMau();ConnectToPrintServer();coreLstPhieuIn = [];coreDemPhieuIn = 0;}"] > .btn').click();
        // cy.contains('XÉT NGHIỆM CƠ BẢN').click();
        cy.get('#divContentDMChiDinh > .table-responsive > .table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click();
        cy.wait(4000);
        // cy.get('.confirm').click();
        cy.get('#trDichVuMauPopupEdit0 > :nth-child(2)').click();
        cy.get('#previewPDFCDHA').click();
        cy.wait(20000);
        cy.get('body').type('{esc}');

        cy.get('#aTrangThai i')
            .should('have.text', 'Đang làm DV')
            .then(($i) => {
                const text = $i.text().trim();
                if (text === 'Đang làm DV') {
                    cy.log('Đổi trạng thái thành công');

                    common.btnID('btnTHUHOIDV');
                    cy.wait(10000);
                    cy.get('#divDichVuXNContent > .table-responsive > #tblDichVuXN > tbody > tr:nth-child(3) > td > [title="Sửa"] > .fa').click();
                    cy.get('#cboDoiTuongUpdate').select('Không BH');
                    common.enterSelectBoxElasticSearch('cboHangdoiUpdate','CLS04.1');

                    cy.contains('Cập nhập').click();
                    cy.get('#divDichVuXNContent > .table-responsive > #tblDichVuXN > tbody > tr:nth-child(3) > td > [title="Xóa"] > .fas').click();
                    cy.get('.confirm').click();
                    common.btnID('btnDILAMDV');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });

    });

    it('Check tác vụ không khám  ', function () {

        common.enterSelectBoxNormal('drpSelectTrangThai', 'cho thuc hien');
        // cy.get('#txtTimKiem').type('2300516926');
        common.enterSelectBoxNormal('cbbLoai', '3');
        cy.get('#btnTimKiem').click();
        cy.get('#divKhamBenhDanhSachContent tbody tr:nth-child(3) td:nth-child(4) a').click();
        common.btnID('btnVAOKHAM');
        common.btnID('btnHOANTRA');
        cy.get('.confirm').click();
        // cy.get('#divDonThuocContent tbody tr.groupthuoc1  td:nth-child(13) > .khambenh-a > .fas').click();
        // cy.get('.confirm').click();
        // common.btnID('btnHOANTRA');
        // cy.get('.confirm').click();
        // cy.contains('Vật tư').click();
        // cy.get('#divVatTuContent tbody tr:nth-child(2)  td:nth-child(9) > .khambenh-a > .fas').click();
        // cy.get('.confirm').click().wait(2000);
        // common.btnID('btnHOANTRA');
        // cy.get('.confirm').click();


    });

    it('Check khi kê VTYT / Thuốc tủ trực', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai', 'cho thuc hien');
        // cy.get('#txtTimKiem').type('2300520842');
        common.enterSelectBoxNormal('cbbLoai', '3');
        cy.get('#btnTimKiem').click();
        cy.get('#divKhamBenhDanhSachContent tbody tr:nth-child(3) td:nth-child(4) a').click();
        common.btnID('btnVAOKHAM');

        // click VTYT, xóa toàn bộ, xóa từng VTYT trong popup kê

        cy.get('#fromdonthuoc span#divMenuThuoc a:nth-child(5)').click();
        cy.get(':nth-child(1) > label > .icheckbox_square-green > .iCheck-helper').click();
        common.enterSelectBoxElasticSearch('cboKhoVTYT', 'ls02.14.01');
        cy.get('#cboThuocVTYT').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('32062b.201');
        cy.get(`span.select2-results > ul.select2-results__options `).find('li:nth-child(2)').click();
        cy.get('#txtSlVTYT').type('0.5');
        cy.contains('Thêm').click();
        cy.wait(2000);
        cy.get('#divDonVTYTContent > .table-responsive > #tblVatTu > thead > tr:nth-child(1) > th:nth-child(8) > .khambenh-a > .fa').click();
        cy.wait(2000);
        cy.get('.confirm').click();
        cy.contains('Thêm').click();
        cy.get(`span.select2-results > ul.select2-results__options `).find('li:nth-child(3)').click();
        cy.get('#txtSlVTYT').type('2');
        cy.contains('Thêm').click();
        cy.get('#divDonVTYTContent > .table-responsive > #tblVatTu > tbody > tr:nth-child(1) > td:nth-child(9) > .khambenh-a > .fas').click();
        cy.wait(2000);
        cy.get('.confirm').click();
        common.btnID('btnChuyenTh_TKXN');

        // Click Đơn tủ trực , xóa toàn bộ, xóa từng VTYT trong popup kê
        cy.get('#fromdonthuoc span#divMenuThuoc a:nth-child(7)').click();
        cy.get(':nth-child(1) > label > .icheckbox_square-green > .iCheck-helper').click();
        common.enterSelectBoxElasticSearch('cboKhoTuTruc','ls02.14.01');
        cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('20K61021');
        cy.get(`span.select2-results > ul.select2-results__options `).find('li:nth-child(2)').click();
        cy.get('#txtSl').type('0.5');
        cy.get('#txtSN').type('1');
        cy.get('#txtSlN').type('1');
        cy.get('#txtSlL').type('1');
        cy.contains('Thêm').click();
        cy.get('#divDonThuocDonTuTrucContent > .table-responsive > table#tblThuoc >  thead > tr:nth-child(1) > th:nth-child(12) > .khambenh-a > .fa').click();
        cy.wait(2000);
        cy.get('.confirm').click();
        cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('20K61021{enter}');
        cy.get('#txtSl').type('0.5');
        cy.get('#txtSN').type('1');
        cy.get('#txtSlN').type('1');
        cy.get('#txtSlL').type('1');
        cy.contains('Thêm').click();
        cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').focus();
        cy.get('span.select2-search').find('input.select2-search__field').type('20K61022');
        cy.get(`span.select2-results > ul.select2-results__options `).find('li:nth-child(2)').click();
        cy.get('#txtSl').type('0.5');
        cy.get('#txtSN').type('1');
        cy.get('#txtSlN').type('1');
        cy.get('#txtSlL').type('1');
        cy.contains('Thêm').click();
        cy.get('#divDonThuocDonTuTrucContent > .table-responsive > table#tblThuoc > tbody > tr:nth-child(1) > td:nth-child(13) > .khambenh-a > .fas').click();
        cy.get('.confirm').click();
        common.btnID('btnChuyenTh_TKXN');

        // Sửa xóa sau khi kê ở phần kê đơn

        // không hiển thị form sửa
        // cy.get('#divDonThuocContent> .table-responsive > #tblThuoc > tbody > tr.groupthuoc1  > td:nth-child(13) > a:first > .fa').click();

        cy.get('#divDonThuocContent> .table-responsive > #tblThuoc > tbody > tr:nth-child(2)  > td:nth-child(13) > a:nth-child(3) > .fas').click();
        cy.get('.confirm').click();
        cy.contains('Vật tư').click();

        //Sửa xóa sau khi kê ở phần vật tư

        // không hiển thị form sửa
        // cy.get('#divVatTuContent > .table-responsive > #tblVatTu > tbody > tr.groupvtyt1   > td:nth-child(9) > a:first > .fa').click();

        cy.get('#divVatTuContent > .table-responsive > #tblVatTu > tbody > tr:nth-child(2)   > td:nth-child(9) > a:nth-child(3) > .fas').click();
        cy.get('.confirm').click();
    });


    it('Check chức năng khám phối hợp', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai', 'cho thuc hien');
        // cy.get('#txtTimKiem').type('2300520842');
        common.enterSelectBoxNormal('cbbLoai', '3');
        cy.get('#btnTimKiem').click();
        cy.get('#divKhamBenhDanhSachContent tbody tr:nth-child(4) td:nth-child(4) a').click();
        common.btnID('btnVAOKHAM');
        cy.get('#txtChanDoanSoBo').type('dau bung');
        common.enterSelectBoxElasticSearch('cbbBacSi', 'bm006');
        common.enterSelectBoxElasticSearch('cbbCDBChinh', 'm07');
        cy.get('#fromchidinh > .ibox-title > .ibox-tools > a:nth-child(6)').click();
        common.enterSelectBoxElasticSearch('cbbHangDoiPopupTDCN', 'cls01.1');
        cy.get('div#divContentTDCN_ChiDinh div.icheckbox_square-green ins.iCheck-helper').first().click({force: true})
        common.btnID('previewPDFXN');
        cy.wait(3000);
        cy.get('body').type('{esc}');
        cy.get('#divMenuContent h5 #textMaBn').invoke('text').then((textMaBn) => {
            cy.log(textMaBn);
            common.goToFunctionFromMenu('khambenhdanhsachdraw');
            cy.get('#txtTimKiem').type(textMaBn);
            common.enterSelectBoxNormal('cbbLoai', '3');
            cy.get('#btnTimKiem').click();
            cy.get('#divKhamBenhDanhSachContent tbody tr:nth-child(1) td:nth-child(4) a').click();
            common.btnID('btnVAOKHAM');
            cy.get('#txtChanDoanSoBo').type('dau bung');
            common.enterSelectBoxElasticSearch('cbbBacSi', 'bm006');
            common.enterSelectBoxElasticSearch('cbbCDBChinh', 'm07');
            cy.get(':nth-child(5) > .col-md-12 > .select2-container > .selection > .select2-selection > ul > li > .select2-search__field').type('bệnh tả');
            cy.get('#select2-cbbCDBKemTheo-results').find('tr:first').click();
            common.btnID('btnHOANTAT');


        });

    });


    it('Check tác vụ hoàn tất khám', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai', 'cho thuc hien');
        common.enterSelectBoxNormal('cbbLoai', '3');
        cy.get('#btnTimKiem').click();
        cy.get('#divKhamBenhDanhSachContent tbody tr:nth-child(4) td:nth-child(4) a').click();
        common.btnID('btnVAOKHAM');
        common.btnID('btnHOANTAT');
        cy.get('.confirm').click();
        cy.get('#txtChanDoanSoBo').type('dau bung');
        common.enterSelectBoxElasticSearch('cbbBacSi','bm006');
        common.enterSelectBoxElasticSearch('cbbCDBChinh','m07');
        common.enterSelectBoxNormal(
            'cbbXuTri','cho ve');
        cy.get('#txtSoNgayDungThuoc').type('10');
        cy.get('#txtGhichu').type('Nhớ ăn uống đầy đủ không được bỏ bữa');
        common.btnID('btnSaveXuTri');
        common.btnID('btnHOANTAT');

        cy.get('a#aTrangThai i.badge')
            .should('have.text', 'Hoàn tất')
            .then(($badge) => {
                const hasBadgeClass = $badge.hasClass('badge');
                if (hasBadgeClass) {
                    cy.log('Đổi trạng thái thực hiện thành công');
                } else {
                    cy.fail('Đổi trạng thái thực hiện thất bại');
                }
            });

    });


    it('Check tác vụ thu hồi', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai', 'cho thuc hien');
        common.enterSelectBoxNormal('cbbLoai', '3');
        cy.get('#btnTimKiem').click();
        cy.get('#divKhamBenhDanhSachContent tbody tr:nth-child(3) td:nth-child(4) a').click();
        common.btnID('btnVAOKHAM');
        common.btnID('btnHOANTAT');
        cy.get('.confirm').click();
        cy.get('#txtChanDoanSoBo').type('dau bung');
        common.enterSelectBoxElasticSearch('cbbBacSi', 'bm006');
        common.enterSelectBoxElasticSearch('cbbChuyenKhoa', '10.3');
        common.enterSelectBoxElasticSearch('cbbCDBChinh', 'm07');
        common.enterSelectBoxNormal(
            'cbbXuTri', 'cho ve');
        cy.get('#txtSoNgayDungThuoc').type('10');
        cy.get('#txtGhichu').type('Nhớ ăn uống đầy đủ không được bỏ bữa');
        common.btnID('btnSaveXuTri');
        common.btnID('btnHOANTAT');

        cy.get('a#aTrangThai i.badge')
            .should('have.text', 'Hoàn tất')
            .then(($badge) => {
                const hasBadgeClass = $badge.hasClass('badge');
                if (hasBadgeClass) {
                    cy.log('Đổi trạng thái thực hiện thành công');
                    common.btnID('btnTHUHOI');
                    cy.get('a#aTrangThai i.badge')
                        .should('have.text', 'Đang thực hiện')
                        .then(($badge) => {
                            const hasBadgeClass = $badge.hasClass('badge');
                            if (hasBadgeClass) {
                                cy.log('Đổi trạng thái thực hiện thành công');
                                common.enterSelectBoxElasticSearch('cbbCDBChinh', 'm14');
                                common.btnID('btnHOANTAT');

                            } else {
                                cy.fail('Đổi trạng thái thực hiện thất bại');
                            }
                        });

                } else {
                    cy.fail('Đổi trạng thái thực hiện thất bại');
                }
            });

    });

});

