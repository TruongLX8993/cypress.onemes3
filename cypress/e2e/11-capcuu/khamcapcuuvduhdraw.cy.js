const common = require("../common.cy");

describe("Kham benh CC", () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('danhsachkhamcapcuu');

    });

    it('Vào khám CC', function () {
        console.log('abc');
        cy.get('#drpSelectTrangThai').select('Chờ thực hiện', { force: true });
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('tbody > tr:nth-child(1) >td:nth-child(4) > a').click();
        // common.enterSelectBoxElasticSearch('cbbTuaTrucCC', 'KIÊN 34');
        // cy.contains('Chấp nhận').click();

        cy.get('#aTrangThai > i')
            .should('have.text', 'Chờ thực hiện')
            .then(($i) => {
                const text = $i.text().trim();
                if (text === 'Chờ thực hiện') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });
        cy.get('#btnVAOTHUCHIEN').click();
        cy.wait(1000);
        cy.get('#aTrangThai > i')
            .should('have.text', 'Đang thực hiện')
            .then(($i) => {
                const text = $i.text().trim();
                if (text === 'Đang thực hiện') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });

        //cy.get('#btnVAOTHUCHIEN').should('be.disabled');
        cy.get('#labelhangdoicc').invoke('text').then(phongkhamhientai => {
            cy.log(phongkhamhientai);
            cy.get('#btnChuyenPhongTD').should('be.enabled');
            cy.get('#btnChuyenPhongTD').click();

            cy.document().then(doc => {
                const alert = doc.querySelectorAll('.sweet-alert');
                if (alert.length > 0) {
                    cy.get('.sweet-alert').invoke('text').then(text => {
                        cy.get('.confirm').click();
                    });
                } else {
                    common.enterSelectBoxElasticSearch('cboHangDoiCapCuu', 'LS');
                    cy.get('#btnAddBienlai').click();
                    cy.wait(1000);
                    cy.get('#labelhangdoicc').invoke('text').then(phongkhammoi => {
                        cy.log(phongkhammoi);
                    })
                    cy.get('#aTrangThai > i')
                        .should('have.text', 'Chờ thực hiện')
                        .then(($i) => {
                            const text = $i.text().trim();
                            if (text === 'Chờ thực hiện') {
                                cy.log('Đổi trạng thái thành công');
                            } else {
                                cy.fail('Đổi trạng thái thất bại');
                            }
                        });
                }
            });
        })


    });

    it('Thêm y lệnh mới', function() {
        cy.get('#drpSelectTrangThai').select('Chờ thực hiện', { force: true });
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('tbody > tr:nth-child(1) >td:nth-child(4) > a').click();
        cy.get('#btnVAOTHUCHIEN').click();
        cy.wait(1000);

        cy.get('#themylenhcc').click();
        cy.get('#cbbBacSiChiDinh').select(4);

        cy.get('#btnChonBsiChiDinh').click();
        cy.wait(1000);
        cy.get('#divLSTheoDoi > tr > td:nth-child(6)').invoke('text').then(thongtinylenh => {
            cy.log(thongtinylenh);
        })

        cy.get('#divLSTheoDoi > tr > td:nth-child(6) > .badge')
            .should('have.text', 'Mới')
            .then(($span) => {
                const text = $span.text().trim();
                if (text === 'Mới') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });
        // cy.get('#themylenhcc').click();
        // cy.wait(500);
        // cy.get('.confirm').click();

        cy.get('#txtChanDoanSoBo').type('Mai test');
        common.enterSelectBoxElasticSearch('cboCDBChinh', 'M07');
        cy.get('#txtMoTaDauHieuLamSang').type('Cấp cứu !!!');
        cy.get('#hoantatylenhcc').click();
        cy.get('#divLSTheoDoi > tr > td:nth-child(6) > .badge')
            .should('have.text', 'Hoàn tất')
            .then(($span) => {
                const text = $span.text().trim();
                if (text === 'Hoàn tất') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });

        cy.get('#themylenhcc').click();
        cy.wait(500);
        cy.contains('Đóng').click();
    });


    it('Chỉ định DV', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Chờ thực hiện');
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('tbody > tr:nth-child(1) >td:nth-child(4) > a').click();
        cy.get('#btnVAOTHUCHIEN').click();
        cy.wait(1000);

        cy.get('#cboXuTri').invoke('val').then(text => {
            cy.log(text);
            if (text === null){
                cy.get('#txtNgayKham').invoke('val').then(tgianvaokham => {
                    cy.log(tgianvaokham);
                    cy.get('#themylenhcc').click();
                    cy.get('#cbbBacSiChiDinh').select(4);
                    cy.get('#btnChonBsiChiDinh').click();
                    cy.wait(500);
//Chặn kê DV nếu chưa điền các trường bắt buộc nhập trong y lệnh
                    cy.get('#chidinhnhanh').click();
                    cy.get('.confirm').click();

                    cy.get('#txtChanDoanSoBo').type('Mai test');
                    common.enterSelectBoxElasticSearch('cboCDBChinh', 'M07');
                    cy.get('#txtMoTaDauHieuLamSang').type('Cấp cứu !!!');
                    cy.get('#chidinhnhanh').click();
                    cy.wait(2000);
                    cy.get('#using_json ul li:nth-child(1) a').click();
                    common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'CLS06.1');
                    cy.contains('label', 'Khám bệnh theo yêu cầu 1')
                        .prev()
                        .find('ins.iCheck-helper')
                        .click()
                    cy.wait(1000);
                    cy.document().then(doc => {
                        const alert = doc.querySelectorAll('.sweet-alert');
                        if (alert.length > 0) {
                            cy.get('.sweet-alert p[style="display: block;"]').invoke('text').then(textAlert=>{
                                cy.log(textAlert);
                                if (textAlert.trim().includes('Chuyển đối tượng sang đối tượng khác?')) {
                                    cy.log('Doi tuong bao hiem');
                                    common.clickConfirmBtn();
                                }else{
                                    cy.log('Đối tượng BN THU PHÍ');
                                }
                            })
                        } else {
                            cy.log('Đối tượng BN THU PHÍ');
                        }

                        cy.get('#previewPDFXN').click();
                        cy.wait(1000);
                        cy.get('body').type('{ESC}');
                        cy.wait(1000);
                        cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(6)').invoke('text').then(doituongDV => {
                            cy.log(doituongDV);
                            if (doituongDV === "Thu phí") {
                                cy.log('PASS ĐỐI TƯỢNG DỊCH VỤ');
                                cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(3)').invoke('text').then(tgiankeDV => {
                                    cy.log(tgiankeDV);
                                    const time1 = new Date(tgiankeDV);
                                    const time2 = new Date(tgianvaokham);
                                    if (time1 >= time2) {
                                        cy.log('Pass TGian Kê DV');
                                        cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(8) > .badge')
                                            .should('have.text', 'Chờ thực hiện')
                                            .then((span) => {
                                                const text = span.text().trim();
                                                if (text === 'Chờ thực hiện') {
                                                    cy.log('Đổi trạng thái thành công');
                                                } else {
                                                    cy.fail('Đổi trạng thái thất bại');
                                                }
                                            });
                                        //Check Cho phép bố sung thêm DV nhiều nhóm khi trạng thái của y lệnh là "mới"
                                        cy.get('#divLSTheoDoi > tr > td:nth-child(6) > .badge')
                                            .should('have.text', 'Mới')
                                            .then(($span) => {
                                                const text = $span.text().trim();
                                                if (text === 'Mới') {
                                                    cy.log('Đổi trạng thái thành công');
                                                } else {
                                                    cy.fail('Đổi trạng thái thất bại');
                                                }
                                            });
                                        cy.get('#chidinhnhanh').click();
                                        cy.wait(1000);
                                        cy.get('#using_json ul li:nth-child(3) a').click();
                                        common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'CLS12.10');
//Check Cho phép tìm kiếm theo tên/mã DV trong popup chỉ định nhiều nhóm
                                        cy.get('#txtChiDinhFilter').type('18.0071.0029');
                                        cy.get('.input-group-btn .btn > .fa').click();
                                        cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').eq(0).click({force: true})
                                        cy.get('#previewPDFXN').click();
                                        cy.wait(1000);
                                        cy.get('body').type('{ESC}');
                                        cy.wait(500);
//Check Cho phép sửa/xóa các DV đã chọn ở phần chi tiết DV trong popup chỉ định
                                        cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(1) > a:nth-child(3) > i.fa-reply').click();
                                        cy.wait(500);
                                        cy.get('.confirm').click();
                                        cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(1) > a:nth-child(1) > i.fa-pencil-square-o').click();
                                        cy.wait(500);
                                        cy.get('#txtMotadaiUpdate').clear().type('Mai test nè !!!');
                                        cy.contains('Cập nhập').click();
                                        cy.wait(500);
                                        cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(1) > a:nth-child(3) > i.fa-mail-forward').click();
                                        cy.wait(500);
                                        cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(1) > a:nth-child(3) > i.fa-reply').click();
                                        cy.wait(500);
                                        cy.get('.confirm').click();
                                        cy.wait(500);
                                        cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(1) > a:nth-child(2) > i.fa-times-circle').click();
                                        cy.wait(500);
                                        cy.get('.confirm').click();
                                    } else {
                                        cy.log('Thời gian chỉ định DV nhỏ hơn thời gian vào khám - FAIL!');
                                    }
                                });
                            } else {
                                cy.log('SAI ĐỐI TƯỢNG DỊCH VỤ');
                                cy.fail('FAIL');
                            }
                        });
                    });
                });
            }
            else
            {
                cy.log('BN này đã xử trí!!!');
                cy.get('#showXutri').click();
                cy.wait(1000);
                cy.log('#txtThoigianRa').invoke('val').then(tgianXuTri => {
                    cy.log(tgianXuTri);
                    const timeXuTri = new Date(tgianXuTri);
                    cy.get('#txtNgayKham').invoke('val').then(tgianvaokham => {
                        cy.log(tgianvaokham);
                        cy.get('#themylenhcc').click();
                        cy.get('#cbbBacSiChiDinh').select(4);
                        cy.get('#btnChonBsiChiDinh').click();
                        cy.wait(500);
//Chặn kê DV nếu chưa điền các trường bắt buộc nhập trong y lệnh
                        cy.get('#chidinhnhanh').click();
                        cy.get('.confirm').click();

                        cy.get('#txtChanDoanSoBo').type('Mai test');
                        common.enterSelectBoxElasticSearch('cboCDBChinh', 'M07');
                        cy.get('#txtMoTaDauHieuLamSang').type('Cấp cứu !!!');
                        cy.get('#chidinhnhanh').click();
                        cy.get('#using_json ul li:nth-child(1) a').click();
                        common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'CLS06.1');
                        cy.contains('label', 'Khám bệnh theo yêu cầu 1')
                            .prev()
                            .find('ins.iCheck-helper')
                            .click()
                        cy.wait(2000);
                        cy.document().then(doc => {
                            const alert = doc.querySelectorAll('.sweet-alert');
                            if (alert.length > 1) {
                                cy.log('Đối tượng BẢO HIỂM');
                                cy.get('.confirm').click();
                            } else {
                                cy.log('Đối tượng BN THU PHÍ');
                            }

                            cy.get('#previewPDFXN').click();
                            cy.wait(1000);
                            cy.get('body').type('{ESC}');
                            cy.wait(1000);
                            cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(6)').invoke('text').then(doituongDV => {
                                cy.log(doituongDV);
                                //const formatText = text.trim();
                                if (doituongDV === "Thu phí") {
                                    cy.log('PASS ĐỐI TƯỢNG DỊCH VỤ');
                                    cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(3)').invoke('text').then(tgiankeDV => {
                                        cy.log(tgiankeDV);
                                        const time1 = new Date(tgiankeDV);
                                        const time2 = new Date(tgianvaokham);
                                        if (time1 >= time2 && time1 <= timeXuTri) {
                                            cy.log('Pass TGian Kê DV');
                                            cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(8) > .badge')
                                                .should('have.text', 'Chờ thực hiện')
                                                .then((span) => {
                                                    const text = span.text().trim();
                                                    if (text === 'Chờ thực hiện') {
                                                        cy.log('Đổi trạng thái thành công');
                                                    } else {
                                                        cy.fail('Đổi trạng thái thất bại');
                                                    }
                                                });
                                            //Check Cho phép bố sung thêm DV nhiều nhóm khi trạng thái của y lệnh là "mới"
                                            cy.get('#divLSTheoDoi > tr > td:nth-child(6) > .badge')
                                                .should('have.text', 'Mới')
                                                .then(($span) => {
                                                    const text = $span.text().trim();
                                                    if (text === 'Mới') {
                                                        cy.log('Đổi trạng thái thành công');
                                                    } else {
                                                        cy.fail('Đổi trạng thái thất bại');
                                                    }
                                                });
                                            cy.get('#chidinhnhanh').click();
                                            cy.wait(1000);
                                            cy.get('#using_json ul li:nth-child(3) a').click();
                                            common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'CLS12.10');
//Check Cho phép tìm kiếm theo tên/mã DV trong popup chỉ định nhiều nhóm
                                            cy.get('#txtChiDinhFilter').type('18.0071.0029');
                                            cy.get('.input-group-btn .btn > .fa').click();
                                            cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').eq(0).click({force: true});
                                            cy.get('#previewPDFXN').click();
                                            cy.wait(1000);
                                            cy.get('body').type('{ESC}');
                                            cy.wait(500);
//Check Cho phép sửa/xóa các DV đã chọn ở phần chi tiết DV trong popup chỉ định
                                            cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(1) > a:nth-child(3) > i.fa-reply').click();
                                            cy.wait(500);
                                            cy.get('.confirm').click();
                                            cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(1) > a:nth-child(1) > i.fa-pencil-square-o').click();
                                            cy.wait(500);
                                            cy.get('#txtMotadaiUpdate').clear().type('Mai test nè !!!');
                                            cy.contains('Cập nhập').click();
                                            cy.wait(500);
                                            cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(1) > a:nth-child(3) > i.fa-mail-forward').click();
                                            cy.wait(500);
                                            cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(1) > a:nth-child(3) > i.fa-reply').click();
                                            cy.wait(500);
                                            cy.get('.confirm').click();
                                            cy.wait(500);
                                            cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(1) > a:nth-child(2) > i.fa-times-circle').click();
                                            cy.wait(500);
                                            cy.get('.confirm').click();
                                        } else {
                                            cy.log('Thời gian chỉ định DV NHỎ HƠN thời gian vào khám - FAIL!');
                                        }
                                    });
                                } else {
                                    cy.log('SAI ĐỐI TƯỢNG DỊCH VỤ');
                                    cy.fail('FAIL');
                                }
                            });
                        });
                    });
                });
            }

        });
    });

    it('Chỉnh sửa DV', function (){
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Chờ thực hiện');
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('tbody > tr:nth-child(1) >td:nth-child(4) > a').click();
        cy.get('#btnVAOTHUCHIEN').click();
        cy.wait(1000);

        cy.get('#themylenhcc').click();
        cy.get('#cbbBacSiChiDinh').select(4);
        cy.get('#btnChonBsiChiDinh').click();
        cy.wait(500);
        cy.get('#txtChanDoanSoBo').type('Mai test');
        common.enterSelectBoxElasticSearch('cboCDBChinh', 'M07');
        cy.get('#txtMoTaDauHieuLamSang').type('Cấp cứu !!!');
        cy.get('#chidinhnhanh').click();
        cy.wait(2000);
        cy.get('#using_json ul li:nth-child(1) a').click();
        common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'LS29');
        cy.contains('label', 'Khám bệnh (10.1895)')
            .prev()
            .find('ins.iCheck-helper')
            .click()
        cy.wait(1000);
        cy.get('#previewPDFXN').click();
        cy.wait(1000);
        cy.get('body').type('{ESC}');
        cy.wait(1000);

        cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(1) a:nth-child(3) i.fas').click();
        cy.wait(500);
        cy.get('.confirm').click();
        cy.wait(500);
        cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(8) .badge')
            .should('have.text', 'Mới')
            .then(($span) => {
                const text = $span.text().trim();
                if (text === 'Mới') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });
        cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(1) a:nth-child(1) i.fa').click();
        cy.wait(500);
        cy.get('#txtMotadaiUpdate').clear().type('MAI TEST SỬA DV');
        cy.contains('Cập nhập').click();
        cy.wait(500);
        cy.get('#tblDichVu thead tr:nth-child(1) th:nth-child(2) a.capcuu-a i.fa').click();
        cy.get('#hoantatylenhcc').click();
        cy.wait(1000);
        cy.get('#thuhoiylenhcc').click();
        cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(8) .badge')
            .should('have.text', 'Mới')
            .then(($span) => {
                const text = $span.text().trim();
                if (text === 'Mới') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });
        cy.get('#tblDichVu thead tr:nth-child(1) th:nth-child(1) a.capcuu-a i.fa').click();
        cy.wait(500);
        cy.get('.confirm').click();
        cy.wait(500);
        cy.get('#chidinhxetnghiem').click();
        cy.wait(1000);
        cy.get('#cbbHangDoiPopupXN').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('CLS04');
        cy.wait(1000);
        cy.get('#select2-cbbHangDoiPopupXN-results').find('tr:first').click();
        cy.get('#txtChiDinh_TKXNFilter').type('22.0143');
        cy.get('.col-sm-5 .row .input-group-btn .btn i.fa').click();
        cy.wait(1000);
        cy.get('#divContentTKXN_ChiDinh .icheckbox_square-green ins.iCheck-helper').eq(0).click();
        cy.wait(1000);
        cy.get('button[onclick="{ TKXN_ChuyenThucHien(); phieuInOption = 3;}"]').click();
        cy.wait(1000);
        cy.get('body').type('{ESC}');
        cy.wait(1000);
        cy.get('#tblDichVuXN tbody tr:nth-child(3) td:nth-child(8) .badge')
            .should('have.text', 'Chờ thực hiện')
            .then(($span) => {
                const text = $span.text().trim();
                if (text === 'Chờ thực hiện') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });
        //Sửa DV
        cy.get('#lblDoiNoiThucHienXN').click();
        cy.wait(1000);
        cy.get('.ylenh-a > .fas').click();
        cy.wait(1000);
        cy.get('.confirm').click();
        cy.wait(2000);
        cy.get('#tableDichVuPopXN .table-responsive .table-bordered tbody tr:nth-child(3) td:nth-child(1) a:nth-child(1) i.fa').click();
        cy.wait(1000);
        cy.get('body').type('{ESC}');
        cy.get('#txtMotadaiUpdate').clear().type('Mai test!!!');
        cy.contains('Cập nhập').click();
        cy.wait(1000);
        cy.get('#tblDichVuXN tbody tr:nth-child(3) td:nth-child(1) a:nth-child(3) i.fa-mail-forward').click();
        cy.wait(1000);
        //Xóa DV
        cy.get('#lblDoiNoiThucHienXN').click();
        cy.wait(1000);
        cy.get('.ylenh-a > .fas').click();
        cy.wait(1000);
        cy.get('.confirm').click();
        cy.wait(2000);
        cy.get('#tableDichVuPopXN .table-responsive .table-bordered tbody tr:nth-child(3) td:nth-child(11) .badge').should('have.text', 'Mới')
            .then(($span) => {
                const text = $span.text().trim();
                if (text === 'Mới') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });
        cy.get('#tableDichVuPopXN .table-responsive .table-bordered tbody tr:nth-child(3) td:nth-child(1) a:nth-child(2) i.fas').click();
        cy.wait(1000);
        cy.get('.confirm').click();
        cy.get('button[onclick="OnSaveDoiNoiThucHien(); return false;"]').click();
        cy.wait(1000);
    });

    it('Kê đơn', function () {
        cy.get('#drpSelectTrangThai').select('Chờ thực hiện', { force: true });
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('tbody > tr:nth-child(1) >td:nth-child(4) > a').click();
        // common.enterSelectBoxElasticSearch('cbbTuaTrucCC', 'KIÊN 34');
        // cy.contains('Chấp nhận').click();
        cy.get('#btnVAOTHUCHIEN').click();
        cy.wait(1000);

        cy.get('#themylenhcc').click();
        cy.get('#cbbBacSiChiDinh').select(4);
        cy.get('#btnChonBsiChiDinh').click();
        cy.wait(1000);

        cy.get('#kedontutruc').click();
        cy.wait(1000);
//Check nhập quá số lượng tồn
        cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('0').wait(1000);
        cy.get('span.select2-results ul.select2-results__options').find('li:nth-child(2)').click();
        cy.get('#txtSl').clear().type('100000000');
        cy.get('#txtSlN').clear().type('2');
        cy.get('#btnChon').click();
        cy.get('.confirm').click();

        cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('0').wait(1000);
        cy.get('span.select2-results ul.select2-results__options').find('li:nth-child(2)').click();
        cy.get('#txtSl').clear().type('2');
        cy.get('#txtSlN').clear().type('2');
        cy.get(':nth-child(4) > .checkbox-inline > .icheckbox_square-green > .iCheck-helper').click();
        cy.get('tbody > :nth-child(1) > :nth-child(6) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
        cy.get('#btnChon').click();
//Check kê lẻ thuốc
        //cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('0').wait(1000);
        cy.get('span.select2-results ul.select2-results__options').find('li:nth-child(3)').click();
        cy.get('#txtSl').clear().type('0.1');
        cy.get('#txtSlN').clear().type('4');
        cy.get(':nth-child(3) > .checkbox-inline > .icheckbox_square-green > .iCheck-helper').click();
        cy.get('tbody > :nth-child(1) > :nth-child(10) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
        cy.get('tbody > :nth-child(1) > :nth-child(12) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
        cy.get('#btnChon').click();
//Check Cho phép xóa từng thuốc/toàn bộ thuốc/VT trong popup kê
        cy.get('tbody tr:nth-child(1) td:nth-child(12) a.capcuu-a i.fas').click();
        cy.wait(1000);
        cy.get('.confirm').click();
        cy.wait(1000);
        cy.get('#tblThuoc thead tr:nth-child(1) th:nth-child(11) a.capcuu-a i.fa').click();
        cy.wait(1000);
        cy.get('.confirm').click();
        cy.wait(1000);

//Check Kê thuốc/VTYT đc kê thành công và hiển thị dưới lưới thuốc/VT+Cho phép xóa với các thuốc kê xong và đang ở lưới thuốc
        cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('0').wait(1000);
        cy.get('span.select2-results ul.select2-results__options').find('li:nth-child(2)').click();
        cy.get('#txtSl').clear().type('1');
        cy.get('#txtSlN').clear().type('2');
        cy.get(':nth-child(4) > .checkbox-inline > .icheckbox_square-green > .iCheck-helper').click();
        cy.get('tbody > :nth-child(1) > :nth-child(6) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
        cy.get('#btnChon').click();
        //cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('0').wait(1000);
        cy.get('span.select2-results ul.select2-results__options').find('li:nth-child(3)').click();
        cy.get('#txtSl').clear().type('0.1');
        cy.get('#txtSlN').clear().type('2');
        cy.get(':nth-child(3) > .checkbox-inline > .icheckbox_square-green > .iCheck-helper').click();
        cy.get('tbody > :nth-child(1) > :nth-child(8) > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
        cy.get('#btnChon').click();
        cy.wait(1000);
        cy.get('#btnChuyenTH').click();
        cy.wait(1000);

        cy.get('#tblThuoc tbody tr:nth-child(2) td:nth-child(13) a.capcuu-a i.fas').click();
        cy.wait(500);
        cy.get('.confirm').click();
        cy.wait(1000);

    });

    it('Khám phối hợp', function () {
        cy.get('#drpSelectTrangThai').select('Chờ thực hiện', {force: true});
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('tbody > tr:nth-child(1) >td:nth-child(4) > a').click();
        // common.enterSelectBoxElasticSearch('cbbTuaTrucCC', 'KIÊN 34');
        // cy.contains('Chấp nhận').click();
        cy.get('#btnVAOTHUCHIEN').click();
        cy.wait(1000);

        cy.get('#themylenhcc').click();
        cy.get('#cbbBacSiChiDinh').select(4);
        cy.get('#btnChonBsiChiDinh').click();
        cy.wait(1000);

        cy.get('#txtChanDoanSoBo').clear().type('Mai test!*!');
        cy.get('#chidinhkph').click();
        cy.wait(2000);
        //common.enterSelectBoxElasticSearch('cbbHangDoiPopupTDCN', 'LS29.3');
        cy.get('#cbbHangDoiPopupTDCN').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('LS29.3').wait(1000);
        cy.get(`#select2-cbbHangDoiPopupTDCN-results`).find('tr:first').click();
        cy.contains('label', 'Khám bệnh (10.1895)')
            .prev()
            .find('ins.iCheck-helper')
            .click()
        cy.get('#previewPDFTDCN').click();
        cy.wait(1000);
        cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(8) > .badge')
            .should('have.text', 'Chờ thực hiện')
            .then((span) => {
                const text = span.text().trim();
                if (text === 'Chờ thực hiện') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });
//Check Khi khám PH chuyển trạng thái "chờ thực hiện" thì sẽ xuất hiện yêu cầu khám ở DS KB
        cy.get('#textMaBn').invoke('text').then((maBN) => {
            cy.log(maBN);
            common.goToFunctionFromMenu('khambenhdanhsachdraw');
            cy.get('#txtTimKiem').clear().type(maBN);
            common.enterSelectBoxNormal('drpSelectTrangThai', 'Chờ thực hiện');
            cy.get('#btnTimKiem').click();

            cy.get('tbody tr:nth-child(1) td:nth-child(1) a i.fas').click();
            cy.wait(2000);
            cy.get('#txtChanDoanSoBo').clear().type('Chuẩn đoán sơ bộ');
            // common.enterSelectBoxElasticSearch('cbbBacSi', '1');
            cy.get(`#cbbBacSi`).parent().find('span.selection span.select2-selection').click();
            cy.wait(1000);
            cy.get('span.select2-search').find('input.select2-search__field').type(`1`);
            cy.get(`#select2-cbbBacSi-results`).find('tr:first').click();
            common.enterSelectBoxElasticSearch('cbbChuyenKhoa', '10.8');

            common.enterSelectBoxElasticSearch('cbbCDBChinh', 'Lao');
            cy.contains('Chỉ định theo nhiều nhóm').click();
            cy.wait(1000);
            cy.get('#all_using_json ul li:nth-child(3) a').click();
            common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'LS21');
            cy.get('#txtChiDinhFilter').type('18.0350.0065');
            cy.get('.input-group-btn .btn > .fa').click();
            cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').eq(0).click({force: true})
            cy.get('#previewPDFChonDV').click();
            cy.wait(1000);
            cy.get('.cancel').click();
            cy.wait(1000);
            cy.reload({timeout:6000});
            cy.wait(1000);
            //Đang lỗi Cypress không hiện bảng DV vừa kê
            cy.get('#tblDichVu thead tr:nth-child(1) th:nth-child(1) a.khambenh-a i.fa').click();
            cy.wait(1000);
            cy.get('.confirm').click();
            cy.wait(1000);
            cy.contains('Đơn tủ trực').click();
            //common.enterSelectBoxElasticSearch('cboThuoc', '20.13');
            cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
            cy.get('span.select2-search').find('input.select2-search__field').type('111').wait(1000);
            cy.get('span.select2-results ul.select2-results__options').find('li:nth-child(2)').click();
            cy.get('#txtSl').type('0.9');
            cy.get('#txtSN').type('1');
            cy.get('#txtSlN').type('1');
            cy.get('#btnAddTuTruc').click();
            cy.get('#btnChuyenTh_TKXN').click();
            cy.wait(1000);
//Check phần xử trí
            cy.document().then(doc => {
                const listData = doc.querySelectorAll('#divXuTri');
                if (listData.length > 0) {
                    cy.get('#divXuTri').invoke('attr', 'style').then(status => {
                        if (status.trim() === 'display: none;'){
                            cy.log('Không có phần XỬ TRÍ-PASS');
                        }else{
                            cy.log('SAI QUY TRÌNH');
                        }
                    })
                } else {
                    cy.log('SAI QUY TRÌNH');
                }
            });

            cy.get('#txtChanDoanSoBo').clear().type('Maiiii testttt');
            cy.get(`#cbbBacSi`).parent().find('span.selection span.select2-selection').click();
            cy.wait(1000);
            cy.get('span.select2-search').find('input.select2-search__field').type(`1`);
            cy.get(`#select2-cbbBacSi-results`).find('tr:first').click();
            common.enterSelectBoxElasticSearch('cbbChuyenKhoa', '10.8');
            common.enterSelectBoxElasticSearch('cbbCDBChinh', 'Lao');
            cy.get('#btnHOANTAT').click();
        });
    });

    it('Hoàn tất y lệnh', function () {
        cy.get('#drpSelectTrangThai').select('Chờ thực hiện', {force: true});
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('tbody > tr:nth-child(1) >td:nth-child(4) > a').click();
        // common.enterSelectBoxElasticSearch('cbbTuaTrucCC', 'KIÊN 34');
        // cy.contains('Chấp nhận').click();
        cy.get('#btnVAOTHUCHIEN').click();
        cy.wait(1000);

        cy.get('#themylenhcc').click();
        cy.get('#cbbBacSiChiDinh').select(4);
        cy.get('#btnChonBsiChiDinh').click();
        cy.wait(1000);

//Chặn kê DV nếu chưa điền các trường bắt buộc nhập trong y lệnh
        cy.get('#chidinhnhanh').click();
        cy.get('.confirm').click();

        cy.get('#txtChanDoanSoBo').clear().type('Mai test');
        common.enterSelectBoxElasticSearch('cboCDBChinh', 'M07');
        cy.get('#txtMoTaDauHieuLamSang').clear().type('Cấp cứu !!!');
        cy.get('#chidinhnhanh').click();
        cy.wait(2000);
        cy.get('#using_json ul li:nth-child(1) a').click();
        common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'LS29.3');
        cy.contains('label', 'Khám bệnh (10.1895)')
            .prev()
            .find('ins.iCheck-helper')
            .click()
        cy.wait(1000);
        cy.get('#previewPDFXN').click();
        cy.wait(1000);
        cy.get('body').type('{ESC}');
        cy.wait(1000);
        cy.get('#tblDichVu thead tr:nth-child(1) th:nth-child(2) a.capcuu-a i.fas').click();
        cy.get('.confirm').click();
        cy.wait(1000);
        cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(8) > .badge')
            .should('have.text', 'Mới')
            .then((span) => {
                const text = span.text().trim();
                if (text === 'Mới') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });
        cy.get('#hoantatylenhcc').click();
        cy.get('.confirm').click();
        cy.wait(1000);
        cy.get('#tblDichVu thead tr:nth-child(1) th:nth-child(2) a.capcuu-a i.fa').click();
        cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(8) > .badge')
            .should('have.text', 'Chờ thực hiện')
            .then((span) => {
                const text = span.text().trim();
                if (text === 'Chờ thực hiện') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });
        cy.get('#hoantatylenhcc').click();
        cy.get('#divLSTheoDoi > tr > td:nth-child(6) > .badge')
            .should('have.text', 'Hoàn tất')
            .then(($span) => {
                const text = $span.text().trim();
                if (text === 'Hoàn tất') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });
    });
    it('Xóa y lệnh', function () {
        cy.get('#drpSelectTrangThai').select('Chờ thực hiện', {force: true});
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('tbody > tr:nth-child(1) >td:nth-child(4) > a').click();
        // common.enterSelectBoxElasticSearch('cbbTuaTrucCC', 'KIÊN 34');
        // cy.contains('Chấp nhận').click();
        cy.get('#btnVAOTHUCHIEN').click();
        cy.wait(1000);

        cy.get('#themylenhcc').click();
        cy.get('#cbbBacSiChiDinh').select(4);
        cy.get('#btnChonBsiChiDinh').click();
        cy.wait(1000);
        cy.get('#txtChanDoanSoBo').clear().type('Mai test');
        common.enterSelectBoxElasticSearch('cboCDBChinh', 'M07');
        cy.get('#txtMoTaDauHieuLamSang').clear().type('Cấp cứu !!!');
        cy.get('#chidinhnhanh').click();
        cy.wait(2000);
        cy.get('#using_json ul li:nth-child(1) a').click();
        common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'LS29.3');
        cy.contains('label', 'Khám bệnh (10.1895)')
            .prev()
            .find('ins.iCheck-helper')
            .click()
        cy.wait(1000);
        cy.get('#previewPDFXN').click();
        cy.wait(1000);
        cy.get('body').type('{ESC}');
        cy.wait(1000);
        cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(8) > .badge')
            .should('have.text', 'Chờ thực hiện')
            .then((span) => {
                const text = span.text().trim();
                if (text === 'Chờ thực hiện') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });
        cy.get('#xoaylenhcc').click();
        cy.get('.confirm').click();
        cy.wait(1000);
        cy.get('#tblDichVu thead tr:nth-child(1) th:nth-child(2) a.capcuu-a i.fas').click();
        cy.wait(1000);
        cy.get('.confirm').click();
        cy.wait(1000);
        cy.get('#tblDichVu > tbody > tr:nth-child(3) > td:nth-child(8) > .badge')
            .should('have.text', 'Mới')
            .then((span) => {
                const text = span.text().trim();
                if (text === 'Mới') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });
        cy.get('#xoaylenhcc').click();
    });
});