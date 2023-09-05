const common = require('../../common.cy');
const insuaranceNumber = require('../../rd');
const enviroment = require('../../../../enviroment.json')
const {getHtml, getCurrentUrl} = require("../../common.cy");

describe("Phẫu thuật", () => {

    beforeEach(() => {
        common.visitAndLoginOther(enviroment.natk);
        common.goToFunctionFromMenu('danhsachphauthuatdraw');


    });

    it('Check các bộ lọc trong DS PT ', function () {
        cy.get('.btn-danger').click();
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Chờ thực hiện');
        common.enterSelectBoxNormal('cbbLoai', 'khoảng');
        cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
        cy.get('#dtTuNgay').clear().type('00:00 18/08/2022');
        cy.get('#btnTimKiem').click();
        // cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
        // cy.get('#btnTimKiem').click();

        common.compareValueAscending('#divDanhSachPhauThuatContent tbody tr:first td:nth-child(2)',
            '#divDanhSachPhauThuatContent tbody tr:nth-child(2) td:nth-child(2)');

        getHtml('#divWebPartContent tbody tr:nth-child(2) td:nth-child(4) a')
            .then(text => {
                const re = new RegExp("phauthuatid=([^&]*)");
                let phauThuatId = re.exec(text)[1];
                getCurrentUrl().then(currentUrl => {
                    currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
                    currentUrl += `&phauthuatid=${phauThuatId}`;
                    cy.visit(currentUrl);

                });
            });

    });

    });