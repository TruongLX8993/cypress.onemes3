const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');
const dieuTriNoiTruTestFunc = require('./test_func');

describe("Điều trị nội trú", () => {

    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');

    });

    it('Thêm y lệnh', function () {
        console.log('abc');
        cy.get('#txtTimKiem').clear().type('2300520945');
        common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
        common.enterSelectBoxNormal('cbbLoai', "3");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showDsYLenh').click();

        cy.get('#divDsYLenh tbody#tbodyylenh tr:first td:nth-child(2) a').invoke('attr', 'style').then((Color) => {
            cy.log(Color);
            if (Color === 'background-color: #fdf500;color: white;') {
                common.btnID('showThamKham');
                common.clickConfirmBtn();
                cy.get('#tbodyylenh > tr:nth-child(1) > td:nth-child(3)').click();
                cy.get('#btnPopupXOA').should('be.visible').click({});
                common.btnID('showThamKham');
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

                common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
                cy.get('#txtChanDoanSoBoThamKham').clear().type('AAA');
                common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
                cy.get('#btnPopupHOANTAT').click();
                cy.get('#btnThemYLenhMoi').should('be.visible').click();

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

            } else {
                common.btnID('showThamKham');
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
                   // Hoàn tất 1 y lệnh thành công thì có thể bấm thêm y lệnh ở form y lệnh
                common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
                cy.get('#txtChanDoanSoBoThamKham').clear().type('AAA');
                common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
                cy.get('#btnPopupHOANTAT').click();
                cy.get('#btnThemYLenhMoi').should('be.visible').click();

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

            }
        });


    });


    it('Hoàn tất y lệnh', function () {
        cy.get('#txtTimKiem').clear().type('2300520945');
        common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
        common.enterSelectBoxNormal('cbbLoai', "3");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showDsYLenh').click();

        cy.get('#divDsYLenh tbody#tbodyylenh tr:first td:nth-child(2) a').invoke('attr', 'style').then((Color) => {
            cy.log(Color);
            if (Color === 'background-color: #fdf500;color: white;') {
                common.btnID('showThamKham');
                common.clickConfirmBtn();
                cy.get('#tbodyylenh > tr:nth-child(1) > td:nth-child(3)').click();
                cy.get('#btnPopupXOA').should('be.visible').click({});
                common.btnID('showThamKham');
                common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
                cy.get('#txtChanDoanSoBoThamKham').clear().type('AAA');
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
                cy.wait(1000);
                cy.get('#btnPopupHOANTAT').click();
                cy.wait(1000);
            } else {
                common.btnID('showThamKham');
                common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
                cy.get('#txtChanDoanSoBoThamKham').clear().type('AAA');
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
                cy.wait(1000);
                cy.get('#btnPopupHOANTAT').click();
                cy.wait(1000);


            }
        });



        // common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
        // cy.get('#txtChanDoanSoBoThamKham').clear().type('AAA');
        // common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
        // cy.contains('Chỉ định nhiều nhóm').click();
        // cy.get('#using_json ul li:nth-child(1) a').click();
        // common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'LS29.3');
        // cy.contains('label', 'Khám bệnh (10.1895)') // tìm label có data là "Khám bệnh"
        //     .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
        //     .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
        //     .click() // tick vào checkbox
        //
        // cy.get('#btnDongYChon').click();
        // cy.get('#btnChapNhan').click();
        // cy.wait(1000);
        // cy.get('#btnPopupHOANTAT').click();
        // cy.wait(1000);


        // cy.wait(2000);
        // cy.get('#btnPopupTHUHOI').click();
        // cy.wait(1000);
        // cy.get('#btnPopupXOA').click();
    });


    it('Sao chép y lệnh', function () {
        cy.get('#txtTimKiem').type('2300520918');
        common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
        common.enterSelectBoxNormal('cbbLoai', "3");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
        cy.get('#txtChanDoanSoBoThamKham').clear().type('AAA');
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
        // cy.wait(2000);
        cy.get('#btnSaoChep').click({timeout:7000});
        // cy.wait(2000);
        cy.get('.confirm').should('be.visible').click();
        // common.clickConfirmBtn();
        cy.wait(2000);
        cy.get('#btnPopupHOANTAT').click();
        // cy.wait(3000);
        cy.get('#btnPopupTHUHOI').click({timeout:7000});


    });


    it('Sao chép y lệnh nhiều ngày', function () {
        cy.get('#txtTimKiem').type('2300520928');
        common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
        common.enterSelectBoxNormal('cbbLoai', "3");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
        cy.get('#txtChanDoanSoBoThamKham').clear().type('AAA');
        common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C2');
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
        cy.get('#btnPopupHOANTAT').click();
        // cy.wait(4000);
        // cy.get('.confirm').should('be.visible').click();
        common.clickConfirmBtn();
        // cy.wait(3000);
        cy.get('#btnPopupTHUHOI').click({timeout:7500});
        common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
        cy.get('#txtChanDoanSoBoThamKham').clear().type('BBB');
        common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
        cy.get('#cboSaoYLenh').select('2');
        cy.get('#cboHinhThucSao').select('Sao dịch vụ');
        cy.get('#btnHoiChan').click();
        cy.get('.col-sm-8 .col-sm-12 .row .col-sm-4:nth-child(2) label div.iradio_square-green ins.iCheck-helper').first().click({force: true})
        common.enterSelectBoxElasticSearch('cboHangDoiPT', 'LS12.22');
        cy.get('#cboDichVuPT').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('08111793');
        cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
        cy.get('#btnChapNhanNhapTheBhyt').click();
        cy.get(1000);
        cy.get('#btnPopupHOANTAT').click();
        // cy.wait(2000);
        // cy.get('.sa-button-container > button.confirm').click();
        common.clickConfirmBtn();
        cy.get('#cboSaoYLenh').select('0');
        cy.get('#btnPopupHOANTAT').click();
        // cy.wait(2000);
        cy.get('#btnPopupTHUHOI').should('be.visible').click();
        cy.wait(1500);
        cy.get('#btnHoiChan').click();
        cy.get('#btnChapNhanNhapTheBhyt').click();
        cy.get('.khambenh-a > .fa').click();
        // cy.wait(1000);
        // cy.get('.confirm').click();
        common.clickConfirmBtn();
        // cy.wait(1500);
        cy.get('#btnPopupXOA').click({timeout:5000});
        cy.wait(1500);
    });


    it('Thu hồi y lệnh', function () {
        cy.get('#txtTimKiem').type('2300519268');
        common.enterSelectBoxNormal('cbbLoai', "3");
        common.enterSelectBoxNormal('drpSelectTrangThai', "Đang thực hiện");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
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
        // cy.wait(1000);
        cy.get('#btnPopupTHUHOI').should('be.visible').click();
        cy.wait(1500);
        cy.get('#btnPopupXOA').click();
        cy.wait(500);

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
    });

    it('Xóa y lệnh', function () {
        cy.get('#txtTimKiem').type('2300519432');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        cy.get('#btnPopupXOA').click();
        cy.wait(1000);
    });


    it('Check khi chỉ định các DV bằng nhiều nhóm/Gói mẫu', function () {
        cy.get('#txtTimKiem').type('2300519402');
        // cy.get('#select2-drpSelectTrangThai-container > .select2-selection__clear').click();
        common.enterSelectBoxNormal('cbbLoai','3');
        cy.get('#btnTimKiem').click();
        cy.get('#tblNoiTru tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        common.enterSelectBoxNormal('cboBenhChinhThamKham','A02.0');
        common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham','C2');
        cy.get('#txtDienBienYLenhThamKham').type('Mới bị');
        cy.contains('Chỉ định nhiều nhóm').click();
        cy.get('#using_json  ul li:nth-child(6) a').click();
        common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom','ls11.7');
        cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').eq(0).click({ force: true })
        cy.get('#btnDongYChon').click();
        cy.get('#btnChapNhan').click();
        cy.get('#btnHoiChan').click();
        common.enterSelectBoxElasticSearch('cboHangDoiPT','Ls13');
        common.setTomorrowToInput('txtNgayMo');
        cy.get('#cboDichVuPT').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('08111795');
        cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
        cy.get('#btnChapNhanNhapTheBhyt').click();
        cy.wait(1500);
        cy.get('#btnHoiChan').click();
        cy.get('#btnChapNhanNhapTheBhyt').click();
        // cy.wait('3000');
        // cy.get('.confirm').click();
        cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(1) a[title="Xóa"]').click();
        cy.get('.confirm').click();
        cy.get('#btnPopupHOANTAT').click();
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

    });

    it('Check chỉnh sửa DV ở lưới Dv sau khi kê - Check chỉnh sửa DV ở lưới Dv sau khi kê', function () {
        // cy.get('#txtTimKiem').type('300520882');
        // cy.get('#select2-drpSelectTrangThai-container > .select2-selection__clear').click();
        common.enterSelectBoxNormal('cbbLoai','3{enter}');
        cy.get('#btnTimKiem').click();
        cy.get('#tblNoiTru tbody tr:nth-child(6) td:nth-child(5) a').click();
        cy.get('#showDsYLenh').click();
        cy.get('#trangthaiylenh').select('Mới');
        cy.get('#divDsYLenh .ibox-content').invoke('text').then((text)=> {
            cy.log(text);
            const formatText = text.trim();
            if (formatText === 'Không có thông tin Y lệnh') {
                cy.log('PASS');
            }
            else {
                cy.get('#tbodyylenh tr:nth-child(1) td:nth-child(4) a').click();
                cy.wait(1000);
                common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'sm');
                cy.get('#txtChanDoanSoBoThamKham').clear().type('CCC');
                common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C2');
                cy.get('#btnPopupHOANTAT').click();
                cy.wait(1000);
                cy.get('.col-md-9 > a > .far').click();
            }

            cy.get('#showThamKham').click()
            cy.get('#txtChanDoanSoBoThamKham').type('Cypress ChanDoanSoBoThamKham')
            common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C2');
            cy.get('#txtDienBienYLenhThamKham').type('Mới bị');
            cy.get('#divNoiTruContent .wrapper .row .col-lg-12 .ibox .ibox-title h5 b span').invoke('text')
                .then((doituong)=> {
                    cy.log(doituong);
                    if(doituong.trim().includes('Bảo hiểm')){
                        cy.contains('Chỉ định nhiều nhóm').click();
                        cy.get('#using_json  ul li:nth-child(1) a').click();
                        cy.viewport(1500,800);
                        cy.get('#cbbHangDoiPopupNhieuNhom').parent().find('span.selection span.select2-selection').click();
                        cy.get('span.select2-search').find('input.select2-search__field').type('cls06.1{downArrow}{enter}');
                        cy.get('.select2-results tr:first').click();
                        cy.get('#txtChiDinhFilter').type('Yêu cầu');
                        cy.get('#cdContent .ibox .ibox-content .row .col-lg-9 .row .col-sm-12 .row .col-sm-5 .row .input-group-btn').click();
                        cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').eq(0).click({force: true});
                        cy.get('#btnDongYChon').click();
                        cy.get('#btnChapNhan').click();
                        cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(10)').invoke('text').then((DT)=>{
                            cy.log(DT);
                            if (DT === 'Không BH'){
                                cy.log('DV thu phí');
                            }
                            else {
                                cy.log('DV BH');
                            }
                        });
                    }
                    else {
                        cy.log('Đối tượng TP');
                    }
                });
            cy.contains('Chỉ định nhiều nhóm').click();
            cy.get('#using_json  ul li:nth-child(3) a').click();
            cy.viewport(1500,800);
            common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom', 'ls');
            cy.get('#txtChiDinhFilter').type('01');
            cy.get('#cdContent .ibox .ibox-content .row .col-lg-9 .row .col-sm-12 .row .col-sm-5 .row .input-group-btn').click();
            cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').eq(0).click({force: true})
            cy.get('#btnDongYChon').click();
            cy.get('#btnChapNhan').click();
            cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(11) .badge')
                .should('have.text', 'Mới')
                .then(($badge) => {
                    const hasBadgeClass = $badge.hasClass('badge');
                    if(hasBadgeClass){
                        cy.log('Đúng trạng thái DV');
                    }
                    else {
                        cy.log('Sai trạng thái DV');
                    }
                });
            cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(2) a i.fa').click();
            cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(11) .badge')
                .should('have.text', 'Chờ thực hiện')
                .then(($badge) => {
                    const hasBadgeClass= $badge.hasClass('badge');
                    if(hasBadgeClass){
                        cy.log('Đổi trạng thái DV thành công');
                    }
                    else {
                        cy.log('Đổi trạng thái DV thất bại');
                    }
                });
            cy.get('#btnInPhieuDVLai').click();
            cy.get('#divModalContentChung .row .wrapper .row .col-sm-9 .ibox .ibox-content .divHeight .col-12 .divgroup input')
                .click();
            cy.contains('Xem trước').click().wait(2000);
            cy.get('body').type('{esc}');
            cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(2) a i.fas').click().wait(1000);
            cy.get('.confirm').click().wait(1000);
            cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(11) .badge')
                .should('have.text', 'Mới')
                .then(($badge) => {
                    const hasBadgeClass= $badge.hasClass('badge');
                    if(hasBadgeClass){
                        cy.log('Đổi trạng thái DV thành công');
                    }
                    else {
                        cy.log('Đổi trạng thái DV thất bại');
                    }
                });
            cy.get('#btnGoiDV').click();
            cy.get('#txtTimKiemDvMau').type('hương');
            cy.get('#btnTimKiem').click();
            cy.get('#divContentDMChiDinh .table-responsive .table tbody tr:nth-child(1) td:nth-child(2) a').click();
            cy.document().then(doc=>{
                const  alert = doc.querySelectorAll('.sweet-alert');
                if(alert.length >1){
                    cy.get('.confirm').click().wait(1000);
                    cy.get('#btnChapNhan').click().wait(1000);
                    // cy.get('#divDichVuXetNghiem tbody tr td .badge')
                    //     .should('have.text', 'Mới')
                    //     .then(($badge) => {
                    //         const hasBadgeClass= $badge.hasClass('badge');
                    //         if(hasBadgeClass){
                    //             cy.log('Đúng trạng thái DV');
                    //         }
                    //         else {
                    //             cy.log('Sai trạng thái DV');
                    //         }
                    //     });
                    cy.get('#tblDichVu tbody tr:nth-child(6) td:nth-child(1) a[title="Sửa"]').click();
                    cy.get('#txtMotadaiUpdate').type('Máu hiếm');
                    cy.get('div.modal-footer > button:first').click();
                    cy.get('#btnSaveThamKhamDraw').click().wait(1000);
                    cy.get('#btnLoadThamKhamDraw').click().wait(1000);
                    cy.get('#tblDichVu tbody tr:nth-child(6) td:nth-child(1) a[title="Xóa"]').click();
                    cy.get('.confirm').click();
                    cy.get('#btnPopupHOANTAT').click();
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
                    cy.get('#tblDichVu tbody tr td .badge')
                        .should('have.text', 'Chờ thực hiện')
                        .then(($badge) => {
                            const hasBadgeClass= $badge.hasClass('badge');
                            if(hasBadgeClass){
                                cy.log('Đúng trạng thái DV');
                            }
                            else {
                                cy.log('Sai trạng thái DV');
                            }
                        });
                    cy.get('#tblDichVu tbody tr:last td:nth-child(4)').invoke('text').then((Thoigiake)=>{
                        cy.log(Thoigianke);
                        cy.get('#txtThoigianThamKham').click();
                        cy.get('#txtThoigianThamKham').invoke('text').then((Thoigianylenh)=>{
                            cy.log(Thoigianylenh);
                            cy.get('.col-md-9 > a > .far').click();
                            cy.get('#divMenuContent .mainNav ul li:nth-child(3) a').click();
                            cy.get('#divMenuContent .mainNav ul li:nth-child(3) ul li:nth-child(4) a').click();
                            cy.get('#txtThoiGianRa').click();
                            cy.get('#txtThoiGianRa').invoke('text').then((Thoigianra)=>{
                                cy.log(Thoigianra);
                                const Time1 = new date (Thoigianylenh);
                                const Time2 = new date (Thoigiake);
                                const Time3 = new date (Thoigianra);
                                if (Time1 < Time2 && Time2 <Time3 || Time3 === 'null'){
                                    cy.log('Đã chặn thời gian kê DV')
                                }
                                else {cy.log('Chưa chặn thời gian kê DV');
                                }
                            });
                        });
                    });
                }
                else {
                    cy.get('#btnChapNhan').click();
                    // cy.get('#divDichVuXetNghiem tbody tr td .badge')
                    //     .should('have.text', 'Mới')
                    //     .then(($badge) => {
                    //         const hasBadgeClass= $badge.hasClass('badge');
                    //         if(hasBadgeClass){
                    //             cy.log('Đúng trạng thái DV');
                    //         }
                    //         else {
                    //             cy.log('Sai trạng thái DV');
                    //         }
                    //     });
                    cy.get('#divDichVuXetNghiem tbody tr:nth-child(3) td:nth-child(1) a[title="Sửa"]').click();
                    cy.get('#txtMotadaiUpdate').type('Máu hiếm');
                    cy.get('div.modal-footer > button:first').click();
                    cy.get('#btnSaveThamKhamDraw').click().wait(1000);
                    cy.get('#btnLoadThamKhamDraw').click().wait(1000);
                    cy.get('#tblDichVu tbody tr:nth-child(4) td:nth-child(1) a[title="Xóa"]').click();
                    cy.get('.confirm').click();
                    cy.get('#btnPopupHOANTAT').click();
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
                    cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(11) .badge')
                        .should('have.text', 'Chờ thực hiệnChờ thực hiện')
                        .then(($badge) => {
                            const hasBadgeClass= $badge.hasClass('badge');
                            if(hasBadgeClass){
                                cy.log('Đúng trạng thái DV');
                            }
                            else {
                                cy.log('Sai trạng thái DV');
                            }
                        });
                    cy.get('#divDichVuXetNghiem .table-responsive #tblDichVu tbody tr:last td:nth-child(4)').invoke('text').then((Thoigianke)=>{
                        cy.log(Thoigianke);
                        cy.get('#txtThoigianThamKham').invoke('attr','data-value').then((Thoigianylenh)=>{
                            cy.log(Thoigianylenh);
                            cy.get('.col-md-9 > a > .far').click().wait(1000);
                            cy.get('.accordion-nav > ul > li:nth-child(3) > .accordion-btn-wrap').click();
                            cy.get('.accordion-nav > ul > li:nth-child(3) > ul > li:nth-child(4) > a').click();
                            cy.get('#txtThoiGianRa').invoke('val').then((Thoigianra)=>{
                                cy.log(Thoigianra);
                                const Time1 = new Date(Thoigianylenh);
                                const Time2 = new Date (Thoigianke);
                                const Time3 = new Date (Thoigianra);
                                if (Time1 <= Time2 && Time2 <Time3 || Time3 === 'null'){
                                    cy.log('Đã chặn thời gian kê DV')
                                }
                                else {cy.log('Chưa chặn thời gian kê DV');
                                }
                            });
                        });
                    });
                }

            });

        });

    });

    it('Check khi kê VTYT/thuốc', function () {
        common.enterSelectBoxNormal('cbbLoai','3{enter}');
        cy.get('#btnTimKiem').click();
        cy.get('#tblNoiTru tbody tr:nth-child(4) td:nth-child(5) a').click();
        cy.get('#showDsYLenh').click();
        cy.get('#trangthaiylenh').select('Mới');
        cy.get('#divDsYLenh .ibox-content').invoke('text').then((text)=> {
            cy.log(text);
            const formatText = text.trim();
            if (formatText === 'Không có thông tin Y lệnh') {
                cy.log('PASS');
            }
            else {
                cy.get('#tbodyylenh tr:nth-child(1) td:nth-child(4) a').click();
                cy.wait(1000);
                common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'sm');
                cy.get('#txtChanDoanSoBoThamKham').clear().type('CCC');
                common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C2');
                cy.get('#btnPopupHOANTAT').click();
                cy.wait(1000);
                cy.get('.col-md-9 > a > .far').click();
            }
        });
        cy.get('#showThamKham').click();
        cy.get('#txtChanDoanSoBoThamKham').type('Cypress Kê đơn');
        common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham','C2');
        cy.get('#txtDienBienYLenhThamKham').type('Mới bị');
        cy.get('#btnKeDon').click();
        // cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
        // cy.get('span.select2-search').find('input.select2-search__field').type('20.14036');
        // cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
        common.enterSelectBoxUlLi('cboThuoc','27');
        cy.get('#txtSl').type('10000');
        cy.get('#txtSlN').type('10000');
        cy.get('#btnChon').click();
        cy.get('.confirm').click();
        // cy.wait(2000);
        // cy.get('body').type('{esc}');
        cy.viewport(1500,800);
        cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('.');
        cy.get('span.select2-results > ul.select2-results__options').find('li').eq(4).click({force:true});
        // common.enterSelectBoxUlLi('cboThuoc','27');
        cy.get('#txtSl').type('1.1');
        cy.get('#txtSlN').type('2');
        cy.get('#btnChon').click();
        cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').focus();
        cy.get('span.select2-search').find('input.select2-search__field').type('.');
        cy.get('span.select2-results > ul.select2-results__options').find('li').eq(5).click({force:true});
        cy.get('.col-lg-2 > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
        cy.get('#txtSl').type('3');
        cy.get('#txtSlN').type('3');
        cy.get('#btnChon').click();
        // cy.get('.confirm').click();
        cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').focus();
        cy.get('span.select2-search').find('input.select2-search__field').type('.');
        cy.get('span.select2-results > ul.select2-results__options').find('li').eq(6).click({force:true});
        cy.get('#txtSl').type('4');
        cy.get('#txtSlN').type('2');
        cy.get('#btnChon').click();
        // cy.get('.confirm').click();
        cy.get('body').type('{esc}');
        // cy.get('#tblThuoc tbody tr:nth-child(1) td:nth-child(1) a[title="Sửa"]').click();
        // cy.get('#txtSlUpdate').type('5');
        // cy.get('div.modal-footer > button:first').click();
        cy.get('#tblThuoc tbody tr:nth-child(1) td:nth-child(2) a[title="Xóa"]').click({multiple:true});
        cy.get('.confirm').click();
        cy.get('#tblThuoc thead tr th:nth-child(1) a[title="Xóa tất cả toa thuốc mới"]').click();
        cy.get('.confirm').click();
        cy.wait(2000);
        // common.enterSelectBoxUlLi('cboThuoc','27');
        // cy.get('body').type('{enter}');
        cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('27');
        cy.get('span.select2-results > ul.select2-results__options').find('li').eq(2).click({multiple:true});
        cy.get('.col-lg-2 > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
        cy.get('#txtSl').type('1');
        cy.get('#txtSlN').type('1');
        cy.get('#btnChon').click();
        cy.get('#btnChuyenTH').click();
        cy.get('#divNoiTruContent .wrapper .row .col-lg-12 .ibox .ibox-title h5 b span').invoke('text').then((doituong)=> {
            cy.log(doituong);
            if (doituong.trim().includes('Bảo hiểm')) {
                cy.get('#tblThuoc tbody tr:nth-child(1) td:nth-child(11)').invoke('text').then((Dt)=>{
                    cy.log(Dt);
                    if (Dt === 'Bảo hiểm'){
                        cy.log('Thuốc/VTYT trong gói BHYT');
                    }
                    else {
                        cy.log('Thuốc/VTYT thu phí');
                    }
                })
            }
            else {
                cy.log('Đối tượng BN thu phí')
            }
        });
        cy.get('#btnPopupHOANTAT').click();
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


    });

    it('Kết thúc điều trị và thu hồi điều trị', function () {
        cy.get('#txtTimKiem').type('2300516775');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
        // cy.get('#select2-drpSelectTrangThai-container > .select2-selection__clear').click();
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('.accordion-nav > ul > li:nth-child(3) > .accordion-btn-wrap').click();
        cy.get('.accordion-nav > ul > li:nth-child(3) > ul > li:nth-child(4) > a').click();
        cy.get('#cbbXuTri').select('Ra viện');
        cy.get('#txtThoiGianRa').clear().type('15:53 10/08/2023');
        cy.get('#txtSoNgayDT').clear().type('5');
        cy.get('#cboTinhTrangRaVien').select('Ra viện');
        common.enterSelectBoxNormal('cboKetQuaDT', 'Đỡ, giảm');
        common.enterSelectBoxElasticSearch('cboLydoChove', 'Cho về');
        common.enterSelectBoxElasticSearch('cboBacsi', 'VD02152');
        cy.get('#btnSaveXuTri').click();
        cy.wait(1000);
        cy.get('#btnHOANTAT').click();
        // common.clickConfirmBtn();
        // cy.wait(3000);

        //thu hoi
        cy.get('#btnTHUHOI').should('be.visible').click();
        cy.get(1500);
        cy.get('.accordion-nav > ul > li:nth-child(3) > ul > li:nth-child(4) > a').click({timeout:7500});
        cy.get('#cbbXuTri').select('Chuyển khoa');
        cy.wait(1000);
        common.clickConfirmBtn();
        cy.get('#txtThoiGianRa').click();
        cy.get('#txtSoNgayDT').clear().type('10');
        common.enterSelectBoxElasticSearch('cboKhoanhap', 'LS17');
        cy.get('#cboChuyenBA').select('Chuyển bệnh án sang');
        common.enterSelectBoxElasticSearch('cboBacsi', 'VD01890');
        cy.get('#btnSaveXuTri').click();
    });


});