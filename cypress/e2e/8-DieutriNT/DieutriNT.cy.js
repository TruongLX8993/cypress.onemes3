const common = require('../common.cy');
const insuaranceNumber = require('../rd');

describe("Nội trú", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');


    });
    it('Check các bộ lọc trong DS điều trị NT', function () {
        cy.get('#txtTimKiem').type('Han');
        //common.enterSelectBoxNormal('drpSelectKhoaPhong','LS22');
        //common.enterSelectBoxNormal('cboBuongGiuong','116');
        //common.enterSelectBoxNormal('cboBacSi','1712');
        common.enterSelectBoxElasticSearch('drpSelectDoiTuong','Bảo hiểm');
        //common.enterSelectBoxNormal('drpSelectTrangThai','Đi mổ');
        cy.get('#select2-drpSelectTrangThai-container > .select2-selection__clear').click();
        common.enterSelectBoxNormal('cbbLoai','Tuần trước');
        cy.get('#btnTimKiem').click();
        //cy.get('#tblNoiTru tbody tr:nth-child(2) td:nth-child(2) a').click();
        //cy.get('#tblNoiTru tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#tblNoiTru tbody tr:nth-child(2) td:nth-child(3) a').click();




    });



    it('Check khi chỉ định các DV bằng nhiều nhóm/Gói mẫu', function () {
        // cy.get('#txtTimKiem').type('300520882');
        // cy.get('#select2-drpSelectTrangThai-container > .select2-selection__clear').click();
        common.enterSelectBoxNormal('cbbLoai','Tuần trước');
        cy.get('#btnTimKiem').click();
        cy.get('#tblNoiTru tbody tr:nth-child(6) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
        common.enterSelectBoxNormal('cboBenhChinhThamKham','A02.0');
        common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham','C2');
        cy.get('#txtDienBienYLenhThamKham').type('Mới bị');
        cy.contains('Chỉ định nhiều nhóm').click();
        //cy.get('#7b1a3430-7ab7-4dd3-8acc-dd4e7f70089b_anchor').click();
        //cy.get('#448a7334-c8db-4935-87f0-c3b4692ccbd4_anchor').click();
        //cy.contains('Chẩn đoán hình ảnh').click();
        cy.get('#using_json  ul li:nth-child(6) a').click();
        // cy.get('.jstree-children  ul li:nth-child(12) a').click();
        // common.enterSelectBoxElas('cbbHangDoiPopupNhieuNhom','12.9');
        // cy.get('#divContentChiDinh ul li:nth-child(12) a');
        // cy.contains('Khám bệnh').click();
        common.enterSelectBoxElasticSearch('cbbHangDoiPopupNhieuNhom','ls11.7');
        //cy.get('#txtChiDinhFilter').type('Khám bệnh');
        //cy.get('.input-group-btn').click();
        // cy.contains('label', 'Khám bệnh (10.1895)') // tìm label có data là "Khám bệnh"
        //     .prev() // lấy phần tử trước đó (thẻ div chứa input và ins)
        //     .find('ins.iCheck-helper') // tìm thẻ ins có class là iCheck-helper
        //     .click() // tick vào checkbox
        cy.get('div#divContentChiDinh div.icheckbox_square-green ins.iCheck-helper').eq(0).click({ force: true })
        cy.get('#btnDongYChon').click();
        cy.get('#btnChapNhan').click();
        // cy.get('#btnGoiDV').click();
        // cy.get('#frm-TimKiem tbody tr:nth-child(5) td:nth-child(2) a').click();
        // cy.get('div#divContentDvMau div.icheckbox_square-green ins.iCheck-helper').eq(0).click({ force: true });
        // cy.get('#btnChuyenTh_GDVM').click();
        // cy.wait(10000);
        // // cy.get('.close').click();
        // cy.get('body').type('{esc}');
        // cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(1) a').eq(0).click();
        // cy.get('#cboTileTTDVUpdate').select('80');
        // cy.contains("Đóng").click();
        // cy.get('div.modal-footer > button:first').click();
        // cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(1) a').eq(1).click();
        cy.get('#btnHoiChan').click();
        //cy.get('div.col-sm-12 div.iradio_square-green ins.iCheck-helper').eq(0).click({ force: true });
       common.enterSelectBoxElasticSearch('cboHangDoiPT','Ls13');
       // cy.get('#txtNgayMo').clear();('')
       // cy.get('#txtNgayMo').type(`${inputDateTime}`);
        common.setTomorrowToInput('txtNgayMo');
       // common.enterSelectBoxElas('cboDichVuPT','08111793');
       //  cy.get('#cboDichVuPT')
       //  cy.get('#cboDichVuPT').parent().find('span.selection span.select2-selection').click();
       //  cy.get('span.select2-search').find('input.select2-search__field').type('08111793{enter}');
        cy.get('#cboDichVuPT').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('08111795');
        cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
        cy.get('#btnChapNhanNhapTheBhyt').click();
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





    it('Check chỉnh sửa DV ở lưới Dv sau khi kê', function () {
        // cy.get('#txtTimKiem').type('300520882');
        // cy.get('#select2-drpSelectTrangThai-container > .select2-selection__clear').click();
        common.enterSelectBoxNormal('cbbLoai','Tuần trước');
        cy.get('#btnTimKiem').click();
        cy.get('#tblNoiTru tbody tr:nth-child(6) td:nth-child(5) a').click();
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
        cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(1) a[title="Sửa"]').click();
        cy.get('#txtMotadaiUpdate').type('Máu hiếm');
        cy.get('div.modal-footer > button:first').click();
        cy.get('#btnLoadThamKhamDraw').click();
        cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(1) a[title="Xóa"]').click();
        cy.get('.confirm').click();
        // cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(2) a[title="Thực hiện"]').click();
        // cy.get('#tblDichVu tbody tr:nth-child(3) td:nth-child(2) a[title="Thu hồi"]').click();
        // cy.get('.confirm').click();
        cy.get('#btnLoadThamKhamDraw').click();
        cy.get('#txtDienBienYLenhThamKham').type('Mới bị');
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







    // it('Check khi kê VTYT/thuốc', function () {
    //     // cy.get('#txtTimKiem').type('300520882');
    //     // cy.get('#select2-drpSelectTrangThai-container > .select2-selection__clear').click();
    //     common.enterSelectBoxNormal('cbbLoai','Tuần trước');
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#tblNoiTru tbody tr:nth-child(6) td:nth-child(5) a').click();
    //     cy.get('#showThamKham').click();
    //     // common.enterSelectBoxNormal('cboBenhChinhThamKham','A02.0');
    //     // common.enterSelectBoxElas('cboCapDoChamSocThamKham','C2');
    //     // cy.get('#txtDienBienYLenhThamKham').type('Mới bị');
    //     cy.get('#btnKeDon').click();
    //     // cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
    //     // cy.get('span.select2-search').find('input.select2-search__field').type('20.14036');
    //     // cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
    //     // common.enterSelectBoxUlLi('cboThuoc','27');
    //     // cy.get('#txtSl').type('10000');
    //     // cy.get('#txtSlN').type('10000');
    //     // cy.get('#btnChon').click();
    //     // cy.get('.confirm').click();
    //     // cy.wait(2000);
    //     // cy.get('body').type('{esc}');
    //     // cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').focus();
    //     // cy.get('span.select2-search').find('input.select2-search__field').type('27');
    //     // cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
    //     common.enterSelectBoxUlLi('cboThuoc','27');
    //     cy.get('#txtSl').type('3.5');
    //     cy.get('#txtSlN').type('2');
    //     cy.get('#btnChon').click();
    //     // common.enterSelectBoxUlLi('cboThuoc','36');
    //     cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').focus();
    //     cy.get('span.select2-search').find('input.select2-search__field').type('36');
    //     cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click({force:true});
    //     cy.get('.col-lg-2 > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
    //     cy.get('#txtSl').type('3');
    //     cy.get('#txtSlN').type('3');
    //     cy.get('#btnChon').click();
    //     // cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').focus();
    //     // cy.get('span.select2-search').find('input.select2-search__field').type('97');
    //     // cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click({force:true});
    //     // // common.enterSelectBoxUlLi('cboThuoc','97');
    //     // cy.get('#txtSl').type('4');
    //     // cy.get('#txtSlN').type('2');
    //     // cy.get('#btnChon').click();
    //     // cy.get('body').type('{esc}');
    //     // cy.get('#tblThuoc tbody tr:nth-child(1) td:nth-child(1) a[title="Sửa"]').click();
    //     // cy.get('#txtSlUpdate').type('5');
    //     // cy.get('div.modal-footer > button:first').click();
    //     cy.get('#tblThuoc tbody tr:nth-child(1) td:nth-child(2) a[title="Xóa"]').click({multiple:true});
    //     cy.get('.confirm').click();
    //     cy.get('#tblThuoc thead tr th:nth-child(1) a[title="Xóa tất cả toa thuốc mới"]').click();
    //     cy.get('.confirm').click();
    //     cy.wait(2000);
    //     cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').click();
    //     cy.get('span.select2-search').find('input.select2-search__field').type('27');
    //     cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click({force:true});
    //     cy.get('.col-lg-2 > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
    //     cy.get('#txtSl').type('3');
    //     cy.get('#txtSlN').type('3');
    //     cy.get('#btnChon').click();
    //     cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').focus();
    //     cy.get('span.select2-search').find('input.select2-search__field').type('36');
    //     cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click({force:true});
    //     cy.get('.col-lg-2 > .i-checks > label > .icheckbox_square-green > .iCheck-helper').click();
    //     cy.get('#txtSl').type('3');
    //     cy.get('#txtSlN').type('3');
    //     cy.get('#btnChon').click();
    //     // cy.get('#cboThuoc').parent().find('span.selection span.select2-selection').focus();
    //     // cy.get('span.select2-search').find('input.select2-search__field').type('97');
    //     // cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click({force:true});
    //     // cy.get('#txtSl').type('4');
    //     // cy.get('#txtSlN').type('2');
    //     // cy.get('#btnChon').click();
    //     cy.get('#btnChuyenTH').click();
    //     cy.get('#btnPopupHOANTAT').click();
    //
    //
    //
    // });


});