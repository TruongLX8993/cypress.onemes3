const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json')
const {getHtml, getAttribute, getCurrentUrl} = require("../../common.cy");

describe("Phau Thuat", () => {

    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('danhsachphauthuatdraw');
    });

    it('Vao thuc hien', async function () {
        common.enterSelectBoxElasticSearch('cboCfHangDoi', "LS12.22");
        cy.get('.btn-danger').click();
        common.enterSelectBoxNormal('cbbLoai', '3');
        common.enterSelectBoxNormal('drpSelectTrangThai', "cho thuc hien");
        cy.get('#btnTimKiem').click();
        // cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(4) a').click();
        // const text = await getHtml('#divWebPartContent tbody tr:nth-child(2)');
        const text = await getHtml('#divWebPartContent tbody tr:nth-child(2) td:nth-child(4) a');
        const re = new RegExp("checkBanGiaoPT\\('(.*)'\\)");
        let phauThuatId = re.exec(text)[1];
        let currentUrl = await getCurrentUrl();
        currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
        currentUrl += `&phauthuatid=${phauThuatId}`;
        cy.visit(currentUrl);
        // cy.wait(1000);
        cy.get('#btnVAOTH').click();
        // cy.contains('Vào mổ').click();
        cy.get('#aTrangThai i')
            .should('have.text', 'Đang thực hiện')
            .then(($i) => {
                const text = $i.text().trim();
                if (text === 'Đang thực hiện') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });

    });


    // it('Them PT', function () {
    //     console.log('abc');
    //     common.enterSelectBoxElasticSearch('cboCfHangDoi', "LS12.22");
    //     cy.get('.btn-danger').click();
    //     common.enterSelectBoxNormal('cbbLoai', '3 tháng');
    //     common.enterSelectBoxNormal('drpSelectTrangThai', "Chờ thực hiện");
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a').click();
    //     cy.wait(6000);
    //     common.goToFunctionFromMenu('phauthuatdraw');
    //     //cy.get('#btnVAOTH').click();
    //     cy.contains('Vào mổ').click();
    //
    //     //cy.get('#btnVAOTH').contains('Vào mổ').click();
    //
    //
    //     // cy.get('#btnChange').click();
    //     // common.enterSelectBoxNormal('cbbPhongMoPopup',"LS12.22");
    //     // common.enterSelectBoxNormal('cbbChiDinhMoPopup',"08111876");
    //     // common.enterSelectBoxNormal('cbbBacSiPopup',"1893");
    //
    // });
    // it('Thu hoi', function () {
    //     console.log('abc');
    //     common.enterSelectBoxElasticSearch('cboCfHangDoi', "LS12.22");
    //     cy.get('.btn-danger').click();
    //     common.enterSelectBoxNormal('cbbLoai', '3 tháng');
    //     common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a').click();
    //     cy.get('#txtKetThucPT').type('11:09 25/07/2023{enter}');
    //     common.enterSelectBoxNormal('cbbChisDinhMoPT', "08111624");
    //     common.enterSelectBoxElasticSearch('cbbPPGayMePT', "3");
    //     cy.get('#txtChuanDoanTruocMoPT').type('Truoc Phau Thuat');
    //     cy.get('#txtChuanDoanSauMoPT').type('Sau Phau Thuat');
    //     common.enterSelectBoxElasticSearch('cbbBacSiPT', "3767");
    //     cy.get('#btnHOANTAT').click();
    //     cy.get('#btnTHUHOI').click();
    //     cy.get('#aTrangThai i')
    //         .should('have.text', 'Đang thực hiện')
    //         .then(($i) => {
    //             const text = $i.text().trim();
    //             if (text === 'Đang thực hiện') {
    //                 cy.log('Đổi trạng thái thành công');
    //             } else {
    //                 cy.fail('Đổi trạng thái thất bại');
    //             }
    //         });
    // });
    // it('Thu hoi 1', function () {
    //     console.log('abc');
    //     common.enterSelectBoxElasticSearch('cboCfHangDoi', "LS12.22");
    //     cy.get('.btn-danger').click();
    //     common.enterSelectBoxNormal('cbbLoai', '3 tháng');
    //     common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a').click();
    //     cy.get('#txtKetThucPT').type('11:09 25/07/2023{enter}');
    //     common.enterSelectBoxNormal('cbbChiDinhMoPT', "09276152");
    //     common.enterSelectBoxElasticSearch('cbbPPGayMePT', "3");
    //     cy.get('#txtChuanDoanTruocMoPT').type('Truoc Phau Thuat');
    //     cy.get('#txtChuanDoanSauMoPT').type('Sau Phau Thuat');
    //     common.enterSelectBoxElasticSearch('cbbBacSiPT', "3767");
    //     cy.get('#btnHOANTAT').click();
    //     cy.get('#btnTHUHOI').click();
    //     cy.get('#aTrangThai i')
    //         .should('have.text', 'Đang thực hiện')
    //         .then(($i) => {
    //             const text = $i.text().trim();
    //             if (text === 'Đang thực hiện') {
    //                 cy.log('Đổi trạng thái thành công');
    //             } else {
    //                 cy.fail('Đổi trạng thái thất bại');
    //             }
    //         });
    // });
});