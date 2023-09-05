const common = require('../../common.cy');
const testCases = require('../quanlyngoaitru/danhsachttvaorakhoa.testcase.json');
const enviroment = require('../../../../enviroment.json')
const {getHtml, getCurrentUrl} = require("../../common.cy");

describe("Quản lý ngoại trú", () => {

    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('danhsachtiepnhanngoaitrudraw');

    });

        it('Danh sách tiếp nhận     ngoại chú', () => {
            common.enterSelectBoxNormal('cbbLoai',testCases[0].cbbLoai);
            // cy.get('#txtTimKiem').type(testCases[0].name);
            // common.enterSelectBoxElasticSearch('drpSelectKhoaPhong',testCases[0].drpSelectKhoaPhong);
            cy.get('#drpSelectTrangThai').select('Đã nhập khoa');
            common.enterSelectBoxNormal('drpSelectHinhThuc',testCases[0].drpSelectHinhThuc);
            cy.get('#btnTimKiem').click();
            common.compareValueDescending('#divDanhSachContent tbody tr:first  td:nth-child(2) a',
                '#divDanhSachContent tbody tr:nth-child(2)  td:nth-child(2) a');


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
                        });
                });

            // cy.get('#divDanhSachContent tbody tr:first  td a').eq(4).click();

        });
    });

