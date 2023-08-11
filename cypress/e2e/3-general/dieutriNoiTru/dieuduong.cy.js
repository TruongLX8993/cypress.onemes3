const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');
const testCases = require('./dieuduong.testcase.json');

describe("Điều trị nội trú", () => {

    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');


    });

    for (let i = 0; i < testCases.length; i++) {
        let testCase = testCases[0];

        it('Check chức năng kê buồng giường', function () {
            cy.get('#tblNoiTru > tbody > tr:nth-child(2) > td:nth-child(2) > a > .far').click();
            cy.contains('Buồng giường').click();
            cy.get('#thongTinBuongGiuongBtns > a:first > span').click();
            cy.get('#cboGiuongPG').parent().find('span.selection span.select2-selection').click();
            cy.get(`span.select2-results > ul.select2-results__options `).find('li:nth-child(3)').click();
            common.clickConfirmBtn();
            cy.get('#txtSoNgayNamPBG').type('5');
            cy.contains('Chấp nhận').click();

            // kết thúc buồng giường
            cy.get('#thongTinBuongGiuongBtns > a:nth-child(3) > span').click();
            console.log('kết thúc buồng giường thành công');
        });

        it('Check chức năng thông tin chăm sóc', function () {
            cy.get('#tblNoiTru > tbody > tr:nth-child(9) > td:nth-child(2) > a > .far').click();
            cy.contains('Lập kế hoạch CS').click();
            cy.get('#txtDHSTMach').clear();
            cy.get('#txtDHSTHuyetAp').clear();
            cy.get('#txtDHSTNhietDo').clear();
            cy.get('#txtDHSTNhipTho').clear();
            cy.get('#txtDienBienCS').clear().type(testCase.txtDienBienCS);
            // common.btnID('btnLuu');
            cy.get('#btnLuu').click({force: true});
            cy.contains('Lịch sử chăm sóc').click();
            cy.get('#BodyChiTietDraw > tr:nth-child(2) > td:nth-child(3) > a').click();
            common.btnID('btnHoanTat');
            cy.contains('Lịch sử chăm sóc').click();
            cy.get('#BodyChiTietDraw > tr:nth-child(2) > td:nth-child(3) > a').click();
            common.btnID('btnSaoChep');
            cy.get('#txtDHSTMach').clear().type(testCase.txtDHSTMach);
            cy.get('#txtDHSTHuyetAp').clear().type(testCase.txtDHSTHuyetAp);
            cy.get('#txtDHSTNhietDo').clear().type(testCase.txtDHSTNhietDo);
            cy.get('#txtDHSTNhipTho').clear().type(testCase.txtDHSTNhipTho);
            cy.get('#txtDienBienCS').clear().type(testCase.txtDienBienCS);
            common.btnID('btnLuu');
            cy.contains('Lịch sử chăm sóc').click();
            cy.get('#BodyChiTietDraw > tr:nth-child(2) > td:nth-child(3) > a').click();
            common.btnID('btnThuHoi');
            cy.get('#txtDHSTMach').clear().type(testCase.txtDHSTMach);
            cy.get('#txtDHSTHuyetAp').clear().type(testCase.txtDHSTHuyetAp);
            cy.get('#txtDHSTNhietDo').clear().type(testCase.txtDHSTNhietDo);
            cy.get('#txtDHSTNhipTho').clear().type(testCase.txtDHSTNhipTho);
            cy.get('#txtDienBienCS').clear().type(testCase.txtDienBienCS);
            common.btnID('btnHoanTat');
            cy.contains('Lịch sử chăm sóc').click();

        });

        it('Check chức năng nhập thuốc/VT', function () {
            cy.get('#tblNoiTru > tbody > tr:nth-child(2) > td:nth-child(2) > a > .far').click();
            cy.contains(' Nhập thuốc, VTYT').click();
            common.btnID('DD_KeNhapThuocSuDung');
            cy.get('#cbbGoiVTYT').parent().find('span.selection span.select2-selection').click();
            cy.get(`#select2-cbbGoiVTYT-results`).find('tr').eq(3).click({force: true});
            common.clickConfirmBtn();
            cy.get(':nth-child(2) > .icheckbox_square-green > .iCheck-helper').click();
            cy.get('#txtHang').parent().find('span.selection span.select2-selection').click();
            cy.get(`#select2-txtHang-results`).find('tr').eq(3).click({force: true});
            cy.get('#txtSoLuong').type('1');
            common.btnID('btnThemVatTuThuong');
            cy.get('body').type('{esc}');
            cy.get('#tabVTYT > :nth-child(1) > .ibox-content > :nth-child(3) > .form-group > :nth-child(1) > .col-sm-12 > button:nth-child(1)').click();
            cy.get('.form-group > .table-responsive > table > thead > tr:first > th > button:nth-child(2)').click();
            cy.get('#tabVTYT > :nth-child(1) > .ibox-content > :nth-child(3) > .form-group > :nth-child(1) > .col-sm-12 > button:nth-child(2)').click();
            cy.get('#divDSVTYTThuong > tr:nth-child(3) > td:nth-child(4)> input.updatethuocvt').clear().type('3');
            cy.get('#tabVTYT > :nth-child(1) > .ibox-content > :nth-child(3) > .form-group > :nth-child(1) > .col-sm-12 > button:nth-child(1)').click();

        });

        it('Check chức năng kết thúc điều trị và thu hồi', function () {
            cy.get('#txtTimKiem').clear().type(testCase.txtTimKiem);
            common.btnID('btnTimKiem');
            cy.get('#tblNoiTru > tbody > tr:nth-child(2) > td:nth-child(5) > a').click();
            cy.get('#divMenuContent h5:nth-child(3) b').invoke('text').then((textMaBn) => {
                const result = textMaBn.split(' | ')[1];
                cy.log(result);

                if (result == "Không BH") {
                    cy.get(':nth-child(3) > .accordion-btn-wrap').click();
                    cy.get('.active > ul > :nth-child(4) > a').click();
                    cy.get('#txtThoiGianRa').clear();
                    common.btnID('btnHOANTAT');
                    common.clickConfirmBtn();
                    cy.get('#txtThoiGianRa').click();
                    common.enterSelectBoxElasticSearch('cboBacsi', 's');
                    common.btnID('btnHOANTAT');
                    common.clickConfirmBtn();
                } else {
                    cy.get(':nth-child(3) > .accordion-btn-wrap').click();
                    cy.get('.active > ul > :nth-child(4) > a').click();
                    cy.get('#txtThoiGianRa').clear();
                    common.btnID('btnHOANTAT');
                    common.clickConfirmBtn();
                    cy.get('#txtThoiGianRa').click();
                    common.enterSelectBoxElasticSearch('cboBacsi', 's');
                    common.btnID('btnHOANTAT');
                }

                // chức năng thu hồi
                common.btnID('btnTHUHOI');
                cy.get('a#aTrangThai i.badge')
                    .should('have.text', 'Đang thực hiện')
                    .then(($badge) => {
                        const hasBadgeClass = $badge.hasClass('badge');
                        if (hasBadgeClass) {
                            cy.log('Đổi trạng thái về Đang thực hiện thành công');
                        } else {
                            cy.fail('Đổi trạng thái về Đang thực hiện thất bại');
                        }
                    });

            });


        });

    }

});
