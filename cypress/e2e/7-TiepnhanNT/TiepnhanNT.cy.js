const common = require('../common.cy');
const insuaranceNumber = require('../rd');

describe("Nội trú", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('danhsachttvaorakhoadraw');


    });

    it('Check các bộ lọc trong DS nhập khoa NT ', function () {
        // cy.get('#txtTimKiem').type('test');
        //common.enterSelectBoxElas('drpSelectKhoaPhong','LS14');
        cy.get('#drpSelectTrangThai').select('Mới');
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click();
        cy.get('#divDanhSachContent tbody tr:nth-child(1) td:nth-child(3) a').click();


    });



    it('Check tác vụ "hủy nhập khoa"', function () {
        cy.get('#drpSelectTrangThai').select('Chờ nhập khoa');
        //cy.get('#txtTimKiem').type('2300520880');
        common.enterSelectBoxNormal('cbbLoai','Trong ngày');
        cy.get('#btnTimKiem').click();
        cy.get('#divDanhSachContent tbody tr:nth-child(1) td:nth-child(3) a').click();
        cy.get('#btnNHAPKHOA').click();
        cy.get('#btnTHUHOI').click();
        cy.get('#aTrangThai i')
            .should('have.text', 'Chờ nhập khoa')
            .then(($i) => {
                const text = $i.text().trim();
                if (text === 'Chờ nhập khoa') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });
        common.enterSelectBoxElasticSearch('cboBenhChinh','A00');s

        cy.get('#btnNHAPKHOA').click();
        cy.get('#btnTHUHOI').click();
        cy.get('#btnHUYNHAPKHOA').click();
        cy.get('#txtGhiChu').type('Khỏi');
        cy.get('#btnHuyNhapKhoa > strong').click();
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


    })
});
