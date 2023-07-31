

const common = require('../common.cy');
const insuaranceNumber = require('../rd');


describe("Dieu tri NT", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');

    });
//Không thêm dịch vụ
    it('Xoa y lenh 1', function (){
        console.log('abc');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
        common.enterSelectBoxNormal('cbbLoai','3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        cy.get('#btnPopupXOA').click();

    });

// Thêm dịch vụ
    it('Xoa y lenh 2', function (){
        console.log('abc');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
        common.enterSelectBoxNormal('cbbLoai','3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        cy.get('#btnGoiDV').click();
        cy.get('#divContentDMChiDinh tbody tr:nth-child(3) td:nth-child(2) a').click({force:true});
        cy.get('#btnChapNhan').click();
        cy.get('#btnPopupXOA').click();
    });

//Test chan xoa y lenh
    it('Chan xoa y lenh', function (){
        console.log('abc');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
        common.enterSelectBoxNormal('cbbLoai','3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        cy.get('#btnHoiChan').click();
        cy.get('.col-sm-8 .col-sm-12 .row .col-sm-4:nth-child(2) label div.iradio_square-green ins.iCheck-helper').first().click({force:true});
        common.enterSelectBoxElasticSearch('cboHangDoiPT', 'LS12.22');
        cy.get('#cboDichVuPT').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('08111793');
        cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();

        cy.get('#txtNgayMo').clear();
        cy.get('#txtNgayMo').type('01/08/2023{enter}');
        cy.get('#btnChapNhanNhapTheBhyt').click();
        cy.get('#btnPopupXOA').click();
    });
});