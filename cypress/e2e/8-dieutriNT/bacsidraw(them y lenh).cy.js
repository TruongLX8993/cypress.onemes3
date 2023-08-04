

const common = require('../common.cy');
const insuaranceNumber = require('../rd');


describe("Dieu tri NT", () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');

    });

    it('Them y lenh', function () {
        console.log('abc');
        common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        cy.wait(2000);
        cy.get('#btnPopupXOA').click();
        cy.wait(2000);

    });


    it('Hoan tat y lenh', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(3) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        common.enterSelectBoxElas('cbbDienBienBenhThamKham', 'Bình thường');
        cy.get('#txtChanDoanSoBoThamKham').clear().type('AAA');
        common.enterSelectBoxElas('cboCapDoChamSocThamKham', 'C3');
        cy.contains('Chỉ định nhiều nhóm').click();
        cy.get('#using_json ul li:nth-child(1) a').click();
        common.enterSelectBoxElas('cbbHangDoiPopupNhieuNhom', 'LS29.3');
        cy.contains('label', 'Khám bệnh (10.1895)') // tìm label có data là "Khám bệnh"
            .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
            .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
            .click() // tick vào checkbox

        cy.get('#btnDongYChon').click();
        cy.get('#btnChapNhan').click();
        cy.wait(1000);
        cy.get('#btnPopupHOANTAT').click();
        cy.wait(1000);
        // cy.wait(2000);
        // cy.get('#btnPopupTHUHOI').click();
        // cy.wait(1000);
        // cy.get('#btnPopupXOA').click();
    });


    it('Sao chep y lenh', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(5) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        common.enterSelectBoxElas('cbbDienBienBenhThamKham', 'Bình thường');
        cy.get('#txtChanDoanSoBoThamKham').clear().type('AAA');
        common.enterSelectBoxElas('cboCapDoChamSocThamKham', 'C3');
        cy.contains('Chỉ định nhiều nhóm').click();
        cy.get('#using_json ul li:nth-child(1) a').click();
        common.enterSelectBoxElas('cbbHangDoiPopupNhieuNhom', 'LS29.3');
        cy.contains('label', 'Khám bệnh (10.1895)') // tìm label có data là "Khám bệnh"
            .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
            .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
            .click() // tick vào checkbox

        cy.get('#btnDongYChon').click();
        cy.get('#btnChapNhan').click();
        cy.get('#btnPopupHOANTAT').click();
        cy.wait(2000);
        cy.get('#btnSaoChep').click();
        cy.wait(2000);
        cy.get('.sa-button-container > button.confirm').click();
        cy.wait(3000);
        cy.get('#btnPopupHOANTAT').click();
        cy.wait(3000);
        cy.get('#btnPopupTHUHOI').click();


        // common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');
        // common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
        // cy.get('#btnTimKiem').click();
        // cy.get('#divWebPartContent tbody tr:nth-child(6) td:nth-child(5) a').click();
        // cy.get('#showThamKham').click();
        cy.get('#txtThoigianThamKham').clear().type('15:00 03/08/2023')
        common.enterSelectBoxElas('cbbDienBienBenhThamKham', 'Bình thường');
        cy.get('#txtChanDoanSoBoThamKham').clear().type('BBB');
        common.enterSelectBoxElas('cboCapDoChamSocThamKham', 'C1');
        cy.get('#btnHoiChan').click();
        cy.get('.col-sm-8 .col-sm-12 .row .col-sm-4:nth-child(2) label div.iradio_square-green ins.iCheck-helper').first().click({force: true})
        cy.get('#txtThoiGianChiDinh').clear().type('15:00 03/08/2023');
        common.enterSelectBoxElas('cboHangDoiPT', 'LS12.22');
        cy.get('#txtNgayMo').clear().type('03/08/2023');
        cy.get('#cboDichVuPT').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('08111793');
        cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();

        cy.get('#btnChapNhanNhapTheBhyt').click();
        cy.get('#btnPopupHOANTAT').click();
        cy.wait(1000);
        cy.get('#btnSaoChep').click();
        cy.get('.confirm').click();
        cy.wait(2000);
        cy.get('#btnPopupTHUHOI').click();
        cy.wait(2000);
        cy.get('#btnHoiChan').click();
        cy.get('#btnChapNhanNhapTheBhyt').click();
        cy.get('.khambenh-a > .fa').click();
        cy.wait(1000);
        cy.get('.confirm').click();
        cy.wait(2000);
        cy.get('#btnPopupXOA').click();
        cy.wait(3000);

    });


    it('Sao chep y lenh nhieu ngay', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(9) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        common.enterSelectBoxElas('cbbDienBienBenhThamKham', 'Bình thường');
        cy.get('#txtChanDoanSoBoThamKham').clear().type('AAA');
        common.enterSelectBoxElas('cboCapDoChamSocThamKham', 'C2');
        cy.get('#cboSaoYLenh').select('2');
        cy.get('#cboHinhThucSao').select('Sao dịch vụ');
        cy.contains('Chỉ định nhiều nhóm').click();
        cy.get('#using_json ul li:nth-child(1) a').click();
        common.enterSelectBoxElas('cbbHangDoiPopupNhieuNhom', 'LS29.3');
        cy.contains('label', 'Khám bệnh (10.1895)') // tìm label có data là "Khám bệnh"
            .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
            .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
            .click() // tick vào checkbox

        cy.get('#btnDongYChon').click();
        cy.get('#btnChapNhan').click();
        cy.get('#btnPopupHOANTAT').click();
        cy.wait(2000);
        cy.get('.sa-button-container > button.confirm').click();
        cy.get('#btnPopupTHUHOI').click();
        common.enterSelectBoxElas('cbbDienBienBenhThamKham', 'Bình thường');
        cy.get('#txtChanDoanSoBoThamKham').clear().type('BBB');
        common.enterSelectBoxElas('cboCapDoChamSocThamKham', 'C3');
        cy.get('#cboSaoYLenh').select('2');
        cy.get('#cboHinhThucSao').select('Sao dịch vụ');
        cy.get('#btnHoiChan').click();
        cy.get('.col-sm-8 .col-sm-12 .row .col-sm-4:nth-child(2) label div.iradio_square-green ins.iCheck-helper').first().click({force: true})
        common.enterSelectBoxElas('cboHangDoiPT', 'LS12.22');
        cy.get('#cboDichVuPT').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('08111793');
        cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();

        cy.get('#btnChapNhanNhapTheBhyt').click();
        cy.get(2000);
        cy.get('#btnPopupHOANTAT').click();
        cy.wait(2000);
        cy.get('.sa-button-container > button.confirm').click();
        cy.get('#cboSaoYLenh').select('0');
        cy.get('#btnPopupHOANTAT').click();
        cy.wait(2000);


        cy.get('#btnPopupTHUHOI').click();
        cy.wait(2000);
        cy.get('#btnHoiChan').click();
        cy.get('#btnChapNhanNhapTheBhyt').click();
        cy.get('.khambenh-a > .fa').click();
        cy.wait(1000);
        cy.get('.confirm').click();
        cy.wait(2000);
        cy.get('#btnPopupXOA').click();
        cy.wait(3000);
    });


    it('Thu hoi y lenh', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(10) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        common.enterSelectBoxElas('cbbDienBienBenhThamKham', 'Bình thường');
        cy.get('#txtChanDoanSoBoThamKham').clear().type('BBB');
        common.enterSelectBoxElas('cboCapDoChamSocThamKham', 'C3');
        cy.contains('Chỉ định nhiều nhóm').click();
        cy.get('#using_json ul li:nth-child(1) a').click();
        common.enterSelectBoxElas('cbbHangDoiPopupNhieuNhom', 'LS29.3');
        cy.contains('label', 'Khám bệnh (10.1895)') // tìm label có data là "Khám bệnh"
            .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
            .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
            .click() // tick vào checkbox

        cy.get('#btnDongYChon').click();
        cy.get('#btnChapNhan').click();
        cy.get('#btnPopupHOANTAT').click();
        cy.wait(1000);
        cy.get('#btnPopupTHUHOI').click();
        cy.wait(2000);
        cy.get('#btnPopupXOA').click();
        cy.wait(1000);

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

    it('Xoa y lenh', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(11) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        cy.get('#btnPopupXOA').click();

        cy.get('#showThamKham').click();
        cy.get('#btnHoiChan').click();
        cy.get('.col-sm-8 .col-sm-12 .row .col-sm-4:nth-child(2) label div.iradio_square-green ins.iCheck-helper').first().click({force: true});
        common.enterSelectBoxElas('cboHangDoiPT', 'LS12.22');
        cy.get('#cboDichVuPT').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('08111793');
        cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
        cy.get('#btnChapNhanNhapTheBhyt').click();
        cy.get('#btnPopupXOA').click();
        cy.wait(1000);
        cy.get('.confirm').click();
        cy.get('#btnHoiChan').click();
        cy.get('#btnChapNhanNhapTheBhyt').click();
        cy.get('.khambenh-a > .fa').click();
        cy.wait(1000);
        cy.get('.confirm').click();
        cy.wait(2000);
        cy.get('#btnPopupXOA').click();
    });




    it('Ket thuc dieu tri', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(12) td:nth-child(5) a').click();
        cy.get('.accordion-nav > ul > li:nth-child(3) > .accordion-btn-wrap').click();
        cy.get('.accordion-nav > ul > li:nth-child(3) > ul > li:nth-child(4) > a').click();
        cy.viewport(1500, 800);

        cy.get('#cbbXuTri').select('Ra viện');
        cy.get('#txtThoiGianRa').click();
        cy.get('#txtSoNgayDT').clear().type('5');
        cy.get('#cboTinhTrangRaVien').select('Ra viện');
        common.enterSelectBoxNormal('cboKetQuaDT', 'Đỡ, giảm');
        common.enterSelectBoxElas('cboLydoChove', 'Cho về');
        common.enterSelectBoxElas('cboBacsi', 'VD02152');
        cy.get('#btnSaveXuTri').click();
        cy.wait(1000);
        //cy.get('.confirm').click();
        //cy.wait(1000);
        cy.get('#btnHOANTAT').click();
        cy.wait(3000);
        cy.get('#btnTHUHOI').click();
        cy.get(3000);
        cy.get('.confirm').click();
        cy.wait(1000);
    });





    it('Thu hoi dieu tri', function () {
        common.enterSelectBoxElas('drpSelectKhoaPhong', 'LS20');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(4) td:nth-child(5) a').click();

        cy.get('.accordion-nav > ul > li:nth-child(3) > .accordion-btn-wrap').click();
        cy.get('.accordion-nav > ul > li:nth-child(3) > ul > li:nth-child(4) > a').click();
        cy.viewport(1500, 800);

        cy.get('#cbbXuTri').select('Ra viện');
        cy.get('#txtThoiGianRa').click();
        cy.get('#txtSoNgayDT').clear().type('6');
        cy.get('#cboTinhTrangRaVien').select('Ra viện');
        common.enterSelectBoxNormal('cboKetQuaDT', 'Đỡ, giảm');
        common.enterSelectBoxElas('cboLydoChove', 'Cho về');
        common.enterSelectBoxElas('cboBacsi', 'VD02152');
        cy.get('#btnSaveXuTri').click();
        cy.wait(1000);
        cy.get('#btnHOANTAT').click();
        cy.wait(3000);
        cy.get('#btnTHUHOI').click();
        cy.wait(2000);


        cy.get('.accordion-nav > ul > li:nth-child(3) > .accordion-btn-wrap').click();
        cy.get('.accordion-nav > ul > li:nth-child(3) > ul > li:nth-child(4) > a').click();
        // cy.viewport(1500,800);
        cy.get('.confirm').click();
        cy.get('#cbbXuTri').select('Chuyển khoa');
        cy.wait(2000);
        cy.get('#txtThoiGianRa').click();
        cy.get('#txtSoNgayDT').clear().type('10');
        common.enterSelectBoxElas('cboKhoanhap', 'LS17');
        cy.get('#cboChuyenBA').select('Chuyển bệnh án sang');
        common.enterSelectBoxElas('cboBacsi', 'VD01890');
        cy.get('#btnSaveXuTri').click();
        cy.get('#btnHOANTAT').click();

        cy.get(':nth-child(4) > #textMaBn').invoke('text').then((maBN) => {
            cy.log(maBN);
            const numberOnly = maBN.match(/\d+/);
            const numberWithoutBrackets = numberOnly[0].replace(/\[|\]/g, '');
            cy.log(numberWithoutBrackets);

            common.goToFunctionFromMenu('danhsachttvaorakhoadraw');
            cy.get('#txtTimKiem').clear().type(`${numberWithoutBrackets}`);
            common.enterSelectBoxElas('drpSelectKhoaPhong', 'LS17');
            cy.get('#drpSelectTrangThai').select('Chờ nhập khoa');
            //common.enterSelectBoxNormal('cbbLoai', 'Trong ngày');
            cy.get('#btnTimKiem').click();

            cy.get('#divListFormDsTTVRK tbody tr:nth-child(1) td:nth-child(3) a').click();
            cy.get('#btnNHAPKHOA').click();
            cy.wait(3000);

            common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');
            cy.get('#txtTimKiem').clear().type(`${numberWithoutBrackets}`);
            common.enterSelectBoxElas('drpSelectKhoaPhong', 'LS20');
            common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
            common.enterSelectBoxNormal('cbbLoai', 'Trong ngày');
            cy.get('#btnTimKiem').click();
            cy.wait(1000);

        });
    });

});