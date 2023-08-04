const common = require('../common.cy');
const insuaranceNumber = require('../rd');


describe("Tiếp nhận", () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('xetnghiemdanhsachdraw');

    });

    it('Vào thực hiện và Hoàn tất', function () {
        console.log('abc');
        common.enterSelectBoxNormal('drpSelectTrangThai',"Đang thực hiện");
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a').click();

        common.enterSelectBoxElas('cbbNoiThucHien', 'CLS08.1');
        common.enterSelectBoxElas('cbbNguoiThucHien', '4721');
        common.enterSelectBoxElas('cbbBacSiDocKetQua', '4324');
        common.enterSelectBoxElas('cbbThietBiXetNghiem', 'Thu Cong');
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



    it('Hoan Tra Chi So', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai',"Chờ thực hiện");
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a').click();
        cy.get('#btnVAOTH').click();
        cy.get('[style="margin: 0 20px 0 0; padding:0px 10px; float:right;"]').click();

        cy.get('#tblBenhAn tbody tr:nth-child(1) td:nth-child(1) > input.chkYeuCau').click();
        cy.get('#txtLyDoHoanTraUpdate').type('Không phù hợp');
        cy.get('.mr-5px > strong').click(); //Chấp nhận
        // cy.get('[data-dismiss="modal"] > strong').click(); //Bỏ qua

    });
});