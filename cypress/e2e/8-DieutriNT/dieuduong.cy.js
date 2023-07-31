const common = require('../common.cy');
describe("Điều trị nội trú", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');


    });

    it('Check chức năng kê buồng giường', function () {

        cy.get('#tblNoiTru > tbody > tr:nth-child(4) > td:nth-child(2) > a > .far').click();
        cy.contains('Buồng giường').click();
        cy.get('#thongTinBuongGiuongBtns > a:first > span').click();

        cy.get("#select2-cboBuongPG-container").should("have.attr", "title").then((title) => {
            cy.log("Dữ liệu trong thuộc tính title là: ", title);
            cy.get('#cboGiuongPG').parent().find('span.selection span.select2-selection').click();
            cy.get(`span.select2-results > ul.select2-results__options `).find('li:nth-child(2)').click();
            common.clickConfirmBtn();
            cy.get('#txtSoNgayNamPBG').type('5');
            cy.contains('Chấp nhận').click();

            // chuyen sang man so do buong giuong check benh nhan da co trong so do chua

            cy.get('#divMenuContent h5:nth-child(4) b').invoke('text').then((Khoaphong) => {
                cy.get('#divMenuContent h5:nth-child(3) b').invoke('text').then((textMaBn) => {
                    const numberOnly = textMaBn.match(/\d+/);
                    const numberWithoutBrackets = numberOnly[0].replace(/\[|\]/g, '');

                    cy.log(numberOnly);
                    common.goToFunctionFromMenu('sodobuonggiuongdraw');
                    common.clickConfirmBtn();
                    common.enterSelectBoxElasticSearch('drpSelectKhoaPhong',Khoaphong);
                    common.enterSelectBoxElasticSearch('drpSelectBuong',title);
                    common.btnID('btnTimKiem');

                    // quay tro lai va ket thuc buong giuong
                    common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');
                    cy.get('#txtTimKiem').clear().type(numberWithoutBrackets);
                    common.btnID('btnTimKiem');
                    cy.get('#tblNoiTru > tbody > tr:nth-child(2) > td:nth-child(2) > a > .far').click();
                    cy.contains('Buồng giường').click();
                    cy.get('#thongTinBuongGiuongBtns > a:nth-child(3) > span').click();
                    common.goToFunctionFromMenu('sodobuonggiuongdraw');
                    common.clickConfirmBtn();
                    common.enterSelectBoxElasticSearch('drpSelectKhoaPhong',Khoaphong);
                    common.enterSelectBoxElasticSearch('drpSelectBuong',title);
                    common.btnID('btnTimKiem');

                });

            });
        });

    });

    // cypress lỗi không thể click vào các button Lưu,Hoàn tất..
    // it('Check chức năng thông tin chăm sóc', function () {
    //     cy.get('#tblNoiTru > tbody > tr:nth-child(9) > td:nth-child(2) > a > .far').click();
    //     cy.contains('Lập kế hoạch CS').click();
    //     cy.get('#txtDHSTMach').clear();
    //     cy.get('#txtDHSTHuyetAp').clear();
    //     cy.get('#txtDHSTNhietDo').clear();
    //     cy.get('#txtDHSTNhipTho').clear();
    //     cy.get('#txtDienBienCS').clear().type(' Huyết áp: 00, Nhịp thở: 00');
    //     common.btnID('btnLuu');
    //     cy.contains('Lịch sử chăm sóc').click();
    //     cy.get('#BodyChiTietDraw > tr:nth-child(2) > td:nth-child(3) > a').click();
    //     cy.get('#txtDienBienCS').clear();
    //     common.btnID('btnHoanTat');
    //     common.btnConfirm();
    //     cy.get('#txtDienBienCS').type(' Huyết áp: 00, Nhịp thở: 00');
    //     common.btnID('btnHoanTat');
    //     cy.contains('Lịch sử chăm sóc').click();
    //     cy.get('#BodyChiTietDraw > tr:nth-child(2) > td:nth-child(3) > a').click();
    //     common.btnID('btnSaoChep');
    //     cy.get('#txtDHSTMach').type('77');
    //     cy.get('#txtDHSTHuyetAp').type('100001');
    //     cy.get('#txtDHSTNhietDo').type('35');
    //     cy.get('#txtDHSTNhipTho').type('60');
    //     cy.get('#txtDienBienCS').clear().type(' Huyết áp: 00, Nhịp thở: 00');
    //     common.btnID('btnLuu');
    //     cy.contains('Lịch sử chăm sóc').click();
    //     cy.get('#BodyChiTietDraw > tr:nth-child(2) > td:nth-child(3) > a').click();
    //     common.btnID('btnThuHoi');
    //
    //
    //
    //
    //
    //
    //
    //
    //     cy.get('.ibox-title > button:first').click();
    //
    //
    // });

    it('Check chức năng nhập thuốc/VT', function () {
        cy.get('#tblNoiTru > tbody > tr:nth-child(2) > td:nth-child(2) > a > .far').click();
        cy.contains(' Nhập thuốc, VTYT').click();
        common.btnID('DD_KeNhapThuocSuDung');
        // common.enterSelectBoxElas('cbbGoiVTYT','bang')
        cy.get('#cbbGoiVTYT').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('bang');
        cy.get(`#select2-cbbGoiVTYT-results`).find('tr:first').click({force: true});

        common.clickConfirmBtn();
        cy.get(':nth-child(2) > .icheckbox_square-green > .iCheck-helper').click();
        // common.enterSelectBoxElas('txtHang','0203600001');

       common.enterSelectBoxUlLi('txtHang','0203600001');
        cy.get('#txtSoLuong').type('1');
        common.btnID('btnThemVatTuThuong');
        cy.get('body').type('{esc}');
        cy.get('#tabVTYT > :nth-child(1) > .ibox-content > :nth-child(3) > .form-group > :nth-child(1) > .col-sm-12 > button:nth-child(1)').click();
        cy.get('.form-group > .table-responsive > table > thead > tr:first > th > button:nth-child(2)').click();
        cy.get('#tabVTYT > :nth-child(1) > .ibox-content > :nth-child(3) > .form-group > :nth-child(1) > .col-sm-12 > button:nth-child(2)').click();
        cy.get('#divDSVTYTThuong > tr:nth-child(3) > td:nth-child(4)> input.updatethuocvt').clear().type('3');
        cy.get('#tabVTYT > :nth-child(1) > .ibox-content > :nth-child(3) > .form-group > :nth-child(1) > .col-sm-12 > button:nth-child(1)').click();

    });
});
