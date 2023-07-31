

const common = require('../common.cy');
const insuaranceNumber = require('../rd');


describe("Dieu tri NT", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');

    });

//Test sao chep y lenh nhieu ngay
    it('Sao chep y lenh', function () {
        console.log('abc');
        cy.get('#txtTimKiem').type('2300520912{enter}');
        common.enterSelectBoxNormal('drpSelectTrangThai',"Đang thực hiện");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham','Bình thường');
        cy.get('#txtChanDoanSoBoThamKham').type('AAA');
        common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C2');
        cy.get('#cboSaoYLenh').select('2');
        cy.get('#cboHinhThucSao').select('Sao dịch vụ');
        cy.contains('Chỉ định nhiều nhóm').click();
        cy.get('#using_json ul li:nth-child(1) a').click();
        common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom','LS29.3');
        cy.contains('label', 'Khám bệnh (10.1895)') // tìm label có data là "Khám bệnh"
            .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
            .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
            .click() // tick vào checkbox

        cy.get('#btnDongYChon').click();
        cy.get('#btnChapNhan').click();
        cy.get('#btnPopupHOANTAT').click();
        cy.get('#btnSaoChep').click();
        //cy.get('.confirm').click();

    });

//Test chan sao chep y lenh
    it('Chan Sao chep y lenh', function () {
        console.log('abc');
        common.enterSelectBoxNormal('drpSelectTrangThai',"Đang thực hiện");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham','Bình thường');
        cy.get('#txtChanDoanSoBoThamKham').clear();
        cy.get('#txtChanDoanSoBoThamKham').type('AAA');
        common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C2');
        cy.get('#btnHoiChan').click();
        cy.get('.col-sm-8 .col-sm-12 .row .col-sm-4:nth-child(2) label div.iradio_square-green ins.iCheck-helper').first().click({ force: true })
        common.enterSelectBoxElasticSearch('cboHangDoiPT','LS12.22');
        cy.get('#txtNgayMo').clear();
        cy.get('#txtNgayMo').type('29/07/2023');
        cy.get('#cboDichVuPT').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('08111793');
        cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();

        cy.get('#btnChapNhanNhapTheBhyt').click();
        cy.get('#btnPopupHOANTAT').click();
        cy.get('#btnSaoChep').click();


    });
});