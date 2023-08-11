const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');

describe("Điều trị nội trú", () => {

    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');

    });

    // it('Thêm y lệnh', function () {
    //     console.log('abc');
    //     cy.get('#txtTimKiem').type('2300520947');
    //     common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
    //     common.enterSelectBoxNormal('cbbLoai', "3");
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
    //     cy.get('#showThamKham').click();
    //     // cy.wait(2000);
    //     cy.get('#btnPopupXOA').click({timeout:5000});
    //     // cy.wait(2000);

    // });


    // it('Hoàn tất y lệnh', function () {
    //     cy.get('#txtTimKiem').type('2300520945');
    //     common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
    //     common.enterSelectBoxNormal('cbbLoai', "3");
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
    //     cy.get('#showThamKham').click();
    //     common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
    //     cy.get('#txtChanDoanSoBoThamKham').clear().type('AAA');
    //     common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
    //     cy.contains('Chỉ định nhiều nhóm').click();
    //     cy.get('#using_json ul li:nth-child(1) a').click();
    //     common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'LS29.3');
    //     cy.contains('label', 'Khám bệnh (10.1895)') // tìm label có data là "Khám bệnh"
    //         .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
    //         .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
    //         .click() // tick vào checkbox

    //     cy.get('#btnDongYChon').click();
    //     cy.get('#btnChapNhan').click();
    //     cy.wait(1000);
    //     cy.get('#btnPopupHOANTAT').click();
    //     // cy.wait(1000);
    //     // cy.wait(2000);
    //     // cy.get('#btnPopupTHUHOI').click();
    //     // cy.wait(1000);
    //     // cy.get('#btnPopupXOA').click();
    // });


    // it('Sao chép y lệnh', function () {
    //     cy.get('#txtTimKiem').type('2300520918');
    //     common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
    //     common.enterSelectBoxNormal('cbbLoai', "3");
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
    //     cy.get('#showThamKham').click();
    //     common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
    //     cy.get('#txtChanDoanSoBoThamKham').clear().type('AAA');
    //     common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
    //     cy.contains('Chỉ định nhiều nhóm').click();
    //     cy.get('#using_json ul li:nth-child(1) a').click();
    //     common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'LS29.3');
    //     cy.contains('label', 'Khám bệnh (10.1895)') // tìm label có data là "Khám bệnh"
    //         .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
    //         .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
    //         .click() // tick vào checkbox

    //     cy.get('#btnDongYChon').click();
    //     cy.get('#btnChapNhan').click();
    //     cy.get('#btnPopupHOANTAT').click();
    //     // cy.wait(2000);
    //     cy.get('#btnSaoChep').click({timeout:7000});
    //     // cy.wait(2000);
    //     cy.get('.confirm').should('be.visible').click();
    //     // common.clickConfirmBtn();
    //     cy.wait(2000);
    //     cy.get('#btnPopupHOANTAT').click();
    //     // cy.wait(3000);
    //     cy.get('#btnPopupTHUHOI').click({timeout:7000});


    // });


    // it('Sao chép y lệnh nhiều ngày', function () {
    //     cy.get('#txtTimKiem').type('2300520928');
    //     common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
    //     common.enterSelectBoxNormal('cbbLoai', "3");
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
    //     cy.get('#showThamKham').click();
    //     common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
    //     cy.get('#txtChanDoanSoBoThamKham').clear().type('AAA');
    //     common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C2');
    //     cy.get('#cboSaoYLenh').select('2');
    //     cy.get('#cboHinhThucSao').select('Sao dịch vụ');
    //     cy.contains('Chỉ định nhiều nhóm').click();
    //     cy.get('#using_json ul li:nth-child(1) a').click();
    //     common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'LS29.3');
    //     cy.contains('label', 'Khám bệnh (10.1895)') // tìm label có data là "Khám bệnh"
    //         .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
    //         .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
    //         .click() // tick vào checkbox

    //     cy.get('#btnDongYChon').click();
    //     cy.get('#btnChapNhan').click();
    //     cy.get('#btnPopupHOANTAT').click();
    //     // cy.wait(4000);
    //     // cy.get('.confirm').should('be.visible').click();
    //     common.clickConfirmBtn();
    //     // cy.wait(3000);
    //     cy.get('#btnPopupTHUHOI').click({timeout:7500});
    //     common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
    //     cy.get('#txtChanDoanSoBoThamKham').clear().type('BBB');
    //     common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
    //     cy.get('#cboSaoYLenh').select('2');
    //     cy.get('#cboHinhThucSao').select('Sao dịch vụ');
    //     cy.get('#btnHoiChan').click();
    //     cy.get('.col-sm-8 .col-sm-12 .row .col-sm-4:nth-child(2) label div.iradio_square-green ins.iCheck-helper').first().click({force: true})
    //     common.enterSelectBoxElasticSearch('cboHangDoiPT', 'LS12.22');
    //     cy.get('#cboDichVuPT').parent().find('span.selection span.select2-selection').click();
    //     cy.get('span.select2-search').find('input.select2-search__field').type('08111793');
    //     cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
    //     cy.get('#btnChapNhanNhapTheBhyt').click();
    //     cy.get(1000);
    //     cy.get('#btnPopupHOANTAT').click();
    //     // cy.wait(2000);
    //     // cy.get('.sa-button-container > button.confirm').click();
    //     common.clickConfirmBtn();
    //     cy.get('#cboSaoYLenh').select('0');
    //     cy.get('#btnPopupHOANTAT').click();
    //     // cy.wait(2000);
    //     cy.get('#btnPopupTHUHOI').should('be.visible').click();
    //     cy.wait(1500);
    //     cy.get('#btnHoiChan').click();
    //     cy.get('#btnChapNhanNhapTheBhyt').click();
    //     cy.get('.khambenh-a > .fa').click();
    //     // cy.wait(1000);
    //     // cy.get('.confirm').click();
    //     common.clickConfirmBtn();
    //     // cy.wait(1500);
    //     cy.get('#btnPopupXOA').click({timeout:5000});
    //     // cy.wait(3000);
    // });


    it('Thu hồi y lệnh', function () {
        cy.get('#txtTimKiem').type('2300519268');
        common.enterSelectBoxNormal('cbbLoai', "3");
        common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
        cy.get('#txtChanDoanSoBoThamKham').clear().type('BBB');
        common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
        cy.contains('Chỉ định nhiều nhóm').click();
        cy.get('#using_json ul li:nth-child(1) a').click();
        common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'LS29.3');
        cy.contains('label', 'Khám bệnh (10.1895)') // tìm label có data là "Khám bệnh"
            .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
            .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
            .click() // tick vào checkbox

        cy.get('#btnDongYChon').click();
        cy.get('#btnChapNhan').click();
        cy.get('#btnPopupHOANTAT').click();
        // cy.wait(1000);
        cy.get('#btnPopupTHUHOI').should('be.visible').click();
        cy.wait(1500);
        cy.get('#btnPopupXOA').click();
        cy.wait(500);

        cy.get('#divStatusPopup i.badge')
            .should('have.text', 'Mới')
            .then(($badge) => {
                const hasBadgeClass = $badge.hasClass('badge');
                if (hasBadgeClass) {
                    cy.log('Đổi trạng thái thực hiện thành công');
                } else {
                    cy.fail('Đổi trạng thái thực hiện thất bại');
                }
            });
    });

    it('Xóa y lệnh', function () {
        cy.get('#txtTimKiem').type('2300519432');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        cy.get('#btnPopupXOA').click();
    });


    it('Check khi chỉ định các DV bằng nhiều nhóm/Gói mẫu', function () {
        cy.get('#txtTimKiem').type('2300519402');
        // cy.get('#select2-drpSelectTrangThai-container > .select2-selection__clear').click();
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click();
        cy.get('#tblNoiTru tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        common.enterSelectBoxNormal('cboBenhChinhThamKham','A02.0');
        common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham','C2');
        cy.get('#txtDienBienYLenhThamKham').type('Mới bị');
        cy.contains('Chỉ định nhiều nhóm').click();
        cy.get('#using_json  ul li:nth-child(6) a').click();
        common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom','ls11.7');
        cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').eq(0).click({ force: true })
        cy.get('#btnDongYChon').click();
        cy.get('#btnChapNhan').click();
        cy.get('#btnHoiChan').click();
        common.enterSelectBoxElasticSearch('cboHangDoiPT','Ls13');
        common.setTomorrowToInput('txtNgayMo');
        cy.get('#cboDichVuPT').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('08111795');
        cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
        cy.get('#btnChapNhanNhapTheBhyt').click();
        cy.wait(1500);
        cy.get('#btnHoiChan').click();
        cy.get('#btnChapNhanNhapTheBhyt').click();
        // cy.wait('3000');
        // cy.get('.confirm').click();
        cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(1) a[title="Xóa"]').click();
        cy.get('.confirm').click();
        cy.get('#btnPopupHOANTAT').click();
        cy.get('#divStatusPopup i.badge')
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

    it('Check chỉnh sửa DV ở lưới Dv sau khi kê', function () {
        cy.get('#txtTimKiem').type('2300519400');
        // cy.get('#select2-drpSelectTrangThai-container > .select2-selection__clear').click();
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click();
        cy.get('#tblNoiTru tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        common.enterSelectBoxNormal('cboBenhChinhThamKham','A02.0');
        common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham','C2');
        cy.get('#txtDienBienYLenhThamKham').type('Mới bị');
        cy.contains('Chỉ định nhiều nhóm').click();
        cy.get('#using_json  ul li:nth-child(6) a').click();
        common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom','ls11.7');
        cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').eq(0).click({ force: true })
        cy.get('#btnDongYChon').click();
        cy.get('#btnChapNhan').click();
        cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(1) a[title="Sửa"]').click();
        cy.get('#txtMotadaiUpdate').type('Máu hiếm');
        cy.get('div.modal-footer > button:first').click();
        cy.get('#btnLoadThamKhamDraw').click();
        cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(1) a[title="Xóa"]').click();
        cy.get('.confirm').click();
        cy.get('#btnLoadThamKhamDraw').click();
        cy.get('#txtDienBienYLenhThamKham').type('Mới bị');
        cy.get('#btnPopupHOANTAT').click();
        cy.get('#divStatusPopup i.badge')
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

    it('Check khi kê VTYT/thuốc', function () {
        cy.get('#txtTimKiem').type('2300519401');
        // cy.get('#select2-drpSelectTrangThai-container > .select2-selection__clear').click();
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click();
        cy.get('#tblNoiTru tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        common.enterSelectBoxNormal('cboBenhChinhThamKham','A02.0');
        common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham','C2');
        cy.get('#txtDienBienYLenhThamKham').type('Mới bị');
        cy.get('#btnKeDon').click();
        // cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
        // cy.get('span.select2-search').find('input.select2-search__field').type('20.14036');
        // cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
        common.enterSelectBoxUlLi('cboThuoc','c');
        cy.get('#txtSl').type('10000');
        cy.get('#txtSlN').type('10000');
        cy.get('#btnChon').click();
        cy.get('.confirm').click();
        // cy.wait(2000);
        // cy.get('body').type('{esc}');
        // cy.viewport(1500,800);
        cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('c');
        cy.get('span.select2-results > ul.select2-results__options').find('li').eq(2).click({force:true,timeout:7500});
        // common.enterSelectBoxUlLi('cboThuoc','27');
        cy.get('#txtSl').type('1.1');
        cy.get('#txtSlN').type('2');
        cy.get('#btnChon').click();
        cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').focus();
        cy.get('span.select2-search').find('input.select2-search__field').type('3');
        cy.get('span.select2-results > ul.select2-results__options').find('li').eq(3).click({force:true,timeout:7500});
        cy.get('.col-lg-2 > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
        cy.get('#txtSl').type('3');
        cy.get('#txtSlN').type('3');
        cy.get('#btnChon').click();
        // cy.get('.confirm').click();
        cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').focus();
        cy.get('span.select2-search').find('input.select2-search__field').type('b');
        cy.get('span.select2-results > ul.select2-results__options').find('li').eq(2).click({force:true,timeout:8000});
        cy.get('#txtSl').type('4');
        cy.get('#txtSlN').type('2');
        cy.get('#btnChon').click();
        // cy.get('.confirm').click();
        cy.get('body').type('{esc}');
        // cy.get('#tblThuoc tbody tr:nth-child(1) td:nth-child(1) a[title="Sửa"]').click();
        // cy.get('#txtSlUpdate').type('5');
        // cy.get('div.modal-footer > button:first').click();
        cy.get('#tblThuoc tbody tr:nth-child(1) td:nth-child(2) a[title="Xóa"]').click({multiple:true});
        cy.get('.confirm').click();
        cy.get('#tblThuoc thead tr th:nth-child(1) a[title="Xóa tất cả toa thuốc mới"]').click();
        cy.get('.confirm').click();
        // cy.wait(2000);
        // common.enterSelectBoxUlLi('cboThuoc','27');
        // cy.get('body').type('{enter}');
        cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('c');
        cy.get('span.select2-results > ul.select2-results__options').find('li').eq(2).click({multiple:true});
        cy.get('.col-lg-2 > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
        cy.get('#txtSl').type('1');
        cy.get('#txtSlN').type('1');
        cy.get('#btnChon').click();
        cy.get('#btnChuyenTH').click();
        cy.get('#btnPopupHOANTAT').click();
        cy.get('#divStatusPopup i.badge')
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

    it('Kết thúc điều trị và thu hồi điều trị', function () {
        cy.get('#txtTimKiem').type('2300519361');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('.accordion-nav > ul > li:nth-child(3) > .accordion-btn-wrap').click();
        cy.get('.accordion-nav > ul > li:nth-child(3) > ul > li:nth-child(4) > a').click();
        cy.get('#txtThoiGianRa').click();
        cy.get('#txtSoNgayDT').clear().type('5');
        cy.get('#cboTinhTrangRaVien').select('Ra viện');
        common.enterSelectBoxNormal('cboKetQuaDT', 'Đỡ, giảm');
        common.enterSelectBoxElasticSearch('cboLydoChove', 'Cho về');
        common.enterSelectBoxElasticSearch('cboBacsi', 'VD02152');
        cy.get('#btnSaveXuTri').click();
        cy.wait(1000);
        cy.get('#btnHOANTAT').click();
        common.clickConfirmBtn();
        // cy.wait(3000);

        //thu hoi
        cy.get('#btnTHUHOI').should('be.visible').click();
        cy.get(1500);
        cy.get('.accordion-nav > ul > li:nth-child(3) > ul > li:nth-child(4) > a').click({timeout:7500});
        cy.get('#cbbXuTri').select('Chuyển khoa');
        // cy.wait(2000);
        common.clickConfirmBtn();
        cy.get('#txtThoiGianRa').click();
        cy.get('#txtSoNgayDT').clear().type('10');
        common.enterSelectBoxElasticSearch('cboKhoanhap', 'LS17');
        cy.get('#cboChuyenBA').select('Chuyển bệnh án sang');
        common.enterSelectBoxElasticSearch('cboBacsi', 'VD01890');
        cy.get('#btnSaveXuTri').click();
    });


});