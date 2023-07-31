const common = require('../../common.cy');


describe("Giao diện hóa đơn", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('vienphidanhsachdraw');
        common.enterSelectBoxNormal('cbbLoai','3 tháng');   
    });

    // để lại
    // it('Tác vụ lập biên lai', () => {
    //     common.enterSelectBoxNormal('drpSelectTrangThai','Chờ tất toán');
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divVienPhiDanhSachContent tbody tr:first  td a').eq(4).click();
    //     cy.get('#aTrangThai i')
    //     .should('have.text', 'Chờ tất toán')
    //     .then(($i) => {
    //       const text = $i.text().trim();
    //          if (text === 'Chờ tất toán') {
    //             cy.get('#btnBienLai1').click();
    //             cy.log('Thực hiện thành công');
    //       } else {
    //             cy.fail('Thực hiện thất bại');
    //        }
    //      }); 
    // });
    

    // để lại
    // it('Tác vụ tính chi phí', () => {
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divVienPhiDanhSachContent tbody tr:first  td a').eq(4).click();
    //     cy.get('#btnTinhTien').click();
    //     cy.get('.confirm').click();
    // });


    //chưa xong
    // it('Tác vụ tất toán', () => {
    //     common.enterSelectBoxNormal('drpSelectTrangThai','Chờ tất toán');
    //     common.enterSelectBoxNormal('drpSelectLoaiDieuTri','Kh');
    //     cy.get('#btnTimKiem').click();

    //     // lấy thông tin bệnh nhân
    //     let maBN = '';
    //     cy.get('#divVienPhiDanhSachContent tbody tr:first  td:nth-child(3) a').invoke('text').then((value)=>{
    //         maBN = value;
    //     });
    //     let loaiDT = '';
    //     cy.get('#divVienPhiDanhSachContent tbody tr:first  td:nth-child(8) a').invoke('text').then((value)=>{
    //         loaiDT = value;
    //     });
        
    //     //kiểm tra thời gian xử trí
    //     let thoigianxutri = '';
    //     cy.wrap(null).then(() => {
    //         cy.log(loaiDT);
    //        if(loaiDT =='Khám bệnh'){
    //         common.goToFunctionFromMenu('khambenhdanhsachdraw');
    //         cy.get('#txtTimKiem').type(maBN);
    //         common.enterSelectBoxNormal('cbbLoai','3 tháng');   
    //         cy.get('#btnTimKiem').click();
    //         cy.get('#divKhamBenhDanhSachContent tbody tr:first  td a').eq(4).click();
    //         cy.get("#showXutri").click();
    //         cy.get('#txtThoigianRa').invoke('val').then((value)=>{
    //             thoigianxutri = value;
    //         });
    //         cy.get('#divModalWidth > .modal-content > .panel-heading > .close').click();
    //        }
    //        if(loaiDT == 'Nội trú'){
    //         common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');
    //         cy.get('#txtTimKiem').type(maBN);
    //         common.enterSelectBoxNormal('cbbLoai','3 tháng'); 
    //         cy.get('#select2-drpSelectTrangThai-container > .select2-selection__clear').click();
    //         cy.get('#btnTimKiem').click();
    //         cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(2)  td a').eq(4).click();
    //         cy.get(':nth-child(3) > .accordion-btn-wrap').click();
    //         cy.get('.active > ul > :nth-child(4) > a').click();     
    //         // cy.get('#txtThoigianRa').invoke('val').then((value)=>{
    //         //     thoigianxutri = value;
    //         // });
    //         // cy.log(thoigianxutri);
    //        }
    //        if(loaiDT == 'Ngoại trú'){
    //         common.goToFunctionFromMenu('danhsachdieutringoaitrudraw');
    //         cy.get('#txtTimKiem').type(maBN);
    //         common.enterSelectBoxNormal('cbbLoai','3 tháng'); 
    //         cy.get('#select2-drpSelectTrangThai-container > .select2-selection__clear').click();
    //         cy.get('#btnTimKiem').click();
    //         cy.get('#divDanhSachNgoaiTruContent tbody tr:first  td a').eq(4).click();
    //         cy.get('.selected > ul > :nth-child(5) > a').click();
    //         // cy.get('#txtThoigianRa').invoke('val').then((value)=>{
    //         //     thoigianxutri = value;
    //         // });
    //         // cy.log.thoigianxutri();
    //        }
           
    //     });

    //     cy.wrap(null).then(() => {
    //         common.goToFunctionFromMenu('vienphidanhsachdraw');
    //         common.enterSelectBoxNormal('cbbLoai','3 tháng'); 
    //         cy.log(maBN);
    //         common.enterSelectBoxNormal('drpSelectTrangThai','Chờ tất toán');
    //         cy.get('#txtTimKiem').type(maBN);
    //         cy.get('#btnTimKiem').click();
    //         cy.get('#divVienPhiDanhSachContent tbody tr:first  td a').eq(4).click();
    //         cy.get('#btnCHUYENTHANHTOAN').click();
    //         // cy.get('#aTrangThai i')
    //         //     .should('have.text', 'Đang thanh toán')
    //         //     .then(($i) => {
    //         //       const text = $i.text().trim();
    //         //       if (text === 'Đang thanh toán') {
    //         //         cy.get('#txtThoiGianTatToan').invoke('val').then((value)=>{
    //         //             cy.log(value);
    //         //         });
    //         //       } else {
    //         //         cy.get('.confirm')
    //         //         cy.fail('không thể tất toán');
    //         //       }
    //         //     });  
    //         //cy.get('#btnHOANTATTUDANGTT').click();
           
            
            
    //         // cy.get('#txtThoiGianTatToan').invoke('val').then((value)=>{
    //         //     cy.log(value);
    //         // });
    //     });
      
       

    //     // cy.wrap(null).then(() => {
    //     //     if(yLenh){
    //     //         cy.get('.confirm').click();
    //     //     }else{
    //     //         cy.get('#aTrangThai i')
    //     //         .should('have.text', 'Chờ nhập khoa')
    //     //         .then(($i) => {
    //     //           const text = $i.text().trim();
    //     //           if (text === 'Chờ nhập khoa') {
    //     //             cy.log('Thu hồi thành công');
    //     //           } else {
    //     //             cy.fail('Thu hồi thất bại');
    //     //           }
    //     //         });   
    //     //     }
    //     // });
    // });

    it('Tác vụ thu hồi', () => {
        common.enterSelectBoxNormal('drpSelectTrangThai','Hoàn tất');
        cy.get('#btnTimKiem').click();
        cy.get('#divVienPhiDanhSachContent tbody tr:first  td a').eq(4).click();
        cy.get("#btnTHUHOI").click();
        cy.get('#aTrangThai i')
        .should('have.text', 'Chờ tất toán')
        .then(($i) => {
          const text = $i.text().trim();
             if (text === 'Chờ tất toán') {
                cy.log('Thu hồi thành công');
          } else {
                cy.fail('Thu hồi thất bại');
           }
         }); 
    });
   
});