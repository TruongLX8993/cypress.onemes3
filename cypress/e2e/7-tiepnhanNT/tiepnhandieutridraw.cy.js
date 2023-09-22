

const common = require('../common.cy');
const insuaranceNumber = require('../rd');


describe("Tiep Nhan NT", () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('danhsachttvaorakhoadraw');

    });

    // it('Nhap khoa', function () {
    //     console.log('abc');
    //     cy.get('#drpSelectTrangThai').select('Chờ nhập khoa');
    //     common.enterSelectBoxNormal('cbbLoai', "3 tháng");
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divListFormDsTTVRK tbody tr:nth-child(1) td:nth-child(3) a').click();
    //     cy.get('#aTrangThai i')
    //         .should('have.text', 'Chờ nhập khoa')
    //         .then(($i) => {
    //             const text = $i.text().trim();
    //             if (text === 'Chờ nhập khoa') {
    //                 cy.log('Đổi trạng thái thành công');
    //             } else {
    //                 cy.fail('Đổi trạng thái thất bại');
    //             }
    //         });
    //     cy.get('#btnNHAPKHOA').click();
    //     cy.wait(1000);
    //     cy.get('#aTrangThai i')
    //         .should('have.text', 'Đã nhập khoa')
    //         .then(($i) => {
    //             const text = $i.text().trim();
    //             if (text === 'Đã nhập khoa') {
    //                 cy.log('Đổi trạng thái thành công');
    //             } else {
    //                 cy.fail('Đổi trạng thái thất bại');
    //             }
    //         });
    //     cy.get('#txtBenhNhanInfo').invoke('text').then((maBN) => {
    //         cy.log(maBN);
    //         const numberOnly = maBN.match(/\d+/);
    //         const numberWithoutBrackets = numberOnly[0].replace(/\[|\]/g, '');
    //         cy.log(numberWithoutBrackets);
    //         common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');
    //         cy.get('#txtTimKiem').clear().type(numberWithoutBrackets);
    //         common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
    //         common.enterSelectBoxNormal('cbbLoai', '3 tháng');
    //         cy.get('#btnTimKiem').click();
    //     });


        it('Thu hồi', function () {
            console.log('abc');
            cy.get('#drpSelectTrangThai').select('Đã nhập khoa');
            common.enterSelectBoxNormal('cbbLoai',"Trong ngày");
            cy.get('#btnTimKiem').click();
            cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(3) a').click();
            cy.get('#aTrangThai i')
                .should('have.text', 'Đã nhập khoa')
                .then(($i) => {
                    const text = $i.text().trim();
                    if (text === 'Đã nhập khoa') {
                        cy.log('Đổi trạng thái thành công');
                    } else {
                        cy.fail('Đổi trạng thái thất bại');
                    }
                });
            cy.get('#btnTHUHOI').click();
            cy.wait(1500);
            cy.document().then(doc => {
                const alert = doc.querySelectorAll('.sweet-alert');
                if (alert.length > 0) {
                    cy.log('Không thu hồi được!')
                    cy.get('.confirm');
                } else {
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
                    cy.get('#txtThoiGianVaoKhoa').click();
                    //common.enterSelectBoxElas('cboBacSi',"Trần Trung Hiếu");
                    common.enterSelectBoxElasticSearch('cboBenhChinh', "A01.2");
                    cy.get('#txtSoLan').clear().type('2');
                    cy.get('#btnNHAPKHOA').click();
                    cy.get('#aTrangThai i')
                        .should('have.text', 'Đã nhập khoa')
                        .then(($i) => {
                            const text = $i.text().trim();
                            if (text === 'Đã nhập khoa') {
                                cy.log('Đổi trạng thái thành công');
                            } else {
                                cy.fail('Đổi trạng thái thất bại');
                            }
                        });
                }
            });



        });


});