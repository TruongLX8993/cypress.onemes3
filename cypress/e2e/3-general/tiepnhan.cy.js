import 'cypress-wait-until';

const common = require('../common.cy');
const insuaranceNumber = require('../rd');


describe("Tiếp nhận", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('tiepnhandraw');

    });

    it('Tiếp nhận đối tượng không bảo hiểu', () => {

        cy.get('#txtTenBenhNhan').type("CYPRESS TEST");
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
        cy.get('#txtTenBenhNhan').type("CYPRESS TEST");
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
        cy.get('#txtBaoHiemMst').type(insuaranceNumber.generate());
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

    it('Thu hồi tiếp nhận ',  () => {
        cy.contains('Danh sách tiếp nhận').click();
        cy.get('#divTiepNhanDanhSachContent tbody tr:first  td a').eq(4).click();
        cy.get('.confirm').click();
        if(cy.get('#aTrangThai') == 'Mới'){
            console.log('không thể thu hồi');
        }else{
            cy.get('#btnTHUHOI').click()
            console.log('đã chuyển trạng thái sang mới');
        }

        console.log('update thông tin mới');
        cy.get('#txtTenBenhNhan').type("CYPRESS TEST");
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

        cy.get('#btnCHUYENTH').click();
        cy.get('.confirm').click();

    });

    it('Hủy tiếp nhận bệnh nhân mới',  () => {

        cy.get('#txtTenBenhNhan').type("CYPRESS TEST");
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

        cy.get('#btnCHUYENTH').click();
        cy.get('.confirm').click();
        common.enterSelectBoxElasticSearch('cbbHangDoi','tttk.1');
        // cy.get('cbbDichVu').type('01010014{enter}');
        cy.get('#btnCHUYENTH').click();

        cy.contains('Danh sách tiếp nhận').click();
        cy.get('#divTiepNhanDanhSachContent tbody tr:first  td a').eq(4).click();
        cy.get('.confirm').click();
        cy.get('#btnTHUHOI').click();

        cy.get('a#aTrangThai i.badge')
            .should('have.text', 'Mới')
            .then(($badge) => {
                const hasBadgeClass = $badge.hasClass('badge');
                if (hasBadgeClass){
                    cy.log('Thu hồi thành công');
                } else {
                    cy.log('Lỗi thu hồi ');
                }
            });

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

    it('Tiếp nhận lại bệnh nhân cũ đã HTTT',  () => {
        cy.get('#drpSelectTimKiem').parent().find('span.selection span.select2-selection ul.select2-selection__rendered').click();
        cy.get('li.select2-search').find('input.select2-search__field').type('LINH TEST 051504').wait(10000);
        cy.get('#select2-drpSelectTimKiem-results').find('tr:first').click();

    });

    it('Tiếp nhận lại bệnh nhân cũ chưa HTTT',  () => {
        cy.get('#drpSelectTimKiem').parent().find('span.selection span.select2-selection ul.select2-selection__rendered').click();
        cy.get('li.select2-search').find('input.select2-search__field').type('LINH TEST').wait(10000);
        cy.get('#select2-drpSelectTimKiem-results').find('tr:first').click();
        cy.get('.confirm').click().wait(3000);

    });

    it('bệnh nhân khám nhiều đợt nhưng chung mã BN',  () => {
        cy.get('#drpSelectTimKiem').parent().find('span.selection span.select2-selection ul.select2-selection__rendered').click();
        cy.get('li.select2-search').find('input.select2-search__field').type('LINH TEST 051504').wait(7000);
        cy.get('#select2-drpSelectTimKiem-results').find('tr:first').click();

        cy.get('#txtDiaChiSoNha').type("Số nhà test");
        common.enterSelectBoxElasticSearch('cbbKhoaPhong','ls03');

        cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').focus();
        cy.get('span.select2-search').find('input.select2-search__field').type('khám bệnh{downArrow}{enter}');
        cy.get('#select2-cbbDichVu-results').find('tr:last').click();

        common.enterSelectBoxElasticSearch('cbbHangDoi','tttk.1');
        cy.get('#btnCHUYENTH').click();
        cy.get('#txtMaBenhNhan').invoke('val').then((value) => {
            if (value === '2300520705') {
                cy.log('Chung mã khi bệnh nhân khám nhiều đợt');
            } else {
                cy.log('Không Chung mã khi bệnh nhân khám nhiều đợt');
            }
        });

    });



});