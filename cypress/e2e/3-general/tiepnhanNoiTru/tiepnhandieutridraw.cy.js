const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');

describe("Tiep Nhan NT", () => {

    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('danhsachttvaorakhoadraw');

    });

    it('Nhập khoa', function () {
        console.log('abc');
        cy.get('#drpSelectTrangThai').select('Chờ nhập khoa');
        common.enterSelectBoxNormal('cbbLoai', "3 tháng");
        cy.get('#btnTimKiem').click();
        cy.get('#divListFormDsTTVRK tbody tr:nth-child(1) td:nth-child(3) a').invoke('text').then(maBN=>{
            cy.get('#divListFormDsTTVRK tbody tr:nth-child(1) td:nth-child(3) a').click();
            cy.get('#cboBuong').parent().find('span.selection span.select2-selection').click();
            cy.get(`#select2-cboBuong-results`).find('tr:first').click();

            cy.get('#cboGiuong').parent().find('span.selection span.select2-selection').click();
            cy.get(`#select2-cboGiuong-results`).find('tr:first').click();
            common.enterSelectBoxUlLi('cboDichVu', '150');
            cy.get('#btnNHAPKHOA').click();
            cy.wait(1000);
            cy.get('#aTrangThai i').invoke('text').then(status => {
                if (status.trim() === 'Đã nhập khoa') {
                    cy.log('Nhập khoa thành công');

                    cy.get('#select2-cboBuong-container').invoke('attr', 'title').then(buong => {
                        cy.log(buong);
                        cy.get('#select2-cboGiuong-container').invoke('attr', 'title').then(giuong => {
                            cy.log(giuong);
                            cy.wait(1000);
                            common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');
                            cy.get('#txtTimKiem').clear().type(maBN);
                            common.btnID('btnTimKiem');
                            cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(2) td:nth-child(2) a').click();
                            cy.get('a#btnBG').click();

                            cy.document().then(doc => {
                                const empty = doc.querySelectorAll('h3')
                                if (empty.length > 0) {
                                    throw new Error('Khi nhập buồng giường ở phần nhập khoa nhưng không xuất hiện ở dieuduongdraw');
                                } else {
                                    cy.get('#vertical-timeline .row').each((row, index) => {
                                        const status = row.find('.vertical-date').find('span.badge').text();
                                        if (status === 'Đang thực hiện') {
                                            cy.get(`#vertical-timeline .row:nth-child(${index + 1}) .col-xs-6:nth-child(2) > h2`).should('contain', 'Giường').invoke('text').then((text) => {
                                                const parts = text.split('|');
                                                const beforeCharacter = parts[1].trim();
                                                const ddbuong = beforeCharacter.split(' ')[0];
                                                const ddgiuong = text.match(/Giường\s+(.*?)\s+\|/)[1];

                                                cy.log(ddbuong);
                                                cy.log(ddgiuong);

                                                if (buong.trim() === ddbuong && giuong.trim() === ddgiuong) {
                                                    cy.log('Thông tin buồng giường ở nhập khoa trùng khớp với thông tin ở dieuduongdraw')
                                                } else {
                                                    cy.fail('Sai thông tin buồng giường đã nhập ở phần nhập khoa và dieuduongdraw');
                                                }
                                            });
                                        }
                                    });

                                }
                            });

                        });
                    });
                } else {
                    throw new Error('Nhập khoa không thành công');
                }
            });
        });


    });


// it('Thu hồi', function () {
//     console.log('abc');
//     cy.get('#drpSelectTrangThai').select('Chờ nhập khoa');
//     common.enterSelectBoxNormal('cbbLoai','3');
//     cy.get('#btnTimKiem').click();
//     cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(3) a').click();
//     cy.get('#btnNHAPKHOA').click();
//     cy.get('#btnTHUHOI').click();
//
//     cy.wait(1000);
//     cy.document().then(doc=>{
//        const alert = doc.querySelectorAll('.sweet-alert');
//        if(alert.length > 0){
//            cy.get('.sweet-alert p').invoke('text').then(error=>{
//                cy.log(error);
//            });
//        }else{
//            cy.get('#aTrangThai i').invoke('text').then(status=>{
//               if(status.trim() === 'Chờ nhập khoa'){
//                   cy.get('#txtThoiGianVaoKhoa').type('09:45 26/07/2023{enter}');
//                   //common.enterSelectBoxElas('cboBacSi',"Trần Trung Hiếu");
//                   common.enterSelectBoxElasticSearch('cboBenhChinh',"A01.1");
//                   cy.get('#btnNHAPKHOA').click();
//               } else{
//                   throw new Error('Thu hồi thất bại');
//               }
//            });
//        }
//     });
//
//
// });
//
// it('Check tác vụ "hủy nhập khoa"', function () {
//     cy.get('#drpSelectTrangThai').select('Chờ nhập khoa');
//     common.enterSelectBoxNormal('cbbLoai','3');
//     cy.get('#btnTimKiem').click();
//     cy.get('#divDanhSachContent tbody tr:nth-child(2) td:nth-child(3) a').click();
//     cy.get('#btnNHAPKHOA').click();
//     cy.get('#btnTHUHOI').click();
//     cy.get('#aTrangThai i')
//         .should('have.text', 'Chờ nhập khoa')
//         .then(($i) => {
//             const text = $i.text().trim();
//             if (text === 'Chờ nhập khoa') {
//                 cy.log('Đổi trạng thái thành công');
//             } else {
//                 cy.fail('Đổi trạng thái thất bại');
//             }
//         });
//     common.enterSelectBoxElasticSearch('cboBenhChinh','A00');
//
//     cy.get('#btnNHAPKHOA').click();
//     cy.get('#btnTHUHOI').click();
//     cy.get('#btnHUYNHAPKHOA').click();
//     cy.get('#txtGhiChu').type('Khỏi');
//     cy.get('#btnHuyNhapKhoa > strong').click();
//     cy.get('#aTrangThai i')
//         .should('have.text', 'Hủy')
//         .then(($i) => {
//             const text = $i.text().trim();
//             if (text === 'Hủy') {
//                 cy.log('Đổi trạng thái thành công');
//                 common.goToFunctionFromMenu('khambenhdanhsachdraw');
//                 cy.get('#txtTimKiem').clear().type(maBN);
//                 common.enterSelectBoxNormal('drpSelectTrangThai','hoan tat');
//                 common.enterSelectBoxNormal('cbbLoai','3');
//                 common.btnID('btnTimKiem');
//                 cy.wait(500);
//                 common.btnID('btnTHUHOI');
//                 common.enterSelectBoxElasticSearch('cbbBacSi','a');
//                 cy.get('#txtChanDoanSoBo').clear().type('viêm họng cấp');
//                 common.btnID('btnHOANTAT');
//             } else {
//                 cy.fail('Đổi trạng thái thất bại');
//             }
//         });
//
//
// })


})
;