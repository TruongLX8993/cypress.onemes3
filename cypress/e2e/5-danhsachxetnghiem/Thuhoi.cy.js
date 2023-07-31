const common = require('../common.cy');

describe("Thu hồi", () => {

    beforeEach(() => {
        // common.login();
        // common.goToFunctionFromMenu('xetnghiemdanhsachdraw');

        cy.visit('http://192.168.1.11:2026/login.aspx')
        cy.get('#txtLoginName').type("sys.admin.hieutt")
        cy.get("#txtPassword").type("1")
        cy.get("#btnLogin").click();
        cy.get(`#side-menu a[href*='xetnghiemdanhsachdraw']:first`).click({force: true});

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
    it('Check tác vụ "thu hồi" ', function () {
        cy.get('#txtTimKiem').type('20839');
        cy.get('#btnTimKiem').click();
        cy.get('#divXetNghiemDanhSachContent tbody tr:nth-child(2) td:nth-child(4) a').click();
        cy.get('#btnTHUHOI').click();
        cy.get('.confirm').click();

    });
    });

});