const common = require("../common.cy");

describe("Kham benh CC", () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('tiepnhandraw');
    });
    it('BN thu phí', function (){

        common.enterSelectBoxNormal('cbbGioiTinh', 'Nữ');
        cy.get('#txtTuoi').clear().type('18');
        common.enterSelectBoxElasticSearch('cbbDonViHanhChinh', 'han');
        cy.get('#txtDienThoai').clear().type('0912992868');
        common.enterSelectBoxNormal('cbbDoiTuong', 'T');
        //common.enterSelectBoxElasticSearch('cbbDichVu', 'bó');
        cy.get('#cbbDichVu').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('bó').wait(1000);
        cy.get(`#select2-cbbDichVu-results li:nth-child(2) tbody`).find('tr:first').click();
        cy.wait(1000);
        cy.get('#btnAddDVTN').click();
        cy.get('#btnCHUYENTH').click();
        cy.wait(1000);
        cy.get('.confirm').click();
        cy.wait(1000);
        cy.get('#txtTenBenhNhan').type('MAI TEST TP-8');
        cy.get('#btnCHUYENTH').click();

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
        cy.get('#divDichVuContent .table-responsive .table tbody tr:first td:nth-child(6)')
            .should('have.text', 'Chờ thanh toán')
            .then(($span) => {
                const text = $span.text().trim();
                if (text === 'Chờ thanh toán') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });
        cy.document().then(doc=>{
            const dialog = doc.querySelectorAll('#divFormModalChung .modal-dialog')
            if(dialog.length > 0){
                cy.wait(1000);
                cy.get('.form-group > .btn > strong').click({force: true});
            }else {
                cy.log('Không có gợi ý BN')
            }
        });


        cy.document().then(doc => {
            const alert = doc.querySelectorAll('#dialogChung');
            if (alert.length > 0) {
                cy.contains('Bỏ qua').click();
                cy.get('#btnTHUHOI').click();
                //common.enterSelectBoxNormal('drpSelectGoiDichVu', 'đẻ');
                cy.get('#drpSelectGoiDichVu').parent().find('span.selection span.select2-selection').click();
                cy.get('span.select2-search').find('input.select2-search__field').type('tp').wait(1000);
                cy.get(`#select2-drpSelectGoiDichVu-results li:first`).find('tr:first').click();
                cy.get('button[onclick="ChonGoiDichVu();"]').click();
                cy.get('#btnCHUYENTH').click();
            }
            else {
                cy.get('#btnTHUHOI').click();
                //common.enterSelectBoxNormal('drpSelectGoiDichVu', 'đẻ');
                cy.get('#drpSelectGoiDichVu').parent().find('span.selection span.select2-selection').click();
                cy.get('span.select2-search').find('input.select2-search__field').type('tp').wait(1000);
                cy.get(`#select2-drpSelectGoiDichVu-results li:first`).find('tr:first').click();
                cy.get('button[onclick="ChonGoiDichVu();"]').click();
                cy.get('#btnCHUYENTH').click();
            }
        });



    });
});