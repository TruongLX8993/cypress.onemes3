const common = require('../../common.cy');
const testCases = require('../chandoanhinhanh/chandoanhinhanh.testcase.json');


describe("Chẩn đoán hình ảnh", () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('chandoanhinhanhdanhsachdraw');
        common.enterSelectBoxNormal('cbbLoai',testCases[0].cbbLoai);
    });
/*
    it('Tác vụ vào thực hiện', () => {
        common.enterSelectBoxNormal('drpSelectTrangThai','Chờ thực hiện');
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:first  td a').eq(4).click();
        cy.get('#divPopupQuickConfig a').click();

        cy.get('#btnVAOTH').click();
        cy.get('#aTrangThai i')
            .should('have.text', 'Đang thực hiện')
            .then(($i) => {
              const text = $i.text().trim();
                 if (text === 'Đang thực hiện') {
                  cy.log('Thực hiện thành công');
              } else {
                  cy.fail('Thực hiện thất bại');
               }
         });   
        
    });
*/
/*
    it('Tác vụ hoàn tất', () => {
        common.enterSelectBoxNormal('drpSelectTrangThai','Đang thực hiện');
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:first  td a').eq(4).click();
        cy.get('#divPopupQuickConfig a').click();
        cy.get('#btnHOANTAT').click();

        cy.get('#aTrangThai i')
                .should('have.text', 'Hoàn tất')
                .then(($i) => {
                  const text = $i.text().trim();
                  if (text === 'Hoàn tất') {
                    cy.log('Hoàn tất thành công');
                  } else {
                    cy.fail('Hoàn tất thất bại');
                  }
                });   
    });
*/
/*
    it('Tác vụ thu hồi', () => {
        common.enterSelectBoxNormal('drpSelectTrangThai','Hoàn tất');
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:first  td a').eq(4).click();
        cy.get('#divPopupQuickConfig a').click();
        cy.get('#btnTHUHOI').click();

        cy.get('#aTrangThai i')
                .should('have.text', 'Đang thực hiện')
                .then(($i) => {
                  const text = $i.text().trim();
                  if (text === 'Đang thực hiện') {
                    cy.log('Thu hồi thành công');
                  } else {
                    cy.fail('Thu hồi thất bại');
                  }
                });   
    });
    */

    it('Tác vụ hủy', () => {
        common.enterSelectBoxNormal('drpSelectTrangThai','Chờ thực hiện');
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:first  td a').eq(4).click();
        cy.get('#divPopupQuickConfig a').click();

        cy.get('#btnHUY').click();
        cy.wait(5000);
        cy.get('.confirm').click();

        cy.get('#aTrangThai i')
                .should('have.text', 'Hủy')
                .then(($i) => {
                  const text = $i.text().trim();
                  if (text === 'Hủy') {
                    cy.log('Hủy thành công');
                  } else {
                    cy.fail('Hủy thất bại');
                  }
                });   
    });
 
});