const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');

describe("Tiep Nhan NT", () => {

    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('danhsachttvaorakhoadraw');

    });

    it('Nhập khoa', function () {
        console.log('abc');
        cy.get('#drpSelectTrangThai').select('Chờ nhập khoa');
        common.enterSelectBoxNormal('cbbLoai',"3 tháng");
        cy.get('#btnTimKiem').click();
        cy.get('#divListFormDsTTVRK tbody tr:nth-child(1) td:nth-child(3) a').click();
        cy.get('#btnNHAPKHOA').click();

    });


    it('Thu hồi', function () {
        console.log('abc');
        cy.get('#drpSelectTrangThai').select('Chờ nhập khoa');
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(3) a').click();
        cy.get('#txtThoiGianVaoKhoa').type('09:45 26/07/2023{enter}');
        //common.enterSelectBoxElas('cboBacSi',"Trần Trung Hiếu");
        common.enterSelectBoxElasticSearch('cboBenhChinh',"A01.1");
        cy.get('#btnNHAPKHOA').click();
        cy.get('#btnTHUHOI').click();
        cy.get('#btnNHAPKHOA').click();
        cy.get('.col-sm-12 > #txtBenhNhanInfo').invoke('text').then((maBN) => {
            cy.log(maBN);
            const numberOnly = maBN.match(/\d+/);
            const numberWithoutBrackets = numberOnly[0].replace(/\[|\]/g, '');
            cy.log(numberWithoutBrackets);
            common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');
            cy.get('#txtTimKiem').type(`${numberWithoutBrackets}`);
            common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
            common.enterSelectBoxNormal('cbbLoai', '3 tháng');
            cy.get('#btnTimKiem').click();

            cy.get('#tblNoiTru tbody tr:nth-child(2) td:nth-child(5) a').click();
            cy.get('#showThamKham').click();
            common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham','Bình thường');
            cy.get('#txtChanDoanSoBoThamKham').type('AAA');
            common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
            cy.contains('Chỉ định nhiều nhóm').click();
            cy.get('#using_json ul li:nth-child(1) a').click();
            common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom','LS29.3');
            cy.contains('label', 'Khám bệnh (10.1895)')
                .prev()
                .find('ins.iCheck-helper')
                .click()
            cy.get('#btnDongYChon').click();
            cy.get('#btnChapNhan').click();
            cy.get('#btnPopupHOANTAT').click();

            common.goToFunctionFromMenu('danhsachttvaorakhoadraw');
            cy.get('#txtTimKiem').type(`${numberWithoutBrackets}`);
            cy.get('#drpSelectTrangThai').select('Đã nhập khoa');
            common.enterSelectBoxNormal('cbbLoai','3');
            cy.get('#btnTimKiem').click();
            cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(3) a').click();
            cy.get('#btnTHUHOI').click();
        });
    });

    it('Check tác vụ "hủy nhập khoa"', function () {
        cy.get('#drpSelectTrangThai').select('Chờ nhập khoa');
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click();
        cy.get('#divDanhSachContent tbody tr:nth-child(2) td:nth-child(3) a').click();
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
        common.enterSelectBoxElasticSearch('cboBenhChinh','A00');

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