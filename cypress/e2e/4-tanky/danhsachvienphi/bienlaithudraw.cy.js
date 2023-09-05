const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');
const {getHtml, getCurrentUrl} = require("../../common.cy");

describe("Biên lai thu", () => {

    beforeEach(() => {
        common.visitAndLoginOther(enviroment.natk);
        common.goToFunctionFromMenu('vienphidanhsachdraw');
        common.enterSelectBoxNormal('cbbLoai','3 tháng');
    });


    it('Check tác vụ hoàn tất', () => {
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

                        common.btnID('btnBienLai1');

                                // getCurrentUrl()
                                //     .then(currentUrl => {
                                //         currentUrl = currentUrl.replace('wpid=giaodienhoadondraw', 'wpid=bienlaithudraw')
                                //         currentUrl = currentUrl.replace('hoadonid', 'vienphiid')
                                //         cy.visit(currentUrl);


                            // });

                    });
            });

    });

    it('Check tác vụ hủy', () =>   {
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





});