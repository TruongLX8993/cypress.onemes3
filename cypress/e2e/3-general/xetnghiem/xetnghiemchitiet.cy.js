const common = require('../../common.cy');


describe("Xét nghiệm", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('xetnghiemdanhsachdraw');

    });

    it('Vào thực hiện và Hoàn tất', function () {
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

    it('Hoàn trả chỉ số', function () {
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

    it('Check tác vụ "thu hồi" ', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai','CHO THUC HIEN');
        common.enterSelectBoxNormal('cbbLoai','3 THANG');
        cy.get ('#btnTimKiem').click();
        cy.get('#divXetNghiemDanhSachContent tbody tr:nth-child(1) td:nth-child(4) a').click();
        cy.get ('#btnVAOTH').click();
        cy.get ('#txtThoiGianTraKetQua').type('16:29 24/07/2023');
        common.enterSelectBoxElasticSearch('cbbNoiThucHien','CLS08.1');
        common.enterSelectBoxElasticSearch('cbbNguoiThucHien','4721');
        common.enterSelectBoxElasticSearch('cbbBacSiDocKetQua','1893');
        cy.get ('#btnHOANTAT').click();
        cy.get ('#btnTHUHOI').click();
        cy.get('#aTrangThai i')
            .should('have.text', 'Đang thực hiện')
            .then(($i) => {
                const text = $i.text().trim();
                if (text === 'Đang thực hiện') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
                cy.get('#txtThoiGianTraKetQua').type('16:41 24/07/2023');
                common.enterSelectBoxElasticSearch('cbbBacSiDocKetQua', '4324');
                cy.get('#btnHOANTAT').click();
            });
    });

    it('Check tác vụ "Không thực hiện" ', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai', 'DANG THUC HIEN');
        common.enterSelectBoxNormal('cbbLoai', '3 THANG');
        cy.get('#btnTimKiem').click()
        cy.get('#divXetNghiemDanhSachContent tbody tr:nth-child(1) td:nth-child(4) a').click();
        //cy.get ('#btnVAOTH').click();
        cy.get('#btnHUY').click();
        // cy.wait(3000);
        // cy.get('.confirm').click();
        common.clickConfirmBtn();
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

});