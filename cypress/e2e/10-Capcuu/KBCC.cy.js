const common = require('../common.cy');
const insuaranceNumber = require('../rd');
const timers = require("timers");


describe("Khám bệnh cấp cứu", () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('danhsachkhamcapcuu');


    });


    it('Check tác vụ "VTYT sử dụng"', function () {
        // common.enterSelectBoxNormal('drpSelectTrangThai','Chờ thực hiện{enter}');
        // common.enterSelectBoxNormal('cbbLoai','3{enter}');
        // cy.get('#btnTimKiem').click({timeout:7000});
        common.enterSelectBoxNormal('drpSelectTrangThai','Chờ thực hiện');
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click({timeout:7000});
        cy.get('#divDanhSachContent tbody tr:nth-child(2) td:nth-child(2) a').click().wait(2000);
        //         // Cấu hình nhanh thì k chay 4 dòng sau
        // cy.get('#cbbTuaTrucCC').parent().find('span.selection span.select2-selection').click();
        // cy.get('span.select2-search').find('input.select2-search__field').type('BS');
        // cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
        // cy.contains('Chấp nhận').click();
        cy.get('#btnVAOTHUCHIEN').click();
        cy.get('#cboChuyenKhoa').parent().find('span.selection span.select2-selection').click();
        cy.get('input.select2-search__field').type('02{enter}').wait(1000);
        cy.get('.select2-results__option > table > tbody > tr > [style="text-align: left;"]').click();
        cy.get('#divline thead tr th:nth-child(1) .iCheck-helper').click();
        cy.get('#txtKetLuan').clear().type('Thêm VTYT');
        cy.get('#themylenhcc').click();
        cy.get('#cbbBacSiChiDinh').select(2);
        cy.get('#btnChonBsiChiDinh').click();
        cy.get('#txtChanDoanSoBo').type('Cypress chấn đoán')
        cy.get('#txtMoTaDauHieuLamSang').type('Cypress nhập xử trí');
        common.enterSelectBoxElas('cboCDBChinh','M49{enter}');
        cy.get('#hoantatylenhcc').click();
        cy.contains('VTYT sử dụng').click().wait(1000);
        cy.document().then(doc=>{
            const  alert = doc.querySelectorAll('.sweet-alert');
            if(alert.length > 0 ) {
                cy.wait(1000);
                cy.get('.confirm').click();
                cy.viewport(1500.800);
                cy.get('#btnHOANTAT').click();
                cy.fail('Kho chưa cấu hình - Không thể kê VTYT');


            }else {
                cy.contains('label', 'Trong gói (Theo giường)').prev().find('ins.iCheck-helper').click();
                cy.get('#txtHang').parent().find('span.selection span.select2-selection').click();
                cy.get('span.select2-search').find('input.select2-search__field').type('001').wait(1000);
                cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click({force: true});
                cy.get('#txtSoLuong').clear().type('10000');
                cy.get('#btnKeVTYT').click().wait(1000);
                cy.get('.confirm').click().wait(1000);
                cy.get('#txtSoLuong').clear().type('1.5');
                cy.get('#btnKeVTYT').click();
                cy.get('body').type('{esc}');
                cy.get('#txtHang').parent().find('span.selection span.select2-selection').click();
                cy.get('span.select2-search').find('input.select2-search__field').type('001').wait(1000);
                cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(3)').click({force: true});
                cy.get('#txtSoLuong').clear().type('1');
                cy.get('#btnKeVTYT').click();
                cy.get('body').type('{esc}');
                cy.get('#txtHang').parent().find('span.selection span.select2-selection').click();
                cy.get('span.select2-search').find('input.select2-search__field').type('001').wait(1000);
                cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(4)').click({force: true});
                cy.get('#txtSoLuong').clear().type('0.1');
                cy.get('#btnKeVTYT').click();
                cy.get('body').type('{esc}');
                cy.get('#divVanDeCS tr:nth-child(1) td:nth-child(4) input').click().clear().type('2.5');
                cy.get('#divVanDeCS tr:nth-child(1) td:nth-child(6) a i.fas').click().wait(1000);
                cy.get('[onclick="OnXacNhan(); return false;"] > strong').click();
                cy.get('#divKhamCapCuuContent .row .ibox-content .col-xs-12 > .nav > :nth-child(2) > a').click();
                cy.get('.btn-danger > b').click().wait(1000);
                cy.get('.confirm').click();
                cy.contains('VTYT sử dụng').click().wait(1000);
                cy.contains('label', 'Trong gói (Theo giường)').prev().find('ins.iCheck-helper').click();
                cy.get('#txtHang').parent().find('span.selection span.select2-selection').click();
                cy.get('span.select2-search').find('input.select2-search__field').type('001').wait(1000);
                cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click({force: true});
                cy.get('#txtSoLuong').clear().type('1');
                cy.get('#btnKeVTYT').click().wait(1000);
                cy.get('[onclick="OnXacNhan(); return false;"] > strong').click();
            }
        });

    });



    it('Check tác vụ "Hoàn trả" ', function () {
        // common.enterSelectBoxNormal('drpSelectTrangThai','Chờ thực hiện{enter}');
        // common.enterSelectBoxNormal('cbbLoai','3{enter}');
        // cy.get('#btnTimKiem').click({timeout:7000});
        common.enterSelectBoxNormal('drpSelectTrangThai','Chờ thực hiện');
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click({timeout:7000});
        cy.get('#divDanhSachContent tbody tr:nth-child(2) td:nth-child(2) a').click().wait(2000);
        //         // Cấu hình nhanh thì k chay 4 dòng sau
        // cy.get('#cbbTuaTrucCC').parent().find('span.selection span.select2-selection').click();
        // cy.get('span.select2-search').find('input.select2-search__field').type('BS');
        // cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
        // cy.contains('Chấp nhận').click();
        cy.get('#btnVAOTHUCHIEN').click();
        cy.get('#divtableLs tbody').then(($tbody) => {
            if($tbody.find('tr').length===0){
                cy.get('#btnHOANTRA').click().wait(1000);
                cy.get('.confirm').should('be.visible').click();
                cy.wait(1000);
                cy.get('#aTrangThai i').invoke('text').then(status=>{
                    if (status.trim() === 'Hoàn trả') {
                            cy.log('Đổi trạng thái thành công');
                        } else {
                            cy.fail('Đổi trạng thái thất bại');
                        }
                    });
            } else {
                    cy.fail('Cấp cứu đã có dịch vụ, không thể hoàn trả!');
                    cy.get('.confirm').click();
            }
        });

    });



    it(' Ket thuc kham ', function () {
            // common.enterSelectBoxNormal('drpSelectTrangThai','Chờ thực hiện');
            // common.enterSelectBoxNormal('cbbLoai','3');
            // cy.get('#btnTimKiem').click({timeout:7000});
        common.enterSelectBoxNormal('drpSelectTrangThai','Chờ thực hiện');
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click({timeout:7000});

            cy.get('#divDanhSachContent tbody tr:nth-child(1) td:nth-child(2) a').click().wait(2000);

            //         // Cấu hình nhanh thì k chay 3 dòng sau
            // cy.get('#cbbTuaTrucCC').parent().find('span.selection span.select2-selection').click();
            // cy.get('span.select2-search').find('input.select2-search__field').type('BS');
            // cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
            // cy.contains('Chấp nhận').click();

            cy.get('#btnVAOTHUCHIEN').click().wait(1000);

            cy.get('#themylenhcc').click();
            cy.get('#cbbBacSiChiDinh').select(2);
            cy.get('#btnChonBsiChiDinh').click();
            cy.get('#txtChanDoanSoBo').type('Cypress chấn đoán')
            cy.get('#txtMoTaDauHieuLamSang').type('Cypress nhập xử trí');
            common.enterSelectBoxElas('cboCDBChinh','M49{enter}');
            cy.get('#chidinhnhanh').click();
            cy.get('#using_json ul li:nth-child(3) a').click();
            common.enterSelectBoxElas('cbbHangDoiPopupNhieuNhom','ls{enter}');
            cy.get('#divContentChiDinh .icheckbox_square-green ins.iCheck-helper').eq(0).click({force: true});
            cy.get('#previewPDFXN').click().wait(2000);
            cy.get('body').type('{esc}');
            cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(8) .badge').invoke('text')
                .then((Trangthai1)=>{
                    cy.log(Trangthai1);
                    cy.get('#tblDichVu thead tr th:nth-child(2) a i.fas').click().wait(500);
                    cy.get('.confirm').click().wait(500);
                    cy.reload();
                    cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(8) .badge').invoke('text')
                        .then((Trangthai2)=>{
                            cy.log(Trangthai2);
                            if(Trangthai1 !== Trangthai2){
                                cy.log('Đã cập nhật trạng thái');
                                cy.get('#tblDichVu thead tr th:nth-child(1) a i.fa').click().wait(500);
                                cy.get('.confirm').click();
                                cy.get('#hoantatylenhcc').click().wait(1000);
                                cy.get('#divLSTheoDoi tr:first td:nth-child(6) .badge').should('have.text','Hoàn tất')
                                    .then(($span)=>{
                                        const text = $span.text().trim();
                                        if(text === 'Hoàn tất'){
                                            cy.log('Y lệnh hoàn tất');
                                        }else {
                                            cy.fail('Y lệnh chưa hoàn tất - Không thể kết thúc khám');
                                        }
                                    });
                                cy.get('#cboXuTri').select('Điều trị lưu').wait(1000);
                                cy.document().then(doc=> {
                                    const alert = doc.querySelectorAll('.sweet-alert');
                                    if (alert.length > 0) {
                                        cy.get('.confirm').click();
                                    } else {
                                        cy.log('Cấp cứu dưới 4 tiếng')
                                    }
                                });
                                cy.get('#cboKhoanhap').parent().find('span.selection span.select2-selection').click({force: true} );
                                cy.get('span.select2-search').find('input.select2-search__field').type('ls').wait(2000);
                                cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(1)').click();
                                common.enterSelectBoxElas('cboICDChinh','a0{enter}');
                                cy.get('#btnSaveXuTri').click().wait(500);
                                cy.get('#cboChuyenKhoa').parent().find('span.selection span.select2-selection').click();
                                cy.get('span.select2-search').find('input.select2-search__field').type('02').wait(1000);
                                cy.get('.select2-results__option > table > tbody > tr > [style="text-align: left;"]').click();
                                cy.get('#divline thead tr th:nth-child(1) .iCheck-helper').click();
                                cy.get('#txtKetLuan').clear().type('Kết thúc khám');
                                cy.get('#btnHOANTAT').click().wait(1000);
                                cy.get('#aTrangThai i.badge')
                                    .should('have.text', 'Hoàn tất')
                                    .then(($badge) => {
                                        const hasBadgeClass = $badge.hasClass('badge');
                                        if (hasBadgeClass) {
                                            cy.log('Đổi trạng thái thành công');
                                        } else {
                                            cy.fail('Đổi trạng thái thất bại');
                                        }
                                    });
                                cy.get('#StatusBar').then(($StatusBar) => {
                                    if($StatusBar.find('#btnUnLock').length>0){
                                        cy.log('Xuất hiện tác vụ Khóa DL');
                                        cy.get('#themylenhcc').should('be.disabled').wait(1000);
                                        cy.get('#btnUnLock').click().wait(1000);
                                        cy.get('#themylenhcc').should('be.enabled').wait(1000);
                                        cy.get('#btnLock').click();
                                    } else {
                                        cy.fail('Không xuất hiện tác vụ Khóa DL');
                                    }
                                });
                            }else {
                                cy.fail('Chưa cập nhật trạng thái');
                            }
                        });
            });
    });


    it('Check tác vụ treo cấp cứu', function () {
        // common.enterSelectBoxNormal('drpSelectTrangThai','Chờ thực hiện{enter}');
        // common.enterSelectBoxNormal('cbbLoai','3{enter}');
        // cy.get('#btnTimKiem').click({timeout:7000});
        common.enterSelectBoxNormal('drpSelectTrangThai','Chờ thực hiện');
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click({timeout:7000});
        cy.get('#divDanhSachContent tbody tr:nth-child(1) td:nth-child(2) a').click().wait(2000);

        //         // Cấu hình nhanh thì k chay 4 dòng sau
        // cy.get('#cbbTuaTrucCC').parent().find('span.selection span.select2-selection').click();
        // cy.get('span.select2-search').find('input.select2-search__field').type('BS');
        // cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
        // cy.contains('Chấp nhận').click();

        cy.get('#btnVAOTHUCHIEN').click().wait(1000);
        cy.get('#cboChuyenKhoa').parent().find('span.selection span.select2-selection').click();
        cy.get('input.select2-search__field').type('02').wait(1000);
        cy.get('.select2-results__option > table > tbody > tr > [style="text-align: left;"]').click();
        cy.get('#divline thead tr th:nth-child(1) .iCheck-helper').click();
        cy.get('#txtKetLuan').clear().type('Treo cấp cứu');
        cy.get('#themylenhcc').click();
        cy.get('#cbbBacSiChiDinh').select(2);
        cy.get('#btnChonBsiChiDinh').click();
        cy.get('#txtChanDoanSoBo').type('Cypress chấn đoán')
        cy.get('#txtMoTaDauHieuLamSang').type('Cypress nhập xử trí');
        common.enterSelectBoxElas('cboCDBChinh','M49{enter}');
        cy.get('#hoantatylenhcc').click().wait(1000);
        cy.get('#divLSTheoDoi tr:first td:nth-child(6) .badge').should('have.text','Hoàn tất')
            .then(($span)=>{
                const text = $span.text().trim();
                if(text === 'Hoàn tất'){
                    cy.log('Y lệnh hoàn tất');
                }else {
                    cy.fail('Y lệnh chưa hoàn tất - Không thể treo');
                }
            });
        cy.get('#cboXuTri').select('Điều trị lưu').wait(1000);
        cy.document().then(doc=>{
           const alert = doc.querySelectorAll('.sweet-alert');
           if(alert.length > 0){
               cy.get('.confirm').should('be.visible').click();
           }else{
               cy.log('khoong xuat hien popup');
           }
        });

        cy.get('#cboKhoanhap').parent().find('span.selection span.select2-selection').click({force: true} );
        cy.get('span.select2-search').find('input.select2-search__field').type('ls').wait(2000);
        cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(1)').click();
        common.enterSelectBoxElas('cboICDChinh','a0{enter}');
        cy.get('#btnSaveXuTri').click().wait(500);
        cy.get('#btnTREO').click().wait(1000);
        cy.get('#divHeader a i')
            .invoke('text')
            .then(status => {
                if (status.trim() === 'Treo') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });
        cy.get('#StatusBar').then(($StatusBar) => {
            if($StatusBar.find('#btnUnLock').length>0){
                cy.log('Xuất hiện tác vụ Khóa DL');
                cy.get('#themylenhcc').should('be.disabled').wait(1000);
                cy.get('#btnUnLock').click().wait(1000);
                cy.get('#themylenhcc').should('be.enabled').wait(1000);
                cy.get('#btnLock').click();
            } else {
                cy.fail('Không xuất hiện tác vụ Khóa DL');
            }
        });
        cy.get('#textMaBn').invoke('text').then((Mabn)=>{
            cy.log(Mabn);
            common.goToFunctionFromMenu('vienphidanhsachdraw');
            cy.get('#txtTimKiem').type(Mabn);
            common.enterSelectBoxNormal('cbbLoai','3{enter}');
            cy.get('#btnTimKiem').click();
            cy.get('#divVienPhiDanhSachContent .table-responsive tbody tr:first td:nth-child(9) a .badge')
                .invoke('text').then(status=>{
                    if(status.trim() === 'Chờ tất toán'){
                        cy.log('Đúng trạng thái viện phí');
                    }else {
                        cy.fail('Trạng thái viện phí không đổi sang Chờ tất toán');
                    }
            });
        });


    });



    it('Check tác vụ Thu hồi ', function () {
            common.enterSelectBoxNormal('drpSelectTrangThai','Chờ thực hiện');
            common.enterSelectBoxNormal('cbbLoai','3');
            cy.get('#btnTimKiem').click({timeout:7000});
            cy.get('#divDanhSachContent tbody tr:nth-child(1) td:nth-child(2) a').click();

            //         // Cấu hình nhanh thì k chay 3 dòng sau
            // cy.get('#cbbTuaTrucCC').parent().find('span.selection span.select2-selection').click();
            // cy.get('span.select2-search').find('input.select2-search__field').type('BS');
            // cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
            // cy.contains('Chấp nhận').click();

            cy.get('#btnVAOTHUCHIEN').click().wait(1000);
            cy.get('#cboChuyenKhoa').parent().find('span.selection span.select2-selection').click();
            cy.get('span.select2-search').find('input.select2-search__field').type('02').wait(1000);
            cy.get('.select2-results__option > table > tbody > tr > [style="text-align: left;"]').click();
            cy.get('#divline thead tr th:nth-child(1) .iCheck-helper').click();
            cy.get('#txtKetLuan').clear().type('Thu hồi');
            cy.get('#themylenhcc').click();
            cy.get('#cbbBacSiChiDinh').select(2);
            cy.get('#btnChonBsiChiDinh').click();
            cy.get('#txtChanDoanSoBo').type('Cypress chấn đoán')
            cy.get('#txtMoTaDauHieuLamSang').type('Cypress nhập xử trí');
            common.enterSelectBoxElas('cboCDBChinh','M49{enter}');
            cy.get('#hoantatylenhcc').click().wait(1000);
            cy.get('#divLSTheoDoi tr:first td:nth-child(6) .badge').should('have.text','Hoàn tất')
                .then(($span)=>{
                    const text = $span.text().trim();
                    if(text === 'Hoàn tất'){
                        cy.log('Y lệnh hoàn tất');
                    }else {
                        cy.fail('Y lệnh chưa hoàn tất - Không thể kết thúc khám');
                    }
                });
            cy.get('#cboXuTri').select('Cho về').wait(1000);
            cy.document().then(doc=> {
                const alert = doc.querySelectorAll('.sweet-alert');
                if (alert.length > 0) {
                    cy.get('.confirm').click();
                } else {
                    cy.log('Cấp cứu dưới 4 tiếng')
                }
            });
            cy.get('#cboLydoChove').parent().find('span.selection span.select2-selection').click({force: true} );
            cy.get('span.select2-search').find('input.select2-search__field').type('01').wait(2000);
            cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(1)').click();
            cy.get('#cboKetQua').select('Đỡ, giảm');
            cy.get('#btnSaveXuTri').click().wait(500);
            cy.get('#btnHOANTAT').click().wait(1000);
            cy.get('#btnTHUHOIHOANTAT').click();
            cy.get('#aTrangThai i.badge')
                .should('have.text', 'Đang thực hiện')
                .then(($badge) => {
                    const hasBadgeClass = $badge.hasClass('badge');
                    if (hasBadgeClass) {
                        cy.log('Đổi trạng thái thành công');
                    } else {
                        cy.fail('Đổi trạng thái thất bại');
                    }
            });
            cy.get('#txtKetLuan').clear().type('Sửa tt Thu hồi');
            cy.get('#btnHOANTAT').click().wait(1000);
            cy.get('#textMaBn').invoke('text').then((Mabn)=>{
                cy.log(Mabn);
                common.goToFunctionFromMenu('vienphidanhsachdraw');
                cy.get('#txtTimKiem').clear().type(Mabn);
                common.enterSelectBoxNormal('cbbLoai','3');
                cy.get('#btnTimKiem').click();
                cy.get('#divVienPhiDanhSachContent tbody tr:first td:first a').click().wait(2000);
                common.enterSelectBoxElas('cboHangDoiCauHinh','1c{enter}');
                cy.contains('Chấp nhận').click();
                cy.get('#btnCHUYENTHANHTOAN').click();
                cy.get('#btnHOANTATTUDANGTT').click();
                common.enterSelectBoxNormal('cboQuyenBienLai','BL{enter}');
                cy.get('#txtSoDinhDanh').type('123AE');
                cy.get('#btnAddBienlai strong').click().wait(1000);
                cy.get('body').type('{esc}');
                common.goToFunctionFromMenu('danhsachkhamcapcuu');
                cy.get('#txtTimKiem').clear().type(Mabn);
                common.enterSelectBoxNormal('cbbLoai','3');
                cy.get('#btnTimKiem').click();
                cy.get('#divDanhSachContent tbody tr:nth-child(1) td:nth-child(2) a').click();
                cy.get('#btnTHUHOIHOANTAT').click().wait(2000);
                cy.document().then(doc =>{
                    const alert = doc.querySelectorAll('.sweet-alert')
                    if(alert.length > 0) {
                        cy.get('.confirm').click();
                        cy.log('Đã chặn thu hồi khám bệnh CC');
                    }else {
                        cy.fail('Chưa chặn thu hồi khám bệnh cc');
                    }
                });


            });
    });


    it('Check khi chuyển khám CK', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai','Chờ thực hiện');
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click({timeout:7000});
        cy.get('#divDanhSachContent tbody tr:nth-child(1) td:nth-child(2) a').click();

        //         // Cấu hình nhanh thì k chay 3 dòng sau
        // cy.get('#cbbTuaTrucCC').parent().find('span.selection span.select2-selection').click();
        // cy.get('span.select2-search').find('input.select2-search__field').type('BS');
        // cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
        // cy.contains('Chấp nhận').click();

        cy.get('#btnVAOTHUCHIEN').click().wait(1000);
        cy.get('#cboChuyenKhoa').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('02').wait(1000);
        cy.get('.select2-results__option > table > tbody > tr > [style="text-align: left;"]').click();
        cy.get('#divline thead tr th:nth-child(1) .iCheck-helper').click();
        cy.get('#txtKetLuan').clear().type('Chuyển khám chuyên khoa');
        cy.get('#themylenhcc').click();
        cy.get('#cbbBacSiChiDinh').select(2);
        cy.get('#btnChonBsiChiDinh').click();
        cy.get('#txtChanDoanSoBo').type('Cypress chấn đoán')
        cy.get('#txtMoTaDauHieuLamSang').type('Cypress nhập xử trí');
        common.enterSelectBoxElas('cboCDBChinh','M49{enter}');
        cy.get('#hoantatylenhcc').click().wait(1000);
        cy.get('#divLSTheoDoi tr:first td:nth-child(6) .badge').should('have.text','Hoàn tất')
            .then(($span)=>{
                const text = $span.text().trim();
                if(text === 'Hoàn tất'){
                    cy.log('Y lệnh hoàn tất');
                }else {
                    cy.fail('Y lệnh chưa hoàn tất - Không thể kết thúc khám');
                }
            });
        cy.get('#cboXuTri').select('Chuyển khám chuyên khoa').wait(1000);
        cy.document().then(doc=> {
                const alert = doc.querySelectorAll('.sweet-alert');
                if (alert.length > 0) {
                    cy.get('.confirm').click();
                } else {
                    cy.log('Cấp cứu dưới 4 tiếng')
                }
            });
        // common.enterSelectBoxElas('cboPhongkham','ls29.3{enter}');
        // cy.get('#cboPhongkham').parent().find('span.selection span.select2-selection').click().wait(2000);
        cy.get('span.select2-search').find('input.select2-search__field').type('ls29.3').wait(1000);
        cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(1)').click();
        // common.enterSelectBoxElas('cboDichVuXuTri','0001{enter}');
        cy.get('#cboDichVuXuTri').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('0001').wait(1000);
        cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
        cy.get('#btnSaveXuTri').click().wait(2000);
        cy.get('#btnHOANTAT').click().wait(1000);
        cy.get('#textMaBn').invoke('text').then((Mabn)=>{
           cy.log(Mabn);
           common.goToFunctionFromMenu('khambenhdanhsachdraw');
           cy.get('#txtTimKiem').clear().type(Mabn);
           common.enterSelectBoxNormal('cbbLoai','3');
           cy.get('#btnTimKiem').click({timeout:7000});
           cy.get('#divKhamBenhDanhSachContent tbody tr td a i.fas').click();
           cy.get('#txtChanDoanSoBo').clear().type('Chẩn đoán khám chuyên khoa');
           common.enterSelectBoxElas('cbbChuyenKhoa','10');
           // common.enterSelectBoxElas('cbbBacSi','BM{enter}');
           cy.get('#cbbBacSi').parent().find('span.selection span.select2-selection');
           cy.get('span.select2-search').find('input.select2-search__field').type('bm');
           cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
           cy.contains('Chỉ định theo nhiều nhóm').click();
           cy.get('#all_using_json ul li:nth-child(3) a').click();
           common.enterSelectBoxElas('cbbHangDoiPopupNhieuNhom','ls{enter}');
           cy.get('#divContentChiDinh .icheckbox_square-green ins.iCheck-helper').eq(0).click({force: true});
           cy.get('#previewPDFChonDV').click().wait(3000);
           cy.get('.confirm').click().wait(8000);
           cy.get('body').type('{esc}').wait(1000);
            cy.get('#btnTHUHOIDV').click();
           cy.get('#tblDichVu thead tr th:nth-child(1) a i.fa').click();
           cy.get('.confirm').click();
           cy.contains('Đơn tủ trực').click();
           common.enterSelectBoxUlLi('cboThuoc','021{enter}');
           cy.get('#txtSl').clear().type('2');
           cy.get('#btnAddTuTruc').click();
           cy.get('body').type('{esc}');
           // common.enterSelectBoxUlLi('cboThuoc','022{enter}');
           // cy.get('#txtSl').clear().type('2');
           // cy.get('#btnAddTuTruc').click();
           //  cy.get('body').type('{esc}');
           cy.get('#btnChuyenTh_TKXN').click();
           common.enterSelectBoxElas('cbbCDBChinh','lao');
           // common.enterSelectBoxElas('cbbXuTri','Cho về');
           cy.get('#cbbXuTri').parent().find('span.selection span.select2-selection').click().wait(1000);
           cy.get('span.select2-search').find('input.select2-search__field').type('Cho về');
           cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(1)').click();
           cy.wait(1000);
           // common.enterSelectBoxNormal('cboLydoChove','Cho về{enter}');
            cy.get('#cboLydoChove').parent().find('span.selection span.select2-selection').click().wait(1000);
            cy.get('span.select2-search').find('input.select2-search__field').type('Cho về').wait(1000);
            cy.get('.select2-results__option--highlighted > table > tbody > tr > :nth-child(2)').click();
           cy.get('#cboKetQua').select(2);
           cy.contains('Chấp nhận').click();
           cy.get('#btnHOANTAT').click().wait(2000);
           cy.get('#btnTHUHOI').click().wait(2000);
           cy.get('#tblThuoc thead tr th:nth-child(11) a i.fa').click().wait(500);
           cy.get('.confirm').click().wait(500);
           cy.get('#btnHOANTRA').click().wait(2000);
           cy.get('.confirm').click().wait(2000);
           common.goToFunctionFromMenu('danhsachkhamcapcuu');
           cy.get('#txtTimKiem').clear().type(Mabn);
           common.enterSelectBoxNormal('cbbLoai','3');
           cy.get('#btnTimKiem').click({timeout:7000});
           cy.get('#divDanhSachContent tbody tr td:nth-child(9) a .badge').invoke('text').then(status =>{
               if(status.trim()==='Đang thực hiện'){
                   cy.get('#divDanhSachContent tbody tr td:nth-child(2) a').click().wait(2000);
                   cy.get('#cboXuTri').select('Cho về').wait(1000);
                   // common.enterSelectBoxNormal('cboLydoChove','Cho về{enter}');
                   cy.get('#cboLydoChove').parent().find('span.selection span.select2-selection').click().wait(1000);
                   cy.get('span.select2-search').find('input.select2-search__field').type('Cho về').wait(1000);
                   cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(1)').click({force:true});
                   cy.get('#cboKetQua').select(2);
                   cy.get('#btnSaveXuTri').click();
                   cy.get('.confirm').click();
                   cy.get('#btnHOANTAT').click().wait(2000);
                   cy.get('#aTrangThai i.badge')
                       .should('have.text', 'Hoàn tất')
                       .then(($badge) => {
                           const hasBadgeClass = $badge.hasClass('badge');
                           if (hasBadgeClass) {
                               cy.log('Đổi trạng thái thành công');
                           } else {
                               cy.fail('Đổi trạng thái thất bại');
                           }
                       });

               }else {
                   cy.fail('Không đúng trạng thái');
               }

           });
        });
    });
})