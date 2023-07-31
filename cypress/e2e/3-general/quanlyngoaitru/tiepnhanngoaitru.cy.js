const common = require('../../common.cy');

describe("Quản lý ngoại trú", () => {
    

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('danhsachtiepnhanngoaitrudraw');
        common.enterSelectBoxNormal('cbbLoai','3 tháng');
    });


    // fail
    it('Tiếp nhận ngoại trú tác vụ nhập khoa', () => {
        cy.get('#drpSelectTrangThai').select('1');
        cy.get('#btnTimKiem').click();
        cy.get('#divDanhSachContent tbody tr:first  td a').eq(4).click();

        
        });

    it('Tiếp nhận ngoại trú tác vụ thu hồi', () => {
        // tìm bênh nhân
        cy.get('#drpSelectTrangThai').select('2');
        cy.get('#btnTimKiem').click();
        
        //lấy giá trị mã bệnh nhân
        let maBN = '';
        cy.get('#divDanhSachContent tbody tr:first  td:nth-child(3) a').invoke('text').then((value)=>{
            maBN = value;
        });

        //kiểm tra y lệnh
        common.goToFunctionFromMenu('danhsachdieutringoaitrudraw');
        cy.wrap(null).then(() => {
            cy.get('#txtTimKiem').type(maBN);
        });
        common.enterSelectBoxNormal('cbbLoai','3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divDanhSachNgoaiTruContent tbody tr:first  td a').eq(3).click();
        cy.get('#showDsYLenh').click();
        let yLenh;
        cy.get('#divNgoaiTruContent tbody')
            .then(($tbody) => {
                if ($tbody.find('tr').length > 1) {
                    yLenh =true;
                } else{
                    yLenh =false;
                }
        });

        //về kiểm tra tác vụ thu hồi
        common.goToFunctionFromMenu('danhsachtiepnhanngoaitrudraw');
        common.enterSelectBoxNormal('cbbLoai','3 tháng');
        cy.get('#drpSelectTrangThai').select('2');
        cy.wrap(null).then(() => {
            cy.get('#txtTimKiem').type(maBN);
        });
        cy.get('#btnTimKiem').click();
        cy.get('#divDanhSachContent tbody tr:first  td a').eq(4).click();
        cy.get('#btnTHUHOI').click();

        cy.wrap(null).then(() => {
            if(yLenh){
                cy.get('.confirm').click();
            }else{
                cy.get('#aTrangThai i')
                .should('have.text', 'Chờ nhập khoa')
                .then(($i) => {
                  const text = $i.text().trim();
                  if (text === 'Chờ nhập khoa') {
                    cy.log('Thu hồi thành công');
                  } else {
                    cy.fail('Thu hồi thất bại');
                  }
                });   
            }
        });
        
        });
        
      it('Tiếp nhận ngoại trú tác vụ nhập khoa', () => {
        cy.get('#drpSelectTrangThai').select('1');
        cy.get('#btnTimKiem').click();
        cy.get('#divDanhSachContent tbody tr:first  td a').eq(4).click();
        cy.get('#btnHUYNHAPKHOA').click();
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