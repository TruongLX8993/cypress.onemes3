const common = require('../../common.cy');
const testCases = require('../quanlyngoaitru/danhsachttvaorakhoa.testcase.json');
const enviroment = require('../../../../enviroment.json')

describe("Quản lý ngoại trú", () => {

    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('danhsachtiepnhanngoaitrudraw');

    });

        it('Danh sách tiếp nhận     ngoại chú', () => {
            common.enterSelectBoxNormal('cbbLoai',testCases[0].cbbLoai);
            cy.get('#txtTimKiem').type(testCases[0].name);
            common.enterSelectBoxElasticSearch('drpSelectKhoaPhong',testCases[0].drpSelectKhoaPhong);
            cy.get('#drpSelectTrangThai').select(testCases[0].drpSelectTrangThai);
            common.enterSelectBoxNormal('drpSelectHinhThuc',testCases[0].drpSelectHinhThuc);
            cy.get('#btnTimKiem').click();
            common.compareValueAscending('#divDanhSachContent tbody tr:first  td:nth-child(2) a',
                '#divDanhSachContent tbody tr:nth-child(2)  td:nth-child(2) a');

            cy.get('#divDanhSachContent tbody tr:first  td a').eq(4).click();

        });
    });

