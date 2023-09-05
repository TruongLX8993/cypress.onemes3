const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');

describe("Xét nghiệm", () => {

    beforeEach(() => {
        common.visitAndLoginOther(enviroment.natk05);
        common.goToFunctionFromMenu('xetnghiemdanhsachdraw');

    });

    it('Vào thực hiện và Hoàn tất', function () {
        console.log('abc');
        common.enterSelectBoxNormal('drpSelectTrangThai',"Đang thực hiện");
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(3) td:nth-child(4) a').click();

        common.enterSelectBoxElasticSearch('cbbNoiThucHien', '24');
        common.enterSelectBoxElasticSearch('cbbNguoiThucHien', 'sys');
        common.enterSelectBoxElasticSearch('cbbBacSiDocKetQua', 'anh');
        // common.enterSelectBoxElasticSearch('cbbThietBiXetNghiem', 'Thu Cong');

        cy.get('#cbbThietBiXetNghiem').parent().find('span.selection span.select2-selection').click();
        cy.get(`#select2-cbbThietBiXetNghiem-results`).find('tr').eq(0).click();
        cy.get('#btnHOANTAT').click();
        cy.get('#aTrangThai i')
                    .should('have.text', 'Hoàn tất')
                    .then(($i) => {
                      const text = $i.text().trim();
                      if (text === 'Hoàn tất')
                      {
                        cy.log('Đổi trạng thái thành công');
                      }
                      else
                      {
                        cy.fail('Đổi trạng thái thất bại');
                      }
                    });
    });

    it('Hoàn trả chỉ số', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai',"Chờ thực hiện");
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(3) td:nth-child(4) a').click();
        cy.get('#btnVAOTH').click();
        cy.get('[style="margin: 0 20px 0 0; padding:0px 10px; float:right;"]').click();

        cy.get('#tblBenhAn tbody tr:nth-child(1) td:nth-child(1) > input.chkYeuCau').click();
        cy.get('#txtLyDoHoanTraUpdate').type('Không phù hợp');
        cy.get('.mr-5px > strong').click(); //Chấp nhận
        // cy.get('[data-dismiss="modal"] > strong').click(); //Bỏ qua

    });

    it('Check tác vụ "thu hồi" ', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai','CHO THUC HIEN');
        common.enterSelectBoxNormal('cbbLoai','3 THANG');
        cy.get ('#btnTimKiem').click();
        cy.get('#divXetNghiemDanhSachContent tbody tr:nth-child(3) td:nth-child(4) a').click();
        cy.get ('#btnVAOTH').click();
        cy.get ('#txtThoiGianTraKetQua').type('16:29 24/07/2023');
        common.enterSelectBoxElasticSearch('cbbNoiThucHien', '24');
        common.enterSelectBoxElasticSearch('cbbNguoiThucHien', 'sys');
        common.enterSelectBoxElasticSearch('cbbBacSiDocKetQua', 'anh');
        cy.get ('#btnHOANTAT').click();
        cy.get ('#btnTHUHOI').click();
        cy.wait(1000);

        cy.document().then(doc=>{
           const alert = doc.querySelectorAll('.sweet-alert');
           if(alert.length > 0){
               cy.get('.sweet-alert').invoke('text').then(error=>{
                   cy.log(error);
               })
           }else{
               cy.get('#aTrangThai i')
                   .should('have.text', 'Đang thực hiện')
                   .then(($i) => {
                       const text = $i.text().trim();
                       if (text === 'Đang thực hiện') {
                           cy.log('Đổi trạng thái thành công');
                       } else {
                           cy.fail('Đổi trạng thái thất bại');
                       }
                       common.enterSelectBoxElasticSearch('cbbBacSiDocKetQua', 'sys');
                       cy.get('#btnHOANTAT').click();
                       cy.wait(1000);
                   });
           }
        });


    });

    it('Check tác vụ "Không thực hiện" ', function () {
        common.enterSelectBoxNormal('drpSelectTrangThai', 'cho thuc hien');
        common.enterSelectBoxNormal('cbbLoai', '3 THANG');
        cy.get('#btnTimKiem').click()
        cy.get('#divXetNghiemDanhSachContent tbody tr:nth-child(3) td:nth-child(4) a').click();
        cy.get ('#btnVAOTH').click();
        cy.get('#btnHOANTRA').click();
        cy.get('#txtLyDoHoanTraUpdate').type('1');
        cy.get('.mr-5px > strong').click();
        cy.wait(1000);
        cy.get('#aTrangThai i')
            .should('have.text', 'Hoàn trả')
            .then(($i) => {
                const text = $i.text().trim();
                if (text === 'Hoàn trả') {
                    cy.log('Đổi trạng thái thành công');
                } else {
                    cy.fail('Đổi trạng thái thất bại');
                }
            });

    });

});