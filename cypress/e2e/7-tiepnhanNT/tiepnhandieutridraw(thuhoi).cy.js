

const common = require('../common.cy');

describe("Tiep Nhan NT", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('danhsachttvaorakhoadraw');

    });

    it('Thu hoi', function () {
        console.log('abc');
        cy.get('#drpSelectTrangThai').select('Chờ nhập khoa');
        common.enterSelectBoxNormal('cbbLoai',"Trong ngày");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(3) a').click();
        cy.get('#txtThoiGianVaoKhoa').type('09:45 26/07/2023{enter}');
        //common.enterSelectBoxElas('cboBacSi',"Trần Trung Hiếu");
        common.enterSelectBoxElasticSearch('cboBenhChinh',"A01.1");
        cy.get('#btnNHAPKHOA').click();
        cy.get('#btnTHUHOI').click();
    });

//Test Bn them y lenh moi => Khong the thu hoi
    it('Thu hoi chan them y lenh', function () {
        console.log('abc');
        cy.get('#drpSelectTrangThai').select('Đã nhập khoa');
        common.enterSelectBoxNormal('cbbLoai',"Trong ngày");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(3) a').click();
        //cy.get('#txtThoiGianVaoKhoa').type('14:59 26/07/2023{enter}');
        //common.enterSelectBoxElas('cboBacSi',"Trần Trung Hiếu");
        //common.enterSelectBoxElas('cboBenhChinh',"A01.1");
        //cy.get('#btnNHAPKHOA').click();
        cy.get('#btnTHUHOI').click();
    });
});