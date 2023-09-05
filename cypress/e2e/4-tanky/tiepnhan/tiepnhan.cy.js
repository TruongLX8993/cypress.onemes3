import 'cypress-wait-until';
import {getCurrentUrl, getHtml} from "../../common.cy";

const common = require('../../common.cy');
const insuaranceNumber = require('../../rd');
const enviroment = require('../../../../enviroment.json');


describe("Tiếp nhận", () => {

    beforeEach(() => {
        common.visitAndLoginOther(enviroment.natk);
        common.goToFunctionFromMenu('tiepnhandraw');

    });

    it('Tiếp nhận đối tượng không bảo hiểm', () => {

        cy.get('#txtTenBenhNhan').type("CYPRESS");
        cy.get('#txtNgaySinh').type("26/11/2020");

        cy.get('#cbbDonViHanhChinh').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('BK{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();

        cy.get('#txtDiaChiSoNha').type("Số nhà test");
        cy.get('.form-group > .btn').click()
        cy.get('#txtDienThoai').type("09897312421");
        cy.get('#txtSoCMND').type("038092256");

        cy.get('#cboQuocGia').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('VN{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();


        cy.get('#cbbDanToc').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('25{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();

        cy.get('#cbbNgheNghiep').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('7{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();

        common.enterSelectBoxNormal('cbbDoiTuong','thu phi');

        cy.get('#cbbKhoaPhong').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('pk{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();

        cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').focus();
        cy.get('span.select2-search').find('input.select2-search__field').type('tt{downArrow}{enter}');
        cy.get('#select2-cbbDichVu-results').find('tr:last').click().wait(1500);
        common.btnID('btnAddDVTN');
        cy.get('#btnCHUYENTH').click();
        cy.wait(1000);
    });

    it('Tiếp nhận đối tượng bảo hiểm', () => {
        cy.get('#txtTenBenhNhan').type("CYPRESS TEST13");
        cy.get('#txtNgaySinh').type("26/11/2020");

        cy.get('#cbbDonViHanhChinh').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('BK{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();


        cy.get('#txtDiaChiSoNha').type("Số nhà test");
        cy.get('#txtDienThoai').type("0123456789");
        cy.get('#txtSoCMND').type("038092256");


        cy.get('#cboQuocGia').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('VN{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();

        // cy.get('#cbbDoiTuong').parent().find('span.selection span.select2-selection').focus();
        // cy.get('input.select2-search__field').eq(1).type('Bảo hiểm{downArrow}{enter}');
        // // cy.get('#txtBaoHiemMst').type(insuaranceNumber.generate());

        cy.get('#lblTheBaoHiem i.fa').click();
        cy.get('#txtBaoHiemMst').type('0125073654');
        cy.get('#txtBaoHiemGiaTriTu').type('01/02/2023');

        cy.get('#cbbDiaChiBvDkBd').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('01009{downArrow}{enter}', {force: true});
        cy.get('#select2-cbbDiaChiBvDkBd-results').find('tr:first').click();


        cy.get('#txtBaoHiemDct').type("Hà nội");
        cy.get('#btnChapNhanNhapTheBhyt').click();

        cy.get('#cbbDanToc').parent().find('span.selection span.select2-selection').focus();
        cy.get('span.select2-search').find('input.select2-search__field').type('25');
        cy.get('#select2-cbbDanToc-results').find('tr:first').click();

        cy.get('#cbbNgheNghiep').parent().find('span.selection span.select2-selection').focus();
        cy.get('span.select2-search').find('input.select2-search__field').type('7');
        cy.get('.select2-results tr:first').click();

        cy.get('#cbbKhoaPhong').parent().find('span.selection span.select2-selection').focus();
        cy.get('span.select2-search').find('input.select2-search__field').type('pk{downArrow}{enter}');
        cy.get('#select2-cbbKhoaPhong-results').find('tr:first').click();

        cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').focus();
        cy.get('span.select2-search').find('input.select2-search__field').type('tt{downArrow}{enter}');
        cy.get('#select2-cbbDichVu-results').find('tr:last').click().wait(1500);
        common.btnID('btnAddDVTN');

        cy.get('#btnKiemTraThe').click();
        cy.get('#btnHopLeKiemTraThe').click();
        cy.get('#btnCHUYENTH').click();
        cy.wait(1000);
    });

    it('Thu hồi tiếp nhận ', () => {
        cy.contains('Danh sách tiếp nhận').click();
        common.enterSelectBoxNormal('drpSelectTrangThai', 'dang thuc hien');
        common.enterSelectBoxNormal('cbbLoai', '3');
        common.btnID('btnTimKiem');
        cy.wait(1000);
        cy.get('#divTiepNhanDanhSachContent tbody tr:first  td:nth-child(4) a').invoke('text').then((maBN) => {

            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("dangkyid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=tiepnhandanhsachdraw', 'wpid=tiepnhandraw')
                            currentUrl += `&dangkyid=${phauThuatId}`;
                            cy.visit(currentUrl);
                            cy.get('#btnTHUHOI').should('be.visible').click();
                            cy.wait(1000);

                            cy.document().then(doc => {
                                const alert = doc.querySelectorAll('.sweet-alert');
                                if (alert.length > 0) {
                                    cy.get('.sweet-alert p[style="display: block;"]').invoke('text').then(error => {
                                        cy.log(error);
                                    });

                                } else {
                                    cy.get('#aTrangThai i.badge').invoke('text').then((badge) => {
                                        if (badge === 'Mới') {
                                            console.log('đã chuyển trạng thái sang mới');

                                            cy.wait(1000);
                                            console.log('update thông tin mới');
                                            // cy.get('#txtTenBenhNhan').type("CYPRESS TEST");
                                            cy.get('#txtNgaySinh').type("26/11/2020");

                                            cy.get('#cbbDonViHanhChinh').parent().find('span.selection span.select2-selection').focus();
                                            cy.get('input.select2-search__field').eq(1).type('BK{downArrow}{enter}');
                                            cy.get('.select2-results tr:first').click();

                                            cy.get('#txtDiaChiSoNha').clear().type("Số nhà test");
                                            cy.get('#txtDienThoai').clear().type("0123456789");
                                            cy.get('#txtSoCMND').clear().type("038092256");

                                            cy.get('#cboQuocGia').parent().find('span.selection span.select2-selection').focus();
                                            cy.get('input.select2-search__field').eq(1).type('VN{downArrow}{enter}');
                                            cy.get('.select2-results tr:first').click();


                                            cy.get('#cbbDanToc').parent().find('span.selection span.select2-selection').focus();
                                            cy.get('input.select2-search__field').eq(1).type('25{downArrow}{enter}');
                                            cy.get('.select2-results tr:first').click();

                                            cy.get('#cbbNgheNghiep').parent().find('span.selection span.select2-selection').focus();
                                            cy.get('input.select2-search__field').eq(1).type('7{downArrow}{enter}');
                                            cy.get('.select2-results tr:first').click();

                                            cy.get('#cbbKhoaPhong').parent().find('span.selection span.select2-selection').focus();
                                            cy.get('input.select2-search__field').eq(1).type('pk{downArrow}{enter}');
                                            cy.get('.select2-results tr:first').click();

                                            cy.get('#btnCHUYENTH').click();
                                            cy.get('.confirm').click();

                                        } else {
                                            throw new Error('Lỗi thu hồi');
                                        }
                                    });

                                }
                            })
                        });
                });
            // cy.get('#divTiepNhanDanhSachContent tbody tr:first  td:nth-child(4) a').click();


        });


    });

    it('Hủy tiếp nhận bệnh nhân mới', () => {
        cy.contains('Danh sách tiếp nhận').click();
        common.enterSelectBoxNormal('drpSelectTrangThai', 'moi');
        common.enterSelectBoxNormal('cbbLoai', '3');
        common.btnID('btnTimKiem');
        cy.wait(1000);
        getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
            .then(text => {
                const re = new RegExp("dangkyid=([^&]*)");
                let phauThuatId = re.exec(text)[1];
                getCurrentUrl()
                    .then(currentUrl => {
                        currentUrl = currentUrl.replace('wpid=tiepnhandanhsachdraw', 'wpid=tiepnhandraw')
                        currentUrl += `&dangkyid=${phauThuatId}`;
                        cy.visit(currentUrl);
                        cy.get('#btnHUY').should('be.visible').click();
                        cy.wait(1000);
                        cy.document().then(doc => {
                            const alert = doc.querySelectorAll('.sweet-alert');
                            if (alert.length > 0) {
                                common.clickConfirmBtn();
                                cy.get('#xoaDisplayItem0').click();
                                cy.get('#btnHUY').click();
                                cy.wait(500);
                                cy.get('a#aTrangThai i.badge')
                                    .should('have.text', 'Hủy')
                                    .then(($badge) => {
                                        const hasBadgeClass = $badge.hasClass('badge');
                                        if (hasBadgeClass) {
                                            cy.log('Hủy thành công');
                                        } else {
                                            cy.fail('Lỗi hủy');
                                        }
                                    });

                            } else {
                                cy.get('a#aTrangThai i.badge')
                                    .should('have.text', 'Hủy')
                                    .then(($badge) => {
                                        const hasBadgeClass = $badge.hasClass('badge');
                                        if (hasBadgeClass) {
                                            cy.log('Hủy thành công');
                                        } else {
                                            cy.fail('Lỗi hủy');
                                        }
                                    });
                            }
                        })


                    });
            });

    });


    it('Tiếp nhận lại bệnh nhân cũ chưa HTTT / đã HTTT / Khám nhiều đợt nhưng chung mã bệnh nhân', () => {
        cy.get('#drpSelectTimKiem').parent().find('span.selection span.select2-selection ul.select2-selection__rendered').click();
        cy.get('li.select2-search').find('input.select2-search__field').type('LINH');
        cy.get('#select2-drpSelectTimKiem-results').find('tr:first', {timeout: 10000}).click();
        cy.get('.confirm').click();

        cy.get('.select2-selection__choice__remove').click();
        cy.get('#drpSelectTimKiem').parent().find('span.selection span.select2-selection ul.select2-selection__rendered').click();
        cy.get('li.select2-search').find('input.select2-search__field').type('HƯƠNG 2 TEST BỆNH ÁN YHCT');
        cy.get('#select2-drpSelectTimKiem-results').find('tr:first', {timeout: 10000}).click();
        common.clickConfirmBtn();

        // lấy mã của bệnh nhân
        cy.get('#txtMaBenhNhan').invoke('val').then((maBN) => {
            cy.get('#txtDiaChiSoNha').type("Số nhà test");
            common.enterSelectBoxElasticSearch('cbbKhoaPhong', 'pk');
            cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').focus();
            cy.get('span.select2-search').find('input.select2-search__field').type('tt');
            cy.get('#select2-cbbDichVu-results').find('tr:last').click();
            cy.get('#btnAddDVTN').click();

            cy.get('#lblTheBaoHiem i.fa').click();
            cy.get('#txtBaoHiemMst').type('0125073654');
            cy.get('#txtBaoHiemGiaTriTu').type('01/02/2023');

            cy.get('#cbbDiaChiBvDkBd').parent().find('span.selection span.select2-selection').focus();
            cy.get('input.select2-search__field').eq(1).type('01009{downArrow}{enter}', {force: true});
            cy.get('#select2-cbbDiaChiBvDkBd-results').find('tr:first').click();


            cy.get('#txtBaoHiemDct').type("Hà nội");
            cy.get('#btnChapNhanNhapTheBhyt').click();
            // common.enterSelectBoxElasticSearch('cbbHangDoi', 'tttk.1');
            cy.get('#btnCHUYENTH').click();
            cy.get('#btnHopLeKiemTraThe').click();
            common.clickConfirmBtn();
            cy.get('#btnTHUHOI').should('be.visible').click();
            cy.get('#txtMaBenhNhan').invoke('val').then((mabn) => {
                if (mabn == maBN) {
                    cy.log('Chung mã khi bệnh nhân khám nhiều đợt');
                } else {
                    cy.log('Không Chung mã khi bệnh nhân khám nhiều đợt');
                }
            });
        })


    });

});