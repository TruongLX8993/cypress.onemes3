const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');
const {getHtml, getCurrentUrl} = require("../../common.cy");

describe("Thủ thuật", () => {

    beforeEach(() => {
        common.visitAndLoginOther(enviroment.tanky);
        common.goToFunctionFromMenu('danhsachthuthuatdraw');

    });

    it('Tác vụ vào thực hiện', () => {
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Chờ thực hiện');
        cy.get('#btnTimKiem').click();


        getHtml('#divDanhSachThuThuatContent tbody tr:first  td:nth-child(4) a')
            .then(text => {
                const re = new RegExp("thuthuatid=([^&]*)");
                let phauThuatId = re.exec(text)[1];
                cy.log(phauThuatId);
                getCurrentUrl()
                    .then(currentUrl => {
                        currentUrl = currentUrl.replace('wpid=danhsachthuthuatdraw', 'wpid=thuthuatnewdraw')
                        currentUrl += `&thuthuatid=${phauThuatId}`;
                        cy.visit(currentUrl);

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

            })



    });

    it('Tác vụ vào hoàn tất và thu hồi', () => {
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
        cy.get('#btnTimKiem').click();
        getHtml('#divDanhSachThuThuatContent tbody tr:first  td:nth-child(4) a')
            .then(text => {
                const re = new RegExp("thuthuatid=([^&]*)");
                let phauThuatId = re.exec(text)[1];
                cy.log(phauThuatId);
                getCurrentUrl()
                    .then(currentUrl => {
                        currentUrl = currentUrl.replace('wpid=danhsachthuthuatdraw', 'wpid=thuthuatnewdraw')
                        currentUrl += `&thuthuatid=${phauThuatId}`;
                        cy.visit(currentUrl);

                        // common.enterSelectBoxElasticSearch('cbbTTChinh', '1');
                        cy.get('#cbbTTChinh').parent().find('span.selection span.select2-selection').click();
                        cy.get(`#select2-cbbTTChinh-results`).find('tr').eq(1).click();

                        common.enterSelectBoxElasticSearch('cbbMauTuongTrinh', '1');
                        cy.get('#cbbPhuongPhapTT')
                            .then(($i) => {
                                if ($i.val() === null) {
                                    common.enterSelectBoxElasticSearch('cbbPhuongPhapTT', '1');
                                    cy.get('.select2-results__option--highlighted > table > tbody > tr > [style="color:maroon;font-weight:bold; width:20%;padding:4px; text-align: left;"]').click();
                                }
                            });

                        cy.get('#btnHOANTAT').click();

                        cy.document().then(doc=>{
                           const alert = doc.querySelectorAll('.sweet-alert');
                           if(alert.length > 0){
                               cy.get('.sweet-alert p').invoke('text').then(error => {
                                   cy.fail(error)
                               })
                           }else{
                               cy.get('#aTrangThai i')
                                   .invoke('text')
                                   .then(($i) => {
                                       const text = $i.trim();
                                       if (text === 'Hoàn tất') {
                                           cy.log('Hoàn tất thành công');
                                       } else {
                                           cy.fail('Hoàn tất thất bại');
                                       }
                                   });

                               cy.wait(1000);
                               cy.get('#btnTHUHOI').click();
                               cy.wait(1000);
                               cy.get('#aTrangThai')
                                   .then(($i) => {
                                       if ($i.text() === 'Đang thực hiện') {
                                           cy.log('Thu hồi thành công');
                                       } else {
                                           cy.fail('Thu hồi thất bại');
                                       }
                                   });
                           }
                        });



                    });

            })

    });


    it('Tác vụ hủy', () => {
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
        cy.get('#btnTimKiem').click();
        getHtml('#divDanhSachThuThuatContent tbody tr:first  td:nth-child(4) a')
            .then(text => {
                const re = new RegExp("thuthuatid=([^&]*)");
                let phauThuatId = re.exec(text)[1];
                cy.log(phauThuatId);
                getCurrentUrl()
                    .then(currentUrl => {
                        currentUrl = currentUrl.replace('wpid=danhsachthuthuatdraw', 'wpid=thuthuatnewdraw')
                        currentUrl += `&thuthuatid=${phauThuatId}`;
                        cy.visit(currentUrl);

                        //kiem tra vtyt,dv, thuốc
                        let statusHuy = true;
                        cy.get("#lnkVTYT").click();
                        cy.get('#divVTYT')
                            .then(($tbody) => {
                                if ($tbody.find('tr').length > 0) {
                                    statusHuy = false;
                                }
                            });
                        cy.get("#lnkThuoc").click();
                        cy.get('#divThuoc')
                            .then(($tbody) => {
                                if ($tbody.find('tr').length > 0) {
                                    statusHuy = false;
                                }
                            });
                        cy.get("#lnkTTCT").click();
                        cy.get("#btnHOANTRA").click();
                        if (!statusHuy) {
                            // cy.wait(3000);
                            // cy.get(".confirm").click();
                            common.clickConfirmBtn();
                            cy.wait(2000);
                            cy.get('#aTrangThai')
                                .then(($i) => {
                                    if ($i.text() === 'Hủy') {
                                        cy.log('Hủy thành công');
                                    } else {
                                        cy.fail('Hủy thất bại');
                                    }

                                });
                        } else {
                            cy.log('Không thể hủy do còn VTYT hoặc thuốc');
                        }
                    });

            })


    });


    it('Chức năng kê thuốc', () => {
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Chờ thực hiện');
        cy.get('#btnTimKiem').click();
        getHtml('#divDanhSachThuThuatContent tbody tr:first  td:nth-child(4) a')
            .then(text => {
                const re = new RegExp("thuthuatid=([^&]*)");
                let phauThuatId = re.exec(text)[1];
                cy.log(phauThuatId);
                getCurrentUrl()
                    .then(currentUrl => {
                        currentUrl = currentUrl.replace('wpid=danhsachthuthuatdraw', 'wpid=thuthuatnewdraw')
                        currentUrl += `&thuthuatid=${phauThuatId}`;
                        cy.visit(currentUrl);
                        cy.get('#btnVAOTH').click();


                        cy.get('#lnkThuoc').click();

                        cy.get('#cbbDonThuocMau').parent().find('span.selection span.select2-selection').click();
                        cy.get('#select2-cbbDonThuocMau-results').find('li:first').invoke('text').then((tenThuoc) => {
                            if (tenThuoc === 'Không có kết quả') {
                                cy.log('Trong phẫu thuật này không thể kê thêm thuốc');
                            }

                        });


                        cy.get(':nth-child(2) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();

                        // common.enterSelectBoxNormal('cbbThuoc','13589');
                        // cy.get('.select2-results__option--highlighted > table > tbody > tr > [style="color:maroon;overflow-wrap: break-word; font-weight:bold;width:13%;padding:4px"]').click();
                        cy.get('#cbbThuoc').parent().find('span.selection span.select2-selection').click();
                        cy.get('span.select2-search').find('input.select2-search__field').type('1');
                        cy.get('span.select2-results > ul.select2-results__options').find('li').eq(3).click();

                        cy.get('#txtSoLuongThuoc').type('1');
                        cy.get('#txtCachDung').type('1');
                        cy.get('#btnThemThuoc').click();
                        // cy.wait(5000);

                        cy.get('#divThuoc tr:first-child td:nth-child(5) input').should('be.visible').type(2);
                        cy.get('.iCheck-helper').click({multiple: true});
                        cy.get('tbody :nth-child(1) :nth-child(8) a .fas').click();
                        // cy.wait(5000);
                        // cy.get('.confirm').click();
                        common.clickConfirmBtn();
                    });

            });

    });


    it('Chức năng kê khai VTYT', () => {
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Chờ thực hiện');
        cy.get('#btnTimKiem').click();
        getHtml('#divDanhSachThuThuatContent tbody tr:first  td:nth-child(4) a')
            .then(text => {
                const re = new RegExp("thuthuatid=([^&]*)");
                let phauThuatId = re.exec(text)[1];
                cy.log(phauThuatId);
                getCurrentUrl()
                    .then(currentUrl => {
                        currentUrl = currentUrl.replace('wpid=danhsachthuthuatdraw', 'wpid=thuthuatnewdraw')
                        currentUrl += `&thuthuatid=${phauThuatId}`;
                        cy.visit(currentUrl);
                        cy.get('#btnVAOTH').click();


                        cy.get('#lnkVTYT').click();

                        cy.get('#cbbDonVTYTMauByDichVu').parent().find('span.selection span.select2-selection').click();
                        cy.get('span.select2-results > ul.select2-results__options').find('li:first').invoke('text').then((tenVTYT) => {
                            if (tenVTYT === 'Không có kết quả') {
                                cy.log('Trong phẫu thuật này không thể kê thêm VTYT');
                            }

                        });


                        cy.get(':nth-child(2) > .icheckbox_square-green > .iCheck-helper').click();

                        // common.enterSelectBoxNormal('cbbVTYT', 'bpv22');
                        // cy.get('.select2-results__option--highlighted > table > tbody > tr > [style="color:maroon; font-weight:bold;padding:4px;width:10%"]').click();
                        common.enterSelectBoxUlLi('cbbVTYT', 'a');
                        cy.get('#txtSoLuongVTYT').type('1');
                        cy.get('#btnAddVTYTThongThuong').click();
                        // cy.wait(5000);

                        cy.get('#divVTYT tr:first-child td:nth-child(5) input').should('be.visible').type(2);
                        cy.get('tbody :nth-child(1) :nth-child(8) a .fas').click();
                        // cy.wait(5000);
                        // cy.get('.confirm').click();
                        common.clickConfirmBtn();
                    });

            });
    });

    it('Check chức năng kê DVKT', function () {
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Chờ thực hiện');
        cy.get('#btnTimKiem').click();
        getHtml('#divDanhSachThuThuatContent tbody tr:first  td:nth-child(4) a')
            .then(text => {
                const re = new RegExp("thuthuatid=([^&]*)");
                let phauThuatId = re.exec(text)[1];
                cy.log(phauThuatId);
                getCurrentUrl()
                    .then(currentUrl => {
                        currentUrl = currentUrl.replace('wpid=danhsachthuthuatdraw', 'wpid=thuthuatnewdraw')
                        currentUrl += `&thuthuatid=${phauThuatId}`;
                        cy.visit(currentUrl);
                        cy.get('#btnVAOTH').click();


                        cy.get('#lnkChiDinhDVKT').click();
                        common.enterSelectBoxElasticSearch('cbbHangDoi', '10');
                        // common.enterSelectBoxFocus('cbbDichVu','01010001');
                        cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').focus();
                        cy.get('span.select2-search').find('input.select2-search__field').type('tt13');
                        cy.get('#select2-cbbDichVu-results').find('tr').eq(1).click();
                        cy.get('#txtDichVuChiTiet').type('cho đi khám');
                        common.btnID('btnAddDichVu');

                        cy.get('span.badge').each(($badge) => {
                            cy.wrap($badge)
                                .should('have.text', 'Mới')
                                .then(() => {
                                    cy.log('Đổi trạng thái thực hiện thành công');
                                    const hasBadgeClass = $badge.hasClass('badge');
                                    if (!hasBadgeClass) {
                                        throw new Error('Đổi trạng thái thực hiện thất bại');
                                    }
                                });
                        });

                        // common.enterSelectBoxUlLi('cbbDichVu','01010017');
                        cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').click();
                        cy.get('span.select2-search').find('input.select2-search__field').type('tt13');
                        cy.get('#select2-cbbDichVu-results').find('tr').eq(1).click();
                        cy.get('#txtDichVuChiTiet').type('aaaa');
                        common.btnID('btnAddDichVu');

                        // common.enterSelectBoxUlLi('cbbDichVu','01010010');
                        cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').click();
                        cy.get('span.select2-search').find('input.select2-search__field').type('tt13');
                        cy.get('#select2-cbbDichVu-results').find('tr').eq(1).click();
                        cy.get('#txtDichVuChiTiet').type('bbbb');
                        common.btnID('btnAddDichVu');

                        common.btnID('btnChuyenDVKT');
                        cy.get('span.badge').each(($badge) => {
                            cy.wrap($badge)
                                .should('have.text', 'Chờ thực hiện')
                                .then(() => {
                                    cy.log('Đổi trạng thái thực hiện thành công');
                                    const hasBadgeClass = $badge.hasClass('badge');
                                    if (!hasBadgeClass) {
                                        throw new Error('Đổi trạng thái thực hiện thất bại');
                                    }
                                });
                        });
                        common.btnID('btnThuHoiDVKT');
                        cy.get('span.badge').each(($badge) => {
                            cy.wrap($badge)
                                .should('have.text', 'Mới')
                                .then(() => {
                                    cy.log('Đổi trạng thái thực hiện thành công');
                                    const hasBadgeClass = $badge.hasClass('badge');
                                    if (!hasBadgeClass) {
                                        throw new Error('Đổi trạng thái thực hiện thất bại');
                                    }
                                });
                        });

                        cy.get('#tblDichVu > tbody > tr:first > td:nth-child(11) > a:nth-child(2) > .fas').click();
                        common.clickConfirmBtn();
                        cy.get('#tblDichVu > thead > tr:first > th:nth-child(9) > a:nth-child(2) > .fa').click();
                        common.clickConfirmBtn();
                        // common.enterSelectBoxUlLi('cbbDichVu','01010001');
                        cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').click();
                        cy.get('span.select2-search').find('input.select2-search__field').type('tt13');
                        cy.get('#select2-cbbDichVu-results').find('tr').eq(1).click();
                        cy.get('#txtDichVuChiTiet').type('cho đi khám');
                        common.btnID('btnAddDichVu');
                        cy.get('#tblDichVu > tbody > tr:first > td:nth-child(11) > a:first > .fa').click();
                        common.enterSelectBoxElasticSearch('cboHangdoiUpdate', '24');
                        cy.get('.modal-footer > button:first').click();
                    });

            });


    });

});
