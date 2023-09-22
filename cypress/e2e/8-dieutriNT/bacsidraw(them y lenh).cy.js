

const common = require('../common.cy');
const insuaranceNumber = require('../rd');
const SWalert = require('./function');

describe("Dieu tri NT", () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');

    });


//     it('Thêm y lệnh', function () {
//         console.log('abc');
//         cy.get('#txtTimKiem').clear().type('2300520945');
//         common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
//         common.enterSelectBoxNormal('cbbLoai', "3");
//         cy.get('#btnTimKiem').click();
//         cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
//         cy.get('#showDsYLenh').click();
//         cy.get('#trangthaiylenh').select('Mới');
//
//         cy.get('#divDsYLenh > .ibox-content:first').invoke('text').then((text) => {
//             if (text === 'Không có thông tin Y lệnh') {
//                 common.btnID('showThamKham');
//                 cy.get('#divStatusPopup i.badge')
//                     .should('have.text', 'Mới')
//                     .then(($badge) => {
//                         const hasBadgeClass = $badge.hasClass('badge');
//                         if (hasBadgeClass) {
//                             cy.log('Đổi trạng thái thực hiện thành công');
//                         } else {
//                             cy.fail('Đổi trạng thái thực hiện thất bại');
//                         }
//                     });
//                 common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
//                 cy.get('#txtChanDoanSoBoThamKham').clear().type('AAA');
//                 common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
//                 cy.get('#btnPopupHOANTAT').click();
//                 cy.get('#btnThemYLenhMoi').should('be.visible').click();
//
//                 cy.get('#divStatusPopup i.badge')
//                     .should('have.text', 'Mới')
//                     .then(($badge) => {
//                         const hasBadgeClass = $badge.hasClass('badge');
//                         if (hasBadgeClass) {
//                             cy.log('Đổi trạng thái thực hiện thành công');
//                         } else {
//                             cy.fail('Đổi trạng thái thực hiện thất bại');
//                         }
//                     });
//
//             } else {
//                 cy.get('#divDsYLenh tbody#tbodyylenh tr:first td:nth-child(2) a').click();
//                 cy.get('.trashicon > .fas').should('be.visible').click({});
//                 cy.wait(1000);
//                 common.clickConfirmBtn();
//                 cy.wait(1000);
//                 common.btnID('showThamKham');
//                 cy.get('#divStatusPopup i.badge')
//                     .should('have.text', 'Mới')
//                     .then(($badge) => {
//                         const hasBadgeClass = $badge.hasClass('badge');
//                         if (hasBadgeClass) {
//                             cy.log('Đổi trạng thái thực hiện thành công');
//                         } else {
//                             cy.fail('Đổi trạng thái thực hiện thất bại');
//                         }
//                     });
//
//                 common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
//                 cy.get('#txtChanDoanSoBoThamKham').clear().type('AAA');
//                 common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
//                 cy.get('#btnPopupHOANTAT').click();
//                 cy.get('#btnThemYLenhMoi').should('be.visible').click();
//
//                 cy.get('#divStatusPopup i.badge')
//                     .should('have.text', 'Mới')
//                     .then(($badge) => {
//                         const hasBadgeClass = $badge.hasClass('badge');
//                         if (hasBadgeClass) {
//                             cy.log('Đổi trạng thái thực hiện thành công');
//                         } else {
//                             cy.fail('Đổi trạng thái thực hiện thất bại');
//                         }
//                     });
//
//             }
//         }) ;
//     });
// });

    // it('Hoan tat y lenh', function () {
    //     common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
    //     cy.get('#showDsYLenh').click();
    //     cy.get('#trangthaiylenh').select('Mới');
    //
    //     cy.get('#divDsYLenh >.ibox-content:first').invoke('text').then((text) => {
    //        cy.log(text);
    //         if(text === 'Không có thông tin Y lệnh')
    //         {
    //             cy.get('#divDsYLenh tbody#tbodyylenh tr:first td:nth-child(2) a').click();
    //             cy.get('.trashicon > .fas').should('be.visible').click({});
    //             cy.wait(1000);
    //             common.clickConfirmBtn();
    //             cy.wait(1000);
    //             common.btnID('showThamKham');
    //             common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
    //             cy.get('#txtChanDoanSoBoThamKham').clear().type('AAA');
    //             common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
    //             cy.contains('Chỉ định nhiều nhóm').click();
    //             cy.get('#using_json ul li:nth-child(1) a').click();
    //             common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'LS29.3');
    //             cy.contains('label', 'Khám bệnh (10.1895)') // tìm label có data là "Khám bệnh"
    //                 .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
    //                 .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
    //                 .click() // tick vào checkbox
    //
    //             cy.get('#btnDongYChon').click();
    //             cy.get('#btnChapNhan').click();
    //             cy.wait(1000);
    //             cy.get('#btnPopupHOANTAT').click();
    //             cy.wait(1000);
    //
    //
    //             cy.get('#divStatusPopup i.badge')
    //                 .should('have.text', 'Hoàn tất')
    //                 .then(($badge) => {
    //                     const hasBadgeClass = $badge.hasClass('badge');
    //                     if (hasBadgeClass) {
    //                         cy.log('Đổi trạng thái thực hiện thành công');
    //                     } else {
    //                         cy.fail('Đổi trạng thái thực hiện thất bại');
    //                     }
    //                 });
    //             cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(11) .badge')
    //                 .should('have.text', 'Chờ thực hiện')
    //                 .then(($badge) => {
    //                     const hasBadgeClass = $badge.hasClass('badge');
    //                     if (hasBadgeClass) {
    //                         cy.log('Đổi trạng thái thực hiện thành công');
    //                     } else {
    //                         cy.fail('Đổi trạng thái thực hiện thất bại');
    //                     }
    //                 });
    //         }
    //
    //
    //         else{
    //             common.btnID('showThamKham');
    //             common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
    //             cy.get('#txtChanDoanSoBoThamKham').clear().type('AAA');
    //             common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
    //             cy.contains('Chỉ định nhiều nhóm').click();
    //             cy.get('#using_json ul li:nth-child(1) a').click();
    //             common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'LS29.3');
    //             cy.contains('label', 'Khám bệnh (10.1895)') // tìm label có data là "Khám bệnh"
    //                 .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
    //                 .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
    //                 .click() // tick vào checkbox
    //
    //             cy.get('#btnDongYChon').click();
    //             cy.get('#btnChapNhan').click();
    //             cy.wait(1000);
    //             cy.get('#btnPopupHOANTAT').click();
    //             cy.wait(1000);
    //
    //
    //             cy.get('#divStatusPopup i.badge')
    //                 .should('have.text', 'Hoàn tất')
    //                 .then(($badge) => {
    //                     const hasBadgeClass = $badge.hasClass('badge');
    //                     if (hasBadgeClass) {
    //                         cy.log('Đổi trạng thái thực hiện thành công');
    //                     } else {
    //                         cy.fail('Đổi trạng thái thực hiện thất bại');
    //                     }
    //                 });
    //             cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(11) .badge')
    //                 .should('have.text', 'Chờ thực hiện')
    //                 .then(($badge) => {
    //                     const hasBadgeClass = $badge.hasClass('badge');
    //                     if (hasBadgeClass) {
    //                         cy.log('Đổi trạng thái thực hiện thành công');
    //                     } else {
    //                         cy.fail('Đổi trạng thái thực hiện thất bại');
    //                     }
    //                 });
    //         }
    //
    //         });
    //         });
    // });



    it('Sao chép y lệnh', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.wait(1000);
        cy.get('#showDsYLenh').click();
        cy.get('#trangthaiylenh').select('Mới');

        cy.wait(1000);
        cy.get('#divDsYLenh > .ibox-content').invoke('text').then((text) => {
            cy.log(text);
            const formatText = text.trim();
            if (formatText === "Không có thông tin Y lệnh")
            {
                cy.log('PASS');
            }
            else
            {
                cy.get('#divDsYLenh tbody#tbodyylenh tr:first td:nth-child(3) a').click();
                cy.wait(1000);
                common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'sm');
                cy.get('#txtChanDoanSoBoThamKham').clear().type('CCC');
                common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C2');
                cy.get('#btnPopupHOANTAT').click();
                cy.wait(1000);
                cy.get('#btnSaoChep').click();
                cy.wait(1000);
                cy.get('.confirm').click();
                cy.get('#btnPopupHOANTAT').click();
                cy.get('.col-md-9 > a > .far').click();

            }

            common.btnID('showThamKham');
            common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
            cy.get('#txtChanDoanSoBoThamKham').clear().type('BBB');
            common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C1');
            cy.contains('Chỉ định nhiều nhóm').click();
            cy.get('#using_json ul li:nth-child(1) a').click();
            common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'LS29.3');
            cy.contains('label', 'Khám bệnh (10.1895)') // tìm label có data là "Khám bệnh"
                .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
                .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
                .click() // tick vào checkbox

            cy.get('#btnDongYChon').click();
            cy.get('#btnChapNhan').click();

            cy.get('#txtThoigianThamKham').invoke('attr', 'data-value').then((time1) => {
                cy.log(time1);
                cy.get('.col-md-9 > a > .fa-arrow-alt-circle-left').click();
                cy.get('.accordion-nav > ul > li:nth-child(3) > .accordion-btn-wrap').click();
                cy.get('.accordion-nav > ul > li:nth-child(3) > ul > li:nth-child(4) > a').click();
                cy.get('#txtThoiGianRa').click();
                cy.wait(500);
                cy.get('#txtThoiGianRa').invoke('val').then((time2) => {
                    cy.log(time2);
                    if(time2 >= time1)
                    {
                        cy.get('.accordion-nav > ul > li:nth-child(1) > .accordion-btn-wrap').click();
                        cy.get('.accordion-nav > ul > li:nth-child(1) > ul > li:nth-child(2) > a').click();
                        cy.get('#trangthaiylenh').select('Mới');
                        cy.wait(1000);
                        cy.get('#divDsYLenh tbody#tbodyylenh tr:first td:nth-child(3) a').click();
                        cy.wait(1000);
                        common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
                        cy.get('#txtChanDoanSoBoThamKham').clear().type('Test');
                        common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
                        cy.get('#btnPopupHOANTAT').click();
                        cy.wait(2000);

                        cy.get('#txtThoigianThamKham').invoke('attr', 'data-value').then((times) => {
                            cy.log(times);
                            const [time, date] = times.split(' ');
                            const [hour, minute] = time.split(':');
                            const [day, month, year] = date.split('/');

                            const today = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
                            const tomorrow = new Date(today);
                            tomorrow.setDate(today.getDate() + 1);

                            const formattedDate = `${String(tomorrow.getHours()).padStart(2, '0')}:${String(tomorrow.getMinutes()).padStart(2, '0')} ${String(tomorrow.getDate()).padStart(2, '0')}/${String(tomorrow.getMonth() + 1).padStart(2, '0')}/${tomorrow.getFullYear()}`;
                            cy.log(formattedDate);


                            cy.get('#btnSaoChep').click();
                            cy.wait(1000);
                            cy.get('.sa-button-container > button.confirm').click();
                            cy.wait(2000);

                            cy.get('#divStatusPopup i.badge')
                                .should('have.text', 'Mới')
                                .then(($badge) => {
                                    const hasBadgeClass = $badge.hasClass('badge');
                                    if (hasBadgeClass) {
                                        cy.log('Đổi trạng thái thực hiện thành công');
                                    } else {
                                        cy.fail('Đổi trạng thái thực hiện thất bại');
                                    }
                                });
                            cy.get(':nth-child(11) > .badge')
                                .should('have.text', 'Mới')
                                .then(($badge) => {
                                    const hasBadgeClass = $badge.hasClass('badge');
                                    if (hasBadgeClass) {
                                        cy.log('Đổi trạng thái thực hiện thành công');
                                    } else {
                                        cy.fail('Đổi trạng thái thực hiện thất bại');
                                    }
                                });

                            cy.get('#txtThoigianThamKham').invoke('attr', 'data-value').then((thoigianchidinh) => {
                                cy.log(thoigianchidinh);
                                if (thoigianchidinh === formattedDate)
                                {
                                    cy.get('#btnPopupHOANTAT').click();
                                    cy.wait(1000);
                                }
                                else
                                {
                                    cy.log('Sai thời gian chỉ định!!!');
                                }

                            });

                        });
                    }
                    else
                    {
                        cy.get('.confirm').click();
                    }
                });
            });

        });
    });

    it('Sao chép y lệnh nhiều ngày', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(3) td:nth-child(5) a').click();
        cy.wait(1000);
        cy.get('#showDsYLenh').click();
        cy.get('#trangthaiylenh').select('Mới');

        cy.get('#divDsYLenh > .ibox-content').invoke('text').then((text) => {
            cy.log(text);
            const formatText = text.trim();
            if (formatText === "Không có thông tin Y lệnh")
            {
                cy.log('PASS');
                common.btnID('showThamKham');
            }
            else
            {
                cy.get('#divDsYLenh tbody#tbodyylenh tr:first td:nth-child(3) a').click();
                cy.wait(1000);
                common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'sm');
                cy.get('#txtChanDoanSoBoThamKham').clear().type('CCC');
                common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C2');
                // cy.get('#cboSaoYLenh').select('2');
                // cy.get('#cboHinhThucSao').select('Sao dịch vụ');
                cy.get('#btnPopupHOANTAT').click();
                cy.wait(2000);
                cy.get('#btnThemYLenhMoi').click();
            }


            common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
            cy.get('#txtChanDoanSoBoThamKham').clear().type('BBB');
            common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C1');
            cy.get('#cboSaoYLenh').select('2');
            cy.get('#cboHinhThucSao').select('Sao dịch vụ');
            cy.contains('Chỉ định nhiều nhóm').click();
            cy.get('#using_json ul li:nth-child(1) a').click();
            common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'LS29.3');
            cy.contains('label', 'Khám bệnh (10.1895)') // tìm label có data là "Khám bệnh"
                .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
                .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
                .click() // tick vào checkbox

            cy.get('#btnDongYChon').click();
            cy.get('#btnChapNhan').click();

            cy.get('#txtThoigianThamKham').invoke('attr', 'data-value').then((time1) => {
                cy.log(time1);
                cy.get('.col-md-9 > a > .fa-arrow-alt-circle-left').click();
                cy.get('.accordion-nav > ul > li:nth-child(3) > .accordion-btn-wrap').click();
                cy.get('.accordion-nav > ul > li:nth-child(3) > ul > li:nth-child(4) > a').click();
                cy.get('#txtThoiGianRa').click();
                cy.get('#txtThoiGianRa').invoke('val').then((time2) => {
                    cy.log(time2);
                    if(time2 >= time1)
                    {
                        cy.get('.accordion-nav > ul > li:nth-child(1) > .accordion-btn-wrap').click();
                        cy.get('.accordion-nav > ul > li:nth-child(1) > ul > li:nth-child(2) > a').click();
                        cy.get('#trangthaiylenh').select('Mới');
                        cy.wait(1000);
                        cy.get('#divDsYLenh tbody#tbodyylenh tr:first td:nth-child(3) a').click();
                        cy.wait(1000);
                        common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
                        cy.get('#txtChanDoanSoBoThamKham').clear().type('Test');
                        common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
                        cy.get('#cboSaoYLenh').select('2');
                        cy.get('#cboHinhThucSao').select('Sao dịch vụ');
                        cy.get('#btnPopupHOANTAT').click();
                        cy.wait(2000);

                        cy.get('#txtThoigianThamKham').invoke('attr', 'data-value').then((times) => {
                            cy.log(times);
                            const [time, date] = times.split(' ');
                            const [hour, minute] = time.split(':');
                            const [day, month, year] = date.split('/');

                            const today = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
                            const tomorrow = new Date(today);
                            tomorrow.setDate(today.getDate() + 1);

                            const formattedDate = `${String(tomorrow.getHours()).padStart(2, '0')}:${String(tomorrow.getMinutes()).padStart(2, '0')} ${String(tomorrow.getDate()).padStart(2, '0')}/${String(tomorrow.getMonth() + 1).padStart(2, '0')}/${tomorrow.getFullYear()}`;
                            cy.log(formattedDate);

                            cy.get('.confirm').click();
                            cy.wait(2000);

                            cy.get('#divStatusPopup i.badge')
                                .should('have.text', 'Hoàn tất')
                                .then(($badge) => {
                                    const hasBadgeClass = $badge.hasClass('badge');
                                    if (hasBadgeClass) {
                                        cy.log('Đổi trạng thái thực hiện thành công');
                                    } else {
                                        cy.fail('Đổi trạng thái thực hiện thất bại');
                                    }
                                });
                            cy.get(':nth-child(11) > .badge')
                                .should('have.text', 'Chờ thực hiện')
                                .then(($badge) => {
                                    const hasBadgeClass = $badge.hasClass('badge');
                                    if (hasBadgeClass) {
                                        cy.log('Đổi trạng thái thực hiện thành công');
                                    } else {
                                        cy.fail('Đổi trạng thái thực hiện thất bại');
                                    }
                                });

                            cy.get('#txtThoigianThamKham').invoke('attr', 'data-value').then((thoigianchidinh) => {
                                cy.log(thoigianchidinh);
                                if (thoigianchidinh === formattedDate)
                                {
                                    cy.get('#btnPopupHOANTAT').click();
                                    cy.wait(1000);
                                }
                                else
                                {
                                    cy.log('Sai thời gian chỉ định!!!');
                                }

                            });

                        });
                    }
                    else
                    {
                        cy.log('Thời gian chỉ định nhỏ hơn thời gian ra viện!!!');
                    }
                });
            });

        });
    });


    it('Thu hoi y lenh', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(10) td:nth-child(5) a').click();
        cy.get('#showDsYLenh').click();
        cy.get('#trangthaiylenh').select('Mới');

        cy.get('#divDsYLenh > .ibox-content:first').invoke('text').then((text) => {
            cy.log(text);
            const formatText = text.trim();
            if (formatText === "Không có thông tin Y lệnh")
            {
                cy.log('PASS');
            }
            else
            {
                cy.get('#divDsYLenh tbody#tbodyylenh tr:first td:nth-child(3) a').click();
                cy.wait(1000);
                common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'sm');
                cy.get('#txtChanDoanSoBoThamKham').clear().type('CCC');
                common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C2');
                cy.get('#btnPopupHOANTAT').click();
                cy.wait(1000);
                cy.get('.col-md-9 > a > .far').click();
            }

            cy.get('#showThamKham').click();
            common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
            cy.get('#txtChanDoanSoBoThamKham').clear().type('BBB');
            common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
            cy.contains('Chỉ định nhiều nhóm').click();
            cy.get('#using_json ul li:nth-child(1) a').click();
            common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'LS29.3');
            cy.contains('label', 'Khám bệnh (10.1895)') // tìm label có data là "Khám bệnh"
                .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
                .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
                .click() // tick vào checkbox

            cy.get('#btnDongYChon').click();
            cy.get('#btnChapNhan').click();
            cy.get('#btnPopupHOANTAT').click();
            cy.wait(1000);
            cy.get('#btnPopupTHUHOI').click();
            cy.wait(2000);


            cy.get('#divStatusPopup i.badge')
                .should('have.text', 'Mới')
                .then(($badge) => {
                    const hasBadgeClass = $badge.hasClass('badge');
                    if (hasBadgeClass) {
                        cy.log('Đổi trạng thái thực hiện thành công');
                    } else {
                        cy.fail('Đổi trạng thái thực hiện thất bại');
                    }
                });

            cy.get(':nth-child(11) > .badge')
                .should('have.text', 'Mới')
                .then(($i) => {
                    const text = $i.text().trim();
                    if (text === 'Mới') {
                        cy.log('Đổi trạng thái thành công');
                    } else {
                        cy.fail('Đổi trạng thái thất bại');
                    }
                });

            cy.get('#txtChanDoanSoBoThamKham').clear().type('Mai test');
            common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'sm');
            common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C2');
            cy.get('#btnPopupHOANTAT').click();
            cy.wait(1000);
        });
    });


    it('Xoa y lenh', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(11) td:nth-child(5) a').click();
        cy.get('#showDsYLenh').click();
        cy.get('#trangthaiylenh').select('Mới');

        cy.get('#divDsYLenh > .ibox-content:first').invoke('text').then((text) => {
            cy.log(text);
            const formatText = text.trim();
            if (formatText === "Không có thông tin Y lệnh") {
                cy.log('PASS');
            }
            else
            {
                cy.get('#divDsYLenh tbody#tbodyylenh tr:first td:nth-child(3) a').click();
                cy.wait(1000);
                common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'sm');
                cy.get('#txtChanDoanSoBoThamKham').clear().type('CCC');
                common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C2');
                cy.get('#btnPopupHOANTAT').click();
                cy.wait(1000);
                cy.get('.col-md-9 > a > .far').click();
            }
            cy.get('#showThamKham').click();
            cy.get('#btnPopupXOA').click();

            cy.get('#showThamKham').click();
            cy.contains('Chỉ định nhiều nhóm').click();
            cy.get('#using_json ul li:nth-child(1) a').click();
            common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'LS29.3');
            cy.contains('label', 'Khám bệnh (10.1895)') // tìm label có data là "Khám bệnh"
                .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
                .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
                .click() // tick vào checkbox

            cy.get('#btnDongYChon').click();
            cy.get('#btnChapNhan').click();
            cy.wait(1000);
            cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(2) > a > .fa').click();
            cy.get(':nth-child(11) > .badge')
                .should('have.text', 'Chờ thực hiện')
                .then(($badge) => {
                    const hasBadgeClass = $badge.hasClass('badge');
                    if (hasBadgeClass) {
                        cy.log('Đổi trạng thái thực hiện thành công');
                    } else {
                        cy.fail('Đổi trạng thái thực hiện thất bại');
                    }
                });
            cy.get('#btnPopupXOA').click();
            cy.wait(2000);
            cy.get('.confirm').click();

        });

    });


    it('Ke PT', function () {
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
        cy.get('#btnTimKiem').click();
        cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(10) td:nth-child(5) a').click();
        cy.get('#showDsYLenh').click();
        cy.get('#trangthaiylenh').select('Mới');

        cy.get('#divDsYLenh > .ibox-content:first').invoke('text').then((text) => {
            cy.log(text);
            const formatText = text.trim();
            if (formatText === "Không có thông tin Y lệnh")
            {
                cy.log('PASS');
                // thêm y lệnh
                cy.get('#showThamKham').click();
                common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'sm');
                cy.get('#txtChanDoanSoBoThamKham').clear().type('Mai test');
                common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
                cy.get('#btnHoiChan').click();

                cy.get('.col-sm-8 .col-sm-12 .row .col-sm-4:nth-child(2) label div.iradio_square-green ins.iCheck-helper').first().click({force: true});
                common.enterSelectBoxElasticSearch('cboHangDoiPT', 'LS12.22');
                cy.get('#cboDichVuPT').parent().find('span.selection span.select2-selection').click();
                cy.get('span.select2-search').find('input.select2-search__field').type('08111793');
                cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
                cy.get('#btnChapNhanNhapTheBhyt').click();
                cy.wait(2000);

                cy.document().then(doc => {
                    const alert = doc.querySelectorAll('.sweet-alert');
                    if (alert.length > 0) {
                        cy.get('.sweet-alert p[style="display: block;"]').invoke('text').then(thongbao => {
                            cy.log(thongbao);
                            if(thongbao.trim().includes('phẫu thuật'))
                            {
                                cy.get('.confirm').click();
                                cy.get('#btnPopupXOA').click();
                            }
                            if(thongbao.trim().includes('Thời gian chỉ định'))
                            {
                                cy.get('.confirm').click();
                                cy.get('#btnDongPopupMoiHCInThamKham').click();
                                cy.get('#btnPopupXOA').click();
                            }else{
                                SWalert.checkSweetAlert();

                            }
                        });
                    }
                    else
                    {
                        SWalert.checkSweetAlert();
                    }
                });
            }
            else
            {
                cy.get('#divDsYLenh tbody#tbodyylenh tr:first td:nth-child(3) a').click();
                cy.wait(1000);
                common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
                cy.get('#txtChanDoanSoBoThamKham').clear().type('CCC');
                common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C2');
                cy.get('#btnPopupHOANTAT').click();
                cy.wait(1000);
                cy.get('.col-md-9 > a > .far').click();
                cy.wait(500);
                // thêm y lệnh
                cy.get('#showThamKham').click();
                common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'sm');
                cy.get('#txtChanDoanSoBoThamKham').clear().type('Mai test');
                common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
                cy.get('#btnHoiChan').click();

                cy.get('.col-sm-8 .col-sm-12 .row .col-sm-4:nth-child(2) label div.iradio_square-green ins.iCheck-helper').first().click({force: true});
                common.enterSelectBoxElasticSearch('cboHangDoiPT', 'LS12.22');
                cy.get('#cboDichVuPT').parent().find('span.selection span.select2-selection').click();
                cy.get('span.select2-search').find('input.select2-search__field').type('08111793');
                cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
                cy.get('#btnChapNhanNhapTheBhyt').click();
                cy.wait(2000);

                cy.document().then(doc => {
                    const alert = doc.querySelectorAll('.sweet-alert');
                    if (alert.length > 0) {
                        cy.get('.sweet-alert p[style="display: block;"]').invoke('text').then(thongbao => {
                          cy.log(thongbao);
                            if(thongbao.trim().includes('phẫu thuật'))
                            {
                                cy.get('.confirm').click();
                                cy.get('#btnPopupXOA').click();
                            }
                            else if(thongbao.trim().includes('Thời gian chỉ định'))
                            {
                                cy.get('.confirm').click();
                                cy.get('#btnDongPopupMoiHCInThamKham').click();
                                cy.get('#btnPopupXOA').click();
                            }else{
                                SWalert.checkSweetAlert();
                            }
                        });
                    }
                    else
                    {
                        SWalert.checkSweetAlert();
                    }
                });
            }





        });
    });

    it('Kết thúc điều trị', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(5) td:nth-child(5) a').click();
        cy.get('#showDsYLenh').click();
        cy.get('#trangthaiylenh').select('Mới');

        cy.get('#divDsYLenh > .ibox-content:first').invoke('text').then((text) => {
            cy.log(text);
            const formatText = text.trim();
            if (formatText === "Không có thông tin Y lệnh")
            {
                cy.log('PASS');
            }
            else
            {
                cy.get('#divDsYLenh tbody#tbodyylenh tr:first td:nth-child(3) a').click();
                cy.wait(1000);
                common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'sm');
                cy.get('#txtChanDoanSoBoThamKham').clear().type('CCC');
                common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C2');
                cy.get('#btnPopupHOANTAT').click();
                cy.wait(1000);
                cy.get('.col-md-9 > a > .far').click();
            }

            cy.get('.accordion-nav > ul > li:nth-child(3) > .accordion-btn-wrap').click();
            cy.get('.accordion-nav > ul > li:nth-child(3) > ul > li:nth-child(4) > a').click();
            cy.viewport(1500, 800);

            cy.get('#txtThoiGianRa').click();
            cy.get('#txtThoiGianRa').invoke('val').then((timeRa) => {
                cy.log(timeRa);
                cy.get('#divMenuContent > h5:nth-child(4) > b').invoke('text').then(maBN => {
                    cy.log(maBN);
                    const numberOnly = maBN.match(/\d+/);
                    const numberWithoutBrackets = numberOnly[0].replace(/\[|\]/g, '');
                    cy.log(numberWithoutBrackets);

                    cy.get('#buttonBackNT').click();
                    cy.wait(1000);
                    cy.get('#txtTimKiem').type(numberWithoutBrackets);
                    cy.get('#btnTimKiem').click();
                    cy.get('#tblNoiTru > tbody > tr:nth-child(2) > td:nth-child(5) > a').click();
                    cy.get('#showDsYLenh').click();

                    cy.get('#trangthaiylenh').select('Hoàn tất');
                    cy.wait(1000);

                    cy.get('#divDsYLenh > .ibox-content:first').invoke('text').then((text) => {
                        cy.log(text);
                        const formatText = text.trim();
                        if (formatText === "Không có thông tin Y lệnh")
                        {
                            cy.log('PASS');
                            cy.get('.accordion-nav > ul > li:nth-child(3) > .accordion-btn-wrap').click();
                            cy.get('.accordion-nav > ul > li:nth-child(3) > ul > li:nth-child(4) > a').click();
                            cy.get('#cbbXuTri').select('Ra viện');
                            cy.get('#txtThoiGianRa').clear();
                            cy.get('#txtSoNgayDT').clear().type('20');
                            cy.get('#cboTinhTrangRaVien').select('Ra viện');
                            common.enterSelectBoxNormal('cboKetQuaDT', 'Đỡ, giảm');
                            common.enterSelectBoxElasticSearch('cboLydoChove', 'Cho về');
                            common.enterSelectBoxElasticSearch('cboBacsi', 'VD02152');
                            cy.get('#btnSaveXuTri').click();
                            cy.wait(1000);
                            cy.get('.confirm').click();
                            cy.get('#txtThoiGianRa').click();
                            cy.get('#btnSaveXuTri').click();
                            cy.wait(1000);
                            cy.get('#btnHOANTAT').click();
                            cy.wait(2000);
                            cy.document().then(doc=>{
                                const alert = doc.querySelectorAll('.modal-content');
                                if(alert.length >0)
                                {
                                    cy.get('.modal-content').invoke('text').then(text => {
                                        cy.contains('Bỏ qua').click();

                                    });
                                }
                                else
                                {
                                    cy.get('.badge')
                                        .should('have.text', 'Hoàn tất')
                                        .then(($badge) => {
                                            const hasBadgeClass = $badge.hasClass('badge');
                                            if (hasBadgeClass)
                                            {
                                                cy.log('Đổi trạng thái thực hiện thành công');
                                            }
                                            else
                                            {
                                                cy.fail('Đổi trạng thái thực hiện thất bại');
                                            }
                                        });
                                }
                            });
                        }
                        else
                        {
                            cy.get('#tbodyylenh > tr:nth-child(1) > td:nth-child(3) > a').click();
                            cy.get('#txtThoigianThamKham').invoke('attr', 'data-value').then((timeChiDinh) => {
                                cy.log(timeChiDinh);
                                if (timeRa < timeChiDinh)
                                {
                                    cy.log('Không xử trí ra viện được!!!');
                                }
                                else
                                {
                                    cy.get('.col-md-9 > a > .fa-arrow-alt-circle-left').click();
                                    cy.get('.accordion-nav > ul > li:nth-child(3) > .accordion-btn-wrap').click();
                                    cy.get('.accordion-nav > ul > li:nth-child(3) > ul > li:nth-child(4) > a').click();
                                    cy.get('#cbbXuTri').select('Ra viện');
                                    cy.get('#txtThoiGianRa').clear();
                                    cy.get('#txtSoNgayDT').clear().type('20');
                                    cy.get('#cboTinhTrangRaVien').select('Ra viện');
                                    common.enterSelectBoxNormal('cboKetQuaDT', 'Đỡ, giảm');
                                    common.enterSelectBoxElasticSearch('cboLydoChove', 'Cho về');
                                    common.enterSelectBoxElasticSearch('cboBacsi', 'VD02152');
                                    cy.get('#btnSaveXuTri').click();
                                    cy.wait(1000);
                                    cy.get('.confirm').click();
                                    cy.get('#txtThoiGianRa').click();
                                    cy.get('#btnSaveXuTri').click();
                                    cy.wait(1000);
                                    cy.get('#btnHOANTAT').click();
                                    cy.wait(2000);
                                    cy.document().then(doc=>{
                                        const alert = doc.querySelectorAll('.sweet-alert');
                                        if(alert.length >1)
                                        {
                                            cy.get('.sweet-alert').invoke('text').then(text => {
                                                cy.contains('Bỏ qua').click();

                                            });
                                        }
                                        else
                                        {
                                            cy.get('.badge')
                                                .should('have.text', 'Hoàn tất')
                                                .then(($badge) => {
                                                    const hasBadgeClass = $badge.hasClass('badge');
                                                    if (hasBadgeClass)
                                                    {
                                                        cy.log('Đổi trạng thái thực hiện thành công');
                                                    }
                                                    else
                                                    {
                                                        cy.fail('Đổi trạng thái thực hiện thất bại');
                                                    }
                                                });
                                        }
                                    });
                        }
                    });
                }
                    });
            });
                });
        });

    });



    it('Thu hồi điều trị', function () {
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Hoàn tất');
        cy.get('#btnTimKiem').click();
        cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#btnTHUHOI').click();
        cy.wait(2000);

        cy.document().then(doc=>{
            const alert = doc.querySelectorAll('.sweet-alert');
            if(alert.length >0){
                cy.get('.sweet-alert').invoke('text').then(text => {
                    cy.get('.confirm').click();
                });
            }
            else
            {
                cy.get('#aTrangThai i.badge')
                    .should('have.text', 'Đang thực hiện')
                    .then(($i) => {
                        const text = $i.text().trim();
                        if (text === 'Đang thực hiện')
                        {
                            cy.log('Đổi trạng thái thành công');
                        }
                        else
                        {
                            cy.fail('Đổi trạng thái thất bại');
                        }
                    });

                cy.get('.accordion-nav > ul > li:nth-child(3) > .accordion-btn-wrap').click();
                cy.get('.accordion-nav > ul > li:nth-child(3) > ul > li:nth-child(4) > a').click();
                // cy.wait(2000);
                cy.get('#cbbXuTri').select('Ra viện');
                cy.get('#txtThoiGianRa').click();
                cy.get('#txtSoNgayDT').clear().type('6');
                cy.get('#cboTinhTrangRaVien').select('Ra viện');
                common.enterSelectBoxNormal('cboKetQuaDT', 'Đỡ, giảm');
                common.enterSelectBoxElasticSearch('cboLydoChove', 'Cho về');
                common.enterSelectBoxElasticSearch('cboBacsi', 'VD02152');
                cy.get('#btnSaveXuTri').click();
                cy.wait(1000);
                cy.get('#btnHOANTAT').click();
                cy.wait(3000);
                cy.get('#aTrangThai i.badge')
                    .should('have.text', 'Hoàn tất')
                    .then(($i) => {
                        const text = $i.text().trim();
                        if (text === 'Hoàn tất')
                        {
                            cy.log('Đổi trạng thái thành công');
                        }
                        else
                        {
                            cy.fail('Đổi trạng thái thất bại');
                        }
                    });
            }

        });
    });

});