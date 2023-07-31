const common = require('../../common.cy');
const testCases = require('../chandoanhinhanh/chandoanhinhanh.testcase.json');


describe("Chẩn đoán hình ảnh", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('chandoanhinhanhdanhsachdraw');
        common.enterSelectBoxNormal('cbbLoai',testCases[0].cbbLoai);
    });

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

    //chưa kiểm tra được Chặn hoàn tất nếu thời gian hoàn tất vượt thời gian xử trí KB/NT/NGT
    // it('Tác vụ hoàn tất', () => {
    //     common.enterSelectBoxNormal('drpSelectTrangThai','Đang thực hiện');
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divWebPartContent tbody tr:first  td a').eq(4).click();
    //     cy.get('#divPopupQuickConfig a').click();
    //     cy.get('#btnHOANTAT').click();

    //     cy.get('#aTrangThai i')
    //             .should('have.text', 'Hoàn tất')
    //             .then(($i) => {
    //               const text = $i.text().trim();
    //               if (text === 'Hoàn tất') {
    //                 cy.log('Hoàn tất thành công');
    //               } else {
    //                 cy.fail('Hoàn tất thất bại');
    //               }
    //             });   
    // });

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
    

    it('Tác vụ hủy', () => {
        common.enterSelectBoxNormal('drpSelectTrangThai','Đang thực hiện');
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:first  td a').eq(4).click();
        cy.get('#divPopupQuickConfig a').click();

        //kiem tra vtyt,dv, thuốc
        let statusHuy = true;
        cy.get("#btnShowVatTuTieuHao").click();
        cy.get('#divVTYT')
            .then(($tbody) => {
                if ($tbody.find('tr').length > 0) {
                  statusHuy =false;
                } 
         });
        cy.get("#btnShowChiDinhDVKT").click();
         cy.get('#divDichVuContent tbody')
            .then(($tbody) => {
                if ($tbody.find('tr').length > 0) {
                  statusHuy =false;
                } 
         });
        cy.get('#btnShowThongTinThucHien').click();
        cy.get("#btnHUYDANGTHUCHIEN").click();
        cy.wait(5000);
        cy.get(".confirm").click();
        cy.wait(5000);
        cy.get('#aTrangThai')
        .then(($i) => {
          cy.wrap(null).then(() => {
              if(statusHuy){
                if ($i.text() === 'Hủy') {
                  cy.log('Hủy thành công');
                } else {
                  cy.fail('Hủy thất bại');
                }
              }
          });
        });   
    });
 
});