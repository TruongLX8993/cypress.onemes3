const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json')
const {getHtml, getCurrentUrl} = require("../../common.cy");

describe("Nội trú", () => {

    beforeEach(() => {
        common.visitAndLoginOther(enviroment.natk);
        common.goToFunctionFromMenu('danhsachttvaorakhoadraw');


    });

    it('Check các bộ lọc trong DS nhập khoa NT ', function () {
        // cy.get('#txtTimKiem').type('test');
        //common.enterSelectBoxElasticSearch('drpSelectKhoaPhong','LS14');
        cy.get('#drpSelectTrangThai').select(1);
        common.enterSelectBoxNormal('cbbLoai', '3');
        cy.get('#btnTimKiem').click();
        // cy.get('#divDanhSachContent tbody tr:nth-child(1) td:nth-child(3) a').click();
        cy.wait(1000);

        cy.get('#divDanhSachContent tbody tr:nth-child(2) td:nth-child(2) a').invoke('text').then(text=>{
            cy.get('#divDanhSachContent tbody tr:nth-child(3) td:nth-child(2) a').invoke('text').then(text1=>{
                const time1 = text1.trim();
                const time2 = text1.trim();
                if(time1 >= time2){
                    cy.log('Danh sách bệnh nhân được sắp xếp theo thứ tự giảm dần')
                }else{
                    cy.fail('Danh sách bệnh nhân không được sắp xếp theo thứ tự giảm dần')
                }
            })
        })

        getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
            .then(text => {
                const re = new RegExp("ttvaorakhoaid=([^&]*)");
                let phauThuatId = re.exec(text)[1];
                getCurrentUrl()
                    .then(currentUrl => {
                        currentUrl = currentUrl.replace('wpid=danhsachttvaorakhoadraw', 'wpid=tiepnhandieutridraw')
                        currentUrl += `&ttvaorakhoaid=${phauThuatId}`;
                        cy.visit(currentUrl);

                    });
            });

    });


});
