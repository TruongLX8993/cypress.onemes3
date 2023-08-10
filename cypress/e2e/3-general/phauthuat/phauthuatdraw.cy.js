const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json')
const {getHtml, getAttribute, getCurrentUrl} = require("../../common.cy");

describe("Phau Thuat", () => {

    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('danhsachphauthuatdraw');
    });

    it('Check tác vụ "Vào thực hiện"', async function () {
        common.enterSelectBoxElasticSearch('cboCfHangDoi', "LS12.22");
        cy.get('.btn-danger').click();
        common.enterSelectBoxNormal('cbbLoai', '3');
        common.enterSelectBoxNormal('drpSelectTrangThai', "cho thuc hien");
        cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
        cy.get('#btnTimKiem').click();
        const text = await getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a');
        const re = new RegExp("checkBanGiaoPT\\('(.*)'\\)");
        let phauThuatId = re.exec(text)[1];
        let currentUrl = await getCurrentUrl();
        currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
        currentUrl += `&phauthuatid=${phauThuatId}`;
        cy.visit(currentUrl);
        cy.get('#btnVAOTH').click();
        cy.get('#aTrangThai i')
            .should('have.text', 'Đang thực hiện')
            .then(($i) => {
                const text = $i.text().trim();
                if (text === 'Đang thực hiện') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });

    });

    it('Check tác vụ "kết thúc mổ"', async function () {
        common.enterSelectBoxElasticSearch('cboCfHangDoi', "LS12.22");
        cy.get('.btn-danger').click();
        common.enterSelectBoxNormal('cbbLoai', '3');
        common.enterSelectBoxNormal('drpSelectTrangThai', "cho thuc hien");
        cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
        cy.get('#btnTimKiem').click();
        const text = await getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a');
        const re = new RegExp("checkBanGiaoPT\\('(.*)'\\)");
        let phauThuatId = re.exec(text)[1];
        let currentUrl = await getCurrentUrl();
        currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
        currentUrl += `&phauthuatid=${phauThuatId}`;
        cy.visit(currentUrl);
        common.btnID('btnVAOTH');
        common.btnID('txtKetThucPT');
        cy.get('#txtChuanDoanTruocMoPT').type('đau bụng');
        cy.get('#txtChuanDoanSauMoPT').type('loét dạ dày');
        common.btnID('btnHOANTAT');
        common.clickConfirmBtn();
        common.enterSelectBoxElasticSearch('cbbPPGayMePT','3');
        common.enterSelectBoxElasticSearch('cbbBacSiPT','s');
        common.enterSelectBoxUlLi('cbbChiDinhMoPT','08042152');
        common.btnID('btnHOANTAT');

        cy.get('#aTrangThai i')
            .should('have.text', 'Hoàn tất')
            .then(($i) => {
                const text = $i.text().trim();
                if (text === 'Hoàn tất') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });


    });


    it('Check tác vụ "thu hồi"', async function () {
        common.enterSelectBoxElasticSearch('cboCfHangDoi', "LS12.22");
        cy.get('.btn-danger').click();
        common.enterSelectBoxNormal('cbbLoai', '3');
        common.enterSelectBoxNormal('drpSelectTrangThai', "cho thuc hien");
        cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
        cy.get('#btnTimKiem').click();
        const text = await getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a');
        const re = new RegExp("checkBanGiaoPT\\('(.*)'\\)");
        let phauThuatId = re.exec(text)[1];
        let currentUrl = await getCurrentUrl();
        currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
        currentUrl += `&phauthuatid=${phauThuatId}`;
        cy.visit(currentUrl);
        common.btnID('btnVAOTH');
        common.btnID('txtKetThucPT');
        cy.get('#txtChuanDoanTruocMoPT').type('đau bụng');
        cy.get('#txtChuanDoanSauMoPT').type('loét dạ dày');
        common.btnID('btnHOANTAT');
        common.clickConfirmBtn();
        common.enterSelectBoxElasticSearch('cbbPPGayMePT', '3');
        common.enterSelectBoxElasticSearch('cbbBacSiPT', 's');
        common.enterSelectBoxUlLi('cbbChiDinhMoPT', '08042152');
        common.btnID('btnHOANTAT');

        common.btnID('btnTHUHOI');
        cy.get('#aTrangThai i')
            .should('have.text', 'Đang thực hiện')
            .then(($i) => {
                const text = $i.text().trim();
                if (text === 'Đang thực hiện') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });

        cy.get('#txtChuanDoanTruocMoPT').type('đau bụng phía bên phải');
        common.btnID('btnHOANTAT');

    });


    it('Check tác vụ "không mổ"', async function () {
        common.enterSelectBoxElasticSearch('cboCfHangDoi', "LS12.22");
        cy.get('.btn-danger').click();
        common.enterSelectBoxNormal('cbbLoai', '3');
        common.enterSelectBoxNormal('drpSelectTrangThai', "cho thuc hien");
        cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
        cy.get('#btnTimKiem').click();
        const text = await getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a');
        const re = new RegExp("checkBanGiaoPT\\('(.*)'\\)");
        let phauThuatId = re.exec(text)[1];
        let currentUrl = await getCurrentUrl();
        currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
        currentUrl += `&phauthuatid=${phauThuatId}`;
        cy.visit(currentUrl);
        common.btnID('btnVAOTH');
        common.btnID('btnHUY');
        cy.get('#txtLyDoHoanTraUpdate').type('phát sinh vấn đề');
        cy.get('.form-group > button:first').click();

        cy.get('#aTrangThai i')
            .should('have.text', 'Hủy')
            .then(($i) => {
                const text = $i.text().trim();
                if (text === 'Hủy') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });


    });


    it('Check tác vụ "thêm phẫu thuật"', async function () {
        common.enterSelectBoxElasticSearch('cboCfHangDoi', "LS12.22");
        cy.get('.btn-danger').click();
        // common.enterSelectBoxNormal('cbbLoai', '3');
        // cy.get('#dtTuNgay').clear().type('00:00 10/08/2022');
        common.enterSelectBoxNormal('drpSelectTrangThai', "cho thuc hien");
        cy.get('#select2-drpSelectHangDoi-container > .select2-selection__clear').click();
        // cy.get('#txtTimKiem').type('2200113440');
        cy.get('#btnTimKiem').click();

        const text = await getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(3) a');
        const re = new RegExp("checkBanGiaoPT\\('(.*)'\\)");
        let phauThuatId = re.exec(text)[1];
        let currentUrl = await getCurrentUrl();
        currentUrl = currentUrl.replace('wpid=danhsachphauthuatdraw', 'wpid=phauthuatdraw')
        currentUrl += `&phauthuatid=${phauThuatId}`;
        cy.visit(currentUrl);

        cy.wait(3000);
        common.btnID('btnVAOTH');
        common.enterSelectBoxUlLi('cbbChiDinhMoPT', '08042152');
        cy.contains('Thêm phẫu thuật').click();
        cy.wait(2000);
        common.enterSelectBoxUlLi('cbbChiDinhMoPopup', '08042152');
        common.enterSelectBoxElasticSearch('cbbBacSiPopup', 's');
        cy.get('#txtTyLeTTPopup').select('80%');
        cy.get('form > :nth-child(2) > .ibox-content > .row > .col-sm-12 > .btn').click();
        cy.get('#divPhauThuatCon table tbody tr:first td:nth-child(3) a').click();
        cy.wait(5000);
        common.btnID('btnVAOTH');

        // nhập thông tin phẫu thuật phụ
        common.btnID('txtKetThucPT');
        cy.get('#txtChuanDoanTruocMoPT').type('đau bụng');
        cy.get('#txtChuanDoanSauMoPT').type('loét dạ dày');
        common.enterSelectBoxElasticSearch('cbbPPGayMePT', '3');
        common.enterSelectBoxElasticSearch('cbbBacSiPT', 's');
        common.enterSelectBoxUlLi('cbbChiDinhMoPT', '08042152');

        // nhập DV,VTYT
        common.btnID('showKHCS');
        common.enterSelectBoxUlLi('cbbDichVu', '09042176');
        cy.get('#txtDichVuChiTiet').type('chần đoán cần thêm dịch vụ');
        common.enterSelectBoxElasticSearch('cbbHangDoi', 'ls12.22');
        common.btnID('btnAddDichVu');
        cy.get('[onclick="clickChonTTDV();"]').click();
        common.btnID('lnkVTYT');
        cy.get('#cbbDonVTYTMauByDichVu').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-results > ul.select2-results__options').find('li:first').invoke('text').then((tenVTYT) => {
            if(tenVTYT === 'Không có kết quả'){
                cy.log('Trong phẫu thuật này không thể kê thêm VTYT');
            }{
                cy.get(`#select2-cbbDonVTYTMauByDichVu-results`).find('li').eq(2).click();
            }

        })

        cy.get(':nth-child(2) > .icheckbox_square-green > .iCheck-helper').click();
        cy.get('#cbbVTYT').parent().find('span.selection span.select2-selection').click();
        cy.get('span.select2-search').find('input.select2-search__field').type('03').wait(2000);
        cy.get('span.select2-results > ul.select2-results__options').find('li').eq(1).click();
        cy.get('#txtSoLuongVTYT').type('1');
        common.btnID('btnAddVTYTThongThuong');


    });

})
;