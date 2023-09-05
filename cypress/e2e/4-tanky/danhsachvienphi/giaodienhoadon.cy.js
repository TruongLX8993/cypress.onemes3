const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');
const {getHtml, getCurrentUrl} = require("../../common.cy");

describe("Giao diện hóa đơn", () => {

    beforeEach(() => {
        common.visitAndLoginOther(enviroment.natk);
        common.goToFunctionFromMenu('vienphidanhsachdraw');
        common.enterSelectBoxNormal('cbbLoai','3 tháng');   
    });


    it('Tác vụ lập biên lai', () => {
        common.enterSelectBoxNormal('drpSelectTrangThai','Chờ tất toán');
        cy.get('#btnTimKiem').click();

        getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
            .then(text => {
                const re = new RegExp("hoadonid=([^&]*)");
                let phauThuatId = re.exec(text)[1];
                cy.log(phauThuatId);
                getCurrentUrl()
                    .then(currentUrl => {
                        currentUrl = currentUrl.replace('wpid=vienphidanhsachdraw', 'wpid=giaodienhoadondraw')
                        currentUrl += `&hoadonid=${phauThuatId}`;
                        cy.visit(currentUrl);

                        cy.get('#aTrangThai i')
                            .should('have.text', 'Chờ tất toán')
                            .then(($i) => {
                                const text = $i.text().trim();
                                if (text === 'Chờ tất toán') {
                                    cy.get('#btnBienLai1').click();
                                    cy.log('Thực hiện thành công');
                                } else {
                                    cy.fail('Thực hiện thất bại');
                                }
                            });
                    });
            });

    });

    it('Tác vụ tính chi phí', () =>   {
        // cy.get('#txtTimKiem').clear().type('23093285');
        common.enterSelectBoxNormal('drpSelectTrangThai','Chờ tất toán');
        // common.enterSelectBoxNormal('drpSelectTrangThai','dang thuc hien');
        cy.get('#btnTimKiem').click();

        cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(7) a').invoke('text').then(doituong=>{
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("hoadonid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=vienphidanhsachdraw', 'wpid=giaodienhoadondraw')
                            currentUrl += `&hoadonid=${phauThuatId}`;
                            cy.visit(currentUrl);

                            common.btnID('btnTinhTien');
                            cy.wait(1000);
                            common.clickConfirmBtn();
                            if(doituong.trim() === 'Bảo hiểm'){
                                cy.get('#tblTongHopChiPhi tbody tr:first td:nth-child(2)').invoke('text').then(money=>{
                                    cy.log(money)
                                   if(money.toString() <= '223,500.00'){
                                       cy.get('#dataTableYeuCau tbody tr:nth-child(4) td:nth-child(5) span').invoke('text').then(muchuong=>{
                                           cy.log(muchuong)
                                           if(muchuong === '100'){
                                               cy.log('Đúng')
                                           }else{
                                               cy.fail('Tổng chi phí dưới 15% mức lương cơ sở nhưng không được bảo hiểm chi trả 100%');
                                           }
                                               });
                                   }else{
                                       cy.log('Tổng chi phí trên 15% mức lương cơ sở nên không được bảo hiểm chi trả 100%');
                                   }
                                });
                            }else{
                                cy.log('Đã tính lại chi phí');
                            }


                        });
                });
        });


    });

    it('Tác vụ tất toán', () => {
        common.enterSelectBoxNormal('drpSelectTrangThai','Chờ tất toán');
        cy.get('#btnTimKiem').click();

        getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
            .then(text => {
                const re = new RegExp("hoadonid=([^&]*)");
                let phauThuatId = re.exec(text)[1];
                cy.log(phauThuatId);
                getCurrentUrl()
                    .then(currentUrl => {
                        currentUrl = currentUrl.replace('wpid=vienphidanhsachdraw', 'wpid=giaodienhoadondraw')
                        currentUrl += `&hoadonid=${phauThuatId}`;
                        cy.visit(currentUrl);

                        common.btnID('btnHOANTAT');
                        cy.wait(1000);
                        cy.document().then(doc=>{
                           const alert = doc.querySelectorAll('.sweet-alert');
                           if(alert.length >0){
                               cy.get('.sweet-alert p').invoke('text').then(error=>{
                                  cy.log(error);
                               });
                           }else{
                               cy.get('#aTrangThai .badge').invoke('text').then(status=>{
                                  if(status.trim() === 'Hoàn tất'){
                                      cy.log('Tất toán thành công');
                                  }else{
                                      throw new Error('Tất toán không thành công');
                                  }
                               });
                           }
                        });
                    });
            });

    });

    it('Tác vụ thu hồi', () => {
        common.enterSelectBoxNormal('drpSelectTrangThai','Chờ tất toán');
        cy.get('#btnTimKiem').click();

        getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
            .then(text => {
                const re = new RegExp("hoadonid=([^&]*)");
                let phauThuatId = re.exec(text)[1];
                cy.log(phauThuatId);
                getCurrentUrl()
                    .then(currentUrl => {
                        currentUrl = currentUrl.replace('wpid=vienphidanhsachdraw', 'wpid=giaodienhoadondraw')
                        currentUrl += `&hoadonid=${phauThuatId}`;
                        cy.visit(currentUrl);

                        common.btnID('btnHOANTAT');
                        cy.wait(1000);
                        cy.document().then(doc=>{
                           const alert = doc.querySelectorAll('.sweet-alert');
                           if(alert.length >0){
                               cy.get('.sweet-alert p').invoke('text').then(error=>{
                                  cy.log(error);
                               });
                           }else{
                               cy.get('#aTrangThai .badge').invoke('text').then(status=>{
                                  if(status.trim() === 'Hoàn tất'){
                                      cy.log('Tất toán thành công');
                                      common.btnID('btnTHUHOI');
                                      cy.wait(500);
                                      cy.get('#aTrangThai i').invoke('text').then(text=>{
                                          if(text.trim() === 'Chờ tất toán'){
                                              cy.log('Thu hồi thành công');
                                          }else{
                                              throw new Error('Thu hồi không thành công');
                                          }
                                      })
                                  }else{
                                      throw new Error('Tất toán không thành công');
                                  }
                               });
                           }
                        });
                    });
            });

    });




});