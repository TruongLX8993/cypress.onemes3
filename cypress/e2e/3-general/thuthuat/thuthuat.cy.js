const common = require('../../common.cy');


describe("Thủ thuật", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('danhsachthuthuatdraw');

    });
    

 
    it('Tác vụ vào thực hiện', () => {
        common.enterSelectBoxNormal('cbbLoai','3 tháng');
        common.enterSelectBoxNormal('drpSelectTrangThai','Chờ thực hiện');
        cy.get('#btnTimKiem').click();
        cy.get('#divDanhSachThuThuatContent tbody tr:first  td a').eq(4).click();
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
    
       // chưa kiểm tra chặn hoàn tất nếu thời gian hoàn tất vượt thời gian xử trí KB/NT/NGT
    // it('Tác vụ vào hoàn tất', () => {
    //     common.enterSelectBoxNormal('cbbLoai','3 tháng');
    //     common.enterSelectBoxNormal('drpSelectTrangThai','Đang thực hiện');
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divDanhSachThuThuatContent tbody tr:first  td a').eq(4).click();

    //     common.enterSelectBoxElas('cbbTTChinh','1');
    //     common.enterSelectBoxElas('cbbMauTuongTrinh','1');
    //     cy.get('#cbbPhuongPhapTT')
    //             .then(($i) => {
    //               if ($i.val() === null) {
    //                 common.enterSelectBoxElas('cbbPhuongPhapTT','1');
    //                 cy.get('.select2-results__option--highlighted > table > tbody > tr > [style="color:maroon;font-weight:bold; width:20%;padding:4px; text-align: left;"]').click();
    //               } 
    //             });

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
        common.enterSelectBoxNormal('cbbLoai','3 tháng');
        common.enterSelectBoxNormal('drpSelectTrangThai','Hoàn tất');
        cy.get('#btnTimKiem').click();
        cy.get('#divDanhSachThuThuatContent tbody tr:first  td a').eq(4).click();

        cy.get('#btnTHUHOI').click();
        cy.wait(2000);
        cy.get('#aTrangThai')
        .then(($i) => {
          if ($i.text() === 'Đang thực hiện') {
            cy.log('Thu hồi thành công');
          } else {
            cy.fail('Thu hồi thất bại');
          }
        });   
    });
    

      
    it('Tác vụ hủy', () => {
        common.enterSelectBoxNormal('cbbLoai','3 tháng');
        common.enterSelectBoxNormal('drpSelectTrangThai','Đang thực hiện');
        cy.get('#btnTimKiem').click();
        cy.get('#divDanhSachThuThuatContent tbody tr:first  td a').eq(4).click();

        //kiem tra vtyt,dv, thuốc
        let statusHuy = true;
        cy.get("#lnkVTYT").click();
        cy.get('#divVTYT')
            .then(($tbody) => {
                if ($tbody.find('tr').length > 0) {
                  statusHuy =false;
                } 
         });
         cy.get("#lnkThuoc").click();
         cy.get('#divThuoc')
         .then(($tbody) => {
             if ($tbody.find('tr').length > 0) {
               statusHuy =false;
             } 
         });
        cy.get("#lnkTTCT").click();
        cy.get("#btnHUY").click();
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
              }else{
                cy.get(".confirm").click();
              }
          });
        });   
    });
    
    
    it('Chức năng kê thuốc', () => {
        common.enterSelectBoxNormal('cbbLoai','3 tháng');
        common.enterSelectBoxNormal('drpSelectTrangThai','Đang thực hiện');
        cy.get('#btnTimKiem').click();
        cy.get('#divDanhSachThuThuatContent tbody tr:first  td a').eq(4).click();
        cy.get('#lnkThuoc').click();
      
        cy.get(':nth-child(1) > .i-checksdt > label > .icheckbox_square-green > .iCheck-helper').click();
     
        common.enterSelectBoxNormal('cbbThuoc','13589');
        cy.get('.select2-results__option--highlighted > table > tbody > tr > [style="color:maroon;overflow-wrap: break-word; font-weight:bold;width:13%;padding:4px"]').click();
        cy.get('#txtSoLuongThuoc').type('1');
        cy.get('#btnThemThuoc').click();
        cy.wait(5000);
        
        cy.get('#divThuoc tr:first-child td:nth-child(5) input').type(2);
        cy.get('.iCheck-helper').click({ multiple: true });
        cy.get('thead tr:nth-child(2) th:nth-child(8) button').click();
        cy.wait(5000);
        cy.get('.confirm').click();
  
    });
    
    
    it('Chức năng kê khai VTYT', () => {
      common.enterSelectBoxNormal('cbbLoai','3 tháng');
      common.enterSelectBoxNormal('drpSelectTrangThai','Đang thực hiện');
      cy.get('#btnTimKiem').click();
      cy.get('#divDanhSachThuThuatContent tbody tr:first  td a').eq(4).click();
      cy.get('#lnkVTYT').click();
    
      cy.get(':nth-child(1) > .icheckbox_square-green > .iCheck-helper').click();
      
      common.enterSelectBoxNormal('cbbVTYT','');
      cy.get('.select2-results__option--highlighted > table > tbody > tr > [style="color:maroon; font-weight:bold;padding:4px;width:10%"]').click();
      cy.get('#txtSoLuongVTYT').type('1');
      cy.get('#btnAddVTYTThongThuong').click();
      cy.wait(5000);
      
      cy.get('#divVTYT tr:first-child td:nth-child(5) input').type(2);
      cy.get('.iCheck-helper').click({ multiple: true });
      cy.get('thead tr:nth-child(2) th:nth-child(8) button').click();
      cy.wait(5000);
      cy.get('.confirm').click();

  });

    
    

    
});