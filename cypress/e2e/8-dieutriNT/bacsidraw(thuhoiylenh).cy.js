

const common = require('../common.cy');
const insuaranceNumber = require('../rd');


describe("Dieu tri NT", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');

    });


    it('Thu hoi y lenh', function () {
        console.log('abc');
        common.enterSelectBoxNormal('drpSelectTrangThai',"Đang thực hiện");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham','Bình thường');
        cy.get('#txtChanDoanSoBoThamKham').clear();
        cy.get('#txtChanDoanSoBoThamKham').type('BBB');
        common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
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
        cy.get('#btnPopupTHUHOI').click();
        //cy.get('.confirm').click();

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
});