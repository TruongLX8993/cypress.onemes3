import 'cypress-wait-until';

const common = require('../../common.cy');
const insuaranceNumber = require('../../rd');
const enviroment = require('../../../../enviroment.json');

describe("Tiếp nhận", () => {

    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('tiepnhandraw');

    });

    it('Tiếp nhận đối tượng không bảo hiểm', () => {


        cy.get('#txtTenBenhNhan').type("CYPRESS TEST11");
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


        cy.get('#cbbDanToc').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('25{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();

        cy.get('#cbbNgheNghiep').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('07{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();

        cy.get('#cbbKhoaPhong').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('1C{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();

        cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('10017{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();

        cy.get('#cbbHangDoi').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('khám bệnh{downArrow}{enter}');
        cy.get('.select2-results tr:first').click();

        cy.get('#btnCHUYENTH').click();
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

        cy.get('#cbbDoiTuong').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('Bảo hiểm{downArrow}{enter}');
        // cy.get('#txtBaoHiemMst').type(insuaranceNumber.generate());
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
        cy.get('span.select2-search').find('input.select2-search__field').type('07');
        cy.get('.select2-results tr:first').click();

        cy.get('#cbbKhoaPhong').parent().find('span.selection span.select2-selection').focus();
        cy.get('span.select2-search').find('input.select2-search__field').type('1C{downArrow}{enter}');
        cy.get('#select2-cbbKhoaPhong-results').find('tr:first').click();

        cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').focus();
        cy.get('span.select2-search').find('input.select2-search__field').type('khám bệnh{downArrow}{enter}');
        cy.get('#select2-cbbDichVu-results').find('tr:last').click();


        cy.get('#cbbHangDoi').parent().find('span.selection span.select2-selection').focus();
        cy.get('input.select2-search__field').eq(1).type('kham');
        cy.get('#select2-cbbHangDoi-results').find('tr:last').click();
        cy.get('#btnKiemTraThe').click();
        cy.get('#btnHopLeKiemTraThe').click();
        cy.get('#btnCHUYENTH').click();
    });

    it('Thu hồi tiếp nhận ', () => {
        cy.contains('Danh sách tiếp nhận').click();
        // cy.get('#txtTimKiem').clear().type('2300521100');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'dang thuc hien');
        common.enterSelectBoxNormal('cbbLoai', '3');
        common.btnID('btnTimKiem');
        cy.wait(1000);
        cy.get('#divTiepNhanDanhSachContent tbody tr:first  td:nth-child(4) a').invoke('text').then((maBN) => {
            cy.get('#divTiepNhanDanhSachContent tbody tr:first  td:nth-child(4) a').click();
            cy.get('#btnTHUHOI').should('be.visible').click();
            cy.wait(1000);

            cy.document().then(doc => {
                const alert = doc.querySelectorAll('.sweet-alert');
                if (alert.length > 0) {

                    cy.get('.sweet-alert p[style="display: block;"]').invoke('text').then(text=>{
                        if(text.trim() === 'Khám bệnh đang thực hiện, không thể thu hồi tiếp nhận!'){
                            cy.log('Khám bệnh đang thực hiện, không thể thu hồi tiếp nhận!');
                        }else{
                            common.goToFunctionFromMenu('dongtamung');
                            cy.get('#txtTimKiem').clear().type(maBN);
                            common.enterSelectBoxNormal('cbbLoai', '3');
                            common.btnID('btnTimKiem');
                            cy.get('#divVienPhiDanhSachContent tbody tr:first td a').eq(3).click();
                            cy.get("#drawTT tr").each((row, index) => {
                                const status = row.find("td:nth-child(7) .badge").text();
                                if (status === "Hoàn tất") {
                                    cy.log(`Dòng thứ ${index + 1} có trạng thái hoàn tất.`);
                                    cy.wait(500);
                                    cy.get(`#drawTT tr:nth-child(${index + 1}) td:first`).click();
                                    cy.wait(500);
                                    common.clickConfirmBtn();

                                    common.goToFunctionFromMenu('danhsachtiepnhandraw');
                                    cy.get('#txtTimKiem').clear().type(maBN);
                                    common.enterSelectBoxNormal('drpSelectTrangThai', 'dang thuc hien');
                                    common.enterSelectBoxNormal('cbbLoai', '3');
                                    common.btnID('btnTimKiem');
                                    cy.get('#divTiepNhanDanhSachContent tbody tr:first  td:nth-child(4) a').click();
                                    cy.get('#btnTHUHOI').should('be.visible').click();
                                    cy.wait(1000);
                                    cy.get('#aTrangThai i.badge').invoke('text').then(status=>{
                                        if(status === 'Mới'){
                                            cy.log('Thu hồi thành công');
                                        } else{
                                            throw new Error('Thu hồi thất bại');
                                        }
                                    });
                                }
                            });
                        }
                    })
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
                            cy.get('input.select2-search__field').eq(1).type('07{downArrow}{enter}');
                            cy.get('.select2-results tr:first').click();

                            cy.get('#cbbKhoaPhong').parent().find('span.selection span.select2-selection').focus();
                            cy.get('input.select2-search__field').eq(1).type('1C{downArrow}{enter}');
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

    it('Hủy tiếp nhận bệnh nhân mới', () => {
        common.goToFunctionFromMenu('danhsachtiepnhandraw');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'moi');
        common.enterSelectBoxNormal('cbbLoai', '3');
        common.btnID('btnTimKiem');
        cy.get('#divTiepNhanDanhSachContent tbody tr:nth-child(3)  td a').eq(4).click();
        cy.get('#btnHUY').click();
        cy.get('.confirm').click();
        cy.get('#xoaDisplayItem0').click();
        cy.get('#btnHUY').click();

        cy.get('a#aTrangThai i.badge')
            .should('have.text', 'Hủy')
            .then(($badge) => {
                const hasBadgeClass = $badge.hasClass('badge');
                if (hasBadgeClass) {
                    cy.log('Hủy thành công');
                } else {
                    cy.log('Lỗi hủy');
                }
            });
    });

    it('Tiếp nhận lại bệnh nhân cũ chưa HTTT / đã HTTT / Khám nhiều đợt nhưng chung mã bệnh nhân', () => {
        cy.get('#drpSelectTimKiem').parent().find('span.selection span.select2-selection ul.select2-selection__rendered').click();
        cy.get('li.select2-search').find('input.select2-search__field').type('LINH TEST');
        cy.get('#select2-drpSelectTimKiem-results').find('tr:first', {timeout: 10000}).click();
        cy.get('.confirm').click();

        cy.get('.select2-selection__choice__remove').click();
        cy.get('#drpSelectTimKiem').parent().find('span.selection span.select2-selection ul.select2-selection__rendered').click();
        cy.get('li.select2-search').find('input.select2-search__field').type('MAI');
        cy.get('#select2-drpSelectTimKiem-results').find('tr:first', {timeout: 10000}).click();

        // lấy mã của bệnh nhân
        cy.get('#txtMaBenhNhan').invoke('val').then((maBN) => {
            cy.get('#txtDiaChiSoNha').type("Số nhà test");
            common.enterSelectBoxElasticSearch('cbbKhoaPhong', 'ls03');
            cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').focus();
            cy.get('span.select2-search').find('input.select2-search__field').type('01010001');
            cy.get('#select2-cbbDichVu-results').find('tr:last').click();
            common.enterSelectBoxElasticSearch('cbbHangDoi', 'tttk.1');
            cy.get('#btnCHUYENTH').click();
            cy.wait(1500);
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