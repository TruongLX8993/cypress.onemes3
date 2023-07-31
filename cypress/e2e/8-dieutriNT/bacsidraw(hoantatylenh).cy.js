

const common = require('../common.cy');


describe("Dieu tri NT", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');

    });

//Test them moi y lenh
    it('Hoan tat y lenh', function () {
        console.log('abc');
        common.enterSelectBoxNormal('drpSelectTrangThai',"Đang thực hiện");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham','Bình thường');
        cy.get('#txtChanDoanSoBoThamKham').type('AAA');
        common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
        cy.contains('Chỉ định nhiều nhóm').click();
        cy.get('#using_json ul li:nth-child(1) a').click();
        common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom','LS29.3');
        //Cach 1:
        cy.contains('label', 'Khám bệnh (10.1895)') // tìm label có data là "Khám bệnh"
            .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
            .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
            .click() // tick vào checkbox
        //Cach 2:(chua thay form bao quat)
        //cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').eq(1).click({ force: true })

        cy.get('#btnDongYChon').click();
        cy.get('#btnChapNhan').click();
        cy.get('#btnPopupHOANTAT').click();
    });


});