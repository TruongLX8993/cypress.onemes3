const common = require('../../common.cy');
const testCases = require('../canlamsangchung/canlamsangchung.testcase.json');
const enviroment = require('../../../../enviroment.json');

describe("Cận lâm sàng chung", () => {

    beforeEach(() => {
        common.visitAndLoginOther(enviroment.natk05);
        common.goToFunctionFromMenu('canlamsangdanhsachdraw');
        common.enterSelectBoxNormal('cbbLoai', testCases[0].cbbLoai);
    });

    it('Tác vụ vào thực hiện', () => {
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Chờ thực hiện');
        cy.get('#btnTimKiem').click();
        cy.get('#divCanLamSangChungDanhSachContent tbody tr:first  td a').eq(3).click();
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
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
        cy.get('#btnTimKiem').click();
        cy.get('#divCanLamSangChungDanhSachContent tbody tr:first  td a').eq(3).click();
        cy.get('#txtKetLuan').clear().type('aa');
        cy.get('#btnHOANTAT').click();

        cy.wait(1000);
        cy.get('#aTrangThai i').invoke('text').then(($i) => {
            cy.log($i);
            const text = $i.trim();
            cy.log(text);
            if (text === 'Hoàn tất') {
                cy.log('Hoàn tất thành công');
            } else if (text === 'Đang thực hiện' && cy.get('.sweet-alert').should('be.visible')) {
                cy.log('thời gian hoàn tất vượt thời gian xử trí KB/NT/NGT');
            } else {
                cy.fail('Thay đổi trạng thái thất bại')
            }
        });
    });

    it('Tác vụ thu hồi', () => {
        common.enterSelectBoxNormal('drpSelectTrangThai', 'dang thuc hien');
        common.enterSelectBoxNormal('cbbLoai', 'khoang');
        cy.get('#dtTuNgay').clear().type('00:00 28/08/2022');
        cy.get('#btnTimKiem').click();
        cy.get('#divCanLamSangChungDanhSachContent tbody tr:first  td a').eq(3).click();
        cy.get('#btnHOANTAT').should('be.visible').click()
        cy.get('#btnTHUHOI').should('be.visible').click();

        cy.wait(1000);
        cy.document().then(doc=>{
           const alert = doc.querySelectorAll('.sweet-alert');
           if(alert.length > 0){
               cy.get('.sweet-alert p').invoke('text').then(error => {
                   cy.log(error)
               })
           }else{
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
        common.enterSelectBoxNormal('drpSelectTrangThai', 'cho thuc hien');
        common.enterSelectBoxNormal('cbbLoai', 'khoang');
        cy.get('#dtTuNgay').clear().type('00:00 28/08/2022');
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:first  td a').eq(3).click();
        common.btnID('btnVAOTH')
        common.btnID('btnHOANTRA');
        cy.get('#txtLyDoHoanTraUpdate').type('huy');
        cy.get('#form-group button:first').click();
        cy.wait(1000);
        cy.get('#aTrangThai i').invoke('text').then(status=>{
            if(status.trim() === 'Hoàn trả'){
                cy.log('Hoàn trả thành công');
            }else{
                throw  new Error('Hoàn trả thất bại');
            }
        })


    });


});