const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');

describe("Danh sách xét nghiệm", () => {


    beforeEach(() => {
        common.visitAndLoginOther(enviroment.natk05);
        common.goToFunctionFromMenu('chandoanhinhanhdanhsachdraw');


    });

    it('check bộ lọc danh sách xét nghiệm ', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai','CHO THUC HIEN');
        common.enterSelectBoxNormal('cbbLoai','3 THANG');
        cy.get ('#btnTimKiem').click()
        common.compareValueAscending('#divChanDoanHinhAnhDanhSachContent tbody tr:nth-child(1) td:nth-child(3) a',
            '#divChanDoanHinhAnhDanhSachContent tbody tr:nth-child(2) td:nth-child(3) a');
        cy.get('#divChanDoanHinhAnhDanhSachContent tbody tr:nth-child(1) td:nth-child(4) a').click();

    });

});