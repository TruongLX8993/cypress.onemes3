const common = require('../../common.cy');
const insuaranceNumber = require('../../rd');

describe("Phẫu thuật", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('danhsachphauthuatdraw');


    });

    it('Check các bộ lọc trong DS PT ', function () {
        common.enterSelectBoxElasticSearch('cboCfHangDoi', 'LS12.22');
        cy.get('.btn-danger').click();
        cy.get('#txtTimKiem').type('test');
        //common.enterSelectBoxElasticSearch('drpSelectHangDoi','LS013');
        common.enterSelectBoxNormal('drpSelectTrangThai', 'HOAN TAT');
        common.enterSelectBoxNormal('cbbLoai', '3 THANG');
        cy.get('#btnTimKiem').click();
        // cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
        // cy.get('#btnTimKiem').click();
        cy.get('#divDanhSachPhauThuatContent tbody tr:nth-child(2) td:nth-child(3)').click();
        cy.get('.confirm').click();
        cy.get('#divDanhSachPhauThuatContent tbody tr:nth-child(3) td:nth-child(3)').click();
    });





        // it('Check tác vụ "kết thúc mổ', function () {
        //     //common.enterSelectBoxElasticSearch('cboCfHangDoi','LS12.22');
        //     cy.get('.btn-danger').click();
        //     //cy.get ('#txtTimKiem').type ('test') ;
        //     //common.enterSelectBoxElasticSearch('drpSelectHangDoi','LS013');
        //     cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
        //     common.enterSelectBoxNormal('drpSelectTrangThai', 'DANG THUC HIEN');
        //     common.enterSelectBoxNormal('cbbLoai', '3 THANG');
        //     cy.get('#btnTimKiem').click();
        //     //cy.get('#btnTimKiem').click();
        //     cy.get('#divDanhSachPhauThuatContent tbody tr:nth-child(1) td:nth-child(3)').click();
        //     cy.get ('#txtKetThucPT').type ('09:10 25/07/2023');
        //     cy.get ('#txtGhiChuPT').type ('Nhóm máu hiếm');
        //     common.enterSelectBoxNormal('cbbChiDinhMoPT','08111624');
        //     common.enterSelectBoxElasticSearch('cbbPPGayMePT','12');
        //     cy.get ('#txtTuTheMoPT').type ('Nằm');
        //     cy.get ('#txtTTGayMe').type ('Thuốc');
        //     common.enterSelectBoxElasticSearch('cbbPhuongPhapPT','09050004');
        //     common.enterSelectBoxElasticSearch('cbbICD9','45.21');
        //     cy.get ('#txtChuanDoanTruocMoPT').type ('Bệnh nhân 1');
        //     cy.get ('#txtChuanDoanSauMoPT').type ('Khỏi 1');
        //     common.enterSelectBoxElasticSearch('cbbIcdChanDoanTruocPT','N00.5');
        //     common.enterSelectBoxElasticSearch('cbbChuanDoanSauPT','N00.5');
        //     cy.get ('#txtDanDoSauPT').type ('Ăn nhiều');
        //     common.enterSelectBoxElasticSearch('cbbBacSiPT','4093');
        //     common.enterSelectBoxElasticSearch('cbbBacSiPhuMo1','1893');
        //     common.enterSelectBoxElasticSearch('cbbBacSiPhuMo2','4147');
        //     common.enterSelectBoxElasticSearch('cbbBacSiGayMeChinh','3767');
        //     common.enterSelectBoxNormal('cbbDieuDuongDungCu','02152');
        //     common.enterSelectBoxElasticSearch('cbbDieuDuongChayNgoai','00429');
        //     common.enterSelectBoxElasticSearch('cbbMauTuongTrinh','DLDO');
        //     cy.get ('#btnHOANTAT').click();
        //     cy.get('#btnOKTyLe > strong').click();
        //     cy.get('#aTrangThai i')
        //         .should('have.text', 'Hoàn tất')
        //         .then(($i) => {
        //             const text = $i.text().trim();
        //             if (text === 'Hoàn tất') {
        //                 cy.log('Đổi trạng thái thành công');
        //             } else {
        //                 cy.fail('Đổi trạng thái thất bại');
        //             }
        //         });
        //
        // });





    // it('Check tác vụ "Không mổ" ', function () {
    //     cy.get('.btn-danger').click();
    //     //cy.get('#txtTimKiem').type('2300516895');
    //     common.enterSelectBoxNormal('drpSelectTrangThai', 'ĐANG THUC HIEN');
    //     common.enterSelectBoxNormal('cbbLoai', '3 THANG');
    //     cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
    //     cy.get('#btnTimKiem').click();
    //     //cy.wait (3000);
    //     cy.get('#divDanhSachPhauThuatContent tbody tr:nth-child(3) td:nth-child(3) a').click();
    //     //cy.get('#lnkVTYT').click();
    //     //common.enterSelectBoxElasticSearch('cbbDonVTYTMauByDichVu', 'MOB22');
    //     //cy.get ('#btnTrongGoi').click();
    //     //cy.get('#lnkPTCT').click();
    //     //cy.get('[style="text-align: center;"] > .btn').click();
    //     cy.get('#btnHUY').click();
    //     //cy.get('.confirm').click();
    //     cy.get('#txtLyDoHoanTraUpdate').type('Yếu')
    //     cy.get('.mr-5px > strong').click();
    //     cy.get('#aTrangThai i')
    //         .should('have.text', 'Hủy')
    //         .then(($i) => {
    //             const text = $i.text().trim();
    //             if (text === 'Hủy') {
    //                 cy.log('Đổi trạng thái thành công');
    //             } else {
    //                 cy.fail('Đổi trạng thái thất bại');
    //             }
    //         });
    //
    //
    // });




    // it('Check tác vụ "Vào thực hiện"', function () {
    //     cy.get('.btn-danger').click();
    //     cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
    //     common.enterSelectBoxNormal('drpSelectTrangThai', 'CHO THUC HIEN');
    //     // cy.get('#txtTimKiem').type('2200113775');
    //     common.enterSelectBoxNormal('cbbLoai', '3');
    //     // cy.get('#dtTuNgay').type('25/07/2022{enter}');
    //     // cy.get('#dtTuNgay').type(insuaranceNumber.generate());
    //     cy.get('#btnTimKiem').click();
    //     cy.get('#divDanhSachPhauThuatContent tbody tr:nth-child(1) td:nth-child(3) a').click();
    //     cy.wait(20000);
    //     cy.get('#btnVAOTH').click();
    //     // common.goToFunctionFromMenu('phauthuatdraw');
    //     //cy.get('.confirm').click();










    });