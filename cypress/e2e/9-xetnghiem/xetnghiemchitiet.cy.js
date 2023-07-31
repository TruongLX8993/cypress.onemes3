const common = require('../common.cy');
const insuaranceNumber = require('../rd');


describe("Tiếp nhận", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('xetnghiemdanhsachdraw');

    });

    // it('Line 43', function () {
    //
    //     console.log('abc');
    //     common.enterSelectBoxNormal('drpSelectTrangThai',"Đang thực hiện");
    //     common.enterSelectBoxNormal('cbbLoai', '3 tháng');
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a').click();
    //
    //     common.enterSelectBoxElas('cbbNoiThucHien', 'CLS08.1');
    //     common.enterSelectBoxElas('cbbNguoiThucHien', '4721');
    //     common.enterSelectBoxElas('cbbBacSiDocKetQua', '4324');
    //     cy.get('#btnHOANTAT').click();
    //
    // });

    it('Hoan Tat ', function () {
        console.log('abc');
        common.enterSelectBoxNormal('drpSelectTrangThai',"Đang thực hiện");
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a').click();

        common.enterSelectBoxElasticSearch('cbbNoiThucHien', 'CLS08.1');
        common.enterSelectBoxElasticSearch('cbbNguoiThucHien', '4721');
        common.enterSelectBoxElasticSearch('cbbBacSiDocKetQua', '4324');
        common.enterSelectBoxElasticSearch('cbbThietBiXetNghiem', 'Thu Cong');
        cy.get('#btnHOANTAT').click();
        cy.get('#aTrangThai i')
                    .should('have.text', 'Hoàn tất')
                    .then(($i) => {
                      const text = $i.text().trim();
                      if (text === 'Hoàn tất')
                      {
                        cy.log('Đổi trạng thái thành công');
                      }
                      else
                      {
                        cy.fail('Đổi trạng thái thất bại');
                      }
                    });
    });
});