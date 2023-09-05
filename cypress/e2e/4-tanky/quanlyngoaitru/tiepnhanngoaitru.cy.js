const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');
const {getHtml, getCurrentUrl} = require("../../common.cy");
describe("Quản lý ngoại trú", () => {


    beforeEach(() => {
        common.visitAndLoginOther(enviroment.natk);
        common.goToFunctionFromMenu('danhsachtiepnhanngoaitrudraw');
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
    });


    it('Check tác vụ nhập khoa', () => {
        cy.get('#drpSelectTrangThai').select('1');
       common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click();
        cy.wait(1000);

        cy.get('#divWebPartContent tbody tr:first  td:nth-child(3) a').invoke('text').then((maBN) => {
            cy.log(maBN);

            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("ttvaorakhoaid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachtiepnhanngoaitrudraw', 'wpid=tiepnhanngoaitrudraw')
                            currentUrl += `&ttvaorakhoaid=${phauThuatId}`;
                            cy.visit(currentUrl);

                            common.enterSelectBoxElasticSearch('cboBacSi', '1');
                            common.btnID('btnNHAPKHOA');

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

                            common.goToFunctionFromMenu('danhsachdieutringoaitrudraw');
                            cy.get('#txtTimKiem').clear().type(maBN);
                            common.enterSelectBoxNormal('cbbLoai', '3');
                            // cy.get('#drpSelectTrangThai').select(testCases[0].drpSelectTrangThai);
                            common.enterSelectBoxNormal('drpSelectTrangThai', 'dang thuc hien');
                            common.btnID('btnTimKiem');
                            cy.get('#tblNgoaiTru tbody tr:first  td:nth-child(4) a').invoke('text').then((mabn) => {

                                cy.log(mabn);
                                cy.get('#tblNgoaiTru tbody tr:first  td:nth-child(11) a').invoke('text').then((trangthai) => {
                                    if (mabn === maBN && trangthai === 'Đang thực hiện') {
                                        cy.log('Sau khi nhập khoa,bệnh nhân đã xuất hiện ở danh sách điều trị ngoại trú');
                                    } else {
                                        cy.fail('Sau khi nhập khoa,bệnh nhân không xuất hiện ở danh sách điều trị ngoại trú');

                                    }
                                });
                            });
                        });
                });

            // cy.get('#divDanhSachContent tbody tr:first  td a').eq(4).click();

        });
    });


    it('Check tác vụ thu hồi', () => {
        // tìm bênh nhân
        cy.get('#drpSelectTrangThai').select('2');
        cy.get('#btnTimKiem').click();

        //lấy giá trị mã bệnh nhân
        let maBN = '';
        cy.get('#divDanhSachContent tbody tr:first  td:nth-child(3) a').invoke('text').then((value) => {
            maBN = value;
        });

        //kiểm tra y lệnh
        common.goToFunctionFromMenu('danhsachdieutringoaitrudraw');
        cy.wrap(null).then(() => {
            cy.get('#txtTimKiem').type(maBN);
        });
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.wait(1000);

        getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
            .then(text => {
                const re = new RegExp("ttvaorakhoaid=([^&]*)");
                let phauThuatId = re.exec(text)[1];
                cy.log(phauThuatId);
                getCurrentUrl()
                    .then(currentUrl => {
                        currentUrl = currentUrl.replace('wpid=danhsachtiepnhanngoaitrudraw', 'wpid=tiepnhanngoaitrudraw')
                        currentUrl += `&ttvaorakhoaid=${phauThuatId}`;
                        cy.visit(currentUrl);

                        cy.get('#showDsYLenh').click();
                        let yLenh;
                        cy.get('#divNgoaiTruContent tbody')
                            .then(($tbody) => {
                                if ($tbody.find('tr').length > 1) {
                                    yLenh = true;
                                } else {
                                    yLenh = false;
                                }
                            });

                        //về kiểm tra tác vụ thu hồi
                        common.goToFunctionFromMenu('danhsachtiepnhanngoaitrudraw');
                        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
                        cy.get('#drpSelectTrangThai').select('2');
                        cy.wrap(null).then(() => {
                            cy.get('#txtTimKiem').type(maBN);
                        });
                        cy.get('#btnTimKiem').click();
                        cy.get('#divDanhSachContent tbody tr:first  td a').eq(4).click();
                        cy.get('#btnTHUHOI').click();

                        cy.wrap(null).then(() => {
                            if (yLenh) {
                                cy.get('.confirm').click();
                            } else {
                                cy.get('#aTrangThai i')
                                    .should('have.text', 'Chờ nhập khoa')
                                    .then(($i) => {
                                        const text = $i.text().trim();
                                        if (text === 'Chờ nhập khoa') {
                                            cy.log('Thu hồi thành công');
                                        } else {
                                            cy.fail('Thu hồi thất bại');
                                        }
                                    });
                            }
                        });
                    });
            });
    });


});