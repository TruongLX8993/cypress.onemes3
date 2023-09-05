const common = require('../../common.cy');
const testCases = require('../chandoanhinhanh/chandoanhinhanh.testcase.json');
const enviroment = require('../../../../enviroment.json');

describe("Chẩn đoán hình ảnh", () => {

    beforeEach(() => {
        common.visitAndLoginOther(enviroment.natk05);
        common.goToFunctionFromMenu('chandoanhinhanhdanhsachdraw');
        common.enterSelectBoxNormal('cbbLoai',testCases[0].cbbLoai);
    });

    it('Tác vụ vào thực hiện', () => {
        common.enterSelectBoxNormal('drpSelectTrangThai','Chờ thực hiện');
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:first  td a').eq(4).click();
        // cy.get('#divPopupQuickConfig a').click();

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

    it('Tác vụ hoàn tất', () => {
        // cy.get('#txtTimKiem').type('2300520835');
        common.enterSelectBoxNormal('drpSelectTrangThai','Đang thực hiện');
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:first  td a').eq(4).click();
        // cy.get('#divPopupQuickConfig a').click();
        cy.get('#btnHOANTAT').click();
        cy.wait(1000)

        cy.document().then(doc => {
            const alert = doc.querySelectorAll('.sweet-alert');
            if (alert.length > 0) {
                cy.get('.sweet-alert p').invoke('text').then(error => {
                    cy.log(error)
                })
                // throw new Error('Data lỗi')
            } else {
               cy.get('#aTrangThai i').invoke('text').then(($i) => {
                   cy.log($i);
                   const text = $i.trim();
                   cy.log(text);
                   if (text === 'Hoàn tất') {
                       cy.log('Hoàn tất thành công');
                   } else {
                       cy.fail('Thay đổi trạng thái thất bại')
                   }
               });
           }
        });

    });

    it('Tác vụ thu hồi', () => {
        common.enterSelectBoxNormal('drpSelectTrangThai','Hoàn tất');
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:first  td a').eq(4).click();
        // cy.get('#divPopupQuickConfig a').click();
        cy.get('#btnTHUHOI').click();
        cy.wait(1000);

        cy.document().then(doc=>{
           const alert = doc.querySelectorAll('.sweet-alert');
           if(alert.length > 0){
               cy.get('.sweet-alert p').invoke('text').then(error=>{
                  cy.log(error);
               });
           }else {
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
           }
        });


    });


    it('Tác vụ hủy', () => {
        common.enterSelectBoxNormal('drpSelectTrangThai','Đang thực hiện');
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:first  td a').eq(4).click();
        // cy.get('#divPopupQuickConfig a').click();

        cy.get('#btnShowThongTinThucHien').click();
        cy.get("#btnHUYDANGTHUCHIEN").click();
        cy.wait(1000);
        common.clickConfirmBtn();
        cy.wait(1000);

        cy.document().then(doc=>{
           const alert = doc.querySelectorAll('.sweet-alert');
           if(alert.length > 0){
               cy.get('.sweet-alert p[style="display: block;"]').invoke('text').then(text=>{
                   if (text.trim() === 'Bạn có muốn hủy không?.'){
                       cy.get('#aTrangThai i.badge').invoke('text')
                           .then((status) => {
                                   if (status.trim() === 'Hủy') {
                                       cy.log('Hủy thành công');
                                   } else {
                                       cy.fail('Hủy thất bại');
                                   }

                           });
                   }else{
                       common.btnID('btnShowVatTuTieuHao');
                       cy.get('#divToaThuocCtContent tbody#divVTYT tr').each((row,index)=>{
                           cy.get(`#divToaThuocCtContent tbody#divVTYT tr:nth-child(${index+1}) td:nth-child(8) a`).click();
                           cy.wait(500);
                           common.clickConfirmBtn();
                           cy.get("#btnHUYDANGTHUCHIEN").click();
                           cy.wait(1000);
                           common.clickConfirmBtn();
                           cy.wait(1000);
                           cy.get('#aTrangThai i.badge').invoke('text')
                               .then((status) => {
                                   if (status.trim() === 'Hủy') {
                                       cy.log('Hủy thành công');
                                   } else {
                                       cy.fail('Hủy thất bại');
                                   }

                               });
                       })
                   }
               })
           }
        });


    });
 
});