const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');
const {getHtml, getCurrentUrl} = require("../../common.cy");

describe("Tiep Nhan NT", () => {

    beforeEach(() => {
        common.visitAndLoginOther(enviroment.natk);
        common.goToFunctionFromMenu('danhsachttvaorakhoadraw');

    });

    it('Nhập khoa', function () {
        console.log('abc');
        cy.get('#txtTimKiem').clear().type('23048169');
        cy.get('#drpSelectTrangThai').select('Chờ nhập khoa');
        common.enterSelectBoxNormal('cbbLoai', "3 tháng");
        cy.get('#btnTimKiem').click();

        cy.get('#divWebPartContent tbody tr:nth-child(1) td:nth-child(3) a').invoke('text').then(maBN => {
            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("ttvaorakhoaid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=danhsachttvaorakhoadraw', 'wpid=tiepnhandieutridraw')
                            currentUrl += `&ttvaorakhoaid=${phauThuatId}`;
                            cy.visit(currentUrl);

                            //Nhập buông giường rồi ktra thông tin ở dieuduongdraw
                            common.enterSelectBoxElasticSearch('cboBuong', 'a0');
                            common.enterSelectBoxElasticSearch('cboGiuong', 'h0');
                            common.enterSelectBoxUlLi('cboDichVu', 'tt13');
                            cy.get('#btnNHAPKHOA').click();
                            cy.wait(1000);
                            cy.get('#aTrangThai i').invoke('text').then(status => {
                                if (status.trim() === 'Đã nhập khoa') {
                                    cy.log('Nhập khoa thành công');

                                    cy.get('#select2-cboBuong-container').invoke('attr', 'title').then(buong => {
                                        cy.log(buong);
                                        cy.get('#select2-cboGiuong-container').invoke('attr', 'title').then(giuong => {
                                            cy.log(giuong);

                                            common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');
                                            cy.get('#txtTimKiem').clear().type(maBN);
                                            common.btnID('btnTimKiem');
                                            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(2) a')
                                                .then(text => {
                                                    const re = new RegExp("noitruid=([^&]*)");
                                                    let phauThuatId = re.exec(text)[1];
                                                    cy.log(phauThuatId);
                                                    getCurrentUrl()
                                                        .then(currentUrl => {
                                                            currentUrl = currentUrl.replace('wpid=danhsachdieutrinoitrudraw', 'wpid=dieuduongdraw')
                                                            currentUrl += `&noitruid=${phauThuatId}`;
                                                            cy.visit(currentUrl);

                                                            cy.get('a#btnBG').click();

                                                            cy.document().then(doc => {
                                                                const empty = doc.querySelectorAll('h3')
                                                                if (empty.length > 0) {
                                                                    throw new Error('Khi nhập buồng giường ở phần nhập khoa nhưng không xuất hiện ở dieuduongdraw');
                                                                } else {
                                                                    cy.get('#idtimelineBuongGiuong #vertical-timeline .row').each((row, index) => {
                                                                        const status = row.find('.vertical-date').find('span.badge').text();
                                                                        if (status === 'Đang thực hiện') {
                                                                            cy.get(`#idtimelineBuongGiuong #vertical-timeline .row:nth-child(${index + 1}) .col-xs-8 > h2`).should('contain', 'Giường').invoke('text').then((text) => {
                                                                                const parts = text.split('|');
                                                                                const beforeCharacter = parts[1].trim();
                                                                                const ddbuong = beforeCharacter.split(' ')[0];
                                                                                const ddgiuong = text.match(/Giường\s+(.*?)\s+\|/)[1];

                                                                                cy.log(ddbuong);
                                                                                cy.log(ddgiuong);

                                                                                if (buong.trim() === ddbuong && giuong.trim() === ddgiuong) {
                                                                                    cy.log('Thông tin buồng giường ở nhập khoa trùng khớp với thông tin ở dieuduongdraw')
                                                                                } else {
                                                                                    cy.fail('Sai thông tin buồng giường đã nhập ở phần nhập khoa và dieuduongdraw');
                                                                                }
                                                                            });
                                                                        }
                                                                    });

                                                                }
                                                            });


                                                        });
                                                });
                                        });
                                    });

                                } else {
                                    throw new Error('Nhập khoa không thành công');
                                }
                            });

                        });
                });
        });


    });


    it('Thu hồi', function () {
        console.log('abc');
        cy.get('#drpSelectTrangThai').select('Chờ nhập khoa');
        common.enterSelectBoxNormal('cbbLoai', '3');
        cy.get('#btnTimKiem').click();

        getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
            .then(text => {
                const re = new RegExp("ttvaorakhoaid=([^&]*)");
                let phauThuatId = re.exec(text)[1];
                cy.log(phauThuatId);
                getCurrentUrl()
                    .then(currentUrl => {
                        currentUrl = currentUrl.replace('wpid=danhsachttvaorakhoadraw', 'wpid=tiepnhandieutridraw')
                        currentUrl += `&ttvaorakhoaid=${phauThuatId}`;
                        cy.visit(currentUrl);

                        cy.get('#txtThoiGianVaoKhoa').type('09:45 26/07/2023{enter}');
                        common.enterSelectBoxElasticSearch('cboBenhChinh', "A01.1");
                        cy.get('#btnNHAPKHOA').click();
                        cy.get('#btnTHUHOI').click();
                        cy.wait(1000);
                        cy.document().then(doc=>{
                            const alert = doc.querySelectorAll('.sweet-alert');
                            if(alert.length > 0){
                                cy.get('.sweet-alert p').invoke('text').then(error=>{
                                    cy.log(error);
                                });
                            }else{
                                cy.get('#aTrangThai i').invoke('text').then(status=>{
                                    if(status.trim() === 'Chờ nhập khoa'){
                                        cy.get('#txtThoiGianVaoKhoa').type('09:45 26/07/2023{enter}');
                                        //common.enterSelectBoxElas('cboBacSi',"Trần Trung Hiếu");
                                        common.enterSelectBoxElasticSearch('cboBenhChinh',"A01.1");
                                        cy.get('#btnNHAPKHOA').click();
                                    } else{
                                        throw new Error('Thu hồi thất bại');
                                    }
                                });
                            }
                        });
                    });
            });


    });


});