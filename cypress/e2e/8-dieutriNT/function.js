const common = require('../common.cy');

function checkSweetAlert(){

        cy.get(':nth-child(11) > .badge')
            .should('have.text', 'Chờ thực hiện')
            .then(($i) => {
                const text = $i.text().trim();
                if (text === 'Chờ thực hiện') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });

        //Check thu hồi
        cy.get('#btnHoiChan').click();
        cy.get('#btnChapNhanNhapTheBhyt').click();
        cy.get(2000);
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
        cy.get('#btnHoiChan').click();
        cy.get('#btnChapNhanNhapTheBhyt').click();
        cy.get(2000);

        //Check click vào link PT tại khoa

        cy.get('#txtThoigianThamKham').invoke('attr', 'data-value').then(time => {
            cy.log(time);
            const [timePart, datePart] = time.split(' ');
            const [hour, minute] = timePart.split(':');
            const [day, month, year] = datePart.split('/');
            const originalHour = parseInt(hour);
            const originalMinute = parseInt(minute);
            const newMinute = originalMinute + 1;
            const newHour = originalHour + Math.floor(newMinute / 60);
            const formattedNewTime = `${(newHour % 24).toString().padStart(2, '0')}:${(newMinute % 60).toString().padStart(2, '0')} ${day}/${month}/${year}`;
            cy.log(formattedNewTime)
            cy.get('#divIboxDichVu .ibox-content #divDichVu .table-responsive #tblDichVu > tbody > tr:nth-child(3) > td:nth-child(6) > a').click();
            cy.wait(3000);
            cy.get('#btnVAOTH').click();
            //lấy link
            cy.get('#txtBatDauPT').clear();
            cy.get('#txtBatDauPT').type(formattedNewTime);
            cy.get('#txtKetThucPT').clear();
            cy.get('#txtChuanDoanTruocMoPT').type('dau bung');
            cy.get('#txtChuanDoanSauMoPT').type('viem dai trang');
            cy.get('#txtKetThucPT').click();
            common.enterSelectBoxElasticSearch('cbbPPGayMePT','3');
            common.enterSelectBoxElasticSearch('cbbChiDinhMoPT','08');
            common.enterSelectBoxElasticSearch('cbbBacSiPT','sys')
            common.btnID('btnHOANTAT');
            cy.wait(1500);
            cy.get('#divMenuContent > :nth-child(3) > #textMaBn').invoke('text').then(maBN =>{
                cy.log(maBN);
                const numberOnly = maBN.match(/\d+/);
                const numberWithoutBrackets = numberOnly[0].replace(/\[|\]/g, '');
                cy.log(numberWithoutBrackets);
                common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');
                cy.get('#txtTimKiem').type(numberWithoutBrackets);
                common.enterSelectBoxNormal('cbbLoai', '3 tháng');
                common.enterSelectBoxNormal('drpSelectTrangThai', 'Đang thực hiện');
                cy.get('#btnTimKiem').click();
                cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(2) td:nth-child(5) a').click();
                cy.get('#showDsYLenh').click();
                cy.get('#trangthaiylenh').select('Mới');
                cy.get('#divDsYLenh tbody#tbodyylenh tr:first td:nth-child(3) a').click();
                cy.wait(1000);
                common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'Bình thường');
                cy.get('#txtChanDoanSoBoThamKham').clear().type('CCC');
                common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C2');
                cy.get('#btnPopupHOANTAT').click();
                cy.wait(1000);
                cy.get('.col-md-9 > a > .far').click();

                cy.get('#showThamKham').click();
                common.enterSelectBoxElasticSearch('cbbDienBienBenhThamKham', 'sm');
                cy.get('#txtChanDoanSoBoThamKham').clear().type('Mai test');
                common.enterSelectBoxElasticSearch('cboCapDoChamSocThamKham', 'C3');
                cy.get('#btnHoiChan').click();

                cy.get('.col-sm-8 .col-sm-12 .row .col-sm-4:nth-child(1) label div.iradio_square-green ins.iCheck-helper').first().click({force: true});
                common.enterSelectBoxElasticSearch('cboHangDoiPT', 'LS12.22');
                cy.get('#cboDichVuPT').parent().find('span.selection span.select2-selection').click();
                cy.get('span.select2-search').find('input.select2-search__field').type('08111793');
                cy.get('span.select2-results > ul.select2-results__options').find('li:nth-child(2)').click();
                cy.get('#btnChapNhanNhapTheBhyt').click();
                cy.get(2000);

                cy.get('#divIboxDichVu .ibox-content #divDichVu .table-responsive #tblDichVu > tbody > tr:nth-child(3) > td:nth-child(6)').click();
                cy.wait(1000);
                cy.get('#btnPopupHOANTAT').click();
                cy.wait(2000);
                cy.get(':nth-child(11) > .badge')
                    .should('have.text', 'Chờ thực hiện')
                    .then(($i) => {
                        const text = $i.text().trim();
                        if (text === 'Chờ thực hiện') {
                            cy.log('Đổi trạng thái thành công');
                        } else {
                            cy.fail('Đổi trạng thái thất bại');
                        }
                    });
                cy.get('.col-md-9 > a > .far').click();
                cy.get('#btnCHUYENMO').click();
                cy.wait(2000);
                cy.get('.confirm').click();
                cy.wait(1000);
                cy.get('.confirm').click();
            })



        });

}

module.exports ={
    checkSweetAlert:checkSweetAlert
}