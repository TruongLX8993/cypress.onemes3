const common = require('../../common.cy');

describe("Xét nghiệm chi tiết", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('xetnghiemdanhsachdraw');

    });

    it('Check tác vụ "Không thực hiện" ', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai','DANG THUC HIEN');
        common.enterSelectBoxNormal('cbbLoai','3 THANG');
        cy.get ('#btnTimKiem').click()
        cy.get('#divXetNghiemDanhSachContent tbody tr:nth-child(1) td:nth-child(4) a').click();
        //cy.get ('#btnVAOTH').click();
        cy.get ('#btnHUY').click();
        cy.wait(3000);
        cy.get('.confirm').click();
        cy.get('#aTrangThai i')
            .should('have.text', 'Hủy')
            .then(($i) => {
                const text = $i.text().trim();
                if (text === 'Hủy') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });

    });

})